// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users.bulk

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.jsonMapper
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class BulkGetJobStatusResponseTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val bulkGetJobStatusResponse =
            BulkGetJobStatusResponse.builder()
                .jobId("Job:019542f5-b3e7-1d02-0000-000000000006")
                .progress(
                    BulkGetJobStatusResponse.Progress.builder()
                        .failed(50L)
                        .processed(2500L)
                        .successful(2450L)
                        .total(5000L)
                        .build()
                )
                .status(BulkGetJobStatusResponse.Status.PROCESSING)
                .completedAt(OffsetDateTime.parse("2023-08-15T14:32:00Z"))
                .addError(
                    BulkGetJobStatusResponse.Error.builder()
                        .correlationId("biz456")
                        .error(
                            BulkGetJobStatusResponse.Error.InnerError.builder()
                                .code("code")
                                .details(JsonValue.from(mapOf<String, Any>()))
                                .message("message")
                                .build()
                        )
                        .build()
                )
                .build()

        assertThat(bulkGetJobStatusResponse.jobId())
            .isEqualTo("Job:019542f5-b3e7-1d02-0000-000000000006")
        assertThat(bulkGetJobStatusResponse.progress())
            .isEqualTo(
                BulkGetJobStatusResponse.Progress.builder()
                    .failed(50L)
                    .processed(2500L)
                    .successful(2450L)
                    .total(5000L)
                    .build()
            )
        assertThat(bulkGetJobStatusResponse.status())
            .isEqualTo(BulkGetJobStatusResponse.Status.PROCESSING)
        assertThat(bulkGetJobStatusResponse.completedAt())
            .isEqualTo(OffsetDateTime.parse("2023-08-15T14:32:00Z"))
        assertThat(bulkGetJobStatusResponse.errors())
            .containsExactly(
                BulkGetJobStatusResponse.Error.builder()
                    .correlationId("biz456")
                    .error(
                        BulkGetJobStatusResponse.Error.InnerError.builder()
                            .code("code")
                            .details(JsonValue.from(mapOf<String, Any>()))
                            .message("message")
                            .build()
                    )
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val bulkGetJobStatusResponse =
            BulkGetJobStatusResponse.builder()
                .jobId("Job:019542f5-b3e7-1d02-0000-000000000006")
                .progress(
                    BulkGetJobStatusResponse.Progress.builder()
                        .failed(50L)
                        .processed(2500L)
                        .successful(2450L)
                        .total(5000L)
                        .build()
                )
                .status(BulkGetJobStatusResponse.Status.PROCESSING)
                .completedAt(OffsetDateTime.parse("2023-08-15T14:32:00Z"))
                .addError(
                    BulkGetJobStatusResponse.Error.builder()
                        .correlationId("biz456")
                        .error(
                            BulkGetJobStatusResponse.Error.InnerError.builder()
                                .code("code")
                                .details(JsonValue.from(mapOf<String, Any>()))
                                .message("message")
                                .build()
                        )
                        .build()
                )
                .build()

        val roundtrippedBulkGetJobStatusResponse =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(bulkGetJobStatusResponse),
                jacksonTypeRef<BulkGetJobStatusResponse>(),
            )

        assertThat(roundtrippedBulkGetJobStatusResponse).isEqualTo(bulkGetJobStatusResponse)
    }
}
