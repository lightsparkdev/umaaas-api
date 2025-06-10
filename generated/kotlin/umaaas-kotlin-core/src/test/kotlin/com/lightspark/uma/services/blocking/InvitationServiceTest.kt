// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient
import com.lightspark.uma.models.invitations.InvitationClaimParams
import com.lightspark.uma.models.invitations.InvitationCreateParams
import java.time.OffsetDateTime
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class InvitationServiceTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationService = client.invitations()

        val umaInvitation =
            invitationService.create(
                InvitationCreateParams.builder()
                    .inviterUma("\$inviter@uma.domain")
                    .amountToSend(12550L)
                    .expiresAt(OffsetDateTime.parse("2023-09-01T14:30:00Z"))
                    .build()
            )

        umaInvitation.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun retrieve() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationService = client.invitations()

        val umaInvitation = invitationService.retrieve("invitationCode")

        umaInvitation.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun cancel() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationService = client.invitations()

        val umaInvitation = invitationService.cancel("invitationCode")

        umaInvitation.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun claim() {
        val client =
            UmaaasOkHttpClient.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationService = client.invitations()

        val umaInvitation =
            invitationService.claim(
                InvitationClaimParams.builder()
                    .invitationCode("invitationCode")
                    .inviteeUma("\$invitee@uma.domain")
                    .build()
            )

        umaInvitation.validate()
    }
}
