package com.lightspark.uma.umaaas


import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.SSEMessage
import com.lightspark.uma.umaaas.lib.WebhookEventQueue
import com.lightspark.uma.umaaas.routes.configureUmaRewrites
import com.lightspark.uma.umaaas.routes.paymentsRoutes
import com.lightspark.uma.umaaas.routes.sandboxRoutes
import com.lightspark.uma.umaaas.routes.transactionRoutes
import com.lightspark.uma.umaaas.routes.userRoutes
import com.lightspark.uma.umaaas.routes.webhookRoutes
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.routing.*
import io.ktor.server.sse.*
import io.ktor.sse.*
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.isActive
fun Application.configureRouting() {
    install(SSE)

    routing {
        // URL rewrites - equivalent to Next.js rewrites
        configureUmaRewrites()
        userRoutes()
        paymentsRoutes()
        sandboxRoutes()
        transactionRoutes()
        webhookRoutes()
        // SSE endpoint for webhook events
        sse("/api/webhooks/events") {
            println("SSE connection established")
            
            try {
                // Send connection confirmation
                val connectedMessage = SSEMessage.Connected(System.currentTimeMillis())
                send(ServerSentEvent(JsonUtils.prettyPrint(connectedMessage)))
                
                // Send latest events immediately
                val latestEvents = WebhookEventQueue.getLatestEvents(10)
                println("Sending ${latestEvents.size} latest webhook events")
                latestEvents.forEach { event ->
                    val webhookMessage = SSEMessage.WebhookEvent(event)
                    send(ServerSentEvent(JsonUtils.prettyPrint(webhookMessage)))
                }
                
                // Listen for new webhook events and broadcast them
                WebhookEventQueue.eventFlow
                    .onEach { event ->
                        println("Broadcasting webhook event via SSE: ${event.type}")
                        val webhookMessage = SSEMessage.WebhookEvent(event)
                        send(ServerSentEvent(JsonUtils.prettyPrint(webhookMessage)))
                    }
                    .catch { e ->
                        println("Error in webhook SSE stream: ${e.message}")
                    }
                    .collect { }
                    
            } catch (e: Exception) {
                println("SSE connection error: ${e.message}")
            } finally {
                println("SSE connection closed")
            }
        }

        // Serve static frontend files - MUST come last to avoid catching API routes
        staticResources("/", "static") {
//            // Serve index.html for all non-API routes (SPA routing)
//            default("index.html")
        }
    }
}
