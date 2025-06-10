@file:JvmName("JsonHandler")

package com.lightspark.uma.core.handlers

import com.fasterxml.jackson.databind.json.JsonMapper
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.http.HttpResponse
import com.lightspark.uma.core.http.HttpResponse.Handler
import com.lightspark.uma.errors.UmaaasInvalidDataException

internal inline fun <reified T> jsonHandler(jsonMapper: JsonMapper): Handler<T> =
    object : Handler<T> {
        override fun handle(response: HttpResponse): T {
            try {
                return jsonMapper.readValue(response.body(), jacksonTypeRef())
            } catch (e: Exception) {
                throw UmaaasInvalidDataException("Error reading response", e)
            }
        }
    }
