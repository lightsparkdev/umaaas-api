// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClientAsync
import com.lightspark.uma.models.invitations.InvitationClaimParams
import com.lightspark.uma.models.invitations.InvitationCreateParams
import java.time.OffsetDateTime
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class InvitationServiceAsyncTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun create() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationServiceAsync = client.invitations()

        val umaInvitation =
            invitationServiceAsync.create(
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
    suspend fun retrieve() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationServiceAsync = client.invitations()

        val umaInvitation = invitationServiceAsync.retrieve("invitationCode")

        umaInvitation.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun cancel() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationServiceAsync = client.invitations()

        val umaInvitation = invitationServiceAsync.cancel("invitationCode")

        umaInvitation.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun claim() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val invitationServiceAsync = client.invitations()

        val umaInvitation =
            invitationServiceAsync.claim(
                InvitationClaimParams.builder()
                    .invitationCode("invitationCode")
                    .inviteeUma("\$invitee@uma.domain")
                    .build()
            )

        umaInvitation.validate()
    }
}
