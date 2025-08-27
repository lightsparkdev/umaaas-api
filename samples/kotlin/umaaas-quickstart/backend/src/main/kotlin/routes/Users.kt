package com.lightspark.uma.umaaas.routes

import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.UmaaasClientBuilder
import com.lightspark.umaaas.core.jsonMapper
import com.lightspark.umaaas.models.users.BankAccountType
import com.lightspark.umaaas.models.users.IndividualUser
import com.lightspark.umaaas.models.users.UsAccountInfo
import com.lightspark.umaaas.models.users.UserBankAccountInfo
import com.lightspark.umaaas.models.users.UserCreateParams
import com.lightspark.umaaas.models.users.UserListParams
import com.lightspark.umaaas.models.users.UserType
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receiveText
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route

fun Route.userRoutes() {
    route("/api/user") {
        get {
            try {
                val queryParams = call.request.queryParameters
                println("User list query params: $queryParams")
                
                val userListParams = UserListParams.builder().apply {
                    queryParams["cursor"]?.let { cursor(it) }
                    queryParams["limit"]?.toIntOrNull()?.let { limit(it.toLong()) }
                    queryParams["userType"]?.let { userType(UserType.of(it)) }
                    queryParams["platformUserId"]?.let { platformUserId(it) }
                    queryParams["umaAddress"]?.let { umaAddress(it) }
                }.build()

                val users = UmaaasClientBuilder.client.users().list(userListParams)
                val usersJson = JsonUtils.prettyPrint(users.data())
                println("Umaaas Client Response [users.list]: $usersJson")
                call.respond(HttpStatusCode.OK, usersJson)
            } catch (e: Exception) {
                println("Error listing users: ${e.message}")
                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }

        post {
            try {
                val rawBody = call.receiveText()
                println("Create User request: ${JsonUtils.prettyPrint(rawBody)}")

                val objectMapper = jsonMapper()
                val jsonNode = objectMapper.readTree(rawBody)

                // The following is an example of how you would populate create user params
                // replacing the object sent from the FE with your own values
                val individualUserBuilder = IndividualUser.builder()
                    .umaAddress(jsonNode.get("umaAddress").asText())
                    .platformUserId(jsonNode.get("platformUserId").asText())
                    .userType(UserType.INDIVIDUAL)
                jsonNode.get("fullName")?.asText()?.let { individualUserBuilder.fullName(it) }
                jsonNode.get("birthDate")?.asText()?.let { 
                    individualUserBuilder.birthDate(java.time.LocalDate.parse(it))
                }
                jsonNode.get("nationality")?.asText()?.let { individualUserBuilder.nationality(it) }
                jsonNode.get("bankAccountInfo")?.let { bankInfo ->
                    val bankAccountInfoBuilder = UserBankAccountInfo.UserUsAccountInfo.builder()
                    bankAccountInfoBuilder.accountType(BankAccountType.US_ACCOUNT)
                    bankAccountInfoBuilder.accountCategory(UsAccountInfo.AccountCategory.CHECKING)
                    bankInfo.get("platformAccountId")?.asText()?.let { bankAccountInfoBuilder.platformAccountId(it) }
                    bankInfo.get("accountNumber")?.asText()?.let { bankAccountInfoBuilder.accountNumber(it) }
                    bankInfo.get("routingNumber")?.asText()?.let { bankAccountInfoBuilder.routingNumber(it) }
                    bankInfo.get("bankName")?.asText()?.let { bankAccountInfoBuilder.bankName(it) }
                    bankInfo.get("accountHolderName")?.asText()?.let { bankAccountInfoBuilder.accountHolderName(it) }
                    individualUserBuilder.bankAccountInfo(bankAccountInfoBuilder.build())
                }
                jsonNode.get("address")?.let { addressNode ->
                    val addressBuilder = com.lightspark.umaaas.models.users.Address.builder()
                    addressNode.get("line1")?.asText()?.let { addressBuilder.line1(it) }
                    addressNode.get("line2")?.asText()?.let { addressBuilder.line2(it) }
                    addressNode.get("city")?.asText()?.let { addressBuilder.city(it) }
                    addressNode.get("state")?.asText()?.let { addressBuilder.state(it) }
                    addressNode.get("postalCode")?.asText()?.let { addressBuilder.postalCode(it) }
                    addressNode.get("country")?.asText()?.let { addressBuilder.country(it) }
                    individualUserBuilder.address(addressBuilder.build())
                }

                val userCreateParams = UserCreateParams.builder()
                    .body(individualUserBuilder.build())
                    .build()

                val user = UmaaasClientBuilder.client.users().create(userCreateParams)
                val jsonUser = JsonUtils.prettyPrint(user)
                println("Umaaas Client Response [users.create]: \n$jsonUser")

                call.respond(HttpStatusCode.Created, jsonUser)
            } catch (e: Exception) {
                println("Error creating user: ${e.message}")
                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }
    }
}
