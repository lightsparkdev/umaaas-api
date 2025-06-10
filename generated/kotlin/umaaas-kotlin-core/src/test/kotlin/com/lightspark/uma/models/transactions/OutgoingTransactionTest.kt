// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.transactions

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.jsonMapper
import com.lightspark.uma.models.invitations.CurrencyAmount
import com.lightspark.uma.models.quotes.Currency
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class OutgoingTransactionTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val outgoingTransaction =
            OutgoingTransaction.builder()
                .id("Transaction:019542f5-b3e7-1d02-0000-000000000004")
                .platformUserId("18d3e5f7b4a9c2")
                .receiverUmaAddress("\$recipient@uma.domain")
                .senderUmaAddress("\$sender@external.domain")
                .status(TransactionStatus.CREATED)
                .type(TransactionType.INCOMING)
                .userId("User:019542f5-b3e7-1d02-0000-000000000001")
                .counterpartyInformation(
                    Transaction.CounterpartyInformation.builder()
                        .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                        .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                        .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                        .build()
                )
                .createdAt(OffsetDateTime.parse("2023-08-15T14:25:18Z"))
                .description("Payment for invoice #1234")
                .settledAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                .sentAmount(
                    CurrencyAmount.builder()
                        .amount(12550L)
                        .currency(
                            Currency.builder()
                                .code("USD")
                                .decimals(2L)
                                .name("United States Dollar")
                                .symbol("\$")
                                .build()
                        )
                        .build()
                )
                .exchangeRate(1.08)
                .fees(10L)
                .quoteId("Quote:019542f5-b3e7-1d02-0000-000000000006")
                .receivedAmount(
                    CurrencyAmount.builder()
                        .amount(12550L)
                        .currency(
                            Currency.builder()
                                .code("USD")
                                .decimals(2L)
                                .name("United States Dollar")
                                .symbol("\$")
                                .build()
                        )
                        .build()
                )
                .refund(
                    OutgoingTransaction.Refund.builder()
                        .initiatedAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                        .reference("UMA-Q12345-REFUND")
                        .settledAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                        .build()
                )
                .build()

        assertThat(outgoingTransaction.id())
            .isEqualTo("Transaction:019542f5-b3e7-1d02-0000-000000000004")
        assertThat(outgoingTransaction.platformUserId()).isEqualTo("18d3e5f7b4a9c2")
        assertThat(outgoingTransaction.receiverUmaAddress()).isEqualTo("\$recipient@uma.domain")
        assertThat(outgoingTransaction.senderUmaAddress()).isEqualTo("\$sender@external.domain")
        assertThat(outgoingTransaction.status()).isEqualTo(TransactionStatus.CREATED)
        assertThat(outgoingTransaction.type()).isEqualTo(TransactionType.INCOMING)
        assertThat(outgoingTransaction.userId())
            .isEqualTo("User:019542f5-b3e7-1d02-0000-000000000001")
        assertThat(outgoingTransaction.counterpartyInformation())
            .isEqualTo(
                Transaction.CounterpartyInformation.builder()
                    .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                    .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                    .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                    .build()
            )
        assertThat(outgoingTransaction.createdAt())
            .isEqualTo(OffsetDateTime.parse("2023-08-15T14:25:18Z"))
        assertThat(outgoingTransaction.description()).isEqualTo("Payment for invoice #1234")
        assertThat(outgoingTransaction.settledAt())
            .isEqualTo(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
        assertThat(outgoingTransaction.sentAmount())
            .isEqualTo(
                CurrencyAmount.builder()
                    .amount(12550L)
                    .currency(
                        Currency.builder()
                            .code("USD")
                            .decimals(2L)
                            .name("United States Dollar")
                            .symbol("\$")
                            .build()
                    )
                    .build()
            )
        assertThat(outgoingTransaction.exchangeRate()).isEqualTo(1.08)
        assertThat(outgoingTransaction.fees()).isEqualTo(10L)
        assertThat(outgoingTransaction.quoteId())
            .isEqualTo("Quote:019542f5-b3e7-1d02-0000-000000000006")
        assertThat(outgoingTransaction.receivedAmount())
            .isEqualTo(
                CurrencyAmount.builder()
                    .amount(12550L)
                    .currency(
                        Currency.builder()
                            .code("USD")
                            .decimals(2L)
                            .name("United States Dollar")
                            .symbol("\$")
                            .build()
                    )
                    .build()
            )
        assertThat(outgoingTransaction.refund())
            .isEqualTo(
                OutgoingTransaction.Refund.builder()
                    .initiatedAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                    .reference("UMA-Q12345-REFUND")
                    .settledAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val outgoingTransaction =
            OutgoingTransaction.builder()
                .id("Transaction:019542f5-b3e7-1d02-0000-000000000004")
                .platformUserId("18d3e5f7b4a9c2")
                .receiverUmaAddress("\$recipient@uma.domain")
                .senderUmaAddress("\$sender@external.domain")
                .status(TransactionStatus.CREATED)
                .type(TransactionType.INCOMING)
                .userId("User:019542f5-b3e7-1d02-0000-000000000001")
                .counterpartyInformation(
                    Transaction.CounterpartyInformation.builder()
                        .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                        .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                        .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                        .build()
                )
                .createdAt(OffsetDateTime.parse("2023-08-15T14:25:18Z"))
                .description("Payment for invoice #1234")
                .settledAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                .sentAmount(
                    CurrencyAmount.builder()
                        .amount(12550L)
                        .currency(
                            Currency.builder()
                                .code("USD")
                                .decimals(2L)
                                .name("United States Dollar")
                                .symbol("\$")
                                .build()
                        )
                        .build()
                )
                .exchangeRate(1.08)
                .fees(10L)
                .quoteId("Quote:019542f5-b3e7-1d02-0000-000000000006")
                .receivedAmount(
                    CurrencyAmount.builder()
                        .amount(12550L)
                        .currency(
                            Currency.builder()
                                .code("USD")
                                .decimals(2L)
                                .name("United States Dollar")
                                .symbol("\$")
                                .build()
                        )
                        .build()
                )
                .refund(
                    OutgoingTransaction.Refund.builder()
                        .initiatedAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                        .reference("UMA-Q12345-REFUND")
                        .settledAt(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
                        .build()
                )
                .build()

        val roundtrippedOutgoingTransaction =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(outgoingTransaction),
                jacksonTypeRef<OutgoingTransaction>(),
            )

        assertThat(roundtrippedOutgoingTransaction).isEqualTo(outgoingTransaction)
    }
}
