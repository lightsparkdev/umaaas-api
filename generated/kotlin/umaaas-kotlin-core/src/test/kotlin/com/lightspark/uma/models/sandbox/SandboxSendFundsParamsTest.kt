// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.sandbox

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class SandboxSendFundsParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        SandboxSendFundsParams.builder()
            .currencyAmount(1000L)
            .currencyCode("USD")
            .reference("UMA-Q12345-REF")
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            SandboxSendFundsParams.builder()
                .currencyAmount(1000L)
                .currencyCode("USD")
                .reference("UMA-Q12345-REF")
                .build()

        val body = params._body()

        assertThat(body.currencyAmount()).isEqualTo(1000L)
        assertThat(body.currencyCode()).isEqualTo("USD")
        assertThat(body.reference()).isEqualTo("UMA-Q12345-REF")
    }
}
