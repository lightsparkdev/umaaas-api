package com.lightspark.uma.umaaas

import io.ktor.http.*
import io.ktor.serialization.gson.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sse.*
import io.ktor.sse.*

fun Application.configureSerialization() {
    install(ContentNegotiation) {
        gson {
            }
    }
    routing {
        get("/json/gson") {
                call.respond(mapOf("hello" to "world"))
            }
    }
}
