@file:JvmName("EmptyHandler")

package com.lightspark.uma.core.handlers

import com.lightspark.uma.core.http.HttpResponse
import com.lightspark.uma.core.http.HttpResponse.Handler

internal fun emptyHandler(): Handler<Void?> = EmptyHandlerInternal

private object EmptyHandlerInternal : Handler<Void?> {
    override fun handle(response: HttpResponse): Void? = null
}
