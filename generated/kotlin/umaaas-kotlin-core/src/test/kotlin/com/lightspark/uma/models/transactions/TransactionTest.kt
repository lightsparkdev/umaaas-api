// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.transactions

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.jsonMapper
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class TransactionTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val transaction =
            Transaction.builder()
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
                .build()

        assertThat(transaction.id()).isEqualTo("Transaction:019542f5-b3e7-1d02-0000-000000000004")
        assertThat(transaction.platformUserId()).isEqualTo("18d3e5f7b4a9c2")
        assertThat(transaction.receiverUmaAddress()).isEqualTo("\$recipient@uma.domain")
        assertThat(transaction.senderUmaAddress()).isEqualTo("\$sender@external.domain")
        assertThat(transaction.status()).isEqualTo(TransactionStatus.CREATED)
        assertThat(transaction.type()).isEqualTo(TransactionType.INCOMING)
        assertThat(transaction.userId()).isEqualTo("User:019542f5-b3e7-1d02-0000-000000000001")
        assertThat(transaction.counterpartyInformation())
            .isEqualTo(
                Transaction.CounterpartyInformation.builder()
                    .putAdditionalProperty("FULL_NAME", JsonValue.from("bar"))
                    .putAdditionalProperty("DATE_OF_BIRTH", JsonValue.from("bar"))
                    .putAdditionalProperty("NATIONALITY", JsonValue.from("bar"))
                    .build()
            )
        assertThat(transaction.createdAt()).isEqualTo(OffsetDateTime.parse("2023-08-15T14:25:18Z"))
        assertThat(transaction.description()).isEqualTo("Payment for invoice #1234")
        assertThat(transaction.settledAt()).isEqualTo(OffsetDateTime.parse("2023-08-15T14:30:00Z"))
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val transaction =
            Transaction.builder()
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
                .build()

        val roundtrippedTransaction =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(transaction),
                jacksonTypeRef<Transaction>(),
            )

        assertThat(roundtrippedTransaction).isEqualTo(transaction)
    }
}
