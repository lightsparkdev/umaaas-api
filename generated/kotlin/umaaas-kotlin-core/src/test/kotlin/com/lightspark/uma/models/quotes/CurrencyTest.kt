// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.quotes

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class CurrencyTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val currency =
            Currency.builder()
                .code("USD")
                .decimals(2L)
                .name("United States Dollar")
                .symbol("\$")
                .build()

        assertThat(currency.code()).isEqualTo("USD")
        assertThat(currency.decimals()).isEqualTo(2L)
        assertThat(currency.name()).isEqualTo("United States Dollar")
        assertThat(currency.symbol()).isEqualTo("\$")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val currency =
            Currency.builder()
                .code("USD")
                .decimals(2L)
                .name("United States Dollar")
                .symbol("\$")
                .build()

        val roundtrippedCurrency =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(currency),
                jacksonTypeRef<Currency>(),
            )

        assertThat(roundtrippedCurrency).isEqualTo(currency)
    }
}
