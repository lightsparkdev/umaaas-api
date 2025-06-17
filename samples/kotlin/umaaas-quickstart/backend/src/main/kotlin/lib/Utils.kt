package com.lightspark.uma.umaaas.lib

import io.github.cdimascio.dotenv.Dotenv
import io.github.cdimascio.dotenv.dotenv

private val dotenv: Dotenv by lazy {
    dotenv {
        directory = "./"
        ignoreIfMalformed = true
        ignoreIfMissing = true
    }
}

fun getEnvVar(key: String): String {
    return dotenv[key] ?: System.getenv(key) ?: throw IllegalStateException("$key environment variable not set")
}
