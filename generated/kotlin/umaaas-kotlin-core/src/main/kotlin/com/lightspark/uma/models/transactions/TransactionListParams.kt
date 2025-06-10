// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.transactions

import com.fasterxml.jackson.annotation.JsonCreator
import com.lightspark.uma.core.Enum
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.core.Params
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.time.OffsetDateTime
import java.time.format.DateTimeFormatter
import java.util.Objects

/**
 * Retrieve a paginated list of transactions with optional filtering. The transactions can be
 * filtered by user ID, platform user ID, UMA address, date range, status, and transaction type.
 */
class TransactionListParams
private constructor(
    private val cursor: String?,
    private val endDate: OffsetDateTime?,
    private val limit: Long?,
    private val platformUserId: String?,
    private val receiverUmaAddress: String?,
    private val reference: String?,
    private val senderUmaAddress: String?,
    private val sortOrder: SortOrder?,
    private val startDate: OffsetDateTime?,
    private val status: TransactionStatus?,
    private val type: TransactionType?,
    private val umaAddress: String?,
    private val userId: String?,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    /** Cursor for pagination (returned from previous request) */
    fun cursor(): String? = cursor

    /** Filter by end date (inclusive) in ISO 8601 format */
    fun endDate(): OffsetDateTime? = endDate

    /** Maximum number of results to return (default 20, max 100) */
    fun limit(): Long? = limit

    /** Filter by platform-specific user ID */
    fun platformUserId(): String? = platformUserId

    /** Filter by receiver UMA address */
    fun receiverUmaAddress(): String? = receiverUmaAddress

    /** Filter by reference */
    fun reference(): String? = reference

    /** Filter by sender UMA address */
    fun senderUmaAddress(): String? = senderUmaAddress

    /** Order to sort results in */
    fun sortOrder(): SortOrder? = sortOrder

    /** Filter by start date (inclusive) in ISO 8601 format */
    fun startDate(): OffsetDateTime? = startDate

    /** Filter by transaction status */
    fun status(): TransactionStatus? = status

    /** Filter by transaction type */
    fun type(): TransactionType? = type

    /** Filter by UMA address (either sender or receiver) */
    fun umaAddress(): String? = umaAddress

    /** Filter by system user ID */
    fun userId(): String? = userId

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        fun none(): TransactionListParams = builder().build()

        /** Returns a mutable builder for constructing an instance of [TransactionListParams]. */
        fun builder() = Builder()
    }

    /** A builder for [TransactionListParams]. */
    class Builder internal constructor() {

        private var cursor: String? = null
        private var endDate: OffsetDateTime? = null
        private var limit: Long? = null
        private var platformUserId: String? = null
        private var receiverUmaAddress: String? = null
        private var reference: String? = null
        private var senderUmaAddress: String? = null
        private var sortOrder: SortOrder? = null
        private var startDate: OffsetDateTime? = null
        private var status: TransactionStatus? = null
        private var type: TransactionType? = null
        private var umaAddress: String? = null
        private var userId: String? = null
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(transactionListParams: TransactionListParams) = apply {
            cursor = transactionListParams.cursor
            endDate = transactionListParams.endDate
            limit = transactionListParams.limit
            platformUserId = transactionListParams.platformUserId
            receiverUmaAddress = transactionListParams.receiverUmaAddress
            reference = transactionListParams.reference
            senderUmaAddress = transactionListParams.senderUmaAddress
            sortOrder = transactionListParams.sortOrder
            startDate = transactionListParams.startDate
            status = transactionListParams.status
            type = transactionListParams.type
            umaAddress = transactionListParams.umaAddress
            userId = transactionListParams.userId
            additionalHeaders = transactionListParams.additionalHeaders.toBuilder()
            additionalQueryParams = transactionListParams.additionalQueryParams.toBuilder()
        }

        /** Cursor for pagination (returned from previous request) */
        fun cursor(cursor: String?) = apply { this.cursor = cursor }

        /** Filter by end date (inclusive) in ISO 8601 format */
        fun endDate(endDate: OffsetDateTime?) = apply { this.endDate = endDate }

        /** Maximum number of results to return (default 20, max 100) */
        fun limit(limit: Long?) = apply { this.limit = limit }

        /**
         * Alias for [Builder.limit].
         *
         * This unboxed primitive overload exists for backwards compatibility.
         */
        fun limit(limit: Long) = limit(limit as Long?)

        /** Filter by platform-specific user ID */
        fun platformUserId(platformUserId: String?) = apply { this.platformUserId = platformUserId }

        /** Filter by receiver UMA address */
        fun receiverUmaAddress(receiverUmaAddress: String?) = apply {
            this.receiverUmaAddress = receiverUmaAddress
        }

        /** Filter by reference */
        fun reference(reference: String?) = apply { this.reference = reference }

        /** Filter by sender UMA address */
        fun senderUmaAddress(senderUmaAddress: String?) = apply {
            this.senderUmaAddress = senderUmaAddress
        }

        /** Order to sort results in */
        fun sortOrder(sortOrder: SortOrder?) = apply { this.sortOrder = sortOrder }

        /** Filter by start date (inclusive) in ISO 8601 format */
        fun startDate(startDate: OffsetDateTime?) = apply { this.startDate = startDate }

        /** Filter by transaction status */
        fun status(status: TransactionStatus?) = apply { this.status = status }

        /** Filter by transaction type */
        fun type(type: TransactionType?) = apply { this.type = type }

        /** Filter by UMA address (either sender or receiver) */
        fun umaAddress(umaAddress: String?) = apply { this.umaAddress = umaAddress }

        /** Filter by system user ID */
        fun userId(userId: String?) = apply { this.userId = userId }

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
         * Returns an immutable instance of [TransactionListParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         */
        fun build(): TransactionListParams =
            TransactionListParams(
                cursor,
                endDate,
                limit,
                platformUserId,
                receiverUmaAddress,
                reference,
                senderUmaAddress,
                sortOrder,
                startDate,
                status,
                type,
                umaAddress,
                userId,
                additionalHeaders.build(),
                additionalQueryParams.build(),
            )
    }

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams =
        QueryParams.builder()
            .apply {
                cursor?.let { put("cursor", it) }
                endDate?.let { put("endDate", DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(it)) }
                limit?.let { put("limit", it.toString()) }
                platformUserId?.let { put("platformUserId", it) }
                receiverUmaAddress?.let { put("receiverUmaAddress", it) }
                reference?.let { put("reference", it) }
                senderUmaAddress?.let { put("senderUmaAddress", it) }
                sortOrder?.let { put("sortOrder", it.toString()) }
                startDate?.let {
                    put("startDate", DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(it))
                }
                status?.let { put("status", it.toString()) }
                type?.let { put("type", it.toString()) }
                umaAddress?.let { put("umaAddress", it) }
                userId?.let { put("userId", it) }
                putAll(additionalQueryParams)
            }
            .build()

    /** Order to sort results in */
    class SortOrder @JsonCreator private constructor(private val value: JsonField<String>) : Enum {

        /**
         * Returns this class instance's raw value.
         *
         * This is usually only useful if this instance was deserialized from data that doesn't
         * match any known member, and you want to know that value. For example, if the SDK is on an
         * older version than the API, then the API may respond with new members that the SDK is
         * unaware of.
         */
        @com.fasterxml.jackson.annotation.JsonValue fun _value(): JsonField<String> = value

        companion object {

            val ASC = of("asc")

            val DESC = of("desc")

            fun of(value: String) = SortOrder(JsonField.of(value))
        }

        /** An enum containing [SortOrder]'s known values. */
        enum class Known {
            ASC,
            DESC,
        }

        /**
         * An enum containing [SortOrder]'s known values, as well as an [_UNKNOWN] member.
         *
         * An instance of [SortOrder] can contain an unknown value in a couple of cases:
         * - It was deserialized from data that doesn't match any known member. For example, if the
         *   SDK is on an older version than the API, then the API may respond with new members that
         *   the SDK is unaware of.
         * - It was constructed with an arbitrary value using the [of] method.
         */
        enum class Value {
            ASC,
            DESC,
            /**
             * An enum member indicating that [SortOrder] was instantiated with an unknown value.
             */
            _UNKNOWN,
        }

        /**
         * Returns an enum member corresponding to this class instance's value, or [Value._UNKNOWN]
         * if the class was instantiated with an unknown value.
         *
         * Use the [known] method instead if you're certain the value is always known or if you want
         * to throw for the unknown case.
         */
        fun value(): Value =
            when (this) {
                ASC -> Value.ASC
                DESC -> Value.DESC
                else -> Value._UNKNOWN
            }

        /**
         * Returns an enum member corresponding to this class instance's value.
         *
         * Use the [value] method instead if you're uncertain the value is always known and don't
         * want to throw for the unknown case.
         *
         * @throws UmaaasInvalidDataException if this class instance's value is a not a known
         *   member.
         */
        fun known(): Known =
            when (this) {
                ASC -> Known.ASC
                DESC -> Known.DESC
                else -> throw UmaaasInvalidDataException("Unknown SortOrder: $value")
            }

        /**
         * Returns this class instance's primitive wire representation.
         *
         * This differs from the [toString] method because that method is primarily for debugging
         * and generally doesn't throw.
         *
         * @throws UmaaasInvalidDataException if this class instance's value does not have the
         *   expected primitive type.
         */
        fun asString(): String =
            _value().asString() ?: throw UmaaasInvalidDataException("Value is not a String")

        private var validated: Boolean = false

        fun validate(): SortOrder = apply {
            if (validated) {
                return@apply
            }

            known()
            validated = true
        }

        fun isValid(): Boolean =
            try {
                validate()
                true
            } catch (e: UmaaasInvalidDataException) {
                false
            }

        /**
         * Returns a score indicating how many valid values are contained in this object
         * recursively.
         *
         * Used for best match union deserialization.
         */
        internal fun validity(): Int = if (value() == Value._UNKNOWN) 0 else 1

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is SortOrder && value == other.value /* spotless:on */
        }

        override fun hashCode() = value.hashCode()

        override fun toString() = value.toString()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is TransactionListParams && cursor == other.cursor && endDate == other.endDate && limit == other.limit && platformUserId == other.platformUserId && receiverUmaAddress == other.receiverUmaAddress && reference == other.reference && senderUmaAddress == other.senderUmaAddress && sortOrder == other.sortOrder && startDate == other.startDate && status == other.status && type == other.type && umaAddress == other.umaAddress && userId == other.userId && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(cursor, endDate, limit, platformUserId, receiverUmaAddress, reference, senderUmaAddress, sortOrder, startDate, status, type, umaAddress, userId, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "TransactionListParams{cursor=$cursor, endDate=$endDate, limit=$limit, platformUserId=$platformUserId, receiverUmaAddress=$receiverUmaAddress, reference=$reference, senderUmaAddress=$senderUmaAddress, sortOrder=$sortOrder, startDate=$startDate, status=$status, type=$type, umaAddress=$umaAddress, userId=$userId, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
