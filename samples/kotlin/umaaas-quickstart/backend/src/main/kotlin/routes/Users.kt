package com.lightspark.uma.umaaas.routes

import com.lightspark.uma.models.users.User
import com.lightspark.uma.models.users.UserCreateParams
import com.lightspark.uma.models.users.UserListParams
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.UmaaasClient
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
                
                // Build query parameters from request
                val userListParams = UserListParams.builder().apply {
                    queryParams["cursor"]?.let { cursor(it) }
                    queryParams["limit"]?.toIntOrNull()?.let { limit(it.toLong()) }
                    queryParams["userType"]?.let { userType(UserListParams.UserType.of(it)) }
                    queryParams["platformUserId"]?.let { platformUserId(it) }
                    queryParams["umaAddress"]?.let { umaAddress(it) }
                }.build()

                val users = UmaaasClient.client.users().list(userListParams)
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

                // Pretty print the JSON
                println("Create User request:\n${JsonUtils.prettyPrint(rawBody)}")

                // Parse JSON manually using Jackson
                val objectMapper = com.fasterxml.jackson.databind.ObjectMapper()
                val userJson = objectMapper.readValue(rawBody, User::class.java)

                val userCreateParams = UserCreateParams.builder()
                    .user(userJson)
                    .build()

                val user = UmaaasClient.client.users().create(userCreateParams)
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
