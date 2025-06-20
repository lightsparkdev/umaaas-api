package com.lightspark.uma.umaaas.lib

import com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient
import com.lightspark.umaaas.client.UmaaasClient

object UmaaasClientBuilder {

    val client: UmaaasClient by lazy {
        UmaaasOkHttpClient.builder()
            .username(getEnvVar("UMAAAS_CLIENT_ID"))
            .password(getEnvVar("UMAAAS_CLIENT_SECRET"))
            .maxRetries(2)
            .build()
    }
}
