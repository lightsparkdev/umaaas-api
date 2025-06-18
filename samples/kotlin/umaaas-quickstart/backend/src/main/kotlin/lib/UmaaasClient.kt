package com.lightspark.uma.umaaas.lib

import com.lightspark.uma.client.UmaaasClient
import com.lightspark.uma.client.okhttp.UmaaasOkHttpClient
import io.github.cdimascio.dotenv.Dotenv
import io.github.cdimascio.dotenv.dotenv

object UmaaasClient {
    private val dotenv: Dotenv by lazy {
        dotenv {
            directory = "./"
            ignoreIfMalformed = true
            ignoreIfMissing = true
        }
    }
    
    private fun getEnvVar(key: String): String {
        return dotenv[key] ?: System.getenv(key) ?: throw IllegalStateException("$key environment variable not set")
    }
    
    val client: UmaaasClient by lazy {
        UmaaasOkHttpClient.builder()
            .username(getEnvVar("CLIENT_ID"))
            .password(getEnvVar("CLIENT_SECRET"))
            .baseUrl( getEnvVar("UAAS_TEST_BASE_URL"))
            .maxRetries(2)
            .build()
    }
}
