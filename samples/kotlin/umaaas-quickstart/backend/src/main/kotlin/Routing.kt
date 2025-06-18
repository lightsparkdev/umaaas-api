package com.lightspark.uma.umaaas


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
