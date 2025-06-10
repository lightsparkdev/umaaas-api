// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.receiver

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import com.lightspark.uma.models.quotes.Currency
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class ReceiverLookupResponseTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val receiverLookupResponse =
            ReceiverLookupResponse.builder()
                .lookupId("Lookup:019542f5-b3e7-1d02-0000-000000000009")
                .receiverUmaAddress("\$receiver@uma.domain")
                .addSupportedCurrency(
                    ReceiverLookupResponse.SupportedCurrency.builder()
                        .currency(
                            Currency.builder()
                                .code("USD")
                                .decimals(2L)
                                .name("United States Dollar")
                                .symbol("\$")
                                .build()
                        )
                        .estimatedExchangeRate(1.08)
                        .max(1000000L)
                        .min(1L)
                        .build()
                )
                .addRequiredPayerDataField(
                    CounterpartyFieldDefinition.builder()
                        .mandatory(true)
                        .name(UserInfoFieldName.FULL_NAME)
                        .build()
                )
                .build()

        assertThat(receiverLookupResponse.lookupId())
            .isEqualTo("Lookup:019542f5-b3e7-1d02-0000-000000000009")
        assertThat(receiverLookupResponse.receiverUmaAddress()).isEqualTo("\$receiver@uma.domain")
        assertThat(receiverLookupResponse.supportedCurrencies())
            .containsExactly(
                ReceiverLookupResponse.SupportedCurrency.builder()
                    .currency(
                        Currency.builder()
                            .code("USD")
                            .decimals(2L)
                            .name("United States Dollar")
                            .symbol("\$")
                            .build()
                    )
                    .estimatedExchangeRate(1.08)
                    .max(1000000L)
                    .min(1L)
                    .build()
            )
        assertThat(receiverLookupResponse.requiredPayerDataFields())
            .containsExactly(
                CounterpartyFieldDefinition.builder()
                    .mandatory(true)
                    .name(UserInfoFieldName.FULL_NAME)
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val receiverLookupResponse =
            ReceiverLookupResponse.builder()
                .lookupId("Lookup:019542f5-b3e7-1d02-0000-000000000009")
                .receiverUmaAddress("\$receiver@uma.domain")
                .addSupportedCurrency(
                    ReceiverLookupResponse.SupportedCurrency.builder()
                        .currency(
                            Currency.builder()
                                .code("USD")
                                .decimals(2L)
                                .name("United States Dollar")
                                .symbol("\$")
                                .build()
                        )
                        .estimatedExchangeRate(1.08)
                        .max(1000000L)
                        .min(1L)
                        .build()
                )
                .addRequiredPayerDataField(
                    CounterpartyFieldDefinition.builder()
                        .mandatory(true)
                        .name(UserInfoFieldName.FULL_NAME)
                        .build()
                )
                .build()

        val roundtrippedReceiverLookupResponse =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(receiverLookupResponse),
                jacksonTypeRef<ReceiverLookupResponse>(),
            )

        assertThat(roundtrippedReceiverLookupResponse).isEqualTo(receiverLookupResponse)
    }
}
