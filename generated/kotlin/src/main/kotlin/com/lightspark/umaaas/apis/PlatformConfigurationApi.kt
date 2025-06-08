package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.PlatformConfig
import com.lightspark.umaaas.models.UpdatePlatformConfigRequest

interface PlatformConfigurationApi {
    /**
     * GET config
     * Get platform configuration
     * Retrieve the current platform configuration
     * Responses:
     *  - 200: Successful operation
     *  - 401: Unauthorized
     *
     * @return [PlatformConfig]
     */
    @GET("config")
    suspend fun getPlatformConfig(): Response<PlatformConfig>

    /**
     * PATCH config
     * Update platform configuration
     * Update the platform configuration settings
     * Responses:
     *  - 200: Configuration updated successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *
     * @param updatePlatformConfigRequest 
     * @return [PlatformConfig]
     */
    @PATCH("config")
    suspend fun updatePlatformConfig(@Body updatePlatformConfigRequest: UpdatePlatformConfigRequest): Response<PlatformConfig>

}
