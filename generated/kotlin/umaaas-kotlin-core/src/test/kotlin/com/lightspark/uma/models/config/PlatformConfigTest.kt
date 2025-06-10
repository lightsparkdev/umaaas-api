// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.config

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import com.lightspark.uma.models.receiver.CounterpartyFieldDefinition
import com.lightspark.uma.models.receiver.UserInfoFieldName
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class PlatformConfigTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val platformConfig =
            PlatformConfig.builder()
                .id("PlatformConfig:019542f5-b3e7-1d02-0000-000000000003")
                .createdAt(OffsetDateTime.parse("2023-06-15T12:30:45Z"))
                .addSupportedCurrency(
                    PlatformCurrencyConfig.builder()
                        .currencyCode("USD")
                        .maxAmount(1000000L)
                        .minAmount(100L)
                        .requiredCounterpartyFields(
                            listOf(
                                CounterpartyFieldDefinition.builder()
                                    .mandatory(true)
                                    .name(UserInfoFieldName.FULL_NAME)
                                    .build(),
                                CounterpartyFieldDefinition.builder()
                                    .mandatory(true)
                                    .name(UserInfoFieldName.DATE_OF_BIRTH)
                                    .build(),
                                CounterpartyFieldDefinition.builder()
                                    .mandatory(true)
                                    .name(UserInfoFieldName.NATIONALITY)
                                    .build(),
                            )
                        )
                        .addUmaProviderRequiredUserField(UserInfoFieldName.NATIONALITY)
                        .addUmaProviderRequiredUserField(UserInfoFieldName.DATE_OF_BIRTH)
                        .build()
                )
                .umaDomain("platform.uma.domain")
                .updatedAt(OffsetDateTime.parse("2023-06-15T12:30:45Z"))
                .webhookEndpoint("https://api.mycompany.com/webhooks/uma")
                .build()

        assertThat(platformConfig.id())
            .isEqualTo("PlatformConfig:019542f5-b3e7-1d02-0000-000000000003")
        assertThat(platformConfig.createdAt())
            .isEqualTo(OffsetDateTime.parse("2023-06-15T12:30:45Z"))
        assertThat(platformConfig.supportedCurrencies())
            .containsExactly(
                PlatformCurrencyConfig.builder()
                    .currencyCode("USD")
                    .maxAmount(1000000L)
                    .minAmount(100L)
                    .requiredCounterpartyFields(
                        listOf(
                            CounterpartyFieldDefinition.builder()
                                .mandatory(true)
                                .name(UserInfoFieldName.FULL_NAME)
                                .build(),
                            CounterpartyFieldDefinition.builder()
                                .mandatory(true)
                                .name(UserInfoFieldName.DATE_OF_BIRTH)
                                .build(),
                            CounterpartyFieldDefinition.builder()
                                .mandatory(true)
                                .name(UserInfoFieldName.NATIONALITY)
                                .build(),
                        )
                    )
                    .addUmaProviderRequiredUserField(UserInfoFieldName.NATIONALITY)
                    .addUmaProviderRequiredUserField(UserInfoFieldName.DATE_OF_BIRTH)
                    .build()
            )
        assertThat(platformConfig.umaDomain()).isEqualTo("platform.uma.domain")
        assertThat(platformConfig.updatedAt())
            .isEqualTo(OffsetDateTime.parse("2023-06-15T12:30:45Z"))
        assertThat(platformConfig.webhookEndpoint())
            .isEqualTo("https://api.mycompany.com/webhooks/uma")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val platformConfig =
            PlatformConfig.builder()
                .id("PlatformConfig:019542f5-b3e7-1d02-0000-000000000003")
                .createdAt(OffsetDateTime.parse("2023-06-15T12:30:45Z"))
                .addSupportedCurrency(
                    PlatformCurrencyConfig.builder()
                        .currencyCode("USD")
                        .maxAmount(1000000L)
                        .minAmount(100L)
                        .requiredCounterpartyFields(
                            listOf(
                                CounterpartyFieldDefinition.builder()
                                    .mandatory(true)
                                    .name(UserInfoFieldName.FULL_NAME)
                                    .build(),
                                CounterpartyFieldDefinition.builder()
                                    .mandatory(true)
                                    .name(UserInfoFieldName.DATE_OF_BIRTH)
                                    .build(),
                                CounterpartyFieldDefinition.builder()
                                    .mandatory(true)
                                    .name(UserInfoFieldName.NATIONALITY)
                                    .build(),
                            )
                        )
                        .addUmaProviderRequiredUserField(UserInfoFieldName.NATIONALITY)
                        .addUmaProviderRequiredUserField(UserInfoFieldName.DATE_OF_BIRTH)
                        .build()
                )
                .umaDomain("platform.uma.domain")
                .updatedAt(OffsetDateTime.parse("2023-06-15T12:30:45Z"))
                .webhookEndpoint("https://api.mycompany.com/webhooks/uma")
                .build()

        val roundtrippedPlatformConfig =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(platformConfig),
                jacksonTypeRef<PlatformConfig>(),
            )

        assertThat(roundtrippedPlatformConfig).isEqualTo(platformConfig)
    }
}
