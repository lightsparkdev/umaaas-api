// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClientAsync
import com.lightspark.uma.models.config.ConfigUpdateParams
import com.lightspark.uma.models.config.PlatformCurrencyConfig
import com.lightspark.uma.models.receiver.CounterpartyFieldDefinition
import com.lightspark.uma.models.receiver.UserInfoFieldName
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class ConfigServiceAsyncTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun retrieve() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val configServiceAsync = client.config()

        val platformConfig = configServiceAsync.retrieve()

        platformConfig.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun update() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val configServiceAsync = client.config()

        val platformConfig =
            configServiceAsync.update(
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
            )

        platformConfig.validate()
    }
}
