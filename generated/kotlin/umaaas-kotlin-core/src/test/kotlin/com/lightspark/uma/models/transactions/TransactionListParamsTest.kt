// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.transactions

import com.lightspark.uma.core.http.QueryParams
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class TransactionListParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        TransactionListParams.builder()
            .cursor("cursor")
            .endDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))
            .limit(1L)
            .platformUserId("platformUserId")
            .receiverUmaAddress("receiverUmaAddress")
            .reference("reference")
            .senderUmaAddress("senderUmaAddress")
            .sortOrder(TransactionListParams.SortOrder.ASC)
            .startDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))
            .status(TransactionStatus.CREATED)
            .type(TransactionType.INCOMING)
            .umaAddress("umaAddress")
            .userId("userId")
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun queryParams() {
        val params =
            TransactionListParams.builder()
                .cursor("cursor")
                .endDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))
                .limit(1L)
                .platformUserId("platformUserId")
                .receiverUmaAddress("receiverUmaAddress")
                .reference("reference")
                .senderUmaAddress("senderUmaAddress")
                .sortOrder(TransactionListParams.SortOrder.ASC)
                .startDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))
                .status(TransactionStatus.CREATED)
                .type(TransactionType.INCOMING)
                .umaAddress("umaAddress")
                .userId("userId")
                .build()

        val queryParams = params._queryParams()

        assertThat(queryParams)
            .isEqualTo(
                QueryParams.builder()
                    .put("cursor", "cursor")
                    .put("endDate", "2019-12-27T18:11:19.117Z")
                    .put("limit", "1")
                    .put("platformUserId", "platformUserId")
                    .put("receiverUmaAddress", "receiverUmaAddress")
                    .put("reference", "reference")
                    .put("senderUmaAddress", "senderUmaAddress")
                    .put("sortOrder", "asc")
                    .put("startDate", "2019-12-27T18:11:19.117Z")
                    .put("status", "CREATED")
                    .put("type", "INCOMING")
                    .put("umaAddress", "umaAddress")
                    .put("userId", "userId")
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun queryParamsWithoutOptionalFields() {
        val params = TransactionListParams.builder().build()

        val queryParams = params._queryParams()

        assertThat(queryParams).isEqualTo(QueryParams.builder().build())
    }
}
