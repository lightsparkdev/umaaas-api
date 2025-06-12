package com.lightspark.uma.umaaas

import io.ktor.server.application.*
import com.lightspark.uma.client.UmaaasClient
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureSerialization()
    configureHTTP()
    configureRouting()
}

// Example of how to initialize the UMAaaS client
fun createUmaaasClient(): UmaaasClient {
    return UmaaasOkHttpClient.builder()
        .baseUrl("https://api.uma.me") // or your API base URL
        .username("your-api-token-id")
        .password("your-client-secret")
        .build()
}
