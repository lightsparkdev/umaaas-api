// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.config.ConfigRetrieveParams
import com.lightspark.uma.models.config.ConfigUpdateParams
import com.lightspark.uma.models.config.PlatformConfig

interface ConfigServiceAsync {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /** Retrieve the current platform configuration */
    suspend fun retrieve(
        params: ConfigRetrieveParams = ConfigRetrieveParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): PlatformConfig

    /** @see [retrieve] */
    suspend fun retrieve(requestOptions: RequestOptions): PlatformConfig =
        retrieve(ConfigRetrieveParams.none(), requestOptions)

    /** Update the platform configuration settings */
    suspend fun update(
        params: ConfigUpdateParams = ConfigUpdateParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): PlatformConfig

    /** @see [update] */
    suspend fun update(requestOptions: RequestOptions): PlatformConfig =
        update(ConfigUpdateParams.none(), requestOptions)

    /**
     * A view of [ConfigServiceAsync] that provides access to raw HTTP responses for each method.
     */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `get /config`, but is otherwise the same as
         * [ConfigServiceAsync.retrieve].
         */
        @MustBeClosed
        suspend fun retrieve(
            params: ConfigRetrieveParams = ConfigRetrieveParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<PlatformConfig>

        /** @see [retrieve] */
        @MustBeClosed
        suspend fun retrieve(requestOptions: RequestOptions): HttpResponseFor<PlatformConfig> =
            retrieve(ConfigRetrieveParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `patch /config`, but is otherwise the same as
         * [ConfigServiceAsync.update].
         */
        @MustBeClosed
        suspend fun update(
            params: ConfigUpdateParams = ConfigUpdateParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<PlatformConfig>

        /** @see [update] */
        @MustBeClosed
        suspend fun update(requestOptions: RequestOptions): HttpResponseFor<PlatformConfig> =
            update(ConfigUpdateParams.none(), requestOptions)
    }
}
