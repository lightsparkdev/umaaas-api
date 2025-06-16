package com.lightspark.uma.umaaas

import com.lightspark.uma.models.users.UserListParams
import com.lightspark.uma.models.users.UserCreateParams
import com.lightspark.uma.models.users.User
import com.lightspark.uma.umaaas.lib.UmaaasClient
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.routes.lookupUmaRoute

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sse.*
import io.ktor.sse.*

import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO
import io.ktor.client.request.*
import io.ktor.client.statement.bodyAsText

fun Application.configureRouting() {
    install(SSE)
    
    // HTTP client for proxying requests
    val httpClient = HttpClient(CIO)
    
    routing {
        // URL rewrites - equivalent to Next.js rewrites
        configureUmaRewrites(httpClient)
        
        lookupUmaRoute()
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
        
        sse("/hello") {
            send(ServerSentEvent("world"))
        }

        // Serve static frontend files - MUST come last to avoid catching API routes
        staticResources("/", "static") {
//            // Serve index.html for all non-API routes (SPA routing)
//            default("index.html")
        }
    }
}

fun Route.configureUmaRewrites(httpClient: HttpClient) {
    val forwardDomain = System.getenv("UMAAAS_FORWARD_DOMAIN")
    println("🔧 UMAAAS_FORWARD_DOMAIN: $forwardDomain")

    if (forwardDomain != null) {
        // Rewrite /.well-known/lnurlp/:path* to external domain
        get("/.well-known/lnurlp/{path...}") {
            val path = call.parameters.getAll("path")?.joinToString("/") ?: ""
            val targetUrl = "$forwardDomain/.well-known/lnurlp/$path"
            println("🔄 Rewriting: ${call.request.uri} → $targetUrl")

            try {
                val response = httpClient.get(targetUrl) {
                    // Forward query parameters
                    call.request.queryParameters.forEach { key, values ->
                        values.forEach { value ->
                            parameter(key, value)
                        }
                    }
                    // Forward headers (excluding host)
                    call.request.headers.forEach { key, values ->
                        if (key.lowercase() !in listOf("host", "authorization")) {
                            values.forEach { value ->
                                header(key, value)
                            }
                        }
                    }
                }

                // Forward response
                call.respond(response.status, response.bodyAsText())
            } catch (e: Exception) {
                println("❌ Proxy error: ${e.message}")
                call.respond(HttpStatusCode.BadGateway, mapOf("error" to "Proxy error"))
            }
        }

        // Rewrite /.well-known/lnurlpubkey to external domain
        get("/.well-known/lnurlpubkey") {
            val targetUrl = "$forwardDomain/.well-known/lnurlpubkey"
            println("🔄 Rewriting: ${call.request.uri} → $targetUrl")

            try {
                val response = httpClient.get(targetUrl) {
                    call.request.queryParameters.forEach { key, values ->
                        values.forEach { value ->
                            parameter(key, value)
                        }
                    }
                    call.request.headers.forEach { key, values ->
                        if (key.lowercase() !in listOf("host", "authorization")) {
                            values.forEach { value ->
                                header(key, value)
                            }
                        }
                    }
                }

                call.respond(response.status, response.bodyAsText())
            } catch (e: Exception) {
                println("❌ Proxy error: ${e.message}")
                call.respond(HttpStatusCode.BadGateway, mapOf("error" to "Proxy error"))
            }
        }

        // Rewrite /.well-known/uma-configuration to external domain
        get("/.well-known/uma-configuration") {
            val targetUrl = "$forwardDomain/.well-known/uma-configuration"
            println("🔄 Rewriting: ${call.request.uri} → $targetUrl")

            try {
                val response = httpClient.get(targetUrl) {
                    call.request.queryParameters.forEach { key, values ->
                        values.forEach { value ->
                            parameter(key, value)
                        }
                    }
                    call.request.headers.forEach { key, values ->
                        if (key.lowercase() !in listOf("host", "authorization")) {
                            values.forEach { value ->
                                header(key, value)
                            }
                        }
                    }
                }

                call.respond(response.status, response.bodyAsText())
            } catch (e: Exception) {
                println("❌ Proxy error: ${e.message}")
                call.respond(HttpStatusCode.BadGateway, mapOf("error" to "Proxy error"))
            }
        }

        println("🔄 Ktor URL Rewrites configured:")
        println("  1. /.well-known/lnurlp/{path...} → $forwardDomain/.well-known/lnurlp/{path...}")
        println("  2. /.well-known/lnurlpubkey → $forwardDomain/.well-known/lnurlpubkey")
        println("  3. /.well-known/uma-configuration → $forwardDomain/.well-known/uma-configuration")
    } else {
        println("⚠️  UMAAAS_FORWARD_DOMAIN not set - URL rewrites disabled")
    }
}
