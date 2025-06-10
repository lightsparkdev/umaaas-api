@file:JvmName("StringHandler")

package com.lightspark.uma.core.handlers

import com.lightspark.uma.core.http.HttpResponse
import com.lightspark.uma.core.http.HttpResponse.Handler

internal fun stringHandler(): Handler<String> = StringHandlerInternal

private object StringHandlerInternal : Handler<String> {
    override fun handle(response: HttpResponse): String =
        response.body().readBytes().toString(Charsets.UTF_8)
}
