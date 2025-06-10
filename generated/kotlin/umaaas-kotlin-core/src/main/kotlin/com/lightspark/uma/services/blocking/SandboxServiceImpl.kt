// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

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
import com.lightspark.uma.core.prepare
import com.lightspark.uma.models.sandbox.SandboxReceivePaymentParams
import com.lightspark.uma.models.sandbox.SandboxSendFundsParams
import com.lightspark.uma.models.transactions.IncomingTransaction
import com.lightspark.uma.models.transactions.OutgoingTransaction

class SandboxServiceImpl internal constructor(private val clientOptions: ClientOptions) :
    SandboxService {

    private val withRawResponse: SandboxService.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    override fun withRawResponse(): SandboxService.WithRawResponse = withRawResponse

    override fun receivePayment(
        params: SandboxReceivePaymentParams,
        requestOptions: RequestOptions,
    ): IncomingTransaction =
        // post /sandbox/receive
        withRawResponse().receivePayment(params, requestOptions).parse()

    override fun sendFunds(
        params: SandboxSendFundsParams,
        requestOptions: RequestOptions,
    ): OutgoingTransaction =
        // post /sandbox/send
        withRawResponse().sendFunds(params, requestOptions).parse()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        SandboxService.WithRawResponse {

        private val errorHandler: Handler<JsonValue> = errorHandler(clientOptions.jsonMapper)

        private val receivePaymentHandler: Handler<IncomingTransaction> =
            jsonHandler<IncomingTransaction>(clientOptions.jsonMapper)
                .withErrorHandler(errorHandler)

        override fun receivePayment(
            params: SandboxReceivePaymentParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<IncomingTransaction> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("sandbox", "receive")
                    .body(json(clientOptions.jsonMapper, params._body()))
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
            return response.parseable {
                response
                    .use { receivePaymentHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }

        private val sendFundsHandler: Handler<OutgoingTransaction> =
            jsonHandler<OutgoingTransaction>(clientOptions.jsonMapper)
                .withErrorHandler(errorHandler)

        override fun sendFunds(
            params: SandboxSendFundsParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<OutgoingTransaction> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("sandbox", "send")
                    .body(json(clientOptions.jsonMapper, params._body()))
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
            return response.parseable {
                response
                    .use { sendFundsHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }
    }
}
