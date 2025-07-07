package com.lightspark.uma.umaaas.lib

import com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient
import com.lightspark.umaaas.client.UmaaasClient

object UmaaasClientBuilder {

    val client: UmaaasClient by lazy {
        val config = UmaaasConfig.fromEnv()
        UmaaasOkHttpClient.builder()
            .username(config.clientId)
            .password(config.clientSecret)
            .maxRetries(2)
            .build()
    }
}
