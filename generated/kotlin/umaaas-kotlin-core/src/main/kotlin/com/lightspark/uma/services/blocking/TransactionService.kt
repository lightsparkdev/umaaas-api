// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.transactions.IncomingTransaction
import com.lightspark.uma.models.transactions.Transaction
import com.lightspark.uma.models.transactions.TransactionApproveParams
import com.lightspark.uma.models.transactions.TransactionListPage
import com.lightspark.uma.models.transactions.TransactionListParams
import com.lightspark.uma.models.transactions.TransactionRejectParams
import com.lightspark.uma.models.transactions.TransactionRetrieveParams

interface TransactionService {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /** Retrieve detailed information about a specific transaction */
    fun retrieve(
        transactionId: String,
        params: TransactionRetrieveParams = TransactionRetrieveParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): Transaction =
        retrieve(params.toBuilder().transactionId(transactionId).build(), requestOptions)

    /** @see [retrieve] */
    fun retrieve(
        params: TransactionRetrieveParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): Transaction

    /** @see [retrieve] */
    fun retrieve(transactionId: String, requestOptions: RequestOptions): Transaction =
        retrieve(transactionId, TransactionRetrieveParams.none(), requestOptions)

    /**
     * Retrieve a paginated list of transactions with optional filtering. The transactions can be
     * filtered by user ID, platform user ID, UMA address, date range, status, and transaction type.
     */
    fun list(
        params: TransactionListParams = TransactionListParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): TransactionListPage

    /** @see [list] */
    fun list(requestOptions: RequestOptions): TransactionListPage =
        list(TransactionListParams.none(), requestOptions)

    /**
     * Approve a pending incoming payment that was previously acknowledged with a 202 response. This
     * endpoint allows platforms to asynchronously approve payments after async processing.
     */
    fun approve(
        transactionId: String,
        params: TransactionApproveParams = TransactionApproveParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): IncomingTransaction =
        approve(params.toBuilder().transactionId(transactionId).build(), requestOptions)

    /** @see [approve] */
    fun approve(
        params: TransactionApproveParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): IncomingTransaction

    /** @see [approve] */
    fun approve(transactionId: String, requestOptions: RequestOptions): IncomingTransaction =
        approve(transactionId, TransactionApproveParams.none(), requestOptions)

    /**
     * Reject a pending incoming payment that was previously acknowledged with a 202 response. This
     * endpoint allows platforms to asynchronously reject payments after additional processing.
     */
    fun reject(
        transactionId: String,
        params: TransactionRejectParams = TransactionRejectParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): IncomingTransaction =
        reject(params.toBuilder().transactionId(transactionId).build(), requestOptions)

    /** @see [reject] */
    fun reject(
        params: TransactionRejectParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): IncomingTransaction

    /** @see [reject] */
    fun reject(transactionId: String, requestOptions: RequestOptions): IncomingTransaction =
        reject(transactionId, TransactionRejectParams.none(), requestOptions)

    /**
     * A view of [TransactionService] that provides access to raw HTTP responses for each method.
     */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `get /transactions/{transactionId}`, but is otherwise the
         * same as [TransactionService.retrieve].
         */
        @MustBeClosed
        fun retrieve(
            transactionId: String,
            params: TransactionRetrieveParams = TransactionRetrieveParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<Transaction> =
            retrieve(params.toBuilder().transactionId(transactionId).build(), requestOptions)

        /** @see [retrieve] */
        @MustBeClosed
        fun retrieve(
            params: TransactionRetrieveParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<Transaction>

        /** @see [retrieve] */
        @MustBeClosed
        fun retrieve(
            transactionId: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<Transaction> =
            retrieve(transactionId, TransactionRetrieveParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `get /transactions`, but is otherwise the same as
         * [TransactionService.list].
         */
        @MustBeClosed
        fun list(
            params: TransactionListParams = TransactionListParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<TransactionListPage>

        /** @see [list] */
        @MustBeClosed
        fun list(requestOptions: RequestOptions): HttpResponseFor<TransactionListPage> =
            list(TransactionListParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `post /transactions/{transactionId}/approve`, but is
         * otherwise the same as [TransactionService.approve].
         */
        @MustBeClosed
        fun approve(
            transactionId: String,
            params: TransactionApproveParams = TransactionApproveParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<IncomingTransaction> =
            approve(params.toBuilder().transactionId(transactionId).build(), requestOptions)

        /** @see [approve] */
        @MustBeClosed
        fun approve(
            params: TransactionApproveParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<IncomingTransaction>

        /** @see [approve] */
        @MustBeClosed
        fun approve(
            transactionId: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<IncomingTransaction> =
            approve(transactionId, TransactionApproveParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `post /transactions/{transactionId}/reject`, but is
         * otherwise the same as [TransactionService.reject].
         */
        @MustBeClosed
        fun reject(
            transactionId: String,
            params: TransactionRejectParams = TransactionRejectParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<IncomingTransaction> =
            reject(params.toBuilder().transactionId(transactionId).build(), requestOptions)

        /** @see [reject] */
        @MustBeClosed
        fun reject(
            params: TransactionRejectParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<IncomingTransaction>

        /** @see [reject] */
        @MustBeClosed
        fun reject(
            transactionId: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<IncomingTransaction> =
            reject(transactionId, TransactionRejectParams.none(), requestOptions)
    }
}
