// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.config

import com.lightspark.uma.models.receiver.CounterpartyFieldDefinition
import com.lightspark.uma.models.receiver.UserInfoFieldName
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class ConfigUpdateParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        ConfigUpdateParams.builder()
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
                                .name(UserInfoFieldName.NATIONALITY)
                                .build(),
                            CounterpartyFieldDefinition.builder()
                                .mandatory(true)
                                .name(UserInfoFieldName.DATE_OF_BIRTH)
                                .build(),
                        )
                    )
                    .addUmaProviderRequiredUserField(UserInfoFieldName.NATIONALITY)
                    .addUmaProviderRequiredUserField(UserInfoFieldName.DATE_OF_BIRTH)
                    .build()
            )
            .umaDomain("mycompany.com")
            .webhookEndpoint("https://api.mycompany.com/webhooks/uma")
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            ConfigUpdateParams.builder()
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
                                    .name(UserInfoFieldName.NATIONALITY)
                                    .build(),
                                CounterpartyFieldDefinition.builder()
                                    .mandatory(true)
                                    .name(UserInfoFieldName.DATE_OF_BIRTH)
                                    .build(),
                            )
                        )
                        .addUmaProviderRequiredUserField(UserInfoFieldName.NATIONALITY)
                        .addUmaProviderRequiredUserField(UserInfoFieldName.DATE_OF_BIRTH)
                        .build()
                )
                .umaDomain("mycompany.com")
                .webhookEndpoint("https://api.mycompany.com/webhooks/uma")
                .build()

        val body = params._body()

        assertThat(body.supportedCurrencies())
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
                                .name(UserInfoFieldName.NATIONALITY)
                                .build(),
                            CounterpartyFieldDefinition.builder()
                                .mandatory(true)
                                .name(UserInfoFieldName.DATE_OF_BIRTH)
                                .build(),
                        )
                    )
                    .addUmaProviderRequiredUserField(UserInfoFieldName.NATIONALITY)
                    .addUmaProviderRequiredUserField(UserInfoFieldName.DATE_OF_BIRTH)
                    .build()
            )
        assertThat(body.umaDomain()).isEqualTo("mycompany.com")
        assertThat(body.webhookEndpoint()).isEqualTo("https://api.mycompany.com/webhooks/uma")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun bodyWithoutOptionalFields() {
        val params = ConfigUpdateParams.builder().build()

        val body = params._body()
    }
}
