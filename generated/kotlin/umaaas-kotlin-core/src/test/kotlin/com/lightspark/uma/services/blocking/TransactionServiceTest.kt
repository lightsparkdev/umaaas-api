// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.models.transactions.TransactionApproveParams
import com.lightspark.uma.models.transactions.TransactionRejectParams
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class TransactionServiceTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun retrieve() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val transactionService = client.transactions()

        val transaction = transactionService.retrieve("transactionId")

        transaction.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun list() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val transactionService = client.transactions()

        val page = transactionService.list()

        page.response().validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun approve() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val transactionService = client.transactions()

        val incomingTransaction =
            transactionService.approve(
                TransactionApproveParams.builder()
                    .transactionId("transactionId")
                    .receiverUserInfo(
                        TransactionApproveParams.ReceiverUserInfo.builder()
                            .putAdditionalProperty("foo", JsonValue.from("bar"))
                            .build()
                    )
                    .build()
            )

        incomingTransaction.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun reject() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val transactionService = client.transactions()

        val incomingTransaction =
            transactionService.reject(
                TransactionRejectParams.builder()
                    .transactionId("transactionId")
                    .reason("RESTRICTED_JURISDICTION")
                    .build()
            )

        incomingTransaction.validate()
    }
}
