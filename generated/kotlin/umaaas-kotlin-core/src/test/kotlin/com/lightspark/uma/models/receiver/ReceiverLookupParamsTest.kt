// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.receiver

import com.lightspark.uma.core.http.QueryParams
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class ReceiverLookupParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        ReceiverLookupParams.builder()
            .receiverUmaAddress("receiverUmaAddress")
            .senderUmaAddress("senderUmaAddress")
            .userId("userId")
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun pathParams() {
        val params = ReceiverLookupParams.builder().receiverUmaAddress("receiverUmaAddress").build()

        assertThat(params._pathParam(0)).isEqualTo("receiverUmaAddress")
        // out-of-bound path param
        assertThat(params._pathParam(1)).isEqualTo("")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun queryParams() {
        val params =
            ReceiverLookupParams.builder()
                .receiverUmaAddress("receiverUmaAddress")
                .senderUmaAddress("senderUmaAddress")
                .userId("userId")
                .build()

        val queryParams = params._queryParams()

        assertThat(queryParams)
            .isEqualTo(
                QueryParams.builder()
                    .put("senderUmaAddress", "senderUmaAddress")
                    .put("userId", "userId")
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun queryParamsWithoutOptionalFields() {
        val params = ReceiverLookupParams.builder().receiverUmaAddress("receiverUmaAddress").build()

        val queryParams = params._queryParams()

        assertThat(queryParams).isEqualTo(QueryParams.builder().build())
    }
}
