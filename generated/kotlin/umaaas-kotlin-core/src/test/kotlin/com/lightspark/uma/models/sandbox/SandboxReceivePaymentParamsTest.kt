// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.sandbox

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class SandboxReceivePaymentParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        SandboxReceivePaymentParams.builder()
            .receivingCurrencyAmount(1000L)
            .receivingCurrencyCode("USD")
            .senderUmaAddress("\$success.usd@sandbox.uma.money")
            .receiverUmaAddress("\$receiver@uma.domain")
            .userId("User:019542f5-b3e7-1d02-0000-000000000001")
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            SandboxReceivePaymentParams.builder()
                .receivingCurrencyAmount(1000L)
                .receivingCurrencyCode("USD")
                .senderUmaAddress("\$success.usd@sandbox.uma.money")
                .receiverUmaAddress("\$receiver@uma.domain")
                .userId("User:019542f5-b3e7-1d02-0000-000000000001")
                .build()

        val body = params._body()

        assertThat(body.receivingCurrencyAmount()).isEqualTo(1000L)
        assertThat(body.receivingCurrencyCode()).isEqualTo("USD")
        assertThat(body.senderUmaAddress()).isEqualTo("\$success.usd@sandbox.uma.money")
        assertThat(body.receiverUmaAddress()).isEqualTo("\$receiver@uma.domain")
        assertThat(body.userId()).isEqualTo("User:019542f5-b3e7-1d02-0000-000000000001")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun bodyWithoutOptionalFields() {
        val params =
            SandboxReceivePaymentParams.builder()
                .receivingCurrencyAmount(1000L)
                .receivingCurrencyCode("USD")
                .senderUmaAddress("\$success.usd@sandbox.uma.money")
                .build()

        val body = params._body()

        assertThat(body.receivingCurrencyAmount()).isEqualTo(1000L)
        assertThat(body.receivingCurrencyCode()).isEqualTo("USD")
        assertThat(body.senderUmaAddress()).isEqualTo("\$success.usd@sandbox.uma.money")
    }
}
