// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class WebhookServiceTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun sendTest() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val webhookService = client.webhooks()

        val response = webhookService.sendTest()

        response.validate()
    }
}
