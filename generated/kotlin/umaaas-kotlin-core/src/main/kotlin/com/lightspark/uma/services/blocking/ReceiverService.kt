// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.receiver.ReceiverLookupParams
import com.lightspark.uma.models.receiver.ReceiverLookupResponse

interface ReceiverService {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /**
     * Lookup a receiving UMA address to determine supported currencies and exchange rates. This
     * endpoint helps platforms determine what currencies they can send to a given UMA address.
     */
    fun lookup(
        receiverUmaAddress: String,
        params: ReceiverLookupParams = ReceiverLookupParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): ReceiverLookupResponse =
        lookup(params.toBuilder().receiverUmaAddress(receiverUmaAddress).build(), requestOptions)

    /** @see [lookup] */
    fun lookup(
        params: ReceiverLookupParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): ReceiverLookupResponse

    /** @see [lookup] */
    fun lookup(receiverUmaAddress: String, requestOptions: RequestOptions): ReceiverLookupResponse =
        lookup(receiverUmaAddress, ReceiverLookupParams.none(), requestOptions)

    /** A view of [ReceiverService] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `get /receiver/{receiverUmaAddress}`, but is otherwise
         * the same as [ReceiverService.lookup].
         */
        @MustBeClosed
        fun lookup(
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
        fun lookup(
            params: ReceiverLookupParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<ReceiverLookupResponse>

        /** @see [lookup] */
        @MustBeClosed
        fun lookup(
            receiverUmaAddress: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<ReceiverLookupResponse> =
            lookup(receiverUmaAddress, ReceiverLookupParams.none(), requestOptions)
    }
}
