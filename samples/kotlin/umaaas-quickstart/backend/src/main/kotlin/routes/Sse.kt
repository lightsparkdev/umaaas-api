package com.lightspark.uma.umaaas.routes

import com.lightspark.uma.umaaas.lib.WebhookStream
import io.ktor.server.routing.*
import io.ktor.server.sse.*
import io.ktor.sse.*
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlin.time.Duration.Companion.seconds

fun Route.sseRoutes() {
    sse("/api/sse") {
        println("SSE connection established")
        
        try {
            val jsonMessage = """{"timestamp":${System.currentTimeMillis()}}"""
            send(ServerSentEvent(jsonMessage))
            println("Starting to collect WebhookStream.eventFlow")
            WebhookStream.eventFlow
                .onEach { event ->
                    send(ServerSentEvent(event))
                }
                .catch { e ->
                    println("Error in webhook SSE stream: ${e.message}")
                }
                .launchIn(this)
        } catch (e: Exception) {
            println("SSE connection error: ${e.message}")
        }
    }

    sse("/api/sse/heartbeat") {
        heartbeat {
            period = 1.seconds
            event = ServerSentEvent("heartbeat")
        }
    }
}
