package com.lightspark.uma.umaaas

import com.lightspark.uma.models.users.UserListParams
import com.lightspark.uma.models.users.UserCreateParams
import com.lightspark.uma.models.users.User
import com.lightspark.uma.umaaas.lib.UmaaasClient
import io.ktor.http.*
import io.ktor.serialization.gson.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sse.*
import io.ktor.sse.*

fun Application.configureRouting() {
    install(SSE)
    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        
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
                    
                    println("UaaS Client Response [users.list]: $users")
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
                    val userJson = call.receive<User>()
                    println("Request body: $userJson")
                    
                    val userCreateParams = UserCreateParams.builder()
                        .user(userJson)
                        .build()
                    
                    val user = UmaaasClient.client.users().create(userCreateParams)
                    println("UaaS Client Response [users.create]: $user")
                    
                    call.respond(HttpStatusCode.Created, user)
                } catch (e: Exception) {
                    println("Error creating user: ${e.message}")
                    call.respond(
                        HttpStatusCode.BadRequest,
                        mapOf("error" to (e.message ?: "An unexpected error occurred"))
                    )
                }
            }
        }
        
        // Static plugin. Try to access `/static/index.html`
        staticResources("/static", "static")
        sse("/hello") {
            send(ServerSentEvent("world"))
        }
    }
}
