// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.invitations

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class InvitationClaimParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        InvitationClaimParams.builder()
            .invitationCode("invitationCode")
            .inviteeUma("\$invitee@uma.domain")
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun pathParams() {
        val params =
            InvitationClaimParams.builder()
                .invitationCode("invitationCode")
                .inviteeUma("\$invitee@uma.domain")
                .build()

        assertThat(params._pathParam(0)).isEqualTo("invitationCode")
        // out-of-bound path param
        assertThat(params._pathParam(1)).isEqualTo("")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            InvitationClaimParams.builder()
                .invitationCode("invitationCode")
                .inviteeUma("\$invitee@uma.domain")
                .build()

        val body = params._body()

        assertThat(body.inviteeUma()).isEqualTo("\$invitee@uma.domain")
    }
}
