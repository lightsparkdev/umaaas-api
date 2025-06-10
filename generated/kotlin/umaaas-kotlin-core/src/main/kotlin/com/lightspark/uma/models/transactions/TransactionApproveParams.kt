// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.transactions

import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.core.JsonMissing
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.Params
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import com.lightspark.uma.core.toImmutable
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.util.Collections
import java.util.Objects

/**
 * Approve a pending incoming payment that was previously acknowledged with a 202 response. This
 * endpoint allows platforms to asynchronously approve payments after async processing.
 */
class TransactionApproveParams
private constructor(
    private val transactionId: String?,
    private val body: Body,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    fun transactionId(): String? = transactionId

    /**
     * Information about the recipient, provided by the platform if requested in the original
     * webhook via `requestedReceiverUserInfoFields`.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun receiverUserInfo(): ReceiverUserInfo? = body.receiverUserInfo()

    /**
     * Returns the raw JSON value of [receiverUserInfo].
     *
     * Unlike [receiverUserInfo], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _receiverUserInfo(): JsonField<ReceiverUserInfo> = body._receiverUserInfo()

    fun _additionalBodyProperties(): Map<String, JsonValue> = body._additionalProperties()

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        fun none(): TransactionApproveParams = builder().build()

        /** Returns a mutable builder for constructing an instance of [TransactionApproveParams]. */
        fun builder() = Builder()
    }

    /** A builder for [TransactionApproveParams]. */
    class Builder internal constructor() {

        private var transactionId: String? = null
        private var body: Body.Builder = Body.builder()
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(transactionApproveParams: TransactionApproveParams) = apply {
            transactionId = transactionApproveParams.transactionId
            body = transactionApproveParams.body.toBuilder()
            additionalHeaders = transactionApproveParams.additionalHeaders.toBuilder()
            additionalQueryParams = transactionApproveParams.additionalQueryParams.toBuilder()
        }

        fun transactionId(transactionId: String?) = apply { this.transactionId = transactionId }

        /**
         * Sets the entire request body.
         *
         * This is generally only useful if you are already constructing the body separately.
         * Otherwise, it's more convenient to use the top-level setters instead:
         * - [receiverUserInfo]
         */
        fun body(body: Body) = apply { this.body = body.toBuilder() }

        /**
         * Information about the recipient, provided by the platform if requested in the original
         * webhook via `requestedReceiverUserInfoFields`.
         */
        fun receiverUserInfo(receiverUserInfo: ReceiverUserInfo) = apply {
            body.receiverUserInfo(receiverUserInfo)
        }

        /**
         * Sets [Builder.receiverUserInfo] to an arbitrary JSON value.
         *
         * You should usually call [Builder.receiverUserInfo] with a well-typed [ReceiverUserInfo]
         * value instead. This method is primarily for setting the field to an undocumented or not
         * yet supported value.
         */
        fun receiverUserInfo(receiverUserInfo: JsonField<ReceiverUserInfo>) = apply {
            body.receiverUserInfo(receiverUserInfo)
        }

        fun additionalBodyProperties(additionalBodyProperties: Map<String, JsonValue>) = apply {
            body.additionalProperties(additionalBodyProperties)
        }

        fun putAdditionalBodyProperty(key: String, value: JsonValue) = apply {
            body.putAdditionalProperty(key, value)
        }

        fun putAllAdditionalBodyProperties(additionalBodyProperties: Map<String, JsonValue>) =
            apply {
                body.putAllAdditionalProperties(additionalBodyProperties)
            }

        fun removeAdditionalBodyProperty(key: String) = apply { body.removeAdditionalProperty(key) }

        fun removeAllAdditionalBodyProperties(keys: Set<String>) = apply {
            body.removeAllAdditionalProperties(keys)
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
         * Returns an immutable instance of [TransactionApproveParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         */
        fun build(): TransactionApproveParams =
            TransactionApproveParams(
                transactionId,
                body.build(),
                additionalHeaders.build(),
                additionalQueryParams.build(),
            )
    }

    fun _body(): Body = body

    fun _pathParam(index: Int): String =
        when (index) {
            0 -> transactionId ?: ""
            else -> ""
        }

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams = additionalQueryParams

    class Body
    private constructor(
        private val receiverUserInfo: JsonField<ReceiverUserInfo>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("receiverUserInfo")
            @ExcludeMissing
            receiverUserInfo: JsonField<ReceiverUserInfo> = JsonMissing.of()
        ) : this(receiverUserInfo, mutableMapOf())

        /**
         * Information about the recipient, provided by the platform if requested in the original
         * webhook via `requestedReceiverUserInfoFields`.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun receiverUserInfo(): ReceiverUserInfo? = receiverUserInfo.getNullable("receiverUserInfo")

        /**
         * Returns the raw JSON value of [receiverUserInfo].
         *
         * Unlike [receiverUserInfo], this method doesn't throw if the JSON field has an unexpected
         * type.
         */
        @JsonProperty("receiverUserInfo")
        @ExcludeMissing
        fun _receiverUserInfo(): JsonField<ReceiverUserInfo> = receiverUserInfo

        @JsonAnySetter
        private fun putAdditionalProperty(key: String, value: JsonValue) {
            additionalProperties.put(key, value)
        }

        @JsonAnyGetter
        @ExcludeMissing
        fun _additionalProperties(): Map<String, JsonValue> =
            Collections.unmodifiableMap(additionalProperties)

        fun toBuilder() = Builder().from(this)

        companion object {

            /** Returns a mutable builder for constructing an instance of [Body]. */
            fun builder() = Builder()
        }

        /** A builder for [Body]. */
        class Builder internal constructor() {

            private var receiverUserInfo: JsonField<ReceiverUserInfo> = JsonMissing.of()
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(body: Body) = apply {
                receiverUserInfo = body.receiverUserInfo
                additionalProperties = body.additionalProperties.toMutableMap()
            }

            /**
             * Information about the recipient, provided by the platform if requested in the
             * original webhook via `requestedReceiverUserInfoFields`.
             */
            fun receiverUserInfo(receiverUserInfo: ReceiverUserInfo) =
                receiverUserInfo(JsonField.of(receiverUserInfo))

            /**
             * Sets [Builder.receiverUserInfo] to an arbitrary JSON value.
             *
             * You should usually call [Builder.receiverUserInfo] with a well-typed
             * [ReceiverUserInfo] value instead. This method is primarily for setting the field to
             * an undocumented or not yet supported value.
             */
            fun receiverUserInfo(receiverUserInfo: JsonField<ReceiverUserInfo>) = apply {
                this.receiverUserInfo = receiverUserInfo
            }

            fun additionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
                this.additionalProperties.clear()
                putAllAdditionalProperties(additionalProperties)
            }

            fun putAdditionalProperty(key: String, value: JsonValue) = apply {
                additionalProperties.put(key, value)
            }

            fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
                this.additionalProperties.putAll(additionalProperties)
            }

            fun removeAdditionalProperty(key: String) = apply { additionalProperties.remove(key) }

            fun removeAllAdditionalProperties(keys: Set<String>) = apply {
                keys.forEach(::removeAdditionalProperty)
            }

            /**
             * Returns an immutable instance of [Body].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             */
            fun build(): Body = Body(receiverUserInfo, additionalProperties.toMutableMap())
        }

        private var validated: Boolean = false

        fun validate(): Body = apply {
            if (validated) {
                return@apply
            }

            receiverUserInfo()?.validate()
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
        internal fun validity(): Int = (receiverUserInfo.asKnown()?.validity() ?: 0)

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is Body && receiverUserInfo == other.receiverUserInfo && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(receiverUserInfo, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "Body{receiverUserInfo=$receiverUserInfo, additionalProperties=$additionalProperties}"
    }

    /**
     * Information about the recipient, provided by the platform if requested in the original
     * webhook via `requestedReceiverUserInfoFields`.
     */
    class ReceiverUserInfo
    @JsonCreator
    private constructor(
        @com.fasterxml.jackson.annotation.JsonValue
        private val additionalProperties: Map<String, JsonValue>
    ) {

        @JsonAnyGetter
        @ExcludeMissing
        fun _additionalProperties(): Map<String, JsonValue> = additionalProperties

        fun toBuilder() = Builder().from(this)

        companion object {

            /** Returns a mutable builder for constructing an instance of [ReceiverUserInfo]. */
            fun builder() = Builder()
        }

        /** A builder for [ReceiverUserInfo]. */
        class Builder internal constructor() {

            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(receiverUserInfo: ReceiverUserInfo) = apply {
                additionalProperties = receiverUserInfo.additionalProperties.toMutableMap()
            }

            fun additionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
                this.additionalProperties.clear()
                putAllAdditionalProperties(additionalProperties)
            }

            fun putAdditionalProperty(key: String, value: JsonValue) = apply {
                additionalProperties.put(key, value)
            }

            fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
                this.additionalProperties.putAll(additionalProperties)
            }

            fun removeAdditionalProperty(key: String) = apply { additionalProperties.remove(key) }

            fun removeAllAdditionalProperties(keys: Set<String>) = apply {
                keys.forEach(::removeAdditionalProperty)
            }

            /**
             * Returns an immutable instance of [ReceiverUserInfo].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             */
            fun build(): ReceiverUserInfo = ReceiverUserInfo(additionalProperties.toImmutable())
        }

        private var validated: Boolean = false

        fun validate(): ReceiverUserInfo = apply {
            if (validated) {
                return@apply
            }

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
        internal fun validity(): Int =
            additionalProperties.count { (_, value) -> !value.isNull() && !value.isMissing() }

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is ReceiverUserInfo && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() = "ReceiverUserInfo{additionalProperties=$additionalProperties}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is TransactionApproveParams && transactionId == other.transactionId && body == other.body && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(transactionId, body, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "TransactionApproveParams{transactionId=$transactionId, body=$body, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
