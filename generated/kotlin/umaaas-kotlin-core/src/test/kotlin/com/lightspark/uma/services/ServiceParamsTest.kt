// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services

import com.github.tomakehurst.wiremock.client.WireMock.anyUrl
import com.github.tomakehurst.wiremock.client.WireMock.equalTo
import com.github.tomakehurst.wiremock.client.WireMock.ok
import com.github.tomakehurst.wiremock.client.WireMock.post
import com.github.tomakehurst.wiremock.client.WireMock.postRequestedFor
import com.github.tomakehurst.wiremock.client.WireMock.stubFor
import com.github.tomakehurst.wiremock.client.WireMock.verify
import com.github.tomakehurst.wiremock.junit5.WireMockRuntimeInfo
import com.github.tomakehurst.wiremock.junit5.WireMockTest
import com.lightspark.uma.client.UmaaasClient
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient
import com.lightspark.uma.models.users.User
import com.lightspark.uma.models.users.UserCreateParams
import java.time.OffsetDateTime
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.parallel.ResourceLock

@WireMockTest
@ResourceLock("https://github.com/wiremock/wiremock/issues/169")
internal class ServiceParamsTest {

    private lateinit var client: UmaaasClient

    @BeforeEach
    fun beforeEach(wmRuntimeInfo: WireMockRuntimeInfo) {
        client =
            UmaaasOkHttpClient.builder()
                .baseUrl(wmRuntimeInfo.httpBaseUrl)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val userService = client.users()
        stubFor(post(anyUrl()).willReturn(ok("{}")))

        userService.create(
            UserCreateParams.builder()
                .user(
                    User.builder()
                        .platformUserId("7b3c5a89d2f1e0")
                        .umaAddress("\$jane.doe@uma.domain.com")
                        .userType(User.UserType.INDIVIDUAL)
                        .id("User:019542f5-b3e7-1d02-0000-000000000001")
                        .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                        .isDeleted(false)
                        .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                        .build()
                )
                .putAdditionalHeader("Secret-Header", "42")
                .putAdditionalQueryParam("secret_query_param", "42")
                .build()
        )

        verify(
            postRequestedFor(anyUrl())
                .withHeader("Secret-Header", equalTo("42"))
                .withQueryParam("secret_query_param", equalTo("42"))
        )
    }
}
