// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users.bulk

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class BulkUploadResponseTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val bulkUploadResponse =
            BulkUploadResponse.builder()
                .jobId("Job:019542f5-b3e7-1d02-0000-000000000006")
                .status(BulkUploadResponse.Status.PENDING)
                .build()

        assertThat(bulkUploadResponse.jobId()).isEqualTo("Job:019542f5-b3e7-1d02-0000-000000000006")
        assertThat(bulkUploadResponse.status()).isEqualTo(BulkUploadResponse.Status.PENDING)
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val bulkUploadResponse =
            BulkUploadResponse.builder()
                .jobId("Job:019542f5-b3e7-1d02-0000-000000000006")
                .status(BulkUploadResponse.Status.PENDING)
                .build()

        val roundtrippedBulkUploadResponse =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(bulkUploadResponse),
                jacksonTypeRef<BulkUploadResponse>(),
            )

        assertThat(roundtrippedBulkUploadResponse).isEqualTo(bulkUploadResponse)
    }
}
