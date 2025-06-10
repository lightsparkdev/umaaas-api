// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class UserTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val user =
            User.builder()
                .platformUserId("9f84e0c2a72c4fa")
                .umaAddress("\$john.doe@uma.domain.com")
                .userType(User.UserType.INDIVIDUAL)
                .id("User:019542f5-b3e7-1d02-0000-000000000001")
                .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .isDeleted(false)
                .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .build()

        assertThat(user.platformUserId()).isEqualTo("9f84e0c2a72c4fa")
        assertThat(user.umaAddress()).isEqualTo("\$john.doe@uma.domain.com")
        assertThat(user.userType()).isEqualTo(User.UserType.INDIVIDUAL)
        assertThat(user.id()).isEqualTo("User:019542f5-b3e7-1d02-0000-000000000001")
        assertThat(user.createdAt()).isEqualTo(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
        assertThat(user.isDeleted()).isEqualTo(false)
        assertThat(user.updatedAt()).isEqualTo(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val user =
            User.builder()
                .platformUserId("9f84e0c2a72c4fa")
                .umaAddress("\$john.doe@uma.domain.com")
                .userType(User.UserType.INDIVIDUAL)
                .id("User:019542f5-b3e7-1d02-0000-000000000001")
                .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .isDeleted(false)
                .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .build()

        val roundtrippedUser =
            jsonMapper.readValue(jsonMapper.writeValueAsString(user), jacksonTypeRef<User>())

        assertThat(roundtrippedUser).isEqualTo(user)
    }
}
