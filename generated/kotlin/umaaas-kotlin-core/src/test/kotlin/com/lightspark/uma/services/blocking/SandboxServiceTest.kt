// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient
import com.lightspark.uma.models.sandbox.SandboxReceivePaymentParams
import com.lightspark.uma.models.sandbox.SandboxSendFundsParams
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class SandboxServiceTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun receivePayment() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val sandboxService = client.sandbox()

        val incomingTransaction =
            sandboxService.receivePayment(
                SandboxReceivePaymentParams.builder()
                    .receivingCurrencyAmount(1000L)
                    .receivingCurrencyCode("USD")
                    .senderUmaAddress("\$success.usd@sandbox.uma.money")
                    .receiverUmaAddress("\$receiver@uma.domain")
                    .userId("User:019542f5-b3e7-1d02-0000-000000000001")
                    .build()
            )

        incomingTransaction.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun sendFunds() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val sandboxService = client.sandbox()

        val outgoingTransaction =
            sandboxService.sendFunds(
                SandboxSendFundsParams.builder()
                    .currencyAmount(1000L)
                    .currencyCode("USD")
                    .reference("UMA-Q12345-REF")
                    .build()
            )

        outgoingTransaction.validate()
    }
}
