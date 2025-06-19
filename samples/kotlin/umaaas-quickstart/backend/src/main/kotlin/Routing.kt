package com.lightspark.uma.umaaas


import com.lightspark.uma.umaaas.lib.WebhookUtils
import com.lightspark.uma.umaaas.lib.getEnvVar
import com.lightspark.uma.umaaas.routes.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.routing.*
import io.ktor.server.sse.*

fun Application.configureRouting() {
    install(SSE)
    routing {
        // URL rewrites to forward requests from your domain to UMA as a service
        configureUmaRewrites()
        userRoutes()
        paymentsRoutes()
        sandboxRoutes()
        transactionRoutes()
        webhookRoutes()
        sseRoutes()

        // Serve static frontend files - MUST come last to avoid catching API routes
        staticResources("/", "static") {
        }
    }
}
