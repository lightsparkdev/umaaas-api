package com.lightspark.uma.umaaas.routes

import com.fasterxml.jackson.module.kotlin.readValue
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.WebhookStream
import com.lightspark.uma.umaaas.lib.WebhookUtils
import com.lightspark.uma.umaaas.lib.getEnvVar
import com.lightspark.umaaas.core.JsonValue
import com.lightspark.umaaas.core.jsonMapper
import com.lightspark.umaaas.models.receiver.CounterpartyFieldDefinition
import com.lightspark.umaaas.models.transactions.TransactionStatus
import com.lightspark.umaaas.models.users.Address
import com.lightspark.umaaas.models.webhooks.BaseWebhook
import com.lightspark.umaaas.models.webhooks.BulkUpload
import com.lightspark.umaaas.models.webhooks.IncomingPaymentWebhook
import com.lightspark.umaaas.models.webhooks.IncomingPaymentWebhookResponse
import com.lightspark.umaaas.models.webhooks.IncomingPaymentWebhookResponse.ReceiverUserInfo
import com.lightspark.umaaas.models.webhooks.InvitationClaimedWebhook
import com.lightspark.umaaas.models.webhooks.OutgoingPaymentWebhook
import com.lightspark.umaaas.models.webhooks.TestWebhook
import io.ktor.http.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.webhookRoutes() {
    val webhookPublicKey = getEnvVar("UMAAAS_WEBHOOK_PUBLIC_KEY").replace("\\n", "\n")
    WebhookUtils.setPublicKey(webhookPublicKey)

    route("/api/webhooks") {
        post {
            try {
                val rawBody = call.receiveText()

                val signatureHeader = call.request.headers["X-UMAaas-Signature"]

                if (signatureHeader != null) {
                    println("Webhook signature: ${JsonUtils.prettyPrint(signatureHeader)}")
                    val isValid = WebhookUtils.verifyWebhookSignature(
                        rawBody,
                        signatureHeader,
                    )
                    if (!isValid) {
                        println("Invalid webhook signature")
                        call.respond(
                            HttpStatusCode.Unauthorized,
                            mapOf("error" to "Invalid signature")
                        )
                        return@post
                    }
                }


                val objectMapper = jsonMapper()
                val rawPayload: Map<String, Any> = objectMapper.readValue(rawBody)

                // Broadcast webhook to connected SSE clients for real-time UI updates
                // This enables the quickstart frontend to display webhook events as they occur
                // Note: This is for demo purposes only - you should not do this in production
                WebhookStream.addEvent(rawBody)
                println("Received webhook: $rawBody")

                val type = BaseWebhook.Type.of(rawPayload["type"] as String)
                when (type) {
                    BaseWebhook.Type.INCOMING_PAYMENT -> {
                        val incomingEvent = objectMapper.convertValue(rawPayload, IncomingPaymentWebhook::class.java)

                        // For PENDING incoming payments, this webhook serves as the approval mechanism
                        // The platform must respond with 200 (approve), 403 (reject), or 422 (request more info)
                        if (incomingEvent.transaction().status() == TransactionStatus.PENDING) {
                            val responseUserData = buildResponseUserData(incomingEvent.requestedReceiverUserInfoFields())
                            val response = IncomingPaymentWebhookResponse.builder()
                                .receiverUserInfo(responseUserData).build()

                            val jsonResponse = JsonUtils.prettyPrint(response)
                            println("Webhook Response: $jsonResponse")
                            call.respond(HttpStatusCode.OK, jsonResponse)
                            return@post
                        }
                    }

                    BaseWebhook.Type.OUTGOING_PAYMENT -> {
                        println("Handling outgoing payment webhook")
                        val outgoingPayment = objectMapper.convertValue(rawPayload, OutgoingPaymentWebhook::class.java)
                    }

                    BaseWebhook.Type.TEST -> {
                        println("Handling webhook test")
                        val testWebhook = objectMapper.convertValue(rawPayload, TestWebhook::class.java)
                    }

                    BaseWebhook.Type.BULK_UPLOAD -> {
                        println("Handling bulk upload webhook")
                        val bulkUpload = objectMapper.convertValue(rawPayload, BulkUpload::class.java)
                    }

                    BaseWebhook.Type.INVITATION_CLAIMED -> {
                        val invitationEvent = objectMapper.convertValue(rawPayload, InvitationClaimedWebhook::class.java)

                        // Handle invitation, add recipient to sender's contact list
                        println("Invitation claimed")

                        // If there's an amount to send, you would typically initiate a payment here
                        if (invitationEvent.invitation().amountToSend() != null) {
                            println("Invitation includes amount to send - should initiate payment")
                            // Implement payment initiation logic here
                        }
                    }
                    else -> {
                        throw IllegalArgumentException("Unknown webhook type: $type")
                    }
                }
                call.respond(HttpStatusCode.OK)

            } catch (e: Exception) {
                println("Error processing webhook: ${e.message}")
                e.printStackTrace()

                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }
    }
}

private fun buildResponseUserData(requestedFields: List<CounterpartyFieldDefinition>?): ReceiverUserInfo {
    if (requestedFields == null) {
        return ReceiverUserInfo.builder().build()
    }

    val builder = ReceiverUserInfo.builder()

    for (requestedField in requestedFields) {
        when (requestedField.name().toString()) {
            "FULL_NAME" -> {
                builder.putAdditionalProperty("FULL_NAME", JsonValue.from("Sample Name"))
            }
            "DATE_OF_BIRTH" -> {
                builder.putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("1980-01-01"))
            }
            "NATIONALITY" -> {
                builder.putAdditionalProperty("NATINOALITY" , JsonValue.from("US"))
            }
            "EMAIL" -> {
                builder.putAdditionalProperty("EMAIL",JsonValue.from("bob@example.com"))
            }
            "PHONE_NUMBER" -> {
                builder.putAdditionalProperty("PHONE_NUMBER",JsonValue.from("+16502535555"))
            }
            "ADDRESS" -> {
                builder.putAdditionalProperty("ADDRESS", JsonValue.from(Address.builder()
                    .line1("123 Sample St")
                    .city("Sampleville")
                    .state("CA")
                    .postalCode("90210")
                    .country("US")
                    .build()))
            }
        }
    }
    return builder.build()
}
