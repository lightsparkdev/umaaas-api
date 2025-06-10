// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.client

import com.lightspark.uma.services.blocking.ConfigService
import com.lightspark.uma.services.blocking.InvitationService
import com.lightspark.uma.services.blocking.QuoteService
import com.lightspark.uma.services.blocking.ReceiverService
import com.lightspark.uma.services.blocking.SandboxService
import com.lightspark.uma.services.blocking.TokenService
import com.lightspark.uma.services.blocking.TransactionService
import com.lightspark.uma.services.blocking.UserService
import com.lightspark.uma.services.blocking.WebhookService

/**
 * A client for interacting with the Umaaas REST API synchronously. You can also switch to
 * asynchronous execution via the [async] method.
 *
 * This client performs best when you create a single instance and reuse it for all interactions
 * with the REST API. This is because each client holds its own connection pool and thread pools.
 * Reusing connections and threads reduces latency and saves memory. The client also handles rate
 * limiting per client. This means that creating and using multiple instances at the same time will
 * not respect rate limits.
 *
 * The threads and connections that are held will be released automatically if they remain idle. But
 * if you are writing an application that needs to aggressively release unused resources, then you
 * may call [close].
 */
interface UmaaasClient {

    /**
     * Returns a version of this client that uses asynchronous execution.
     *
     * The returned client shares its resources, like its connection pool and thread pools, with
     * this client.
     */
    fun async(): UmaaasClientAsync

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    fun users(): UserService

    fun tokens(): TokenService

    fun config(): ConfigService

    fun webhooks(): WebhookService

    fun transactions(): TransactionService

    fun receiver(): ReceiverService

    fun quotes(): QuoteService

    fun invitations(): InvitationService

    fun sandbox(): SandboxService

    /**
     * Closes this client, relinquishing any underlying resources.
     *
     * This is purposefully not inherited from [AutoCloseable] because the client is long-lived and
     * usually should not be synchronously closed via try-with-resources.
     *
     * It's also usually not necessary to call this method at all. the default HTTP client
     * automatically releases threads and connections if they remain idle, but if you are writing an
     * application that needs to aggressively release unused resources, then you may call this
     * method.
     */
    fun close()

    /** A view of [UmaaasClient] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        fun users(): UserService.WithRawResponse

        fun tokens(): TokenService.WithRawResponse

        fun config(): ConfigService.WithRawResponse

        fun webhooks(): WebhookService.WithRawResponse

        fun transactions(): TransactionService.WithRawResponse

        fun receiver(): ReceiverService.WithRawResponse

        fun quotes(): QuoteService.WithRawResponse

        fun invitations(): InvitationService.WithRawResponse

        fun sandbox(): SandboxService.WithRawResponse
    }
}
