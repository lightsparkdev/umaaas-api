// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking.users

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient
import com.lightspark.uma.models.users.bulk.BulkUploadParams
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class BulkServiceTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun getJobStatus() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val bulkService = client.users().bulk()

        val response = bulkService.getJobStatus("jobId")

        response.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun upload() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val bulkService = client.users().bulk()

        val response =
            bulkService.upload(
                BulkUploadParams.builder()
                    .file("some content".byteInputStream())
                    .webhookUrl("https://example.com")
                    .build()
            )

        response.validate()
    }
}
