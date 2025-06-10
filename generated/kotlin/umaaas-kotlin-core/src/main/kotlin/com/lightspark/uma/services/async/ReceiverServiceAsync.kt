// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.receiver.ReceiverLookupParams
import com.lightspark.uma.models.receiver.ReceiverLookupResponse

interface ReceiverServiceAsync {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /**
     * Lookup a receiving UMA address to determine supported currencies and exchange rates. This
     * endpoint helps platforms determine what currencies they can send to a given UMA address.
     */
    suspend fun lookup(
        receiverUmaAddress: String,
        params: ReceiverLookupParams = ReceiverLookupParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): ReceiverLookupResponse =
        lookup(params.toBuilder().receiverUmaAddress(receiverUmaAddress).build(), requestOptions)

    /** @see [lookup] */
    suspend fun lookup(
        params: ReceiverLookupParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): ReceiverLookupResponse

    /** @see [lookup] */
    suspend fun lookup(
        receiverUmaAddress: String,
        requestOptions: RequestOptions,
    ): ReceiverLookupResponse =
        lookup(receiverUmaAddress, ReceiverLookupParams.none(), requestOptions)

    /**
     * A view of [ReceiverServiceAsync] that provides access to raw HTTP responses for each method.
     */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `get /receiver/{receiverUmaAddress}`, but is otherwise
         * the same as [ReceiverServiceAsync.lookup].
         */
        @MustBeClosed
        suspend fun lookup(
            receiverUmaAddress: String,
            params: ReceiverLookupParams = ReceiverLookupParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<ReceiverLookupResponse> =
            lookup(
                params.toBuilder().receiverUmaAddress(receiverUmaAddress).build(),
                requestOptions,
            )

        /** @see [lookup] */
        @MustBeClosed
        suspend fun lookup(
            params: ReceiverLookupParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<ReceiverLookupResponse>

        /** @see [lookup] */
        @MustBeClosed
        suspend fun lookup(
            receiverUmaAddress: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<ReceiverLookupResponse> =
            lookup(receiverUmaAddress, ReceiverLookupParams.none(), requestOptions)
    }
}
