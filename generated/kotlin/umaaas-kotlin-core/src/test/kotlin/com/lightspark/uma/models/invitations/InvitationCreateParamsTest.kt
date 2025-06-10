// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.invitations

import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class InvitationCreateParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        InvitationCreateParams.builder()
            .inviterUma("\$inviter@uma.domain")
            .amountToSend(12550L)
            .expiresAt(OffsetDateTime.parse("2023-09-01T14:30:00Z"))
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            InvitationCreateParams.builder()
                .inviterUma("\$inviter@uma.domain")
                .amountToSend(12550L)
                .expiresAt(OffsetDateTime.parse("2023-09-01T14:30:00Z"))
                .build()

        val body = params._body()

        assertThat(body.inviterUma()).isEqualTo("\$inviter@uma.domain")
        assertThat(body.amountToSend()).isEqualTo(12550L)
        assertThat(body.expiresAt()).isEqualTo(OffsetDateTime.parse("2023-09-01T14:30:00Z"))
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun bodyWithoutOptionalFields() {
        val params = InvitationCreateParams.builder().inviterUma("\$inviter@uma.domain").build()

        val body = params._body()

        assertThat(body.inviterUma()).isEqualTo("\$inviter@uma.domain")
    }
}
