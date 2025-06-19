package com.lightspark.uma.umaaas.routes

import JsonField
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.lightspark.uma.models.transactions.TransactionStatus
import com.lightspark.uma.models.users.Address
import com.lightspark.uma.umaaas.lib.*
import models.webhooks.*
import io.ktor.http.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*



fun Route.webhookRoutes() {
    val webhookPublicKey = getEnvVar("WEBHOOK_PUBLIC_KEY").replace("\\n", "\n")
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
                
                val objectMapper = jacksonObjectMapper()
                val rawPayload: Map<String, Any> = objectMapper.readValue(rawBody)
                val webhookEvent = WebhookUtils.parseWebhookEvent(rawPayload)
                println("Received webhook: ${JsonUtils.prettyPrint(rawBody)}")
                // Add to event queue for SSE broadcasting
                // Only used in the quickstart in production you won't need this
                WebhookStream.addEvent(webhookEvent)
                
                // Handle different webhook types according to OpenAPI schema
                when (webhookEvent.type()) {
                    BaseWebhookEvent.WebhookType.INCOMING_PAYMENT -> {
                        val incomingEvent = webhookEvent as IncomingPaymentWebhookEvent
                        
                        // For PENDING transactions, this serves as an approval mechanism
                        if (incomingEvent.transaction().status() == TransactionStatus.PENDING) {
                            val responseUserData = JsonField.of(buildResponseUserData(incomingEvent.requestedReceiverUserInfoFields()))
                            
                            val response = IncomingPaymentWebhookResponse.builder()
                                .receiverUserInfo(responseUserData)
                                .build()
                            
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
                    
                    BaseWebhookEvent.WebhookType.OUTGOING_PAYMENT -> {
                        // Record outgoing payment
                        println("Handling outgoing payment webhook")
                    }
                    
                    BaseWebhookEvent.WebhookType.TEST -> {
                        // Handle webhook test
                        println("Handling webhook test")
                    }
                    
                    BaseWebhookEvent.WebhookType.BULK_UPLOAD -> {
                        // Handle bulk upload
                        println("Handling bulk upload webhook")
                    }
                    
                    BaseWebhookEvent.WebhookType.INVITATION_CLAIMED -> {
                        val invitationEvent = webhookEvent as InvitationClaimedWebhookEvent
                        
                        // Handle invitation, add recipient to sender's contact list
                        println("Invitation claimed")
                        
                        // If there's an amount to send, you would typically initiate a payment here
                        if (invitationEvent.invitation().amountToSend() != null) {
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
private val SAMPLE_USER_DATA = WebhookUserData.builder()
    .fullName("Webhook User")
    .dateOfBirth("1980-01-01")
    .nationality("US")
    .email("webhook.user@example.com")
    .phoneNumber("+15105551212")
    .address(Address.builder()
        .line1("123 Sample St")
        .city("Sampleville")
        .state("CA")
        .postalCode("90210")
        .country("US")
        .build())
    .build()

/**
 * Build response user data based on requested fields
 */
private fun buildResponseUserData(requestedFields: List<RequestedField>?): WebhookUserData {
    if (requestedFields == null) {
        return WebhookUserData.builder().build()
    }
    
    val builder = WebhookUserData.builder()
    
    for (requestedField in requestedFields) {
        when (requestedField.name()) {
            "FULL_NAME" -> SAMPLE_USER_DATA.fullName()?.let { builder.fullName(it) }
            "DATE_OF_BIRTH" -> SAMPLE_USER_DATA.dateOfBirth()?.let { builder.dateOfBirth(it) }
            "NATIONALITY" -> SAMPLE_USER_DATA.nationality()?.let { builder.nationality(it) }
            "EMAIL" -> SAMPLE_USER_DATA.email()?.let { builder.email(it) }
            "PHONE_NUMBER" -> SAMPLE_USER_DATA.phoneNumber()?.let { builder.phoneNumber(it) }
            "ADDRESS" -> SAMPLE_USER_DATA.address()?.let { builder.address(it) }
        }
    }
    
    return builder.build()
}
