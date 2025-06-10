// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.lightspark.uma.core.ClientOptions
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.handlers.emptyHandler
import com.lightspark.uma.core.handlers.errorHandler
import com.lightspark.uma.core.handlers.jsonHandler
import com.lightspark.uma.core.handlers.withErrorHandler
import com.lightspark.uma.core.http.HttpMethod
import com.lightspark.uma.core.http.HttpRequest
import com.lightspark.uma.core.http.HttpResponse
import com.lightspark.uma.core.http.HttpResponse.Handler
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.core.http.json
import com.lightspark.uma.core.http.parseable
import com.lightspark.uma.core.prepareAsync
import com.lightspark.uma.models.tokens.ApiToken
import com.lightspark.uma.models.tokens.TokenCreateParams
import com.lightspark.uma.models.tokens.TokenDeleteParams
import com.lightspark.uma.models.tokens.TokenListPageAsync
import com.lightspark.uma.models.tokens.TokenListPageResponse
import com.lightspark.uma.models.tokens.TokenListParams
import com.lightspark.uma.models.tokens.TokenRetrieveParams

class TokenServiceAsyncImpl internal constructor(private val clientOptions: ClientOptions) :
    TokenServiceAsync {

    private val withRawResponse: TokenServiceAsync.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    override fun withRawResponse(): TokenServiceAsync.WithRawResponse = withRawResponse

    override suspend fun create(
        params: TokenCreateParams,
        requestOptions: RequestOptions,
    ): ApiToken =
        // post /tokens
        withRawResponse().create(params, requestOptions).parse()

    override suspend fun retrieve(
        params: TokenRetrieveParams,
        requestOptions: RequestOptions,
    ): ApiToken =
        // get /tokens/{tokenId}
        withRawResponse().retrieve(params, requestOptions).parse()

    override suspend fun list(
        params: TokenListParams,
        requestOptions: RequestOptions,
    ): TokenListPageAsync =
        // get /tokens
        withRawResponse().list(params, requestOptions).parse()

    override suspend fun delete(params: TokenDeleteParams, requestOptions: RequestOptions) {
        // delete /tokens/{tokenId}
        withRawResponse().delete(params, requestOptions)
    }

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        TokenServiceAsync.WithRawResponse {

        private val errorHandler: Handler<JsonValue> = errorHandler(clientOptions.jsonMapper)

        private val createHandler: Handler<ApiToken> =
            jsonHandler<ApiToken>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override suspend fun create(
            params: TokenCreateParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<ApiToken> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("tokens")
                    .body(json(clientOptions.jsonMapper, params._body()))
                    .build()
                    .prepareAsync(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.executeAsync(request, requestOptions)
            return response.parseable {
                response
                    .use { createHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }

        private val retrieveHandler: Handler<ApiToken> =
            jsonHandler<ApiToken>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override suspend fun retrieve(
            params: TokenRetrieveParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<ApiToken> {
            // We check here instead of in the params builder because this can be specified
            // positionally or in the params class.
            checkRequired("tokenId", params.tokenId())
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.GET)
                    .addPathSegments("tokens", params._pathParam(0))
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

        private val listHandler: Handler<TokenListPageResponse> =
            jsonHandler<TokenListPageResponse>(clientOptions.jsonMapper)
                .withErrorHandler(errorHandler)

        override suspend fun list(
            params: TokenListParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<TokenListPageAsync> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.GET)
                    .addPathSegments("tokens")
                    .build()
                    .prepareAsync(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.executeAsync(request, requestOptions)
            return response.parseable {
                response
                    .use { listHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
                    .let {
                        TokenListPageAsync.builder()
                            .service(TokenServiceAsyncImpl(clientOptions))
                            .params(params)
                            .response(it)
                            .build()
                    }
            }
        }

        private val deleteHandler: Handler<Void?> = emptyHandler().withErrorHandler(errorHandler)

        override suspend fun delete(
            params: TokenDeleteParams,
            requestOptions: RequestOptions,
        ): HttpResponse {
            // We check here instead of in the params builder because this can be specified
            // positionally or in the params class.
            checkRequired("tokenId", params.tokenId())
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.DELETE)
                    .addPathSegments("tokens", params._pathParam(0))
                    .apply { params._body()?.let { body(json(clientOptions.jsonMapper, it)) } }
                    .build()
                    .prepareAsync(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.executeAsync(request, requestOptions)
            return response.parseable { response.use { deleteHandler.handle(it) } }
        }
    }
}
