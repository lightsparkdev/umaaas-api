package com.lightspark.uma.umaaas.lib

import com.lightspark.uma.client.UmaaasClient
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient

object UmaaasClient {

    val client: UmaaasClient by lazy {
        UmaaasOkHttpClient.builder()
            .username(getEnvVar("CLIENT_ID"))
            .password(getEnvVar("CLIENT_SECRET"))
            .baseUrl( getEnvVar("UAAS_TEST_BASE_URL"))
            .maxRetries(2)
            .build()
    }
}
