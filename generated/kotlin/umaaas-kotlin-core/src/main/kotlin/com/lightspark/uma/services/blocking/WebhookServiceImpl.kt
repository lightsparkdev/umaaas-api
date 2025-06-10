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
import com.lightspark.uma.models.webhooks.WebhookSendTestParams
import com.lightspark.uma.models.webhooks.WebhookSendTestResponse

class WebhookServiceImpl internal constructor(private val clientOptions: ClientOptions) :
    WebhookService {

    private val withRawResponse: WebhookService.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    override fun withRawResponse(): WebhookService.WithRawResponse = withRawResponse

    override fun sendTest(
        params: WebhookSendTestParams,
        requestOptions: RequestOptions,
    ): WebhookSendTestResponse =
        // post /webhooks/test
        withRawResponse().sendTest(params, requestOptions).parse()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        WebhookService.WithRawResponse {

        private val errorHandler: Handler<JsonValue> = errorHandler(clientOptions.jsonMapper)

        private val sendTestHandler: Handler<WebhookSendTestResponse> =
            jsonHandler<WebhookSendTestResponse>(clientOptions.jsonMapper)
                .withErrorHandler(errorHandler)

        override fun sendTest(
            params: WebhookSendTestParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<WebhookSendTestResponse> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("webhooks", "test")
                    .apply { params._body()?.let { body(json(clientOptions.jsonMapper, it)) } }
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
            return response.parseable {
                response
                    .use { sendTestHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }
    }
}
