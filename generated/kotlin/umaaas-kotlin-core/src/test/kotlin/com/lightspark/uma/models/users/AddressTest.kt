// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class AddressTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val address =
            Address.builder()
                .country("US")
                .line1("123 Main Street")
                .postalCode("94105")
                .city("San Francisco")
                .line2("Apt 4B")
                .state("CA")
                .build()

        assertThat(address.country()).isEqualTo("US")
        assertThat(address.line1()).isEqualTo("123 Main Street")
        assertThat(address.postalCode()).isEqualTo("94105")
        assertThat(address.city()).isEqualTo("San Francisco")
        assertThat(address.line2()).isEqualTo("Apt 4B")
        assertThat(address.state()).isEqualTo("CA")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val address =
            Address.builder()
                .country("US")
                .line1("123 Main Street")
                .postalCode("94105")
                .city("San Francisco")
                .line2("Apt 4B")
                .state("CA")
                .build()

        val roundtrippedAddress =
            jsonMapper.readValue(jsonMapper.writeValueAsString(address), jacksonTypeRef<Address>())

        assertThat(roundtrippedAddress).isEqualTo(address)
    }
}
