package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.ApiToken
import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.ListTokens200Response
import com.lightspark.umaaas.models.TokenCreate

interface APITokensApi {
    /**
     * POST tokens
     * Create a new API token
     * Create a new API token to access the UMAaaS APIs.
     * Responses:
     *  - 201: API token created successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *
     * @param tokenCreate 
     * @return [ApiToken]
     */
    @POST("tokens")
    suspend fun createToken(@Body tokenCreate: TokenCreate): Response<ApiToken>

    /**
     * DELETE tokens/{tokenId}
     * Delete API token by ID
     * Delete an API token by their system-generated ID
     * Responses:
     *  - 204: API token deleted successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *  - 404: Token not found
     *
     * @param tokenId System-generated unique token identifier
     * @return [Unit]
     */
    @DELETE("tokens/{tokenId}")
    suspend fun deleteTokenById(@Path("tokenId") tokenId: kotlin.String): Response<Unit>

    /**
     * GET tokens/{tokenId}
     * Get API token by ID
     * Retrieve an API token by their system-generated ID
     * Responses:
     *  - 200: Successful operation
     *  - 401: Unauthorized
     *  - 404: Token not found
     *
     * @param tokenId System-generated unique token identifier
     * @return [ApiToken]
     */
    @GET("tokens/{tokenId}")
    suspend fun getTokenById(@Path("tokenId") tokenId: kotlin.String): Response<ApiToken>

    /**
     * GET tokens
     * List tokens
     * Retrieve a list of API tokens with optional filtering parameters. Returns all tokens that match the specified filters. If no filters are provided, returns all tokens (paginated). 
     * Responses:
     *  - 200: Successful operation
     *  - 400: Bad request - Invalid parameters
     *  - 401: Unauthorized
     *
     * @param name Filter by name of the token (optional)
     * @param createdAfter Filter users created after this timestamp (inclusive) (optional)
     * @param createdBefore Filter users created before this timestamp (inclusive) (optional)
     * @param updatedAfter Filter users updated after this timestamp (inclusive) (optional)
     * @param updatedBefore Filter users updated before this timestamp (inclusive) (optional)
     * @param limit Maximum number of results to return (default 20, max 100) (optional, default to 20)
     * @param cursor Cursor for pagination (returned from previous request) (optional)
     * @return [ListTokens200Response]
     */
    @GET("tokens")
    suspend fun listTokens(@Query("name") name: kotlin.String? = null, @Query("createdAfter") createdAfter: java.time.OffsetDateTime? = null, @Query("createdBefore") createdBefore: java.time.OffsetDateTime? = null, @Query("updatedAfter") updatedAfter: java.time.OffsetDateTime? = null, @Query("updatedBefore") updatedBefore: java.time.OffsetDateTime? = null, @Query("limit") limit: kotlin.Int? = 20, @Query("cursor") cursor: kotlin.String? = null): Response<ListTokens200Response>

}
