// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClientAsync
import com.lightspark.uma.models.receiver.ReceiverLookupParams
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class ReceiverServiceAsyncTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun lookup() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val receiverServiceAsync = client.receiver()

        val response =
            receiverServiceAsync.lookup(
                ReceiverLookupParams.builder()
                    .receiverUmaAddress("receiverUmaAddress")
                    .senderUmaAddress("senderUmaAddress")
                    .userId("userId")
                    .build()
            )

        response.validate()
    }
}
