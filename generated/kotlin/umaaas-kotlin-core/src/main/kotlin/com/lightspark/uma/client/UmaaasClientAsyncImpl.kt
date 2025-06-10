// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.client

import com.lightspark.uma.core.ClientOptions
import com.lightspark.uma.core.getPackageVersion
import com.lightspark.uma.services.async.ConfigServiceAsync
import com.lightspark.uma.services.async.ConfigServiceAsyncImpl
import com.lightspark.uma.services.async.InvitationServiceAsync
import com.lightspark.uma.services.async.InvitationServiceAsyncImpl
import com.lightspark.uma.services.async.QuoteServiceAsync
import com.lightspark.uma.services.async.QuoteServiceAsyncImpl
import com.lightspark.uma.services.async.ReceiverServiceAsync
import com.lightspark.uma.services.async.ReceiverServiceAsyncImpl
import com.lightspark.uma.services.async.SandboxServiceAsync
import com.lightspark.uma.services.async.SandboxServiceAsyncImpl
import com.lightspark.uma.services.async.TokenServiceAsync
import com.lightspark.uma.services.async.TokenServiceAsyncImpl
import com.lightspark.uma.services.async.TransactionServiceAsync
import com.lightspark.uma.services.async.TransactionServiceAsyncImpl
import com.lightspark.uma.services.async.UserServiceAsync
import com.lightspark.uma.services.async.UserServiceAsyncImpl
import com.lightspark.uma.services.async.WebhookServiceAsync
import com.lightspark.uma.services.async.WebhookServiceAsyncImpl

class UmaaasClientAsyncImpl(private val clientOptions: ClientOptions) : UmaaasClientAsync {

    private val clientOptionsWithUserAgent =
        if (clientOptions.headers.names().contains("User-Agent")) clientOptions
        else
            clientOptions
                .toBuilder()
                .putHeader("User-Agent", "${javaClass.simpleName}/Kotlin ${getPackageVersion()}")
                .build()

    // Pass the original clientOptions so that this client sets its own User-Agent.
    private val sync: UmaaasClient by lazy { UmaaasClientImpl(clientOptions) }

    private val withRawResponse: UmaaasClientAsync.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    private val users: UserServiceAsync by lazy { UserServiceAsyncImpl(clientOptionsWithUserAgent) }

    private val tokens: TokenServiceAsync by lazy {
        TokenServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    private val config: ConfigServiceAsync by lazy {
        ConfigServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    private val webhooks: WebhookServiceAsync by lazy {
        WebhookServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    private val transactions: TransactionServiceAsync by lazy {
        TransactionServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    private val receiver: ReceiverServiceAsync by lazy {
        ReceiverServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    private val quotes: QuoteServiceAsync by lazy {
        QuoteServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    private val invitations: InvitationServiceAsync by lazy {
        InvitationServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    private val sandbox: SandboxServiceAsync by lazy {
        SandboxServiceAsyncImpl(clientOptionsWithUserAgent)
    }

    override fun sync(): UmaaasClient = sync

    override fun withRawResponse(): UmaaasClientAsync.WithRawResponse = withRawResponse

    override fun users(): UserServiceAsync = users

    override fun tokens(): TokenServiceAsync = tokens

    override fun config(): ConfigServiceAsync = config

    override fun webhooks(): WebhookServiceAsync = webhooks

    override fun transactions(): TransactionServiceAsync = transactions

    override fun receiver(): ReceiverServiceAsync = receiver

    override fun quotes(): QuoteServiceAsync = quotes

    override fun invitations(): InvitationServiceAsync = invitations

    override fun sandbox(): SandboxServiceAsync = sandbox

    override fun close() = clientOptions.httpClient.close()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        UmaaasClientAsync.WithRawResponse {

        private val users: UserServiceAsync.WithRawResponse by lazy {
            UserServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val tokens: TokenServiceAsync.WithRawResponse by lazy {
            TokenServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val config: ConfigServiceAsync.WithRawResponse by lazy {
            ConfigServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val webhooks: WebhookServiceAsync.WithRawResponse by lazy {
            WebhookServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val transactions: TransactionServiceAsync.WithRawResponse by lazy {
            TransactionServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val receiver: ReceiverServiceAsync.WithRawResponse by lazy {
            ReceiverServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val quotes: QuoteServiceAsync.WithRawResponse by lazy {
            QuoteServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val invitations: InvitationServiceAsync.WithRawResponse by lazy {
            InvitationServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        private val sandbox: SandboxServiceAsync.WithRawResponse by lazy {
            SandboxServiceAsyncImpl.WithRawResponseImpl(clientOptions)
        }

        override fun users(): UserServiceAsync.WithRawResponse = users

        override fun tokens(): TokenServiceAsync.WithRawResponse = tokens

        override fun config(): ConfigServiceAsync.WithRawResponse = config

        override fun webhooks(): WebhookServiceAsync.WithRawResponse = webhooks

        override fun transactions(): TransactionServiceAsync.WithRawResponse = transactions

        override fun receiver(): ReceiverServiceAsync.WithRawResponse = receiver

        override fun quotes(): QuoteServiceAsync.WithRawResponse = quotes

        override fun invitations(): InvitationServiceAsync.WithRawResponse = invitations

        override fun sandbox(): SandboxServiceAsync.WithRawResponse = sandbox
    }
}
