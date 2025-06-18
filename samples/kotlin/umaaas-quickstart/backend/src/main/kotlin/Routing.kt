package com.lightspark.uma.umaaas

import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.lightspark.uma.models.users.UserListParams
import com.lightspark.uma.models.users.UserCreateParams
import com.lightspark.uma.models.users.User
import com.lightspark.uma.umaaas.lib.UmaaasClient
import com.lightspark.uma.umaaas.lib.JsonUtils
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sse.*
import io.ktor.sse.*

fun Application.configureRouting() {
    install(SSE)
    routing {
        route("/api/user") {
            get {
                try {
                    val limit = call.request.queryParameters["limit"]?.toIntOrNull()
                    val cursor = call.request.queryParameters["cursor"]
                    val userType = call.request.queryParameters["userType"] ?: "INDIVIDUAL"
                    val platformUserId = call.request.queryParameters["platformUserId"]
                    val umaAddress = call.request.queryParameters["umaAddress"]
                    
                    val users = UmaaasClient.client.users().list(
                        UserListParams.builder()
                            .apply {
                                limit?.let { limit(it.toLong()) }
                                cursor?.let { cursor(it) }
                                userType?.let { userType(UserListParams.UserType.of(it)) }
                                platformUserId?.let { platformUserId(it) }
                                umaAddress?.let { umaAddress(it) }
                            }
                            .build()
                    )
                    
                    println("Umaaas Client Response [users.list]: $users")
                    call.respond(HttpStatusCode.OK, users)
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
                    println("Raw request body:\n${JsonUtils.prettyPrint(rawBody)}")

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
        
        // Serve static frontend files
        staticResources("/", "static") {
            // Serve index.html for all non-API routes (SPA routing)
            default("index.html")
        }
        sse("/hello") {
            send(ServerSentEvent("world"))
        }
    }
}
