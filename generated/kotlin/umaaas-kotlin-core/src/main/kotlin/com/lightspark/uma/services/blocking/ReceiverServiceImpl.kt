// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.lightspark.uma.core.ClientOptions
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.handlers.errorHandler
import com.lightspark.uma.core.handlers.jsonHandler
import com.lightspark.uma.core.handlers.withErrorHandler
import com.lightspark.uma.core.http.HttpMethod
import com.lightspark.uma.core.http.HttpRequest
import com.lightspark.uma.core.http.HttpResponse.Handler
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.core.http.parseable
import com.lightspark.uma.core.prepare
import com.lightspark.uma.models.receiver.ReceiverLookupParams
import com.lightspark.uma.models.receiver.ReceiverLookupResponse

class ReceiverServiceImpl internal constructor(private val clientOptions: ClientOptions) :
    ReceiverService {

    private val withRawResponse: ReceiverService.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    override fun withRawResponse(): ReceiverService.WithRawResponse = withRawResponse

    override fun lookup(
        params: ReceiverLookupParams,
        requestOptions: RequestOptions,
    ): ReceiverLookupResponse =
        // get /receiver/{receiverUmaAddress}
        withRawResponse().lookup(params, requestOptions).parse()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        ReceiverService.WithRawResponse {

        private val errorHandler: Handler<JsonValue> = errorHandler(clientOptions.jsonMapper)

        private val lookupHandler: Handler<ReceiverLookupResponse> =
            jsonHandler<ReceiverLookupResponse>(clientOptions.jsonMapper)
                .withErrorHandler(errorHandler)

        override fun lookup(
            params: ReceiverLookupParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<ReceiverLookupResponse> {
            // We check here instead of in the params builder because this can be specified
            // positionally or in the params class.
            checkRequired("receiverUmaAddress", params.receiverUmaAddress())
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.GET)
                    .addPathSegments("receiver", params._pathParam(0))
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
            return response.parseable {
                response
                    .use { lookupHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }
    }
}
