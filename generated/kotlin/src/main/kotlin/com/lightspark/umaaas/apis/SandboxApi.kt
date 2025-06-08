package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.IncomingTransaction
import com.lightspark.umaaas.models.OutgoingTransaction
import com.lightspark.umaaas.models.SandboxReceiveRequest
import com.lightspark.umaaas.models.SandboxSendRequest

interface SandboxApi {
    /**
     * POST sandbox/receive
     * Simulate payment send to test receiving a payment
     * Simulate sending payment from an sandbox uma address to a platform user to test payment receive. This endpoint is only for the sandbox environment and will fail for production platforms/keys. 
     * Responses:
     *  - 200: Payment triggered successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *  - 403: Forbidden - request was made with a production platform token
     *  - 404: Sender or receiver not found
     *
     * @param sandboxReceiveRequest 
     * @return [IncomingTransaction]
     */
    @POST("sandbox/receive")
    suspend fun sandboxReceive(@Body sandboxReceiveRequest: SandboxReceiveRequest): Response<IncomingTransaction>

    /**
     * POST sandbox/send
     * Simulate sending funds
     * Simulate sending funds to the bank account as instructed in the quote.  This endpoint is only for the sandbox environment and will fail for production platforms/keys. 
     * Responses:
     *  - 200: Funds received successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *  - 403: Forbidden - request was made with a production platform token
     *  - 404: Reference not found
     *
     * @param sandboxSendRequest 
     * @return [OutgoingTransaction]
     */
    @POST("sandbox/send")
    suspend fun sandboxSend(@Body sandboxSendRequest: SandboxSendRequest): Response<OutgoingTransaction>

}
