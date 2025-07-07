package com.lightspark.uma.umaaas.routes

import com.lightspark.uma.umaaas.lib.UmaaasConfig
import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.parameter
import io.ktor.client.statement.readRawBytes
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.request.uri
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.response.respondBytes
import io.ktor.server.routing.Route
import io.ktor.server.routing.get

fun Route.configureUmaRewrites() {
    val httpClient = HttpClient(CIO)
    val config = UmaaasConfig.fromEnv()
    val forwardDomain = config.forwardDomain
    println("🔧 UMAAAS_FORWARD_DOMAIN: $forwardDomain")

    // Rewrite /.well-known/lnurlp/:path* to your UMA as a service sub domain
    get("/.well-known/lnurlp/{path...}") {
        val path = call.parameters.getAll("path")?.joinToString("/") ?: ""
        val targetUrl = "$forwardDomain/.well-known/lnurlp/$path"
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
            call.respondBytes(
                bytes = response.readRawBytes(),
                contentType = response.contentType(),
                status = response.status
            ) {
                response.headers.forEach { key, values ->
                    if (key.lowercase() !in listOf("content-length", "transfer-encoding")) {
                        values.forEach { value ->
                            call.response.header(key, value)
                        }
                    }
                }
            }
        } catch (e: Exception) {
            println("❌ Proxy error: ${e.message}")
            call.respond(HttpStatusCode.BadGateway, mapOf("error" to "Proxy error"))
        }
    }

    // Rewrite /.well-known/lnurlpubkey to your UMA as a service sub domain
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
            println("Response:\n status: ${response.status}")
            call.respondBytes(
                bytes = response.readRawBytes(),
                contentType = response.contentType(),
                status = response.status
            ) {
                response.headers.forEach { key, values ->
                    if (key.lowercase() !in listOf("content-length", "transfer-encoding")) {
                        values.forEach { value ->
                            call.response.header(key, value)
                        }
                    }
                }
            }
        } catch (e: Exception) {
            println("❌ Proxy error: ${e.message}")
            call.respond(HttpStatusCode.BadGateway, mapOf("error" to "Proxy error"))
        }
    }

    // Rewrite /.well-known/uma-configuration to your UMA as a service sub domain
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
            call.respondBytes(
                bytes = response.readRawBytes(),
                contentType = response.contentType(),
                status = response.status
            ) {
                response.headers.forEach { key, values ->
                    if (key.lowercase() !in listOf("content-length", "transfer-encoding")) {
                        values.forEach { value ->
                            call.response.header(key, value)
                        }
                    }
                }
            }
        } catch (e: Exception) {
            println("❌ Proxy error: ${e.message}")
            call.respond(HttpStatusCode.BadGateway, mapOf("error" to "Proxy error"))
        }
    }

    println("  1. /.well-known/lnurlp/{path...} → $forwardDomain/.well-known/lnurlp/{path...}")
    println("  2. /.well-known/lnurlpubkey → $forwardDomain/.well-known/lnurlpubkey")
    println("  3. /.well-known/uma-configuration → $forwardDomain/.well-known/uma-configuration")
}
