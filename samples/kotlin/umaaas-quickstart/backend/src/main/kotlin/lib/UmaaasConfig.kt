package com.lightspark.uma.umaaas.lib

import io.github.cdimascio.dotenv.Dotenv
import io.github.cdimascio.dotenv.dotenv

data class UmaaasConfig(
    val clientId: String,
    val clientSecret: String,
    val webhookPublicKey: String,
    val forwardDomain: String
) {
    companion object {
        fun fromEnv(): UmaaasConfig {
            return UmaaasConfig(
                clientId = getEnvVar("UMAAAS_CLIENT_ID"),
                clientSecret = getEnvVar("UMAAAS_CLIENT_SECRET"),
                webhookPublicKey = getEnvVar("UMAAAS_WEBHOOK_PUBLIC_KEY").replace("\\n", "\n"),
                forwardDomain = getEnvVar("UMAAAS_FORWARD_DOMAIN")
            )
        }

        private val dotenv: Dotenv by lazy {
            dotenv {
                directory = "./"
                ignoreIfMalformed = true
                ignoreIfMissing = true
            }
        }

        private fun getEnvVar(key: String): String {
            // only used for testing
            System.getProperty(key)?.let { return it }

            return dotenv[key] ?: System.getenv(key) ?: throw IllegalStateException("$key environment variable not set")
        }
    }
}
