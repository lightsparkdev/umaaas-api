package com.lightspark.uma.umaaas.lib

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.lightspark.uma.models.invitations.UmaInvitation
import com.lightspark.uma.models.transactions.IncomingTransaction
import com.lightspark.uma.models.transactions.OutgoingTransaction
import com.lightspark.uma.models.users.Address
import java.security.KeyFactory
import java.security.PublicKey
import java.security.Signature
import java.security.spec.X509EncodedKeySpec
import java.util.*

// WebhookType enum from OpenAPI schema
enum class WebhookType(val value: String) {
    INCOMING_PAYMENT("INCOMING_PAYMENT"),
    OUTGOING_PAYMENT("OUTGOING_PAYMENT"),
    TEST("TEST"),
    BULK_UPLOAD("BULK_UPLOAD"),
    INVITATION_CLAIMED("INVITATION_CLAIMED")
}

// Base webhook interface
abstract class BaseWebhookEvent {
    abstract val timestamp: String
    abstract val webhookId: String
    abstract val type: WebhookType
}

data class WebhookUserData(
    @JsonProperty("FULL_NAME") val fullName: String? = null,
    @JsonProperty("DATE_OF_BIRTH") val dateOfBirth: String? = null,
    @JsonProperty("NATIONALITY") val nationality: String? = null,
    @JsonProperty("EMAIL") val email: String? = null,
    @JsonProperty("PHONE_NUMBER") val phoneNumber: String? = null,
    @JsonProperty("ADDRESS") val address: Address? = null
)

// Incoming payment webhook
data class IncomingPaymentWebhookEvent(
    @JsonProperty("timestamp") override val timestamp: String,
    @JsonProperty("webhookId") override val webhookId: String,
    @JsonProperty("type") override val type: WebhookType = WebhookType.INCOMING_PAYMENT,
    @JsonProperty("transaction") val transaction: IncomingTransaction,
    @JsonProperty("requestedReceiverUserInfoFields") val requestedReceiverUserInfoFields: List<RequestedField>? = null
) : BaseWebhookEvent()

data class RequestedField(
    @JsonProperty("name") val name: String,
    @JsonProperty("mandatory") val mandatory: Boolean
)

data class IncomingPaymentWebhookResponse(
    @JsonProperty("receiverUserInfo") val receiverUserInfo: WebhookUserData
)

// Outgoing payment webhook
data class OutgoingPaymentWebhookEvent(
    @JsonProperty("timestamp") override val timestamp: String,
    @JsonProperty("webhookId") override val webhookId: String,
    @JsonProperty("type") override val type: WebhookType = WebhookType.OUTGOING_PAYMENT,
    @JsonProperty("transaction") val transaction: OutgoingTransaction
) : BaseWebhookEvent()

// Test webhook
data class TestWebhookEvent(
    @JsonProperty("timestamp") override val timestamp: String,
    @JsonProperty("webhookId") override val webhookId: String,
    @JsonProperty("type") override val type: WebhookType = WebhookType.TEST
) : BaseWebhookEvent()

// Bulk upload webhook
data class BulkUploadWebhookEvent(
    @JsonProperty("timestamp") override val timestamp: String,
    @JsonProperty("webhookId") override val webhookId: String,
    @JsonProperty("type") override val type: WebhookType = WebhookType.BULK_UPLOAD,
    @JsonProperty("jobId") val jobId: String,
    @JsonProperty("status") val status: String, // SUCCESS, PARTIAL_SUCCESS, FAILED
    @JsonProperty("progress") val progress: BulkUploadProgress,
    @JsonProperty("errors") val errors: List<BulkUploadError>? = null
) : BaseWebhookEvent()

data class BulkUploadProgress(
    @JsonProperty("total") val total: Int,
    @JsonProperty("processed") val processed: Int,
    @JsonProperty("successful") val successful: Int,
    @JsonProperty("failed") val failed: Int
)

data class BulkUploadError(
    @JsonProperty("correlationId") val correlationId: String,
    @JsonProperty("error") val error: ErrorDetails
)

data class ErrorDetails(
    @JsonProperty("code") val code: String,
    @JsonProperty("message") val message: String,
    @JsonProperty("details") val details: Any? = null
)

// Invitation claimed webhook
data class InvitationClaimedWebhookEvent(
    @JsonProperty("timestamp") override val timestamp: String,
    @JsonProperty("webhookId") override val webhookId: String,
    @JsonProperty("type") override val type: WebhookType = WebhookType.INVITATION_CLAIMED,
    @JsonProperty("invitation") val invitation: UmaInvitation
) : BaseWebhookEvent()

data class SignatureHeader(
    @JsonProperty("v") val v: Int,
    @JsonProperty("s") val s: String
)

object WebhookUtils {
    private const val VERSION = 1
    private val objectMapper = jacksonObjectMapper()

    /**
     * Verifies the webhook signature using the public key
     */
    fun verifyWebhookSignature(body: String, signatureHeaderValue: String, publicKey: String): Boolean {
        return try {
            val sigHeader = objectMapper.readValue(signatureHeaderValue, SignatureHeader::class.java)
            
            if (sigHeader.v != VERSION) {
                println("Invalid signature version: ${sigHeader.v}, expected: $VERSION")
                return false
            }

            val pubKeyObj = createPublicKey(publicKey)
            val signature = Base64.getDecoder().decode(sigHeader.s)
            
            // Determine signature algorithm based on key type
            val algorithm = when (pubKeyObj.algorithm) {
                "EC" -> "SHA256withECDSA"
                "RSA" -> "SHA256withRSA"
                else -> throw IllegalArgumentException("Unsupported key algorithm: ${pubKeyObj.algorithm}")
            }
            
            val verifier = Signature.getInstance(algorithm)
            verifier.initVerify(pubKeyObj)
            verifier.update(body.toByteArray())
            verifier.verify(signature)
        } catch (e: Exception) {
            println("Error verifying webhook signature: ${e.message}")
            false
        }
    }

    /**
     * Creates a PublicKey object from either PEM or DER format
     */
    private fun createPublicKey(publicKey: String): PublicKey {
        val keyBytes = if (publicKey.contains("-----BEGIN") && publicKey.contains("-----END")) {
            // PEM format - remove headers and decode
            val keyData = publicKey
                .replace("-----BEGIN PUBLIC KEY-----", "")
                .replace("-----END PUBLIC KEY-----", "")
                .replace("\\s".toRegex(), "")
                .trim()
            Base64.getDecoder().decode(keyData)
        } else {
            // DER format - assume hex-encoded binary data
            hexStringToByteArray(publicKey)
        }
        
        val keySpec = X509EncodedKeySpec(keyBytes)
        
        // Try to determine key type by attempting to parse with different algorithms
        return try {
            // Try EC first (more common for webhooks)
            KeyFactory.getInstance("EC").generatePublic(keySpec)
        } catch (e: Exception) {
            try {
                // Fall back to RSA
                KeyFactory.getInstance("RSA").generatePublic(keySpec)
            } catch (e2: Exception) {
                throw IllegalArgumentException("Unable to parse public key as EC or RSA", e2)
            }
        }
    }

    /**
     * Converts hex string to byte array
     */
    private fun hexStringToByteArray(hex: String): ByteArray {
        val cleanHex = hex.replace("\\s+".toRegex(), "")
        return cleanHex.chunked(2).map { it.toInt(16).toByte() }.toByteArray()
    }

    /**
     * Parses the webhook event from raw payload
     */
    fun parseWebhookEvent(rawPayload: Map<String, Any>): BaseWebhookEvent {
        val type = rawPayload["type"] as? String 
            ?: throw IllegalArgumentException("Missing webhook type")
        
        return when (WebhookType.entries.find { it.value == type }) {
            WebhookType.INCOMING_PAYMENT -> {
                objectMapper.convertValue(rawPayload, IncomingPaymentWebhookEvent::class.java)
            }
            WebhookType.OUTGOING_PAYMENT -> {
                objectMapper.convertValue(rawPayload, OutgoingPaymentWebhookEvent::class.java)
            }
            WebhookType.TEST -> {
                objectMapper.convertValue(rawPayload, TestWebhookEvent::class.java)
            }
            WebhookType.BULK_UPLOAD -> {
                objectMapper.convertValue(rawPayload, BulkUploadWebhookEvent::class.java)
            }
            WebhookType.INVITATION_CLAIMED -> {
                objectMapper.convertValue(rawPayload, InvitationClaimedWebhookEvent::class.java)
            }
            null -> throw IllegalArgumentException("Unknown webhook type: $type")
        }
    }
}
