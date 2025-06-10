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

internal class IncomingTransactionTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val incomingTransaction =
            IncomingTransaction.builder()
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
                .reconciliationInstructions(
                    IncomingTransaction.ReconciliationInstructions.builder()
                        .reference("UMA-Q12345-REF")
                        .build()
                )
                .build()

        assertThat(incomingTransaction.id())
            .isEqualTo("Transaction:019542f5-b3e7-1d02-0000-000000000004")
        assertThat(incomingTransaction.platformUserId()).isEqualTo("18d3e5f7b4a9c2")
        assertThat(incomingTransaction.receiverUmaAddress()).isEqualTo("\$recipient@uma.domain")
        assertThat(incomingTransaction.senderUmaAddress()).isEqualTo("\$sender@external.domain")
        assertThat(incomingTransaction.status()).isEqualTo(TransactionStatus.CREATED)
        assertThat(incomingTransaction.type()).isEqualTo(TransactionType.INCOMING)
        assertThat(incomingTransaction.userId())
            .isEqualTo("User:019542f5-b3e7-1d02-0000-000000000001")
        assertThat(incomingTransaction.counterpartyInformation())
            .isEqualTo(
                Transaction.CounterpartyInformation.builder()
                    .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                    .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                    .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                    .build()
            )
        assertThat(incomingTransaction.createdAt())
            .isEqualTo(OffsetDateTime.parse("2023-08-15T14:25:18Z"))
        assertThat(incomingTransaction.description()).isEqualTo("Payment for invoice #1234")
        assertThat(incomingTransaction.settledAt())
            .isEqualTo(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
        assertThat(incomingTransaction.receivedAmount())
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
        assertThat(incomingTransaction.reconciliationInstructions())
            .isEqualTo(
                IncomingTransaction.ReconciliationInstructions.builder()
                    .reference("UMA-Q12345-REF")
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val incomingTransaction =
            IncomingTransaction.builder()
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
                .reconciliationInstructions(
                    IncomingTransaction.ReconciliationInstructions.builder()
                        .reference("UMA-Q12345-REF")
                        .build()
                )
                .build()

        val roundtrippedIncomingTransaction =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(incomingTransaction),
                jacksonTypeRef<IncomingTransaction>(),
            )

        assertThat(roundtrippedIncomingTransaction).isEqualTo(incomingTransaction)
    }
}
