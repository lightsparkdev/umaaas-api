package com.lightspark.uma.umaaas.lib

import com.lightspark.uma.client.UmaaasClient
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient

object UmaaasClient {
    val client: UmaaasClient by lazy {
        UmaaasOkHttpClient.builder()
            .username(System.getenv("CLIENT_ID") ?: throw IllegalStateException("CLIENT_ID environment variable not set"))
            .password(System.getenv("CLIENT_SECRET") ?: throw IllegalStateException("CLIENT_SECRET environment variable not set"))
            .maxRetries(2)
            .build()
    }
}
