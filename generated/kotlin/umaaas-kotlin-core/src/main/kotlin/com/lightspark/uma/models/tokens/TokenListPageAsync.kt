// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.tokens

import com.lightspark.uma.core.AutoPagerAsync
import com.lightspark.uma.core.PageAsync
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.services.async.TokenServiceAsync
import java.util.Objects

/** @see [TokenServiceAsync.list] */
class TokenListPageAsync
private constructor(
    private val service: TokenServiceAsync,
    private val params: TokenListParams,
    private val response: TokenListPageResponse,
) : PageAsync<ApiToken> {

    /**
     * Delegates to [TokenListPageResponse], but gracefully handles missing data.
     *
     * @see [TokenListPageResponse.data]
     */
    fun data(): List<ApiToken> = response._data().getNullable("data") ?: emptyList()

    /**
     * Delegates to [TokenListPageResponse], but gracefully handles missing data.
     *
     * @see [TokenListPageResponse.nextCursor]
     */
    fun nextCursor(): String? = response._nextCursor().getNullable("nextCursor")

    /**
     * Delegates to [TokenListPageResponse], but gracefully handles missing data.
     *
     * @see [TokenListPageResponse.totalCount]
     */
    fun totalCount(): Long? = response._totalCount().getNullable("totalCount")

    /**
     * Delegates to [TokenListPageResponse], but gracefully handles missing data.
     *
     * @see [TokenListPageResponse.hasMore]
     */
    fun hasMore(): Boolean? = response._hasMore().getNullable("hasMore")

    override fun items(): List<ApiToken> = data()

    override fun hasNextPage(): Boolean = items().isNotEmpty() && nextCursor() != null

    fun nextPageParams(): TokenListParams {
        val nextCursor =
            nextCursor() ?: throw IllegalStateException("Cannot construct next page params")
        return params.toBuilder().cursor(nextCursor).build()
    }

    override suspend fun nextPage(): TokenListPageAsync = service.list(nextPageParams())

    fun autoPager(): AutoPagerAsync<ApiToken> = AutoPagerAsync.from(this)

    /** The parameters that were used to request this page. */
    fun params(): TokenListParams = params

    /** The response that this page was parsed from. */
    fun response(): TokenListPageResponse = response

    fun toBuilder() = Builder().from(this)

    companion object {

        /**
         * Returns a mutable builder for constructing an instance of [TokenListPageAsync].
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

    /** A builder for [TokenListPageAsync]. */
    class Builder internal constructor() {

        private var service: TokenServiceAsync? = null
        private var params: TokenListParams? = null
        private var response: TokenListPageResponse? = null

        internal fun from(tokenListPageAsync: TokenListPageAsync) = apply {
            service = tokenListPageAsync.service
            params = tokenListPageAsync.params
            response = tokenListPageAsync.response
        }

        fun service(service: TokenServiceAsync) = apply { this.service = service }

        /** The parameters that were used to request this page. */
        fun params(params: TokenListParams) = apply { this.params = params }

        /** The response that this page was parsed from. */
        fun response(response: TokenListPageResponse) = apply { this.response = response }

        /**
         * Returns an immutable instance of [TokenListPageAsync].
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
        fun build(): TokenListPageAsync =
            TokenListPageAsync(
                checkRequired("service", service),
                checkRequired("params", params),
                checkRequired("response", response),
            )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is TokenListPageAsync && service == other.service && params == other.params && response == other.response /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(service, params, response) /* spotless:on */

    override fun toString() =
        "TokenListPageAsync{service=$service, params=$params, response=$response}"
}
