// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.receiver

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class CounterpartyFieldDefinitionTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val counterpartyFieldDefinition =
            CounterpartyFieldDefinition.builder()
                .mandatory(true)
                .name(UserInfoFieldName.FULL_NAME)
                .build()

        assertThat(counterpartyFieldDefinition.mandatory()).isEqualTo(true)
        assertThat(counterpartyFieldDefinition.name()).isEqualTo(UserInfoFieldName.FULL_NAME)
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val counterpartyFieldDefinition =
            CounterpartyFieldDefinition.builder()
                .mandatory(true)
                .name(UserInfoFieldName.FULL_NAME)
                .build()

        val roundtrippedCounterpartyFieldDefinition =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(counterpartyFieldDefinition),
                jacksonTypeRef<CounterpartyFieldDefinition>(),
            )

        assertThat(roundtrippedCounterpartyFieldDefinition).isEqualTo(counterpartyFieldDefinition)
    }
}
