package com.lightspark.uma.umaaas.routes

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.lightspark.uma.models.transactions.TransactionStatus
import com.lightspark.uma.models.users.Address
import com.lightspark.uma.umaaas.lib.*
import io.ktor.http.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.webhookRoutes() {
    route("/api/webhooks") {
        post {
            try {
                val rawBody = call.receiveText()

                val signatureHeader = call.request.headers["X-UMAaas-Signature"]
                val webhookPublicKey = getEnvVar("WEBHOOK_PUBLIC_KEY").replace("\\n", "\n")

                if (signatureHeader != null) {
                    println("Webhook signature: ${JsonUtils.prettyPrint(signatureHeader)}")
                    val isValid = WebhookUtils.verifyWebhookSignature(
                        rawBody,
                        signatureHeader,
                        webhookPublicKey
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
                
                val objectMapper = jacksonObjectMapper()
                val rawPayload: Map<String, Any> = objectMapper.readValue(rawBody)
                val webhookEvent = WebhookUtils.parseWebhookEvent(rawPayload)
                
                println("Received webhook: ${JsonUtils.prettyPrint(webhookEvent)}")

                when (webhookEvent.type) {
                    WebhookType.INCOMING_PAYMENT -> {
                        val incomingEvent = webhookEvent as IncomingPaymentWebhookEvent
                        
                        // Incoming payments this serves as the approval mechanism
                        if (incomingEvent.transaction.status() == TransactionStatus.PENDING) {
                            val responseUserData = buildResponseUserData(incomingEvent.requestedReceiverUserInfoFields)
                            
                            val response = IncomingPaymentWebhookResponse(
                                receiverUserInfo = responseUserData
                            )
                            
                            val jsonResponse = JsonUtils.prettyPrint(response)
                            println("Webhook Response: $jsonResponse")
                            call.respond(HttpStatusCode.OK, jsonResponse)
                            return@post
                            
                            // You could return 403 to reject:
                            // call.respond(HttpStatusCode.Forbidden, mapOf("error" to "Payment rejected"))
                            
                            // Or 422 to request more info:
                            // call.respond(HttpStatusCode.UnprocessableEntity, mapOf(
                            //     "error" to "Additional info required",
                            //     "details" to mapOf("requiredFields" to listOf("TAX_ID"))
                            // ))
                        }
                    }
                    
                    WebhookType.OUTGOING_PAYMENT -> {
                        // Record outgoing payment
                        println("Handling outgoing payment webhook")
                    }
                    
                    WebhookType.TEST -> {
                        // Handle webhook test
                        println("Handling webhook test")
                    }
                    
                    WebhookType.BULK_UPLOAD -> {
                        // Handle bulk upload
                        println("Handling bulk upload webhook")
                    }
                    
                    WebhookType.INVITATION_CLAIMED -> {
                        val invitationEvent = webhookEvent as InvitationClaimedWebhookEvent
                        
                        // Handle invitation, add recipient to sender's contact list
                        println("Invitation claimed")
                        
                        // If there's an amount to send, you would typically initiate a payment here
                        if (invitationEvent.invitation.amountToSend() != null) {
                            println("Invitation includes amount to send - should initiate payment")
                            // Implement payment initiation logic here
                        }
                    }
                }
                
                // Return success response
                call.respond(HttpStatusCode.OK, mapOf("received" to true))
                
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

/**
 * Sample user data for webhook responses
 * In a real app you would respond with your user's real data.
 */
private val SAMPLE_USER_DATA = WebhookUserData(
    fullName = "Webhook User",
    dateOfBirth = "1980-01-01",
    nationality = "US",
    email = "webhook.user@example.com",
    phoneNumber = "+15105551212",
    address = Address.builder()
        .line1("123 Sample St")
        .city("Sampleville")
        .state("CA")
        .postalCode("90210")
        .country("US")
        .build()
)

/**
 * Build response user data based on requested fields
 */
private fun buildResponseUserData(requestedFields: List<RequestedField>?): WebhookUserData {
    if (requestedFields == null) {
        return WebhookUserData()
    }
    
    var fullName: String? = null
    var dateOfBirth: String? = null
    var nationality: String? = null
    var email: String? = null
    var phoneNumber: String? = null
    var address: Address? = null
    
    for (requestedField in requestedFields) {
        when (requestedField.name) {
            "FULL_NAME" -> fullName = SAMPLE_USER_DATA.fullName
            "DATE_OF_BIRTH" -> dateOfBirth = SAMPLE_USER_DATA.dateOfBirth
            "NATIONALITY" -> nationality = SAMPLE_USER_DATA.nationality
            "EMAIL" -> email = SAMPLE_USER_DATA.email
            "PHONE_NUMBER" -> phoneNumber = SAMPLE_USER_DATA.phoneNumber
            "ADDRESS" -> address = SAMPLE_USER_DATA.address
        }
    }
    
    return WebhookUserData(
        fullName = fullName,
        dateOfBirth = dateOfBirth,
        nationality = nationality,
        email = email,
        phoneNumber = phoneNumber,
        address = address
    )
}
