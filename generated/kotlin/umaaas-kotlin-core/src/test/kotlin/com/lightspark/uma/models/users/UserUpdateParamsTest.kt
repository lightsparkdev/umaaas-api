// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import java.time.LocalDate
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test

internal class UserUpdateParamsTest {

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun create() {
        UserUpdateParams.builder()
            .userId("userId")
            .body(
                UserUpdateParams.Body.IndividualUpdate.builder()
                    .address(
                        Address.builder()
                            .country("US")
                            .line1("456 Market St")
                            .postalCode("94103")
                            .city("San Francisco")
                            .line2("Apt 4B")
                            .state("CA")
                            .build()
                    )
                    .bankAccountInfo(
                        UserBankAccountInfo.builder()
                            .accountType(BankAccountType.US_ACCOUNT)
                            .platformAccountId("wf_checking_9012")
                            .build()
                    )
                    .dateOfBirth(LocalDate.parse("1985-06-15"))
                    .fullName("John Smith")
                    .nationality("nationality")
                    .umaAddress("umaAddress")
                    .build()
            )
            .build()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun pathParams() {
        val params =
            UserUpdateParams.builder()
                .userId("userId")
                .body(UserUpdateParams.Body.IndividualUpdate.builder().build())
                .build()

        assertThat(params._pathParam(0)).isEqualTo("userId")
        // out-of-bound path param
        assertThat(params._pathParam(1)).isEqualTo("")
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun body() {
        val params =
            UserUpdateParams.builder()
                .userId("userId")
                .body(
                    UserUpdateParams.Body.IndividualUpdate.builder()
                        .address(
                            Address.builder()
                                .country("US")
                                .line1("456 Market St")
                                .postalCode("94103")
                                .city("San Francisco")
                                .line2("Apt 4B")
                                .state("CA")
                                .build()
                        )
                        .bankAccountInfo(
                            UserBankAccountInfo.builder()
                                .accountType(BankAccountType.US_ACCOUNT)
                                .platformAccountId("wf_checking_9012")
                                .build()
                        )
                        .dateOfBirth(LocalDate.parse("1985-06-15"))
                        .fullName("John Smith")
                        .nationality("nationality")
                        .umaAddress("umaAddress")
                        .build()
                )
                .build()

        val body = params._body()

        assertThat(body)
            .isEqualTo(
                UserUpdateParams.Body.ofIndividualUpdate(
                    UserUpdateParams.Body.IndividualUpdate.builder()
                        .address(
                            Address.builder()
                                .country("US")
                                .line1("456 Market St")
                                .postalCode("94103")
                                .city("San Francisco")
                                .line2("Apt 4B")
                                .state("CA")
                                .build()
                        )
                        .bankAccountInfo(
                            UserBankAccountInfo.builder()
                                .accountType(BankAccountType.US_ACCOUNT)
                                .platformAccountId("wf_checking_9012")
                                .build()
                        )
                        .dateOfBirth(LocalDate.parse("1985-06-15"))
                        .fullName("John Smith")
                        .nationality("nationality")
                        .umaAddress("umaAddress")
                        .build()
                )
            )
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    fun bodyWithoutOptionalFields() {
        val params =
            UserUpdateParams.builder()
                .userId("userId")
                .body(UserUpdateParams.Body.IndividualUpdate.builder().build())
                .build()

        val body = params._body()

        assertThat(body)
            .isEqualTo(
                UserUpdateParams.Body.ofIndividualUpdate(
                    UserUpdateParams.Body.IndividualUpdate.builder().build()
                )
            )
    }
}
