// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async.users

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
import com.lightspark.uma.core.http.multipartFormData
import com.lightspark.uma.core.http.parseable
import com.lightspark.uma.core.prepareAsync
import com.lightspark.uma.models.users.bulk.BulkGetJobStatusParams
import com.lightspark.uma.models.users.bulk.BulkGetJobStatusResponse
import com.lightspark.uma.models.users.bulk.BulkUploadParams
import com.lightspark.uma.models.users.bulk.BulkUploadResponse

class BulkServiceAsyncImpl internal constructor(private val clientOptions: ClientOptions) :
    BulkServiceAsync {

    private val withRawResponse: BulkServiceAsync.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    override fun withRawResponse(): BulkServiceAsync.WithRawResponse = withRawResponse

    override suspend fun getJobStatus(
        params: BulkGetJobStatusParams,
        requestOptions: RequestOptions,
    ): BulkGetJobStatusResponse =
        // get /users/bulk/jobs/{jobId}
        withRawResponse().getJobStatus(params, requestOptions).parse()

    override suspend fun upload(
        params: BulkUploadParams,
        requestOptions: RequestOptions,
    ): BulkUploadResponse =
        // post /users/bulk/csv
        withRawResponse().upload(params, requestOptions).parse()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        BulkServiceAsync.WithRawResponse {

        private val errorHandler: Handler<JsonValue> = errorHandler(clientOptions.jsonMapper)

        private val getJobStatusHandler: Handler<BulkGetJobStatusResponse> =
            jsonHandler<BulkGetJobStatusResponse>(clientOptions.jsonMapper)
                .withErrorHandler(errorHandler)

        override suspend fun getJobStatus(
            params: BulkGetJobStatusParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<BulkGetJobStatusResponse> {
            // We check here instead of in the params builder because this can be specified
            // positionally or in the params class.
            checkRequired("jobId", params.jobId())
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.GET)
                    .addPathSegments("users", "bulk", "jobs", params._pathParam(0))
                    .build()
                    .prepareAsync(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.executeAsync(request, requestOptions)
            return response.parseable {
                response
                    .use { getJobStatusHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }

        private val uploadHandler: Handler<BulkUploadResponse> =
            jsonHandler<BulkUploadResponse>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override suspend fun upload(
            params: BulkUploadParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<BulkUploadResponse> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("users", "bulk", "csv")
                    .body(multipartFormData(clientOptions.jsonMapper, params._body()))
                    .build()
                    .prepareAsync(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.executeAsync(request, requestOptions)
            return response.parseable {
                response
                    .use { uploadHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }
    }
}
