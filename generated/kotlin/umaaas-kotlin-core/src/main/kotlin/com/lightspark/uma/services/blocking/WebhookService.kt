// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.webhooks.WebhookSendTestParams
import com.lightspark.uma.models.webhooks.WebhookSendTestResponse

interface WebhookService {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /** Send a test webhook to the configured endpoint */
    fun sendTest(
        params: WebhookSendTestParams = WebhookSendTestParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): WebhookSendTestResponse

    /** @see [sendTest] */
    fun sendTest(requestOptions: RequestOptions): WebhookSendTestResponse =
        sendTest(WebhookSendTestParams.none(), requestOptions)

    /** A view of [WebhookService] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `post /webhooks/test`, but is otherwise the same as
         * [WebhookService.sendTest].
         */
        @MustBeClosed
        fun sendTest(
            params: WebhookSendTestParams = WebhookSendTestParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<WebhookSendTestResponse>

        /** @see [sendTest] */
        @MustBeClosed
        fun sendTest(requestOptions: RequestOptions): HttpResponseFor<WebhookSendTestResponse> =
            sendTest(WebhookSendTestParams.none(), requestOptions)
    }
}
