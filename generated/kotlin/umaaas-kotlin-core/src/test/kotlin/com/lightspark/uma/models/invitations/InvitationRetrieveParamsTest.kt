// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.invitations

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class InvitationRetrieveParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        InvitationRetrieveParams.builder().invitationCode("invitationCode").build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun pathParams() {
        val params = InvitationRetrieveParams.builder().invitationCode("invitationCode").build()

        assertThat(params._pathParam(0)).isEqualTo("invitationCode")
        // out-of-bound path param
        assertThat(params._pathParam(1)).isEqualTo("")
    }
}
