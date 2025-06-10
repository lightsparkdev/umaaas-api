// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async.users

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClientAsync
import com.lightspark.uma.models.users.bulk.BulkUploadParams
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class BulkServiceAsyncTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun getJobStatus() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val bulkServiceAsync = client.users().bulk()

        val response = bulkServiceAsync.getJobStatus("jobId")

        response.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun upload() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val bulkServiceAsync = client.users().bulk()

        val response =
            bulkServiceAsync.upload(
                BulkUploadParams.builder()
                    .file("some content".byteInputStream())
                    .webhookUrl("https://example.com")
                    .build()
            )

        response.validate()
    }
}
