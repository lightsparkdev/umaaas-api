// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.tokens

import com.lightspark.uma.core.Params
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import java.time.OffsetDateTime
import java.time.format.DateTimeFormatter
import java.util.Objects

/**
 * Retrieve a list of API tokens with optional filtering parameters. Returns all tokens that match
 * the specified filters. If no filters are provided, returns all tokens (paginated).
 */
class TokenListParams
private constructor(
    private val createdAfter: OffsetDateTime?,
    private val createdBefore: OffsetDateTime?,
    private val cursor: String?,
    private val limit: Long?,
    private val name: String?,
    private val updatedAfter: OffsetDateTime?,
    private val updatedBefore: OffsetDateTime?,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    /** Filter users created after this timestamp (inclusive) */
    fun createdAfter(): OffsetDateTime? = createdAfter

    /** Filter users created before this timestamp (inclusive) */
    fun createdBefore(): OffsetDateTime? = createdBefore

    /** Cursor for pagination (returned from previous request) */
    fun cursor(): String? = cursor

    /** Maximum number of results to return (default 20, max 100) */
    fun limit(): Long? = limit

    /** Filter by name of the token */
    fun name(): String? = name

    /** Filter users updated after this timestamp (inclusive) */
    fun updatedAfter(): OffsetDateTime? = updatedAfter

    /** Filter users updated before this timestamp (inclusive) */
    fun updatedBefore(): OffsetDateTime? = updatedBefore

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        fun none(): TokenListParams = builder().build()

        /** Returns a mutable builder for constructing an instance of [TokenListParams]. */
        fun builder() = Builder()
    }

    /** A builder for [TokenListParams]. */
    class Builder internal constructor() {

        private var createdAfter: OffsetDateTime? = null
        private var createdBefore: OffsetDateTime? = null
        private var cursor: String? = null
        private var limit: Long? = null
        private var name: String? = null
        private var updatedAfter: OffsetDateTime? = null
        private var updatedBefore: OffsetDateTime? = null
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(tokenListParams: TokenListParams) = apply {
            createdAfter = tokenListParams.createdAfter
            createdBefore = tokenListParams.createdBefore
            cursor = tokenListParams.cursor
            limit = tokenListParams.limit
            name = tokenListParams.name
            updatedAfter = tokenListParams.updatedAfter
            updatedBefore = tokenListParams.updatedBefore
            additionalHeaders = tokenListParams.additionalHeaders.toBuilder()
            additionalQueryParams = tokenListParams.additionalQueryParams.toBuilder()
        }

        /** Filter users created after this timestamp (inclusive) */
        fun createdAfter(createdAfter: OffsetDateTime?) = apply { this.createdAfter = createdAfter }

        /** Filter users created before this timestamp (inclusive) */
        fun createdBefore(createdBefore: OffsetDateTime?) = apply {
            this.createdBefore = createdBefore
        }

        /** Cursor for pagination (returned from previous request) */
        fun cursor(cursor: String?) = apply { this.cursor = cursor }

        /** Maximum number of results to return (default 20, max 100) */
        fun limit(limit: Long?) = apply { this.limit = limit }

        /**
         * Alias for [Builder.limit].
         *
         * This unboxed primitive overload exists for backwards compatibility.
         */
        fun limit(limit: Long) = limit(limit as Long?)

        /** Filter by name of the token */
        fun name(name: String?) = apply { this.name = name }

        /** Filter users updated after this timestamp (inclusive) */
        fun updatedAfter(updatedAfter: OffsetDateTime?) = apply { this.updatedAfter = updatedAfter }

        /** Filter users updated before this timestamp (inclusive) */
        fun updatedBefore(updatedBefore: OffsetDateTime?) = apply {
            this.updatedBefore = updatedBefore
        }

        fun additionalHeaders(additionalHeaders: Headers) = apply {
            this.additionalHeaders.clear()
            putAllAdditionalHeaders(additionalHeaders)
        }

        fun additionalHeaders(additionalHeaders: Map<String, Iterable<String>>) = apply {
            this.additionalHeaders.clear()
            putAllAdditionalHeaders(additionalHeaders)
        }

        fun putAdditionalHeader(name: String, value: String) = apply {
            additionalHeaders.put(name, value)
        }

        fun putAdditionalHeaders(name: String, values: Iterable<String>) = apply {
            additionalHeaders.put(name, values)
        }

        fun putAllAdditionalHeaders(additionalHeaders: Headers) = apply {
            this.additionalHeaders.putAll(additionalHeaders)
        }

        fun putAllAdditionalHeaders(additionalHeaders: Map<String, Iterable<String>>) = apply {
            this.additionalHeaders.putAll(additionalHeaders)
        }

        fun replaceAdditionalHeaders(name: String, value: String) = apply {
            additionalHeaders.replace(name, value)
        }

        fun replaceAdditionalHeaders(name: String, values: Iterable<String>) = apply {
            additionalHeaders.replace(name, values)
        }

        fun replaceAllAdditionalHeaders(additionalHeaders: Headers) = apply {
            this.additionalHeaders.replaceAll(additionalHeaders)
        }

        fun replaceAllAdditionalHeaders(additionalHeaders: Map<String, Iterable<String>>) = apply {
            this.additionalHeaders.replaceAll(additionalHeaders)
        }

        fun removeAdditionalHeaders(name: String) = apply { additionalHeaders.remove(name) }

        fun removeAllAdditionalHeaders(names: Set<String>) = apply {
            additionalHeaders.removeAll(names)
        }

        fun additionalQueryParams(additionalQueryParams: QueryParams) = apply {
            this.additionalQueryParams.clear()
            putAllAdditionalQueryParams(additionalQueryParams)
        }

        fun additionalQueryParams(additionalQueryParams: Map<String, Iterable<String>>) = apply {
            this.additionalQueryParams.clear()
            putAllAdditionalQueryParams(additionalQueryParams)
        }

        fun putAdditionalQueryParam(key: String, value: String) = apply {
            additionalQueryParams.put(key, value)
        }

        fun putAdditionalQueryParams(key: String, values: Iterable<String>) = apply {
            additionalQueryParams.put(key, values)
        }

        fun putAllAdditionalQueryParams(additionalQueryParams: QueryParams) = apply {
            this.additionalQueryParams.putAll(additionalQueryParams)
        }

        fun putAllAdditionalQueryParams(additionalQueryParams: Map<String, Iterable<String>>) =
            apply {
                this.additionalQueryParams.putAll(additionalQueryParams)
            }

        fun replaceAdditionalQueryParams(key: String, value: String) = apply {
            additionalQueryParams.replace(key, value)
        }

        fun replaceAdditionalQueryParams(key: String, values: Iterable<String>) = apply {
            additionalQueryParams.replace(key, values)
        }

        fun replaceAllAdditionalQueryParams(additionalQueryParams: QueryParams) = apply {
            this.additionalQueryParams.replaceAll(additionalQueryParams)
        }

        fun replaceAllAdditionalQueryParams(additionalQueryParams: Map<String, Iterable<String>>) =
            apply {
                this.additionalQueryParams.replaceAll(additionalQueryParams)
            }

        fun removeAdditionalQueryParams(key: String) = apply { additionalQueryParams.remove(key) }

        fun removeAllAdditionalQueryParams(keys: Set<String>) = apply {
            additionalQueryParams.removeAll(keys)
        }

        /**
         * Returns an immutable instance of [TokenListParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         */
        fun build(): TokenListParams =
            TokenListParams(
                createdAfter,
                createdBefore,
                cursor,
                limit,
                name,
                updatedAfter,
                updatedBefore,
                additionalHeaders.build(),
                additionalQueryParams.build(),
            )
    }

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams =
        QueryParams.builder()
            .apply {
                createdAfter?.let {
                    put("createdAfter", DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(it))
                }
                createdBefore?.let {
                    put("createdBefore", DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(it))
                }
                cursor?.let { put("cursor", it) }
                limit?.let { put("limit", it.toString()) }
                name?.let { put("name", it) }
                updatedAfter?.let {
                    put("updatedAfter", DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(it))
                }
                updatedBefore?.let {
                    put("updatedBefore", DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(it))
                }
                putAll(additionalQueryParams)
            }
            .build()

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is TokenListParams && createdAfter == other.createdAfter && createdBefore == other.createdBefore && cursor == other.cursor && limit == other.limit && name == other.name && updatedAfter == other.updatedAfter && updatedBefore == other.updatedBefore && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(createdAfter, createdBefore, cursor, limit, name, updatedAfter, updatedBefore, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "TokenListParams{createdAfter=$createdAfter, createdBefore=$createdBefore, cursor=$cursor, limit=$limit, name=$name, updatedAfter=$updatedAfter, updatedBefore=$updatedBefore, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
