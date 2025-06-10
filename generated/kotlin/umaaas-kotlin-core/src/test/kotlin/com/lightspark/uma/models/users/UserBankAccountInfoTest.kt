// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.jsonMapper
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class UserBankAccountInfoTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        val userBankAccountInfo =
            UserBankAccountInfo.builder()
                .accountType(BankAccountType.CLABE)
                .platformAccountId("acc_123456789")
                .build()

        assertThat(userBankAccountInfo.accountType()).isEqualTo(BankAccountType.CLABE)
        assertThat(userBankAccountInfo.platformAccountId()).isEqualTo("acc_123456789")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun roundtrip() {
        val jsonMapper = jsonMapper()
        val userBankAccountInfo =
            UserBankAccountInfo.builder()
                .accountType(BankAccountType.CLABE)
                .platformAccountId("acc_123456789")
                .build()

        val roundtrippedUserBankAccountInfo =
            jsonMapper.readValue(
                jsonMapper.writeValueAsString(userBankAccountInfo),
                jacksonTypeRef<UserBankAccountInfo>(),
            )

        assertThat(roundtrippedUserBankAccountInfo).isEqualTo(userBankAccountInfo)
    }
}
