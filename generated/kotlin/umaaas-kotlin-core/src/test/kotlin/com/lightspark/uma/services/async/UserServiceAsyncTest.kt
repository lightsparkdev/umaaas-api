// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.lightspark.uma.TestServerExtension
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClientAsync
import com.lightspark.uma.models.users.Address
import com.lightspark.uma.models.users.BankAccountType
import com.lightspark.uma.models.users.User
import com.lightspark.uma.models.users.UserBankAccountInfo
import com.lightspark.uma.models.users.UserCreateParams
import com.lightspark.uma.models.users.UserUpdateParams
import java.time.LocalDate
import java.time.OffsetDateTime
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(TestServerExtension::class)
internal class UserServiceAsyncTest {

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
        val userServiceAsync = client.users()

        val user =
            userServiceAsync.create(
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
            )

        user.validate()
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
        val userServiceAsync = client.users()

        val user = userServiceAsync.retrieve("userId")

        user.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun update() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val userServiceAsync = client.users()

        val user =
            userServiceAsync.update(
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
            )

        user.validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun list() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val userServiceAsync = client.users()

        val page = userServiceAsync.list()

        page.response().validate()
    }

    @Disabled("skipped: tests are disabled for the time being")
    @Test
    suspend fun delete() {
        val client =
            UmaaasOkHttpClientAsync.builder()
                .baseUrl(TestServerExtension.BASE_URL)
                .username("My Username")
                .password("My Password")
                .webhookSignature("My Webhook Signature")
                .build()
        val userServiceAsync = client.users()

        val user = userServiceAsync.delete("userId")

        user.validate()
    }
}
