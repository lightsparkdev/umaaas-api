// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class UserCreateParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
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
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
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
                .build()

        val body = params._body()

        assertThat(body)
            .isEqualTo(
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
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun bodyWithoutOptionalFields() {
        val params =
            UserCreateParams.builder()
                .user(
                    User.builder()
                        .platformUserId("7b3c5a89d2f1e0")
                        .umaAddress("\$jane.doe@uma.domain.com")
                        .userType(User.UserType.INDIVIDUAL)
                        .build()
                )
                .build()

        val body = params._body()

        assertThat(body)
            .isEqualTo(
                User.builder()
                    .platformUserId("7b3c5a89d2f1e0")
                    .umaAddress("\$jane.doe@uma.domain.com")
                    .userType(User.UserType.INDIVIDUAL)
                    .build()
            )
    }
}
