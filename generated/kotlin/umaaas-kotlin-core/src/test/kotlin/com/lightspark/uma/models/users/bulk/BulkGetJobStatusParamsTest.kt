// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users.bulk

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class BulkGetJobStatusParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        BulkGetJobStatusParams.builder().jobId("jobId").build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun pathParams() {
        val params = BulkGetJobStatusParams.builder().jobId("jobId").build()

        assertThat(params._pathParam(0)).isEqualTo("jobId")
        // out-of-bound path param
        assertThat(params._pathParam(1)).isEqualTo("")
    }
}
