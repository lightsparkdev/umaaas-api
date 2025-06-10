// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.client

import com.lightspark.uma.core.ClientOptions
import com.lightspark.uma.core.getPackageVersion
import com.lightspark.uma.services.blocking.ConfigService
import com.lightspark.uma.services.blocking.ConfigServiceImpl
import com.lightspark.uma.services.blocking.InvitationService
import com.lightspark.uma.services.blocking.InvitationServiceImpl
import com.lightspark.uma.services.blocking.QuoteService
import com.lightspark.uma.services.blocking.QuoteServiceImpl
import com.lightspark.uma.services.blocking.ReceiverService
import com.lightspark.uma.services.blocking.ReceiverServiceImpl
import com.lightspark.uma.services.blocking.SandboxService
import com.lightspark.uma.services.blocking.SandboxServiceImpl
import com.lightspark.uma.services.blocking.TokenService
import com.lightspark.uma.services.blocking.TokenServiceImpl
import com.lightspark.uma.services.blocking.TransactionService
import com.lightspark.uma.services.blocking.TransactionServiceImpl
import com.lightspark.uma.services.blocking.UserService
import com.lightspark.uma.services.blocking.UserServiceImpl
import com.lightspark.uma.services.blocking.WebhookService
import com.lightspark.uma.services.blocking.WebhookServiceImpl

class UmaaasClientImpl(private val clientOptions: ClientOptions) : UmaaasClient {

    private val clientOptionsWithUserAgent =
        if (clientOptions.headers.names().contains("User-Agent")) clientOptions
        else
            clientOptions
                .toBuilder()
                .putHeader("User-Agent", "${javaClass.simpleName}/Kotlin ${getPackageVersion()}")
                .build()

    // Pass the original clientOptions so that this client sets its own User-Agent.
    private val async: UmaaasClientAsync by lazy { UmaaasClientAsyncImpl(clientOptions) }

    private val withRawResponse: UmaaasClient.WithRawResponse by lazy {
        WithRawResponseImpl(clientOptions)
    }

    private val users: UserService by lazy { UserServiceImpl(clientOptionsWithUserAgent) }

    private val tokens: TokenService by lazy { TokenServiceImpl(clientOptionsWithUserAgent) }

    private val config: ConfigService by lazy { ConfigServiceImpl(clientOptionsWithUserAgent) }

    private val webhooks: WebhookService by lazy { WebhookServiceImpl(clientOptionsWithUserAgent) }

    private val transactions: TransactionService by lazy {
        TransactionServiceImpl(clientOptionsWithUserAgent)
    }

    private val receiver: ReceiverService by lazy {
        ReceiverServiceImpl(clientOptionsWithUserAgent)
    }

    private val quotes: QuoteService by lazy { QuoteServiceImpl(clientOptionsWithUserAgent) }

    private val invitations: InvitationService by lazy {
        InvitationServiceImpl(clientOptionsWithUserAgent)
    }

    private val sandbox: SandboxService by lazy { SandboxServiceImpl(clientOptionsWithUserAgent) }

    override fun async(): UmaaasClientAsync = async

    override fun withRawResponse(): UmaaasClient.WithRawResponse = withRawResponse

    override fun users(): UserService = users

    override fun tokens(): TokenService = tokens

    override fun config(): ConfigService = config

    override fun webhooks(): WebhookService = webhooks

    override fun transactions(): TransactionService = transactions

    override fun receiver(): ReceiverService = receiver

    override fun quotes(): QuoteService = quotes

    override fun invitations(): InvitationService = invitations

    override fun sandbox(): SandboxService = sandbox

    override fun close() = clientOptions.httpClient.close()

    class WithRawResponseImpl internal constructor(private val clientOptions: ClientOptions) :
        UmaaasClient.WithRawResponse {

        private val users: UserService.WithRawResponse by lazy {
            UserServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val tokens: TokenService.WithRawResponse by lazy {
            TokenServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val config: ConfigService.WithRawResponse by lazy {
            ConfigServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val webhooks: WebhookService.WithRawResponse by lazy {
            WebhookServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val transactions: TransactionService.WithRawResponse by lazy {
            TransactionServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val receiver: ReceiverService.WithRawResponse by lazy {
            ReceiverServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val quotes: QuoteService.WithRawResponse by lazy {
            QuoteServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val invitations: InvitationService.WithRawResponse by lazy {
            InvitationServiceImpl.WithRawResponseImpl(clientOptions)
        }

        private val sandbox: SandboxService.WithRawResponse by lazy {
            SandboxServiceImpl.WithRawResponseImpl(clientOptions)
        }

        override fun users(): UserService.WithRawResponse = users

        override fun tokens(): TokenService.WithRawResponse = tokens

        override fun config(): ConfigService.WithRawResponse = config

        override fun webhooks(): WebhookService.WithRawResponse = webhooks

        override fun transactions(): TransactionService.WithRawResponse = transactions

        override fun receiver(): ReceiverService.WithRawResponse = receiver

        override fun quotes(): QuoteService.WithRawResponse = quotes

        override fun invitations(): InvitationService.WithRawResponse = invitations

        override fun sandbox(): SandboxService.WithRawResponse = sandbox
    }
}
