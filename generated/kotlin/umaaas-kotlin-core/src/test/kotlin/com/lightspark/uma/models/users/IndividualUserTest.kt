// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import java.time.LocalDate
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class IndividualUserTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val individualUser =
            IndividualUser.builder()
                .platformUserId("9f84e0c2a72c4fa")
                .umaAddress("\$john.doe@uma.domain.com")
                .userType(User.UserType.INDIVIDUAL)
                .id("User:019542f5-b3e7-1d02-0000-000000000001")
                .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .isDeleted(false)
                .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .bankAccountInfo(
                    UserBankAccountInfo.builder()
                        .accountType(BankAccountType.CLABE)
                        .platformAccountId("acc_123456789")
                        .build()
                )
                .address(
                    Address.builder()
                        .country("US")
                        .line1("123 Main Street")
                        .postalCode("94105")
                        .city("San Francisco")
                        .line2("Apt 4B")
                        .state("CA")
                        .build()
                )
                .dateOfBirth(LocalDate.parse("1990-01-15"))
                .fullName("John Michael Doe")
                .nationality("US")
                .build()

        assertThat(individualUser.platformUserId()).isEqualTo("9f84e0c2a72c4fa")
        assertThat(individualUser.umaAddress()).isEqualTo("\$john.doe@uma.domain.com")
        assertThat(individualUser.userType()).isEqualTo(User.UserType.INDIVIDUAL)
        assertThat(individualUser.id()).isEqualTo("User:019542f5-b3e7-1d02-0000-000000000001")
        assertThat(individualUser.createdAt())
            .isEqualTo(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
        assertThat(individualUser.isDeleted()).isEqualTo(false)
        assertThat(individualUser.updatedAt())
            .isEqualTo(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
        assertThat(individualUser.bankAccountInfo())
            .isEqualTo(
                UserBankAccountInfo.builder()
                    .accountType(BankAccountType.CLABE)
                    .platformAccountId("acc_123456789")
                    .build()
            )
        assertThat(individualUser.address())
            .isEqualTo(
                Address.builder()
                    .country("US")
                    .line1("123 Main Street")
                    .postalCode("94105")
                    .city("San Francisco")
                    .line2("Apt 4B")
                    .state("CA")
                    .build()
            )
        assertThat(individualUser.dateOfBirth()).isEqualTo(LocalDate.parse("1990-01-15"))
        assertThat(individualUser.fullName()).isEqualTo("John Michael Doe")
        assertThat(individualUser.nationality()).isEqualTo("US")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val individualUser =
            IndividualUser.builder()
                .platformUserId("9f84e0c2a72c4fa")
                .umaAddress("\$john.doe@uma.domain.com")
                .userType(User.UserType.INDIVIDUAL)
                .id("User:019542f5-b3e7-1d02-0000-000000000001")
                .createdAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .isDeleted(false)
                .updatedAt(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
                .bankAccountInfo(
                    UserBankAccountInfo.builder()
                        .accountType(BankAccountType.CLABE)
                        .platformAccountId("acc_123456789")
                        .build()
                )
                .address(
                    Address.builder()
                        .country("US")
                        .line1("123 Main Street")
                        .postalCode("94105")
                        .city("San Francisco")
                        .line2("Apt 4B")
                        .state("CA")
                        .build()
                )
                .dateOfBirth(LocalDate.parse("1990-01-15"))
                .fullName("John Michael Doe")
                .nationality("US")
                .build()

        val roundtrippedIndividualUser =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(individualUser),
                jacksonTypeRef<IndividualUser>(),
            )

        assertThat(roundtrippedIndividualUser).isEqualTo(individualUser)
    }
}
