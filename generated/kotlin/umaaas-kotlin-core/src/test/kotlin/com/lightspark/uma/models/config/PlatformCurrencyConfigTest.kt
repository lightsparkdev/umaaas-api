// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.config

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import com.lightspark.uma.models.receiver.CounterpartyFieldDefinition
import com.lightspark.uma.models.receiver.UserInfoFieldName
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class PlatformCurrencyConfigTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val platformCurrencyConfig =
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

        assertThat(platformCurrencyConfig.currencyCode()).isEqualTo("USD")
        assertThat(platformCurrencyConfig.maxAmount()).isEqualTo(1000000L)
        assertThat(platformCurrencyConfig.minAmount()).isEqualTo(100L)
        assertThat(platformCurrencyConfig.requiredCounterpartyFields())
            .containsExactly(
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
        assertThat(platformCurrencyConfig.umaProviderRequiredUserFields())
            .containsExactly(UserInfoFieldName.NATIONALITY, UserInfoFieldName.DATE_OF_BIRTH)
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val platformCurrencyConfig =
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

        val roundtrippedPlatformCurrencyConfig =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(platformCurrencyConfig),
                jacksonTypeRef<PlatformCurrencyConfig>(),
            )

        assertThat(roundtrippedPlatformCurrencyConfig).isEqualTo(platformCurrencyConfig)
    }
}
