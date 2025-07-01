package com.lightspark.uma.umaaas.lib

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.lightspark.uma.core.ExcludeMissing
import models.webhooks.*
import java.security.KeyFactory
import java.security.PublicKey
import java.security.Signature
import java.security.spec.X509EncodedKeySpec
import java.util.*

data class SignatureHeader(
    @JsonProperty("v") @ExcludeMissing val v: Int,
    @JsonProperty("s") @ExcludeMissing val s: String
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
            
            val verifier = Signature.getInstance("EC")
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
        return try {
            KeyFactory.getInstance("EC").generatePublic(keySpec)
        } catch (e: Exception) {
            throw IllegalArgumentException("Unable to parse public key ", e)
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

        return when (BaseWebhookEvent.WebhookType.valueOf(type)) {
            BaseWebhookEvent.WebhookType.INCOMING_PAYMENT -> {
                objectMapper.convertValue(rawPayload, IncomingPaymentWebhookEvent::class.java)
            }

            BaseWebhookEvent.WebhookType.OUTGOING_PAYMENT -> {
                objectMapper.convertValue(rawPayload, OutgoingPaymentWebhookEvent::class.java)
            }

            BaseWebhookEvent.WebhookType.TEST -> {
                objectMapper.convertValue(rawPayload, TestWebhookEvent::class.java)
            }

            BaseWebhookEvent.WebhookType.BULK_UPLOAD -> {
                objectMapper.convertValue(rawPayload, BulkUploadWebhookEvent::class.java)
            }

            BaseWebhookEvent.WebhookType.INVITATION_CLAIMED -> {
                objectMapper.convertValue(rawPayload, InvitationClaimedWebhookEvent::class.java)
            }

            else -> throw IllegalArgumentException("Unknown webhook type: $type")
        }
    }
}
