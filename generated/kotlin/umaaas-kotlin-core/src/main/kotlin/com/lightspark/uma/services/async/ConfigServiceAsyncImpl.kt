// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.lightspark.uma.core.ClientOptions
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.handlers.errorHandler
import com.lightspark.uma.core.handlers.jsonHandler
import com.lightspark.uma.core.handlers.withErrorHandler
import com.lightspark.uma.core.http.HttpMethod
import com.lightspark.uma.core.http.HttpRequest
import com.lightspark.uma.core.http.HttpResponse.Handler
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.core.http.json
import com.lightspark.uma.core.http.parseable
import com.lightspark.uma.core.prepareAsync
import com.lightspark.uma.models.config.ConfigRetrieveParams
import com.lightspark.uma.models.config.ConfigUpdateParams
import com.lightspark.uma.models.config.PlatformConfig

class ConfigServiceAsyncImpl internal constructor(private val clientOptions: ClientOptions) :
    ConfigServiceAsync {

    private val withRawResponse: ConfigServiceAsync.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    override fun withRawResponse(): ConfigServiceAsync.WithRawResponse = withRawResponse

    override suspend fun retrieve(
        params: ConfigRetrieveParams,
        requestOptions: RequestOptions,
    ): PlatformConfig =
        // get /config
        withRawResponse().retrieve(params, requestOptions).parse()

    override suspend fun update(
        params: ConfigUpdateParams,
        requestOptions: RequestOptions,
    ): PlatformConfig =
        // patch /config
        withRawResponse().update(params, requestOptions).parse()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        ConfigServiceAsync.WithRawResponse {

        private val errorHandler: Handler<JsonValue> = errorHandler(clientOptions.jsonMapper)

        private val retrieveHandler: Handler<PlatformConfig> =
            jsonHandler<PlatformConfig>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override suspend fun retrieve(
            params: ConfigRetrieveParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<PlatformConfig> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.GET)
                    .addPathSegments("config")
                    .build()
                    .prepareAsync(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.executeAsync(request, requestOptions)
            return response.parseable {
                response
                    .use { retrieveHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }

        private val updateHandler: Handler<PlatformConfig> =
            jsonHandler<PlatformConfig>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override suspend fun update(
            params: ConfigUpdateParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<PlatformConfig> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.PATCH)
                    .addPathSegments("config")
                    .body(json(clientOptions.jsonMapper, params._body()))
                    .build()
                    .prepareAsync(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.executeAsync(request, requestOptions)
            return response.parseable {
                response
                    .use { updateHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }
    }
}
