// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.errors

import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.http.Headers

abstract class UmaaasServiceException
protected constructor(message: String, cause: Throwable? = null) : UmaaasException(message, cause) {

    abstract fun statusCode(): Int

    abstract fun headers(): Headers

    abstract fun body(): JsonValue
}
