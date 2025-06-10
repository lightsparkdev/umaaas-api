// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import java.time.OffsetDateTime
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class BusinessUserTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val businessUser =
            BusinessUser.builder()
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
                .businessInfo(
                    BusinessUser.BusinessInfo.builder()
                        .legalName("Acme Corporation, Inc.")
                        .registrationNumber("BRN-123456789")
                        .taxId("EIN-987654321")
                        .build()
                )
                .build()

        assertThat(businessUser.platformUserId()).isEqualTo("9f84e0c2a72c4fa")
        assertThat(businessUser.umaAddress()).isEqualTo("\$john.doe@uma.domain.com")
        assertThat(businessUser.userType()).isEqualTo(User.UserType.INDIVIDUAL)
        assertThat(businessUser.id()).isEqualTo("User:019542f5-b3e7-1d02-0000-000000000001")
        assertThat(businessUser.createdAt()).isEqualTo(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
        assertThat(businessUser.isDeleted()).isEqualTo(false)
        assertThat(businessUser.updatedAt()).isEqualTo(OffsetDateTime.parse("2023-07-21T17:32:28Z"))
        assertThat(businessUser.bankAccountInfo())
            .isEqualTo(
                UserBankAccountInfo.builder()
                    .accountType(BankAccountType.CLABE)
                    .platformAccountId("acc_123456789")
                    .build()
            )
        assertThat(businessUser.address())
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
        assertThat(businessUser.businessInfo())
            .isEqualTo(
                BusinessUser.BusinessInfo.builder()
                    .legalName("Acme Corporation, Inc.")
                    .registrationNumber("BRN-123456789")
                    .taxId("EIN-987654321")
                    .build()
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val businessUser =
            BusinessUser.builder()
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
                .businessInfo(
                    BusinessUser.BusinessInfo.builder()
                        .legalName("Acme Corporation, Inc.")
                        .registrationNumber("BRN-123456789")
                        .taxId("EIN-987654321")
                        .build()
                )
                .build()

        val roundtrippedBusinessUser =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(businessUser),
                jacksonTypeRef<BusinessUser>(),
            )

        assertThat(roundtrippedBusinessUser).isEqualTo(businessUser)
    }
}
