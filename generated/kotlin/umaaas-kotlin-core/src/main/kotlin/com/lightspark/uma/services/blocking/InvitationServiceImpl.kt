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
import com.lightspark.uma.core.http.json
import com.lightspark.uma.core.http.parseable
import com.lightspark.uma.core.prepare
import com.lightspark.uma.models.invitations.InvitationCancelParams
import com.lightspark.uma.models.invitations.InvitationClaimParams
import com.lightspark.uma.models.invitations.InvitationCreateParams
import com.lightspark.uma.models.invitations.InvitationRetrieveParams
import com.lightspark.uma.models.invitations.UmaInvitation

class InvitationServiceImpl internal constructor(private val clientOptions: ClientOptions) :
    InvitationService {

    private val withRawResponse: InvitationService.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    override fun withRawResponse(): InvitationService.WithRawResponse = withRawResponse

    override fun create(
        params: InvitationCreateParams,
        requestOptions: RequestOptions,
    ): UmaInvitation =
        // post /invitations
        withRawResponse().create(params, requestOptions).parse()

    override fun retrieve(
        params: InvitationRetrieveParams,
        requestOptions: RequestOptions,
    ): UmaInvitation =
        // get /invitations/{invitationCode}
        withRawResponse().retrieve(params, requestOptions).parse()

    override fun cancel(
        params: InvitationCancelParams,
        requestOptions: RequestOptions,
    ): UmaInvitation =
        // post /invitations/{invitationCode}/cancel
        withRawResponse().cancel(params, requestOptions).parse()

    override fun claim(
        params: InvitationClaimParams,
        requestOptions: RequestOptions,
    ): UmaInvitation =
        // post /invitations/{invitationCode}/claim
        withRawResponse().claim(params, requestOptions).parse()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        InvitationService.WithRawResponse {

        private val errorHandler: Handler<JsonValue> = errorHandler(clientOptions.jsonMapper)

        private val createHandler: Handler<UmaInvitation> =
            jsonHandler<UmaInvitation>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override fun create(
            params: InvitationCreateParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<UmaInvitation> {
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("invitations")
                    .body(json(clientOptions.jsonMapper, params._body()))
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
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

        private val retrieveHandler: Handler<UmaInvitation> =
            jsonHandler<UmaInvitation>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override fun retrieve(
            params: InvitationRetrieveParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<UmaInvitation> {
            // We check here instead of in the params builder because this can be specified
            // positionally or in the params class.
            checkRequired("invitationCode", params.invitationCode())
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.GET)
                    .addPathSegments("invitations", params._pathParam(0))
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
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

        private val cancelHandler: Handler<UmaInvitation> =
            jsonHandler<UmaInvitation>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override fun cancel(
            params: InvitationCancelParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<UmaInvitation> {
            // We check here instead of in the params builder because this can be specified
            // positionally or in the params class.
            checkRequired("invitationCode", params.invitationCode())
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("invitations", params._pathParam(0), "cancel")
                    .apply { params._body()?.let { body(json(clientOptions.jsonMapper, it)) } }
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
            return response.parseable {
                response
                    .use { cancelHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }

        private val claimHandler: Handler<UmaInvitation> =
            jsonHandler<UmaInvitation>(clientOptions.jsonMapper).withErrorHandler(errorHandler)

        override fun claim(
            params: InvitationClaimParams,
            requestOptions: RequestOptions,
        ): HttpResponseFor<UmaInvitation> {
            // We check here instead of in the params builder because this can be specified
            // positionally or in the params class.
            checkRequired("invitationCode", params.invitationCode())
            val request =
                HttpRequest.builder()
                    .method(HttpMethod.POST)
                    .addPathSegments("invitations", params._pathParam(0), "claim")
                    .body(json(clientOptions.jsonMapper, params._body()))
                    .build()
                    .prepare(clientOptions, params)
            val requestOptions = requestOptions.applyDefaults(RequestOptions.from(clientOptions))
            val response = clientOptions.httpClient.execute(request, requestOptions)
            return response.parseable {
                response
                    .use { claimHandler.handle(it) }
                    .also {
                        if (requestOptions.responseValidation!!) {
                            it.validate()
                        }
                    }
            }
        }
    }
}
