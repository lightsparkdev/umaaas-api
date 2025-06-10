// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.transactions

import com.lightspark.uma.core.JsonValue
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class TransactionApproveParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        TransactionApproveParams.builder()
            .transactionId("transactionId")
            .receiverUserInfo(
                TransactionApproveParams.ReceiverUserInfo.builder()
                    .putAdditionalProperty("foo", JsonValue.from("bar"))
                    .build()
            )
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun pathParams() {
        val params = TransactionApproveParams.builder().transactionId("transactionId").build()

        assertThat(params._pathParam(0)).isEqualTo("transactionId")
        // out-of-bound path param
        assertThat(params._pathParam(1)).isEqualTo("")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            TransactionApproveParams.builder()
                .transactionId("transactionId")
                .receiverUserInfo(
                    TransactionApproveParams.ReceiverUserInfo.builder()
                        .putAdditionalProperty("foo", JsonValue.from("bar"))
                        .build()
                )
                .build()

        val body = params._body()

        assertThat(body.receiverUserInfo())
            .isEqualTo(
                TransactionApproveParams.ReceiverUserInfo.builder()
                    .putAdditionalProperty("foo", JsonValue.from("bar"))
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun bodyWithoutOptionalFields() {
        val params = TransactionApproveParams.builder().transactionId("transactionId").build()

        val body = params._body()
    }
}
