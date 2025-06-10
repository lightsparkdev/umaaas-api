// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class UserListPageResponseTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val userListPageResponse =
            UserListPageResponse.builder()
                .addData(
                    User.builder()
                        .platformUserId("9f84e0c2a72c4fa")
                        .umaAddress("\$john.doe@uma.domain.com")
                        .userType(User.UserType.INDIVIDUAL)
                        .id("User:019542f5-b3e7-1d02-0000-000000000001")
                        .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                        .isDeleted(false)
                        .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                        .build()
                )
                .hasMore(true)
                .nextCursor("nextCursor")
                .totalCount(0L)
                .build()

        assertThat(userListPageResponse.data())
            .containsExactly(
                User.builder()
                    .platformUserId("9f84e0c2a72c4fa")
                    .umaAddress("\$john.doe@uma.domain.com")
                    .userType(User.UserType.INDIVIDUAL)
                    .id("User:019542f5-b3e7-1d02-0000-000000000001")
                    .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                    .isDeleted(false)
                    .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                    .build()
            )
        assertThat(userListPageResponse.hasMore()).isEqualTo(true)
        assertThat(userListPageResponse.nextCursor()).isEqualTo("nextCursor")
        assertThat(userListPageResponse.totalCount()).isEqualTo(0L)
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val userListPageResponse =
            UserListPageResponse.builder()
                .addData(
                    User.builder()
                        .platformUserId("9f84e0c2a72c4fa")
                        .umaAddress("\$john.doe@uma.domain.com")
                        .userType(User.UserType.INDIVIDUAL)
                        .id("User:019542f5-b3e7-1d02-0000-000000000001")
                        .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                        .isDeleted(false)
                        .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                        .build()
                )
                .hasMore(true)
                .nextCursor("nextCursor")
                .totalCount(0L)
                .build()

        val roundtrippedUserListPageResponse =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(userListPageResponse),
                jacksonTypeRef<UserListPageResponse>(),
            )

        assertThat(roundtrippedUserListPageResponse).isEqualTo(userListPageResponse)
    }
}
