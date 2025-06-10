// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.quotes

import com.lightspark.uma.core.JsonValue
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class QuoteCreateParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        QuoteCreateParams.builder()
            .lockedCurrencyAmount(1000L)
            .lockedCurrencySide(QuoteCreateParams.LockedCurrencySide.SENDING)
            .lookupId("LookupRequest:019542f5-b3e7-1d02-0000-000000000009")
            .receivingCurrencyCode("EUR")
            .sendingCurrencyCode("USD")
            .description("Payment for invoice #1234")
            .senderUserInfo(
                QuoteCreateParams.SenderUserInfo.builder()
                    .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                    .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                    .build()
            )
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            QuoteCreateParams.builder()
                .lockedCurrencyAmount(1000L)
                .lockedCurrencySide(QuoteCreateParams.LockedCurrencySide.SENDING)
                .lookupId("LookupRequest:019542f5-b3e7-1d02-0000-000000000009")
                .receivingCurrencyCode("EUR")
                .sendingCurrencyCode("USD")
                .description("Payment for invoice #1234")
                .senderUserInfo(
                    QuoteCreateParams.SenderUserInfo.builder()
                        .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                        .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                        .build()
                )
                .build()

        val body = params._body()

        assertThat(body.lockedCurrencyAmount()).isEqualTo(1000L)
        assertThat(body.lockedCurrencySide())
            .isEqualTo(QuoteCreateParams.LockedCurrencySide.SENDING)
        assertThat(body.lookupId()).isEqualTo("LookupRequest:019542f5-b3e7-1d02-0000-000000000009")
        assertThat(body.receivingCurrencyCode()).isEqualTo("EUR")
        assertThat(body.sendingCurrencyCode()).isEqualTo("USD")
        assertThat(body.description()).isEqualTo("Payment for invoice #1234")
        assertThat(body.senderUserInfo())
            .isEqualTo(
                QuoteCreateParams.SenderUserInfo.builder()
                    .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                    .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun bodyWithoutOptionalFields() {
        val params =
            QuoteCreateParams.builder()
                .lockedCurrencyAmount(1000L)
                .lockedCurrencySide(QuoteCreateParams.LockedCurrencySide.SENDING)
                .lookupId("LookupRequest:019542f5-b3e7-1d02-0000-000000000009")
                .receivingCurrencyCode("EUR")
                .sendingCurrencyCode("USD")
                .build()

        val body = params._body()

        assertThat(body.lockedCurrencyAmount()).isEqualTo(1000L)
        assertThat(body.lockedCurrencySide())
            .isEqualTo(QuoteCreateParams.LockedCurrencySide.SENDING)
        assertThat(body.lookupId()).isEqualTo("LookupRequest:019542f5-b3e7-1d02-0000-000000000009")
        assertThat(body.receivingCurrencyCode()).isEqualTo("EUR")
        assertThat(body.sendingCurrencyCode()).isEqualTo("USD")
    }
}
