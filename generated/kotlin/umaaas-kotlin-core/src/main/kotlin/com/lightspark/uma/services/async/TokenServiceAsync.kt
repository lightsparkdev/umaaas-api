// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponse
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.tokens.ApiToken
import com.lightspark.uma.models.tokens.TokenCreateParams
import com.lightspark.uma.models.tokens.TokenDeleteParams
import com.lightspark.uma.models.tokens.TokenListPageAsync
import com.lightspark.uma.models.tokens.TokenListParams
import com.lightspark.uma.models.tokens.TokenRetrieveParams

interface TokenServiceAsync {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /** Create a new API token to access the UMAaaS APIs. */
    suspend fun create(
        params: TokenCreateParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): ApiToken

    /** Retrieve an API token by their system-generated ID */
    suspend fun retrieve(
        tokenId: String,
        params: TokenRetrieveParams = TokenRetrieveParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): ApiToken = retrieve(params.toBuilder().tokenId(tokenId).build(), requestOptions)

    /** @see [retrieve] */
    suspend fun retrieve(
        params: TokenRetrieveParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): ApiToken

    /** @see [retrieve] */
    suspend fun retrieve(tokenId: String, requestOptions: RequestOptions): ApiToken =
        retrieve(tokenId, TokenRetrieveParams.none(), requestOptions)

    /**
     * Retrieve a list of API tokens with optional filtering parameters. Returns all tokens that
     * match the specified filters. If no filters are provided, returns all tokens (paginated).
     */
    suspend fun list(
        params: TokenListParams = TokenListParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): TokenListPageAsync

    /** @see [list] */
    suspend fun list(requestOptions: RequestOptions): TokenListPageAsync =
        list(TokenListParams.none(), requestOptions)

    /** Delete an API token by their system-generated ID */
    suspend fun delete(
        tokenId: String,
        params: TokenDeleteParams = TokenDeleteParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ) = delete(params.toBuilder().tokenId(tokenId).build(), requestOptions)

    /** @see [delete] */
    suspend fun delete(
        params: TokenDeleteParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    )

    /** @see [delete] */
    suspend fun delete(tokenId: String, requestOptions: RequestOptions) =
        delete(tokenId, TokenDeleteParams.none(), requestOptions)

    /** A view of [TokenServiceAsync] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `post /tokens`, but is otherwise the same as
         * [TokenServiceAsync.create].
         */
        @MustBeClosed
        suspend fun create(
            params: TokenCreateParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<ApiToken>

        /**
         * Returns a raw HTTP response for `get /tokens/{tokenId}`, but is otherwise the same as
         * [TokenServiceAsync.retrieve].
         */
        @MustBeClosed
        suspend fun retrieve(
            tokenId: String,
            params: TokenRetrieveParams = TokenRetrieveParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<ApiToken> =
            retrieve(params.toBuilder().tokenId(tokenId).build(), requestOptions)

        /** @see [retrieve] */
        @MustBeClosed
        suspend fun retrieve(
            params: TokenRetrieveParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<ApiToken>

        /** @see [retrieve] */
        @MustBeClosed
        suspend fun retrieve(
            tokenId: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<ApiToken> = retrieve(tokenId, TokenRetrieveParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `get /tokens`, but is otherwise the same as
         * [TokenServiceAsync.list].
         */
        @MustBeClosed
        suspend fun list(
            params: TokenListParams = TokenListParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<TokenListPageAsync>

        /** @see [list] */
        @MustBeClosed
        suspend fun list(requestOptions: RequestOptions): HttpResponseFor<TokenListPageAsync> =
            list(TokenListParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `delete /tokens/{tokenId}`, but is otherwise the same as
         * [TokenServiceAsync.delete].
         */
        @MustBeClosed
        suspend fun delete(
            tokenId: String,
            params: TokenDeleteParams = TokenDeleteParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponse = delete(params.toBuilder().tokenId(tokenId).build(), requestOptions)

        /** @see [delete] */
        @MustBeClosed
        suspend fun delete(
            params: TokenDeleteParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponse

        /** @see [delete] */
        @MustBeClosed
        suspend fun delete(tokenId: String, requestOptions: RequestOptions): HttpResponse =
            delete(tokenId, TokenDeleteParams.none(), requestOptions)
    }
}
