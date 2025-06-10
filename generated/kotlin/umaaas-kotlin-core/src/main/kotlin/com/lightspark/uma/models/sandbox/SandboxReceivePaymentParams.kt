// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.sandbox

import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.core.JsonMissing
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.Params
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.util.Collections
import java.util.Objects

/**
 * Simulate sending payment from an sandbox uma address to a platform user to test payment receive.
 * This endpoint is only for the sandbox environment and will fail for production platforms/keys.
 */
class SandboxReceivePaymentParams
private constructor(
    private val body: Body,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    /**
     * The amount to be received in the smallest unit of the currency (eg. cents)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun receivingCurrencyAmount(): Long = body.receivingCurrencyAmount()

    /**
     * The currency code for the receiving amount
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun receivingCurrencyCode(): String = body.receivingCurrencyCode()

    /**
     * UMA address of the sender from the sandbox
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun senderUmaAddress(): String = body.senderUmaAddress()

    /**
     * UMA address of the receiver (optional if userId is provided)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun receiverUmaAddress(): String? = body.receiverUmaAddress()

    /**
     * System ID of the receiver (optional if receiverUmaAddress is provided)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun userId(): String? = body.userId()

    /**
     * Returns the raw JSON value of [receivingCurrencyAmount].
     *
     * Unlike [receivingCurrencyAmount], this method doesn't throw if the JSON field has an
     * unexpected type.
     */
    fun _receivingCurrencyAmount(): JsonField<Long> = body._receivingCurrencyAmount()

    /**
     * Returns the raw JSON value of [receivingCurrencyCode].
     *
     * Unlike [receivingCurrencyCode], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _receivingCurrencyCode(): JsonField<String> = body._receivingCurrencyCode()

    /**
     * Returns the raw JSON value of [senderUmaAddress].
     *
     * Unlike [senderUmaAddress], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _senderUmaAddress(): JsonField<String> = body._senderUmaAddress()

    /**
     * Returns the raw JSON value of [receiverUmaAddress].
     *
     * Unlike [receiverUmaAddress], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _receiverUmaAddress(): JsonField<String> = body._receiverUmaAddress()

    /**
     * Returns the raw JSON value of [userId].
     *
     * Unlike [userId], this method doesn't throw if the JSON field has an unexpected type.
     */
    fun _userId(): JsonField<String> = body._userId()

    fun _additionalBodyProperties(): Map<String, JsonValue> = body._additionalProperties()

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        /**
         * Returns a mutable builder for constructing an instance of [SandboxReceivePaymentParams].
         *
         * The following fields are required:
         * ```kotlin
         * .receivingCurrencyAmount()
         * .receivingCurrencyCode()
         * .senderUmaAddress()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [SandboxReceivePaymentParams]. */
    class Builder internal constructor() {

        private var body: Body.Builder = Body.builder()
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(sandboxReceivePaymentParams: SandboxReceivePaymentParams) = apply {
            body = sandboxReceivePaymentParams.body.toBuilder()
            additionalHeaders = sandboxReceivePaymentParams.additionalHeaders.toBuilder()
            additionalQueryParams = sandboxReceivePaymentParams.additionalQueryParams.toBuilder()
        }

        /**
         * Sets the entire request body.
         *
         * This is generally only useful if you are already constructing the body separately.
         * Otherwise, it's more convenient to use the top-level setters instead:
         * - [receivingCurrencyAmount]
         * - [receivingCurrencyCode]
         * - [senderUmaAddress]
         * - [receiverUmaAddress]
         * - [userId]
         * - etc.
         */
        fun body(body: Body) = apply { this.body = body.toBuilder() }

        /** The amount to be received in the smallest unit of the currency (eg. cents) */
        fun receivingCurrencyAmount(receivingCurrencyAmount: Long) = apply {
            body.receivingCurrencyAmount(receivingCurrencyAmount)
        }

        /**
         * Sets [Builder.receivingCurrencyAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.receivingCurrencyAmount] with a well-typed [Long] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun receivingCurrencyAmount(receivingCurrencyAmount: JsonField<Long>) = apply {
            body.receivingCurrencyAmount(receivingCurrencyAmount)
        }

        /** The currency code for the receiving amount */
        fun receivingCurrencyCode(receivingCurrencyCode: String) = apply {
            body.receivingCurrencyCode(receivingCurrencyCode)
        }

        /**
         * Sets [Builder.receivingCurrencyCode] to an arbitrary JSON value.
         *
         * You should usually call [Builder.receivingCurrencyCode] with a well-typed [String] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun receivingCurrencyCode(receivingCurrencyCode: JsonField<String>) = apply {
            body.receivingCurrencyCode(receivingCurrencyCode)
        }

        /** UMA address of the sender from the sandbox */
        fun senderUmaAddress(senderUmaAddress: String) = apply {
            body.senderUmaAddress(senderUmaAddress)
        }

        /**
         * Sets [Builder.senderUmaAddress] to an arbitrary JSON value.
         *
         * You should usually call [Builder.senderUmaAddress] with a well-typed [String] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun senderUmaAddress(senderUmaAddress: JsonField<String>) = apply {
            body.senderUmaAddress(senderUmaAddress)
        }

        /** UMA address of the receiver (optional if userId is provided) */
        fun receiverUmaAddress(receiverUmaAddress: String) = apply {
            body.receiverUmaAddress(receiverUmaAddress)
        }

        /**
         * Sets [Builder.receiverUmaAddress] to an arbitrary JSON value.
         *
         * You should usually call [Builder.receiverUmaAddress] with a well-typed [String] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun receiverUmaAddress(receiverUmaAddress: JsonField<String>) = apply {
            body.receiverUmaAddress(receiverUmaAddress)
        }

        /** System ID of the receiver (optional if receiverUmaAddress is provided) */
        fun userId(userId: String) = apply { body.userId(userId) }

        /**
         * Sets [Builder.userId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.userId] with a well-typed [String] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun userId(userId: JsonField<String>) = apply { body.userId(userId) }

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
         * Returns an immutable instance of [SandboxReceivePaymentParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .receivingCurrencyAmount()
         * .receivingCurrencyCode()
         * .senderUmaAddress()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): SandboxReceivePaymentParams =
            SandboxReceivePaymentParams(
                body.build(),
                additionalHeaders.build(),
                additionalQueryParams.build(),
            )
    }

    fun _body(): Body = body

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams = additionalQueryParams

    class Body
    private constructor(
        private val receivingCurrencyAmount: JsonField<Long>,
        private val receivingCurrencyCode: JsonField<String>,
        private val senderUmaAddress: JsonField<String>,
        private val receiverUmaAddress: JsonField<String>,
        private val userId: JsonField<String>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("receivingCurrencyAmount")
            @ExcludeMissing
            receivingCurrencyAmount: JsonField<Long> = JsonMissing.of(),
            @JsonProperty("receivingCurrencyCode")
            @ExcludeMissing
            receivingCurrencyCode: JsonField<String> = JsonMissing.of(),
            @JsonProperty("senderUmaAddress")
            @ExcludeMissing
            senderUmaAddress: JsonField<String> = JsonMissing.of(),
            @JsonProperty("receiverUmaAddress")
            @ExcludeMissing
            receiverUmaAddress: JsonField<String> = JsonMissing.of(),
            @JsonProperty("userId") @ExcludeMissing userId: JsonField<String> = JsonMissing.of(),
        ) : this(
            receivingCurrencyAmount,
            receivingCurrencyCode,
            senderUmaAddress,
            receiverUmaAddress,
            userId,
            mutableMapOf(),
        )

        /**
         * The amount to be received in the smallest unit of the currency (eg. cents)
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun receivingCurrencyAmount(): Long =
            receivingCurrencyAmount.getRequired("receivingCurrencyAmount")

        /**
         * The currency code for the receiving amount
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun receivingCurrencyCode(): String =
            receivingCurrencyCode.getRequired("receivingCurrencyCode")

        /**
         * UMA address of the sender from the sandbox
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun senderUmaAddress(): String = senderUmaAddress.getRequired("senderUmaAddress")

        /**
         * UMA address of the receiver (optional if userId is provided)
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun receiverUmaAddress(): String? = receiverUmaAddress.getNullable("receiverUmaAddress")

        /**
         * System ID of the receiver (optional if receiverUmaAddress is provided)
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun userId(): String? = userId.getNullable("userId")

        /**
         * Returns the raw JSON value of [receivingCurrencyAmount].
         *
         * Unlike [receivingCurrencyAmount], this method doesn't throw if the JSON field has an
         * unexpected type.
         */
        @JsonProperty("receivingCurrencyAmount")
        @ExcludeMissing
        fun _receivingCurrencyAmount(): JsonField<Long> = receivingCurrencyAmount

        /**
         * Returns the raw JSON value of [receivingCurrencyCode].
         *
         * Unlike [receivingCurrencyCode], this method doesn't throw if the JSON field has an
         * unexpected type.
         */
        @JsonProperty("receivingCurrencyCode")
        @ExcludeMissing
        fun _receivingCurrencyCode(): JsonField<String> = receivingCurrencyCode

        /**
         * Returns the raw JSON value of [senderUmaAddress].
         *
         * Unlike [senderUmaAddress], this method doesn't throw if the JSON field has an unexpected
         * type.
         */
        @JsonProperty("senderUmaAddress")
        @ExcludeMissing
        fun _senderUmaAddress(): JsonField<String> = senderUmaAddress

        /**
         * Returns the raw JSON value of [receiverUmaAddress].
         *
         * Unlike [receiverUmaAddress], this method doesn't throw if the JSON field has an
         * unexpected type.
         */
        @JsonProperty("receiverUmaAddress")
        @ExcludeMissing
        fun _receiverUmaAddress(): JsonField<String> = receiverUmaAddress

        /**
         * Returns the raw JSON value of [userId].
         *
         * Unlike [userId], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("userId") @ExcludeMissing fun _userId(): JsonField<String> = userId

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

            /**
             * Returns a mutable builder for constructing an instance of [Body].
             *
             * The following fields are required:
             * ```kotlin
             * .receivingCurrencyAmount()
             * .receivingCurrencyCode()
             * .senderUmaAddress()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [Body]. */
        class Builder internal constructor() {

            private var receivingCurrencyAmount: JsonField<Long>? = null
            private var receivingCurrencyCode: JsonField<String>? = null
            private var senderUmaAddress: JsonField<String>? = null
            private var receiverUmaAddress: JsonField<String> = JsonMissing.of()
            private var userId: JsonField<String> = JsonMissing.of()
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(body: Body) = apply {
                receivingCurrencyAmount = body.receivingCurrencyAmount
                receivingCurrencyCode = body.receivingCurrencyCode
                senderUmaAddress = body.senderUmaAddress
                receiverUmaAddress = body.receiverUmaAddress
                userId = body.userId
                additionalProperties = body.additionalProperties.toMutableMap()
            }

            /** The amount to be received in the smallest unit of the currency (eg. cents) */
            fun receivingCurrencyAmount(receivingCurrencyAmount: Long) =
                receivingCurrencyAmount(JsonField.of(receivingCurrencyAmount))

            /**
             * Sets [Builder.receivingCurrencyAmount] to an arbitrary JSON value.
             *
             * You should usually call [Builder.receivingCurrencyAmount] with a well-typed [Long]
             * value instead. This method is primarily for setting the field to an undocumented or
             * not yet supported value.
             */
            fun receivingCurrencyAmount(receivingCurrencyAmount: JsonField<Long>) = apply {
                this.receivingCurrencyAmount = receivingCurrencyAmount
            }

            /** The currency code for the receiving amount */
            fun receivingCurrencyCode(receivingCurrencyCode: String) =
                receivingCurrencyCode(JsonField.of(receivingCurrencyCode))

            /**
             * Sets [Builder.receivingCurrencyCode] to an arbitrary JSON value.
             *
             * You should usually call [Builder.receivingCurrencyCode] with a well-typed [String]
             * value instead. This method is primarily for setting the field to an undocumented or
             * not yet supported value.
             */
            fun receivingCurrencyCode(receivingCurrencyCode: JsonField<String>) = apply {
                this.receivingCurrencyCode = receivingCurrencyCode
            }

            /** UMA address of the sender from the sandbox */
            fun senderUmaAddress(senderUmaAddress: String) =
                senderUmaAddress(JsonField.of(senderUmaAddress))

            /**
             * Sets [Builder.senderUmaAddress] to an arbitrary JSON value.
             *
             * You should usually call [Builder.senderUmaAddress] with a well-typed [String] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun senderUmaAddress(senderUmaAddress: JsonField<String>) = apply {
                this.senderUmaAddress = senderUmaAddress
            }

            /** UMA address of the receiver (optional if userId is provided) */
            fun receiverUmaAddress(receiverUmaAddress: String) =
                receiverUmaAddress(JsonField.of(receiverUmaAddress))

            /**
             * Sets [Builder.receiverUmaAddress] to an arbitrary JSON value.
             *
             * You should usually call [Builder.receiverUmaAddress] with a well-typed [String] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun receiverUmaAddress(receiverUmaAddress: JsonField<String>) = apply {
                this.receiverUmaAddress = receiverUmaAddress
            }

            /** System ID of the receiver (optional if receiverUmaAddress is provided) */
            fun userId(userId: String) = userId(JsonField.of(userId))

            /**
             * Sets [Builder.userId] to an arbitrary JSON value.
             *
             * You should usually call [Builder.userId] with a well-typed [String] value instead.
             * This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun userId(userId: JsonField<String>) = apply { this.userId = userId }

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
             *
             * The following fields are required:
             * ```kotlin
             * .receivingCurrencyAmount()
             * .receivingCurrencyCode()
             * .senderUmaAddress()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): Body =
                Body(
                    checkRequired("receivingCurrencyAmount", receivingCurrencyAmount),
                    checkRequired("receivingCurrencyCode", receivingCurrencyCode),
                    checkRequired("senderUmaAddress", senderUmaAddress),
                    receiverUmaAddress,
                    userId,
                    additionalProperties.toMutableMap(),
                )
        }

        private var validated: Boolean = false

        fun validate(): Body = apply {
            if (validated) {
                return@apply
            }

            receivingCurrencyAmount()
            receivingCurrencyCode()
            senderUmaAddress()
            receiverUmaAddress()
            userId()
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
            (if (receivingCurrencyAmount.asKnown() == null) 0 else 1) +
                (if (receivingCurrencyCode.asKnown() == null) 0 else 1) +
                (if (senderUmaAddress.asKnown() == null) 0 else 1) +
                (if (receiverUmaAddress.asKnown() == null) 0 else 1) +
                (if (userId.asKnown() == null) 0 else 1)

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is Body && receivingCurrencyAmount == other.receivingCurrencyAmount && receivingCurrencyCode == other.receivingCurrencyCode && senderUmaAddress == other.senderUmaAddress && receiverUmaAddress == other.receiverUmaAddress && userId == other.userId && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(receivingCurrencyAmount, receivingCurrencyCode, senderUmaAddress, receiverUmaAddress, userId, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "Body{receivingCurrencyAmount=$receivingCurrencyAmount, receivingCurrencyCode=$receivingCurrencyCode, senderUmaAddress=$senderUmaAddress, receiverUmaAddress=$receiverUmaAddress, userId=$userId, additionalProperties=$additionalProperties}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is SandboxReceivePaymentParams && body == other.body && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(body, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "SandboxReceivePaymentParams{body=$body, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
