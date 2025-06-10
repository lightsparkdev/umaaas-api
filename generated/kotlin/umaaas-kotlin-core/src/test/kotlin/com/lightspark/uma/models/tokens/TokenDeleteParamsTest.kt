// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.tokens

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class TokenDeleteParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        TokenDeleteParams.builder().tokenId("tokenId").build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun pathParams() {
        val params = TokenDeleteParams.builder().tokenId("tokenId").build()

        assertThat(params._pathParam(0)).isEqualTo("tokenId")
        // out-of-bound path param
        assertThat(params._pathParam(1)).isEqualTo("")
    }
}
