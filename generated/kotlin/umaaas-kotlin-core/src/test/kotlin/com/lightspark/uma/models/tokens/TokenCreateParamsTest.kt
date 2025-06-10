// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.tokens

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class TokenCreateParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        TokenCreateParams.builder().name("Sandbox read-only").addPermission(Permission.VIEW).build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            TokenCreateParams.builder()
                .name("Sandbox read-only")
                .addPermission(Permission.VIEW)
                .build()

        val body = params._body()

        assertThat(body.name()).isEqualTo("Sandbox read-only")
        assertThat(body.permissions()).containsExactly(Permission.VIEW)
    }
}
