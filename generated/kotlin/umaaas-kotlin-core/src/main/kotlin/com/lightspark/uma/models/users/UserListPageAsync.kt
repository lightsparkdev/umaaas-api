// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.lightspark.uma.core.AutoPagerAsync
import com.lightspark.uma.core.PageAsync
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.services.async.UserServiceAsync
import java.util.Objects

/** @see [UserServiceAsync.list] */
class UserListPageAsync
private constructor(
    private val service: UserServiceAsync,
    private val params: UserListParams,
    private val response: UserListPageResponse,
) : PageAsync<User> {

    /**
     * Delegates to [UserListPageResponse], but gracefully handles missing data.
     *
     * @see [UserListPageResponse.data]
     */
    fun data(): List<User> = response._data().getNullable("data") ?: emptyList()

    /**
     * Delegates to [UserListPageResponse], but gracefully handles missing data.
     *
     * @see [UserListPageResponse.nextCursor]
     */
    fun nextCursor(): String? = response._nextCursor().getNullable("nextCursor")

    /**
     * Delegates to [UserListPageResponse], but gracefully handles missing data.
     *
     * @see [UserListPageResponse.totalCount]
     */
    fun totalCount(): Long? = response._totalCount().getNullable("totalCount")

    /**
     * Delegates to [UserListPageResponse], but gracefully handles missing data.
     *
     * @see [UserListPageResponse.hasMore]
     */
    fun hasMore(): Boolean? = response._hasMore().getNullable("hasMore")

    override fun items(): List<User> = data()

    override fun hasNextPage(): Boolean = items().isNotEmpty() && nextCursor() != null

    fun nextPageParams(): UserListParams {
        val nextCursor =
            nextCursor() ?: throw IllegalStateException("Cannot construct next page params")
        return params.toBuilder().cursor(nextCursor).build()
    }

    override suspend fun nextPage(): UserListPageAsync = service.list(nextPageParams())

    fun autoPager(): AutoPagerAsync<User> = AutoPagerAsync.from(this)

    /** The parameters that were used to request this page. */
    fun params(): UserListParams = params

    /** The response that this page was parsed from. */
    fun response(): UserListPageResponse = response

    fun toBuilder() = Builder().from(this)

    companion object {

        /**
         * Returns a mutable builder for constructing an instance of [UserListPageAsync].
         *
         * The following fields are required:
         * ```kotlin
         * .service()
         * .params()
         * .response()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [UserListPageAsync]. */
    class Builder internal constructor() {

        private var service: UserServiceAsync? = null
        private var params: UserListParams? = null
        private var response: UserListPageResponse? = null

        internal fun from(userListPageAsync: UserListPageAsync) = apply {
            service = userListPageAsync.service
            params = userListPageAsync.params
            response = userListPageAsync.response
        }

        fun service(service: UserServiceAsync) = apply { this.service = service }

        /** The parameters that were used to request this page. */
        fun params(params: UserListParams) = apply { this.params = params }

        /** The response that this page was parsed from. */
        fun response(response: UserListPageResponse) = apply { this.response = response }

        /**
         * Returns an immutable instance of [UserListPageAsync].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .service()
         * .params()
         * .response()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): UserListPageAsync =
            UserListPageAsync(
                checkRequired("service", service),
                checkRequired("params", params),
                checkRequired("response", response),
            )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is UserListPageAsync && service == other.service && params == other.params && response == other.response /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(service, params, response) /* spotless:on */

    override fun toString() =
        "UserListPageAsync{service=$service, params=$params, response=$response}"
}
