package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.ApprovePendingPaymentRequest
import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.IncomingTransaction
import com.lightspark.umaaas.models.ListTransactions200Response
import com.lightspark.umaaas.models.RejectPendingPaymentRequest
import com.lightspark.umaaas.models.Transaction
import com.lightspark.umaaas.models.TransactionStatus
import com.lightspark.umaaas.models.TransactionType

interface TransactionsApi {
    /**
     * POST transactions/{transactionId}/approve
     * Approve a pending incoming payment
     * Approve a pending incoming payment that was previously acknowledged with a 202 response. This endpoint allows platforms to asynchronously approve payments after async processing. 
     * Responses:
     *  - 200: Payment approved successfully
     *  - 400: Bad request - Invalid parameters or payment cannot be approved
     *  - 401: Unauthorized
     *  - 404: Transaction not found
     *  - 409: Conflict - Payment is not in a pending state or has already been processed or timed out.
     *
     * @param transactionId Unique identifier of the transaction to approve
     * @param approvePendingPaymentRequest  (optional)
     * @return [IncomingTransaction]
     */
    @POST("transactions/{transactionId}/approve")
    suspend fun approvePendingPayment(@Path("transactionId") transactionId: kotlin.String, @Body approvePendingPaymentRequest: ApprovePendingPaymentRequest? = null): Response<IncomingTransaction>

    /**
     * GET transactions/{transactionId}
     * Get transaction by ID
     * Retrieve detailed information about a specific transaction
     * Responses:
     *  - 200: Successful operation
     *  - 401: Unauthorized
     *  - 404: Transaction not found
     *
     * @param transactionId Unique identifier of the transaction
     * @return [Transaction]
     */
    @GET("transactions/{transactionId}")
    suspend fun getTransactionById(@Path("transactionId") transactionId: kotlin.String): Response<Transaction>


    /**
    * enum for parameter sortOrder
    */
    enum class SortOrderListTransactions(val value: kotlin.String) {
        @JsonProperty(value = "asc") asc("asc"),
        @JsonProperty(value = "desc") desc("desc")
    }

    /**
     * GET transactions
     * List transactions
     * Retrieve a paginated list of transactions with optional filtering. The transactions can be filtered by user ID, platform user ID, UMA address,  date range, status, and transaction type. 
     * Responses:
     *  - 200: Successful operation
     *  - 400: Bad request - Invalid parameters
     *  - 401: Unauthorized
     *
     * @param userId Filter by system user ID (optional)
     * @param platformUserId Filter by platform-specific user ID (optional)
     * @param umaAddress Filter by UMA address (either sender or receiver) (optional)
     * @param senderUmaAddress Filter by sender UMA address (optional)
     * @param receiverUmaAddress Filter by receiver UMA address (optional)
     * @param status Filter by transaction status (optional)
     * @param type Filter by transaction type (optional)
     * @param reference Filter by reference (optional)
     * @param startDate Filter by start date (inclusive) in ISO 8601 format (optional)
     * @param endDate Filter by end date (inclusive) in ISO 8601 format (optional)
     * @param limit Maximum number of results to return (default 20, max 100) (optional, default to 20)
     * @param cursor Cursor for pagination (returned from previous request) (optional)
     * @param sortOrder Order to sort results in (optional, default to desc)
     * @return [ListTransactions200Response]
     */
    @GET("transactions")
    suspend fun listTransactions(@Query("userId") userId: kotlin.String? = null, @Query("platformUserId") platformUserId: kotlin.String? = null, @Query("umaAddress") umaAddress: kotlin.String? = null, @Query("senderUmaAddress") senderUmaAddress: kotlin.String? = null, @Query("receiverUmaAddress") receiverUmaAddress: kotlin.String? = null, @Query("status") status: TransactionStatus? = null, @Query("type") type: TransactionType? = null, @Query("reference") reference: kotlin.String? = null, @Query("startDate") startDate: java.time.OffsetDateTime? = null, @Query("endDate") endDate: java.time.OffsetDateTime? = null, @Query("limit") limit: kotlin.Int? = 20, @Query("cursor") cursor: kotlin.String? = null, @Query("sortOrder") sortOrder: SortOrderListTransactions? = SortOrderListTransactions.desc): Response<ListTransactions200Response>

    /**
     * POST transactions/{transactionId}/reject
     * Reject a pending incoming payment
     * Reject a pending incoming payment that was previously acknowledged with a 202 response. This endpoint allows platforms to asynchronously reject payments after additional processing. 
     * Responses:
     *  - 200: Payment rejected successfully
     *  - 400: Bad request - Invalid parameters or payment cannot be rejected
     *  - 401: Unauthorized
     *  - 404: Transaction not found
     *  - 409: Conflict - Payment is not in a pending state or has already been processed or timed out.
     *
     * @param transactionId Unique identifier of the transaction to reject
     * @param rejectPendingPaymentRequest  (optional)
     * @return [IncomingTransaction]
     */
    @POST("transactions/{transactionId}/reject")
    suspend fun rejectPendingPayment(@Path("transactionId") transactionId: kotlin.String, @Body rejectPendingPaymentRequest: RejectPendingPaymentRequest? = null): Response<IncomingTransaction>

}
