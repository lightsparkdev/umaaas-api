// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.sandbox.SandboxReceivePaymentParams
import com.lightspark.uma.models.sandbox.SandboxSendFundsParams
import com.lightspark.uma.models.transactions.IncomingTransaction
import com.lightspark.uma.models.transactions.OutgoingTransaction

interface SandboxServiceAsync {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /**
     * Simulate sending payment from an sandbox uma address to a platform user to test payment
     * receive. This endpoint is only for the sandbox environment and will fail for production
     * platforms/keys.
     */
    suspend fun receivePayment(
        params: SandboxReceivePaymentParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): IncomingTransaction

    /**
     * Simulate sending funds to the bank account as instructed in the quote. This endpoint is only
     * for the sandbox environment and will fail for production platforms/keys.
     */
    suspend fun sendFunds(
        params: SandboxSendFundsParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): OutgoingTransaction

    /**
     * A view of [SandboxServiceAsync] that provides access to raw HTTP responses for each method.
     */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `post /sandbox/receive`, but is otherwise the same as
         * [SandboxServiceAsync.receivePayment].
         */
        @MustBeClosed
        suspend fun receivePayment(
            params: SandboxReceivePaymentParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<IncomingTransaction>

        /**
         * Returns a raw HTTP response for `post /sandbox/send`, but is otherwise the same as
         * [SandboxServiceAsync.sendFunds].
         */
        @MustBeClosed
        suspend fun sendFunds(
            params: SandboxSendFundsParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<OutgoingTransaction>
    }
}
