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
