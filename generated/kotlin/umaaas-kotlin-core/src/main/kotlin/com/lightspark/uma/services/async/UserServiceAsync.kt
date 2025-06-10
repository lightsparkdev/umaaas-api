// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.users.User
import com.lightspark.uma.models.users.UserCreateParams
import com.lightspark.uma.models.users.UserDeleteParams
import com.lightspark.uma.models.users.UserListPageAsync
import com.lightspark.uma.models.users.UserListParams
import com.lightspark.uma.models.users.UserRetrieveParams
import com.lightspark.uma.models.users.UserUpdateParams
import com.lightspark.uma.services.async.users.BulkServiceAsync

interface UserServiceAsync {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    fun bulk(): BulkServiceAsync

    /** Register a new user in the system with UMA address and bank account information */
    suspend fun create(
        params: UserCreateParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): User

    /** Retrieve a user by their system-generated ID */
    suspend fun retrieve(
        userId: String,
        params: UserRetrieveParams = UserRetrieveParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): User = retrieve(params.toBuilder().userId(userId).build(), requestOptions)

    /** @see [retrieve] */
    suspend fun retrieve(
        params: UserRetrieveParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): User

    /** @see [retrieve] */
    suspend fun retrieve(userId: String, requestOptions: RequestOptions): User =
        retrieve(userId, UserRetrieveParams.none(), requestOptions)

    /** Update a user's metadata by their system-generated ID */
    suspend fun update(
        userId: String,
        params: UserUpdateParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): User = update(params.toBuilder().userId(userId).build(), requestOptions)

    /** @see [update] */
    suspend fun update(
        params: UserUpdateParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): User

    /**
     * Retrieve a list of users with optional filtering parameters. Returns all users that match the
     * specified filters. If no filters are provided, returns all users (paginated).
     */
    suspend fun list(
        params: UserListParams = UserListParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): UserListPageAsync

    /** @see [list] */
    suspend fun list(requestOptions: RequestOptions): UserListPageAsync =
        list(UserListParams.none(), requestOptions)

    /** Delete a user by their system-generated ID */
    suspend fun delete(
        userId: String,
        params: UserDeleteParams = UserDeleteParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): User = delete(params.toBuilder().userId(userId).build(), requestOptions)

    /** @see [delete] */
    suspend fun delete(
        params: UserDeleteParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): User

    /** @see [delete] */
    suspend fun delete(userId: String, requestOptions: RequestOptions): User =
        delete(userId, UserDeleteParams.none(), requestOptions)

    /** A view of [UserServiceAsync] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        fun bulk(): BulkServiceAsync.WithRawResponse

        /**
         * Returns a raw HTTP response for `post /users`, but is otherwise the same as
         * [UserServiceAsync.create].
         */
        @MustBeClosed
        suspend fun create(
            params: UserCreateParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<User>

        /**
         * Returns a raw HTTP response for `get /users/{userId}`, but is otherwise the same as
         * [UserServiceAsync.retrieve].
         */
        @MustBeClosed
        suspend fun retrieve(
            userId: String,
            params: UserRetrieveParams = UserRetrieveParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<User> =
            retrieve(params.toBuilder().userId(userId).build(), requestOptions)

        /** @see [retrieve] */
        @MustBeClosed
        suspend fun retrieve(
            params: UserRetrieveParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<User>

        /** @see [retrieve] */
        @MustBeClosed
        suspend fun retrieve(
            userId: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<User> = retrieve(userId, UserRetrieveParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `patch /users/{userId}`, but is otherwise the same as
         * [UserServiceAsync.update].
         */
        @MustBeClosed
        suspend fun update(
            userId: String,
            params: UserUpdateParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<User> = update(params.toBuilder().userId(userId).build(), requestOptions)

        /** @see [update] */
        @MustBeClosed
        suspend fun update(
            params: UserUpdateParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<User>

        /**
         * Returns a raw HTTP response for `get /users`, but is otherwise the same as
         * [UserServiceAsync.list].
         */
        @MustBeClosed
        suspend fun list(
            params: UserListParams = UserListParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<UserListPageAsync>

        /** @see [list] */
        @MustBeClosed
        suspend fun list(requestOptions: RequestOptions): HttpResponseFor<UserListPageAsync> =
            list(UserListParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `delete /users/{userId}`, but is otherwise the same as
         * [UserServiceAsync.delete].
         */
        @MustBeClosed
        suspend fun delete(
            userId: String,
            params: UserDeleteParams = UserDeleteParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<User> = delete(params.toBuilder().userId(userId).build(), requestOptions)

        /** @see [delete] */
        @MustBeClosed
        suspend fun delete(
            params: UserDeleteParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<User>

        /** @see [delete] */
        @MustBeClosed
        suspend fun delete(userId: String, requestOptions: RequestOptions): HttpResponseFor<User> =
            delete(userId, UserDeleteParams.none(), requestOptions)
    }
}
