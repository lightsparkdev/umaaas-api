package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.CreateQuote422Response
import com.lightspark.umaaas.models.CreateQuoteRequest
import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.LookupUma200Response
import com.lightspark.umaaas.models.Quote

interface SendingPaymentsApi {
    /**
     * POST quotes
     * Create a payment quote
     * Generate a quote for a payment from one UMA address to another. The quote locks in exchange rates and fees for a set period of time and provides payment instructions that can be used to execute the payment.  Depending on the &#x60;lockedCurrencySide&#x60; parameter, either the sending amount or  receiving amount will be locked.  The returned quote includes payment instructions with the banking details needed to execute the payment and fulfill the quote. These instructions must be followed precisely, including any reference codes provided. 
     * Responses:
     *  - 201: Quote created successfully. The response includes payment instructions that the client can use to execute the payment through their banking provider. 
     *  - 400: Bad request - Missing or invalid parameters
     *  - 401: Unauthorized
     *  - 422: Unprocessable Entity - Additional counterparty information required, or the payment cannot be completed for another reason. 
     *
     * @param createQuoteRequest 
     * @return [Quote]
     */
    @POST("quotes")
    suspend fun createQuote(@Body createQuoteRequest: CreateQuoteRequest): Response<Quote>

    /**
     * GET quotes/{quoteId}
     * Get quote by ID
     * Retrieve a quote by its ID. If the quote has been settled, it will include  the transaction ID. This allows clients to track the full lifecycle of a payment from quote creation to settlement. 
     * Responses:
     *  - 200: Quote retrieved successfully
     *  - 401: Unauthorized
     *  - 404: Quote not found
     *
     * @param quoteId ID of the quote to retrieve
     * @return [Quote]
     */
    @GET("quotes/{quoteId}")
    suspend fun getQuoteById(@Path("quoteId") quoteId: kotlin.String): Response<Quote>

    /**
     * GET receiver/{receiverUmaAddress}
     * Look up a UMA address for payment
     * Lookup a receiving UMA address to determine supported currencies and exchange rates. This endpoint helps platforms determine what currencies they can send to a given UMA address. 
     * Responses:
     *  - 200: Successful lookup
     *  - 400: Bad request - Missing or invalid parameters
     *  - 401: Unauthorized
     *  - 404: UMA address not found
     *
     * @param receiverUmaAddress UMA address of the intended recipient
     * @param senderUmaAddress UMA address of the sender (optional if userId is provided) (optional)
     * @param userId System ID of the sender (optional if senderUmaAddress is provided) (optional)
     * @return [LookupUma200Response]
     */
    @GET("receiver/{receiverUmaAddress}")
    suspend fun lookupUma(@Path("receiverUmaAddress") receiverUmaAddress: kotlin.String, @Query("senderUmaAddress") senderUmaAddress: kotlin.String? = null, @Query("userId") userId: kotlin.String? = null): Response<LookupUma200Response>

}
