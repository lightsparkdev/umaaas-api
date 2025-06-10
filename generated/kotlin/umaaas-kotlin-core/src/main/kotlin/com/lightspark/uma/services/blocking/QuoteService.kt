// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.quotes.Quote
import com.lightspark.uma.models.quotes.QuoteCreateParams
import com.lightspark.uma.models.quotes.QuoteRetrieveParams

interface QuoteService {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /**
     * Generate a quote for a payment from one UMA address to another. The quote locks in exchange
     * rates and fees for a set period of time and provides payment instructions that can be used to
     * execute the payment.
     *
     * Depending on the `lockedCurrencySide` parameter, either the sending amount or receiving
     * amount will be locked.
     *
     * The returned quote includes payment instructions with the banking details needed to execute
     * the payment and fulfill the quote. These instructions must be followed precisely, including
     * any reference codes provided.
     */
    fun create(
        params: QuoteCreateParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): Quote

    /**
     * Retrieve a quote by its ID. If the quote has been settled, it will include the transaction
     * ID. This allows clients to track the full lifecycle of a payment from quote creation to
     * settlement.
     */
    fun retrieve(
        quoteId: String,
        params: QuoteRetrieveParams = QuoteRetrieveParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): Quote = retrieve(params.toBuilder().quoteId(quoteId).build(), requestOptions)

    /** @see [retrieve] */
    fun retrieve(
        params: QuoteRetrieveParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): Quote

    /** @see [retrieve] */
    fun retrieve(quoteId: String, requestOptions: RequestOptions): Quote =
        retrieve(quoteId, QuoteRetrieveParams.none(), requestOptions)

    /** A view of [QuoteService] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `post /quotes`, but is otherwise the same as
         * [QuoteService.create].
         */
        @MustBeClosed
        fun create(
            params: QuoteCreateParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<Quote>

        /**
         * Returns a raw HTTP response for `get /quotes/{quoteId}`, but is otherwise the same as
         * [QuoteService.retrieve].
         */
        @MustBeClosed
        fun retrieve(
            quoteId: String,
            params: QuoteRetrieveParams = QuoteRetrieveParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<Quote> =
            retrieve(params.toBuilder().quoteId(quoteId).build(), requestOptions)

        /** @see [retrieve] */
        @MustBeClosed
        fun retrieve(
            params: QuoteRetrieveParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<Quote>

        /** @see [retrieve] */
        @MustBeClosed
        fun retrieve(quoteId: String, requestOptions: RequestOptions): HttpResponseFor<Quote> =
            retrieve(quoteId, QuoteRetrieveParams.none(), requestOptions)
    }
}
