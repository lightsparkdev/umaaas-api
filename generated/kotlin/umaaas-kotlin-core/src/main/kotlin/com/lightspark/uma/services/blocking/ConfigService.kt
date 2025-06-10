// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.blocking

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.config.ConfigRetrieveParams
import com.lightspark.uma.models.config.ConfigUpdateParams
import com.lightspark.uma.models.config.PlatformConfig

interface ConfigService {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /** Retrieve the current platform configuration */
    fun retrieve(
        params: ConfigRetrieveParams = ConfigRetrieveParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): PlatformConfig

    /** @see [retrieve] */
    fun retrieve(requestOptions: RequestOptions): PlatformConfig =
        retrieve(ConfigRetrieveParams.none(), requestOptions)

    /** Update the platform configuration settings */
    fun update(
        params: ConfigUpdateParams = ConfigUpdateParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): PlatformConfig

    /** @see [update] */
    fun update(requestOptions: RequestOptions): PlatformConfig =
        update(ConfigUpdateParams.none(), requestOptions)

    /** A view of [ConfigService] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `get /config`, but is otherwise the same as
         * [ConfigService.retrieve].
         */
        @MustBeClosed
        fun retrieve(
            params: ConfigRetrieveParams = ConfigRetrieveParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<PlatformConfig>

        /** @see [retrieve] */
        @MustBeClosed
        fun retrieve(requestOptions: RequestOptions): HttpResponseFor<PlatformConfig> =
            retrieve(ConfigRetrieveParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `patch /config`, but is otherwise the same as
         * [ConfigService.update].
         */
        @MustBeClosed
        fun update(
            params: ConfigUpdateParams = ConfigUpdateParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<PlatformConfig>

        /** @see [update] */
        @MustBeClosed
        fun update(requestOptions: RequestOptions): HttpResponseFor<PlatformConfig> =
            update(ConfigUpdateParams.none(), requestOptions)
    }
}
