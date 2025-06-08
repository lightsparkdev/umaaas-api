package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.TestWebhookResponse

interface WebhooksApi {
    /**
     * POST webhooks/test
     * Send a test webhook
     * Send a test webhook to the configured endpoint
     * Responses:
     *  - 200: Webhook delivered successfully
     *  - 400: Bad request - Webhook delivery failed
     *  - 401: Unauthorized
     *
     * @return [TestWebhookResponse]
     */
    @POST("webhooks/test")
    suspend fun sendTestWebhook(): Response<TestWebhookResponse>

}
