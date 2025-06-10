// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.quotes

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.jsonMapper
import com.lightspark.uma.models.users.BankAccountType
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class QuoteTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val quote =
            Quote.builder()
                .exchangeRate(1.0)
                .expiresAt(OffsetDateTime.parse("2023-09-01T14:30:00Z"))
                .feesIncluded(10L)
                .paymentInstructions(
                    Quote.PaymentInstructions.builder()
                        .bankAccountInfo(
                            Quote.PaymentInstructions.BankAccountInfo.builder()
                                .accountType(BankAccountType.CLABE)
                                .build()
                        )
                        .reference("UMA-Q12345-REF")
                        .instructionsNotes(
                            "Please ensure the reference code is included in the payment memo/description field"
                        )
                        .build()
                )
                .quoteId("Quote:019542f5-b3e7-1d02-0000-000000000006")
                .receivingCurrency(
                    Currency.builder()
                        .code("USD")
                        .decimals(2L)
                        .name("United States Dollar")
                        .symbol("\$")
                        .build()
                )
                .sendingCurrency(
                    Currency.builder()
                        .code("USD")
                        .decimals(2L)
                        .name("United States Dollar")
                        .symbol("\$")
                        .build()
                )
                .totalReceivingAmount(1000L)
                .totalSendingAmount(123010L)
                .transactionId("Transaction:019542f5-b3e7-1d02-0000-000000000005")
                .counterpartyInformation(
                    Quote.CounterpartyInformation.builder()
                        .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                        .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                        .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                        .build()
                )
                .status(Quote.Status.PENDING)
                .build()

        assertThat(quote.exchangeRate()).isEqualTo(1.0)
        assertThat(quote.expiresAt()).isEqualTo(OffsetDateTime.parse("2023-09-01T14:30:00Z"))
        assertThat(quote.feesIncluded()).isEqualTo(10L)
        assertThat(quote.paymentInstructions())
            .isEqualTo(
                Quote.PaymentInstructions.builder()
                    .bankAccountInfo(
                        Quote.PaymentInstructions.BankAccountInfo.builder()
                            .accountType(BankAccountType.CLABE)
                            .build()
                    )
                    .reference("UMA-Q12345-REF")
                    .instructionsNotes(
                        "Please ensure the reference code is included in the payment memo/description field"
                    )
                    .build()
            )
        assertThat(quote.quoteId()).isEqualTo("Quote:019542f5-b3e7-1d02-0000-000000000006")
        assertThat(quote.receivingCurrency())
            .isEqualTo(
                Currency.builder()
                    .code("USD")
                    .decimals(2L)
                    .name("United States Dollar")
                    .symbol("\$")
                    .build()
            )
        assertThat(quote.sendingCurrency())
            .isEqualTo(
                Currency.builder()
                    .code("USD")
                    .decimals(2L)
                    .name("United States Dollar")
                    .symbol("\$")
                    .build()
            )
        assertThat(quote.totalReceivingAmount()).isEqualTo(1000L)
        assertThat(quote.totalSendingAmount()).isEqualTo(123010L)
        assertThat(quote.transactionId())
            .isEqualTo("Transaction:019542f5-b3e7-1d02-0000-000000000005")
        assertThat(quote.counterpartyInformation())
            .isEqualTo(
                Quote.CounterpartyInformation.builder()
                    .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                    .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                    .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                    .build()
            )
        assertThat(quote.status()).isEqualTo(Quote.Status.PENDING)
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val quote =
            Quote.builder()
                .exchangeRate(1.0)
                .expiresAt(OffsetDateTime.parse("2023-09-01T14:30:00Z"))
                .feesIncluded(10L)
                .paymentInstructions(
                    Quote.PaymentInstructions.builder()
                        .bankAccountInfo(
                            Quote.PaymentInstructions.BankAccountInfo.builder()
                                .accountType(BankAccountType.CLABE)
                                .build()
                        )
                        .reference("UMA-Q12345-REF")
                        .instructionsNotes(
                            "Please ensure the reference code is included in the payment memo/description field"
                        )
                        .build()
                )
                .quoteId("Quote:019542f5-b3e7-1d02-0000-000000000006")
                .receivingCurrency(
                    Currency.builder()
                        .code("USD")
                        .decimals(2L)
                        .name("United States Dollar")
                        .symbol("\$")
                        .build()
                )
                .sendingCurrency(
                    Currency.builder()
                        .code("USD")
                        .decimals(2L)
                        .name("United States Dollar")
                        .symbol("\$")
                        .build()
                )
                .totalReceivingAmount(1000L)
                .totalSendingAmount(123010L)
                .transactionId("Transaction:019542f5-b3e7-1d02-0000-000000000005")
                .counterpartyInformation(
                    Quote.CounterpartyInformation.builder()
                        .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                        .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                        .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                        .build()
                )
                .status(Quote.Status.PENDING)
                .build()

        val roundtrippedQuote =
            jsonMapper.readValue(jsonMapper.writeValueAsString(quote), jacksonTypeRef<Quote>())

        assertThat(roundtrippedQuote).isEqualTo(quote)
    }
}
