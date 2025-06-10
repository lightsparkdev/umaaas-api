// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.quotes

import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.Enum
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.core.JsonMissing
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.Params
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import com.lightspark.uma.core.toImmutable
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.util.Collections
import java.util.Objects

/**
 * Generate a quote for a payment from one UMA address to another. The quote locks in exchange rates
 * and fees for a set period of time and provides payment instructions that can be used to execute
 * the payment.
 *
 * Depending on the `lockedCurrencySide` parameter, either the sending amount or receiving amount
 * will be locked.
 *
 * The returned quote includes payment instructions with the banking details needed to execute the
 * payment and fulfill the quote. These instructions must be followed precisely, including any
 * reference codes provided.
 */
class QuoteCreateParams
private constructor(
    private val body: Body,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    /**
     * The amount to send/receive in the smallest unit of the locked currency (eg. cents). See
     * `lockedCurrencySide` for more information.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun lockedCurrencyAmount(): Long = body.lockedCurrencyAmount()

    /**
     * The side of the quote which should be locked and specified in the `lockedCurrencyAmount`. For
     * example, if I want to send exactly $5 MXN from my wallet, I would set this to "sending", and
     * the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to receive exactly $10
     * USD, I would set this to "receiving" and the `lockedCurrencyAmount` to 10000 (in cents).
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun lockedCurrencySide(): LockedCurrencySide = body.lockedCurrencySide()

    /**
     * Unique identifier for the prior receiver uma address lookup request.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun lookupId(): String = body.lookupId()

    /**
     * Currency code for the receiving amount
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun receivingCurrencyCode(): String = body.receivingCurrencyCode()

    /**
     * Currency code for the sending amount
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun sendingCurrencyCode(): String = body.sendingCurrencyCode()

    /**
     * Optional description/memo for the payment
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun description(): String? = body.description()

    /**
     * Key-value pairs of information about the sender which was requested by the counterparty
     * (recipient) institution. Any fields specified in `requiredPayerDataFields` from the response
     * of the `/receiver/{receiverUmaAddress}` (lookupUma) endpoint MUST be provided here if they
     * were requested. If the counterparty (recipient) institution did not request any information,
     * this field can be omitted.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun senderUserInfo(): SenderUserInfo? = body.senderUserInfo()

    /**
     * Returns the raw JSON value of [lockedCurrencyAmount].
     *
     * Unlike [lockedCurrencyAmount], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _lockedCurrencyAmount(): JsonField<Long> = body._lockedCurrencyAmount()

    /**
     * Returns the raw JSON value of [lockedCurrencySide].
     *
     * Unlike [lockedCurrencySide], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _lockedCurrencySide(): JsonField<LockedCurrencySide> = body._lockedCurrencySide()

    /**
     * Returns the raw JSON value of [lookupId].
     *
     * Unlike [lookupId], this method doesn't throw if the JSON field has an unexpected type.
     */
    fun _lookupId(): JsonField<String> = body._lookupId()

    /**
     * Returns the raw JSON value of [receivingCurrencyCode].
     *
     * Unlike [receivingCurrencyCode], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _receivingCurrencyCode(): JsonField<String> = body._receivingCurrencyCode()

    /**
     * Returns the raw JSON value of [sendingCurrencyCode].
     *
     * Unlike [sendingCurrencyCode], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    fun _sendingCurrencyCode(): JsonField<String> = body._sendingCurrencyCode()

    /**
     * Returns the raw JSON value of [description].
     *
     * Unlike [description], this method doesn't throw if the JSON field has an unexpected type.
     */
    fun _description(): JsonField<String> = body._description()

    /**
     * Returns the raw JSON value of [senderUserInfo].
     *
     * Unlike [senderUserInfo], this method doesn't throw if the JSON field has an unexpected type.
     */
    fun _senderUserInfo(): JsonField<SenderUserInfo> = body._senderUserInfo()

    fun _additionalBodyProperties(): Map<String, JsonValue> = body._additionalProperties()

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        /**
         * Returns a mutable builder for constructing an instance of [QuoteCreateParams].
         *
         * The following fields are required:
         * ```kotlin
         * .lockedCurrencyAmount()
         * .lockedCurrencySide()
         * .lookupId()
         * .receivingCurrencyCode()
         * .sendingCurrencyCode()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [QuoteCreateParams]. */
    class Builder internal constructor() {

        private var body: Body.Builder = Body.builder()
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(quoteCreateParams: QuoteCreateParams) = apply {
            body = quoteCreateParams.body.toBuilder()
            additionalHeaders = quoteCreateParams.additionalHeaders.toBuilder()
            additionalQueryParams = quoteCreateParams.additionalQueryParams.toBuilder()
        }

        /**
         * Sets the entire request body.
         *
         * This is generally only useful if you are already constructing the body separately.
         * Otherwise, it's more convenient to use the top-level setters instead:
         * - [lockedCurrencyAmount]
         * - [lockedCurrencySide]
         * - [lookupId]
         * - [receivingCurrencyCode]
         * - [sendingCurrencyCode]
         * - etc.
         */
        fun body(body: Body) = apply { this.body = body.toBuilder() }

        /**
         * The amount to send/receive in the smallest unit of the locked currency (eg. cents). See
         * `lockedCurrencySide` for more information.
         */
        fun lockedCurrencyAmount(lockedCurrencyAmount: Long) = apply {
            body.lockedCurrencyAmount(lockedCurrencyAmount)
        }

        /**
         * Sets [Builder.lockedCurrencyAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.lockedCurrencyAmount] with a well-typed [Long] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun lockedCurrencyAmount(lockedCurrencyAmount: JsonField<Long>) = apply {
            body.lockedCurrencyAmount(lockedCurrencyAmount)
        }

        /**
         * The side of the quote which should be locked and specified in the `lockedCurrencyAmount`.
         * For example, if I want to send exactly $5 MXN from my wallet, I would set this to
         * "sending", and the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to
         * receive exactly $10 USD, I would set this to "receiving" and the `lockedCurrencyAmount`
         * to 10000 (in cents).
         */
        fun lockedCurrencySide(lockedCurrencySide: LockedCurrencySide) = apply {
            body.lockedCurrencySide(lockedCurrencySide)
        }

        /**
         * Sets [Builder.lockedCurrencySide] to an arbitrary JSON value.
         *
         * You should usually call [Builder.lockedCurrencySide] with a well-typed
         * [LockedCurrencySide] value instead. This method is primarily for setting the field to an
         * undocumented or not yet supported value.
         */
        fun lockedCurrencySide(lockedCurrencySide: JsonField<LockedCurrencySide>) = apply {
            body.lockedCurrencySide(lockedCurrencySide)
        }

        /** Unique identifier for the prior receiver uma address lookup request. */
        fun lookupId(lookupId: String) = apply { body.lookupId(lookupId) }

        /**
         * Sets [Builder.lookupId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.lookupId] with a well-typed [String] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun lookupId(lookupId: JsonField<String>) = apply { body.lookupId(lookupId) }

        /** Currency code for the receiving amount */
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

        /** Currency code for the sending amount */
        fun sendingCurrencyCode(sendingCurrencyCode: String) = apply {
            body.sendingCurrencyCode(sendingCurrencyCode)
        }

        /**
         * Sets [Builder.sendingCurrencyCode] to an arbitrary JSON value.
         *
         * You should usually call [Builder.sendingCurrencyCode] with a well-typed [String] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun sendingCurrencyCode(sendingCurrencyCode: JsonField<String>) = apply {
            body.sendingCurrencyCode(sendingCurrencyCode)
        }

        /** Optional description/memo for the payment */
        fun description(description: String) = apply { body.description(description) }

        /**
         * Sets [Builder.description] to an arbitrary JSON value.
         *
         * You should usually call [Builder.description] with a well-typed [String] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun description(description: JsonField<String>) = apply { body.description(description) }

        /**
         * Key-value pairs of information about the sender which was requested by the counterparty
         * (recipient) institution. Any fields specified in `requiredPayerDataFields` from the
         * response of the `/receiver/{receiverUmaAddress}` (lookupUma) endpoint MUST be provided
         * here if they were requested. If the counterparty (recipient) institution did not request
         * any information, this field can be omitted.
         */
        fun senderUserInfo(senderUserInfo: SenderUserInfo) = apply {
            body.senderUserInfo(senderUserInfo)
        }

        /**
         * Sets [Builder.senderUserInfo] to an arbitrary JSON value.
         *
         * You should usually call [Builder.senderUserInfo] with a well-typed [SenderUserInfo] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun senderUserInfo(senderUserInfo: JsonField<SenderUserInfo>) = apply {
            body.senderUserInfo(senderUserInfo)
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
         * Returns an immutable instance of [QuoteCreateParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .lockedCurrencyAmount()
         * .lockedCurrencySide()
         * .lookupId()
         * .receivingCurrencyCode()
         * .sendingCurrencyCode()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): QuoteCreateParams =
            QuoteCreateParams(
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
        private val lockedCurrencyAmount: JsonField<Long>,
        private val lockedCurrencySide: JsonField<LockedCurrencySide>,
        private val lookupId: JsonField<String>,
        private val receivingCurrencyCode: JsonField<String>,
        private val sendingCurrencyCode: JsonField<String>,
        private val description: JsonField<String>,
        private val senderUserInfo: JsonField<SenderUserInfo>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("lockedCurrencyAmount")
            @ExcludeMissing
            lockedCurrencyAmount: JsonField<Long> = JsonMissing.of(),
            @JsonProperty("lockedCurrencySide")
            @ExcludeMissing
            lockedCurrencySide: JsonField<LockedCurrencySide> = JsonMissing.of(),
            @JsonProperty("lookupId")
            @ExcludeMissing
            lookupId: JsonField<String> = JsonMissing.of(),
            @JsonProperty("receivingCurrencyCode")
            @ExcludeMissing
            receivingCurrencyCode: JsonField<String> = JsonMissing.of(),
            @JsonProperty("sendingCurrencyCode")
            @ExcludeMissing
            sendingCurrencyCode: JsonField<String> = JsonMissing.of(),
            @JsonProperty("description")
            @ExcludeMissing
            description: JsonField<String> = JsonMissing.of(),
            @JsonProperty("senderUserInfo")
            @ExcludeMissing
            senderUserInfo: JsonField<SenderUserInfo> = JsonMissing.of(),
        ) : this(
            lockedCurrencyAmount,
            lockedCurrencySide,
            lookupId,
            receivingCurrencyCode,
            sendingCurrencyCode,
            description,
            senderUserInfo,
            mutableMapOf(),
        )

        /**
         * The amount to send/receive in the smallest unit of the locked currency (eg. cents). See
         * `lockedCurrencySide` for more information.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun lockedCurrencyAmount(): Long = lockedCurrencyAmount.getRequired("lockedCurrencyAmount")

        /**
         * The side of the quote which should be locked and specified in the `lockedCurrencyAmount`.
         * For example, if I want to send exactly $5 MXN from my wallet, I would set this to
         * "sending", and the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to
         * receive exactly $10 USD, I would set this to "receiving" and the `lockedCurrencyAmount`
         * to 10000 (in cents).
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun lockedCurrencySide(): LockedCurrencySide =
            lockedCurrencySide.getRequired("lockedCurrencySide")

        /**
         * Unique identifier for the prior receiver uma address lookup request.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun lookupId(): String = lookupId.getRequired("lookupId")

        /**
         * Currency code for the receiving amount
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun receivingCurrencyCode(): String =
            receivingCurrencyCode.getRequired("receivingCurrencyCode")

        /**
         * Currency code for the sending amount
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun sendingCurrencyCode(): String = sendingCurrencyCode.getRequired("sendingCurrencyCode")

        /**
         * Optional description/memo for the payment
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun description(): String? = description.getNullable("description")

        /**
         * Key-value pairs of information about the sender which was requested by the counterparty
         * (recipient) institution. Any fields specified in `requiredPayerDataFields` from the
         * response of the `/receiver/{receiverUmaAddress}` (lookupUma) endpoint MUST be provided
         * here if they were requested. If the counterparty (recipient) institution did not request
         * any information, this field can be omitted.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun senderUserInfo(): SenderUserInfo? = senderUserInfo.getNullable("senderUserInfo")

        /**
         * Returns the raw JSON value of [lockedCurrencyAmount].
         *
         * Unlike [lockedCurrencyAmount], this method doesn't throw if the JSON field has an
         * unexpected type.
         */
        @JsonProperty("lockedCurrencyAmount")
        @ExcludeMissing
        fun _lockedCurrencyAmount(): JsonField<Long> = lockedCurrencyAmount

        /**
         * Returns the raw JSON value of [lockedCurrencySide].
         *
         * Unlike [lockedCurrencySide], this method doesn't throw if the JSON field has an
         * unexpected type.
         */
        @JsonProperty("lockedCurrencySide")
        @ExcludeMissing
        fun _lockedCurrencySide(): JsonField<LockedCurrencySide> = lockedCurrencySide

        /**
         * Returns the raw JSON value of [lookupId].
         *
         * Unlike [lookupId], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("lookupId") @ExcludeMissing fun _lookupId(): JsonField<String> = lookupId

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
         * Returns the raw JSON value of [sendingCurrencyCode].
         *
         * Unlike [sendingCurrencyCode], this method doesn't throw if the JSON field has an
         * unexpected type.
         */
        @JsonProperty("sendingCurrencyCode")
        @ExcludeMissing
        fun _sendingCurrencyCode(): JsonField<String> = sendingCurrencyCode

        /**
         * Returns the raw JSON value of [description].
         *
         * Unlike [description], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("description")
        @ExcludeMissing
        fun _description(): JsonField<String> = description

        /**
         * Returns the raw JSON value of [senderUserInfo].
         *
         * Unlike [senderUserInfo], this method doesn't throw if the JSON field has an unexpected
         * type.
         */
        @JsonProperty("senderUserInfo")
        @ExcludeMissing
        fun _senderUserInfo(): JsonField<SenderUserInfo> = senderUserInfo

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
             * .lockedCurrencyAmount()
             * .lockedCurrencySide()
             * .lookupId()
             * .receivingCurrencyCode()
             * .sendingCurrencyCode()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [Body]. */
        class Builder internal constructor() {

            private var lockedCurrencyAmount: JsonField<Long>? = null
            private var lockedCurrencySide: JsonField<LockedCurrencySide>? = null
            private var lookupId: JsonField<String>? = null
            private var receivingCurrencyCode: JsonField<String>? = null
            private var sendingCurrencyCode: JsonField<String>? = null
            private var description: JsonField<String> = JsonMissing.of()
            private var senderUserInfo: JsonField<SenderUserInfo> = JsonMissing.of()
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(body: Body) = apply {
                lockedCurrencyAmount = body.lockedCurrencyAmount
                lockedCurrencySide = body.lockedCurrencySide
                lookupId = body.lookupId
                receivingCurrencyCode = body.receivingCurrencyCode
                sendingCurrencyCode = body.sendingCurrencyCode
                description = body.description
                senderUserInfo = body.senderUserInfo
                additionalProperties = body.additionalProperties.toMutableMap()
            }

            /**
             * The amount to send/receive in the smallest unit of the locked currency (eg. cents).
             * See `lockedCurrencySide` for more information.
             */
            fun lockedCurrencyAmount(lockedCurrencyAmount: Long) =
                lockedCurrencyAmount(JsonField.of(lockedCurrencyAmount))

            /**
             * Sets [Builder.lockedCurrencyAmount] to an arbitrary JSON value.
             *
             * You should usually call [Builder.lockedCurrencyAmount] with a well-typed [Long] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun lockedCurrencyAmount(lockedCurrencyAmount: JsonField<Long>) = apply {
                this.lockedCurrencyAmount = lockedCurrencyAmount
            }

            /**
             * The side of the quote which should be locked and specified in the
             * `lockedCurrencyAmount`. For example, if I want to send exactly $5 MXN from my wallet,
             * I would set this to "sending", and the `lockedCurrencyAmount` to 500 (in cents). If I
             * want the receiver to receive exactly $10 USD, I would set this to "receiving" and the
             * `lockedCurrencyAmount` to 10000 (in cents).
             */
            fun lockedCurrencySide(lockedCurrencySide: LockedCurrencySide) =
                lockedCurrencySide(JsonField.of(lockedCurrencySide))

            /**
             * Sets [Builder.lockedCurrencySide] to an arbitrary JSON value.
             *
             * You should usually call [Builder.lockedCurrencySide] with a well-typed
             * [LockedCurrencySide] value instead. This method is primarily for setting the field to
             * an undocumented or not yet supported value.
             */
            fun lockedCurrencySide(lockedCurrencySide: JsonField<LockedCurrencySide>) = apply {
                this.lockedCurrencySide = lockedCurrencySide
            }

            /** Unique identifier for the prior receiver uma address lookup request. */
            fun lookupId(lookupId: String) = lookupId(JsonField.of(lookupId))

            /**
             * Sets [Builder.lookupId] to an arbitrary JSON value.
             *
             * You should usually call [Builder.lookupId] with a well-typed [String] value instead.
             * This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun lookupId(lookupId: JsonField<String>) = apply { this.lookupId = lookupId }

            /** Currency code for the receiving amount */
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

            /** Currency code for the sending amount */
            fun sendingCurrencyCode(sendingCurrencyCode: String) =
                sendingCurrencyCode(JsonField.of(sendingCurrencyCode))

            /**
             * Sets [Builder.sendingCurrencyCode] to an arbitrary JSON value.
             *
             * You should usually call [Builder.sendingCurrencyCode] with a well-typed [String]
             * value instead. This method is primarily for setting the field to an undocumented or
             * not yet supported value.
             */
            fun sendingCurrencyCode(sendingCurrencyCode: JsonField<String>) = apply {
                this.sendingCurrencyCode = sendingCurrencyCode
            }

            /** Optional description/memo for the payment */
            fun description(description: String) = description(JsonField.of(description))

            /**
             * Sets [Builder.description] to an arbitrary JSON value.
             *
             * You should usually call [Builder.description] with a well-typed [String] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun description(description: JsonField<String>) = apply {
                this.description = description
            }

            /**
             * Key-value pairs of information about the sender which was requested by the
             * counterparty (recipient) institution. Any fields specified in
             * `requiredPayerDataFields` from the response of the `/receiver/{receiverUmaAddress}`
             * (lookupUma) endpoint MUST be provided here if they were requested. If the
             * counterparty (recipient) institution did not request any information, this field can
             * be omitted.
             */
            fun senderUserInfo(senderUserInfo: SenderUserInfo) =
                senderUserInfo(JsonField.of(senderUserInfo))

            /**
             * Sets [Builder.senderUserInfo] to an arbitrary JSON value.
             *
             * You should usually call [Builder.senderUserInfo] with a well-typed [SenderUserInfo]
             * value instead. This method is primarily for setting the field to an undocumented or
             * not yet supported value.
             */
            fun senderUserInfo(senderUserInfo: JsonField<SenderUserInfo>) = apply {
                this.senderUserInfo = senderUserInfo
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
             *
             * The following fields are required:
             * ```kotlin
             * .lockedCurrencyAmount()
             * .lockedCurrencySide()
             * .lookupId()
             * .receivingCurrencyCode()
             * .sendingCurrencyCode()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): Body =
                Body(
                    checkRequired("lockedCurrencyAmount", lockedCurrencyAmount),
                    checkRequired("lockedCurrencySide", lockedCurrencySide),
                    checkRequired("lookupId", lookupId),
                    checkRequired("receivingCurrencyCode", receivingCurrencyCode),
                    checkRequired("sendingCurrencyCode", sendingCurrencyCode),
                    description,
                    senderUserInfo,
                    additionalProperties.toMutableMap(),
                )
        }

        private var validated: Boolean = false

        fun validate(): Body = apply {
            if (validated) {
                return@apply
            }

            lockedCurrencyAmount()
            lockedCurrencySide().validate()
            lookupId()
            receivingCurrencyCode()
            sendingCurrencyCode()
            description()
            senderUserInfo()?.validate()
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
            (if (lockedCurrencyAmount.asKnown() == null) 0 else 1) +
                (lockedCurrencySide.asKnown()?.validity() ?: 0) +
                (if (lookupId.asKnown() == null) 0 else 1) +
                (if (receivingCurrencyCode.asKnown() == null) 0 else 1) +
                (if (sendingCurrencyCode.asKnown() == null) 0 else 1) +
                (if (description.asKnown() == null) 0 else 1) +
                (senderUserInfo.asKnown()?.validity() ?: 0)

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is Body && lockedCurrencyAmount == other.lockedCurrencyAmount && lockedCurrencySide == other.lockedCurrencySide && lookupId == other.lookupId && receivingCurrencyCode == other.receivingCurrencyCode && sendingCurrencyCode == other.sendingCurrencyCode && description == other.description && senderUserInfo == other.senderUserInfo && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(lockedCurrencyAmount, lockedCurrencySide, lookupId, receivingCurrencyCode, sendingCurrencyCode, description, senderUserInfo, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "Body{lockedCurrencyAmount=$lockedCurrencyAmount, lockedCurrencySide=$lockedCurrencySide, lookupId=$lookupId, receivingCurrencyCode=$receivingCurrencyCode, sendingCurrencyCode=$sendingCurrencyCode, description=$description, senderUserInfo=$senderUserInfo, additionalProperties=$additionalProperties}"
    }

    /**
     * The side of the quote which should be locked and specified in the `lockedCurrencyAmount`. For
     * example, if I want to send exactly $5 MXN from my wallet, I would set this to "sending", and
     * the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to receive exactly $10
     * USD, I would set this to "receiving" and the `lockedCurrencyAmount` to 10000 (in cents).
     */
    class LockedCurrencySide
    @JsonCreator
    private constructor(private val value: JsonField<String>) : Enum {

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

            val SENDING = of("SENDING")

            val RECEIVING = of("RECEIVING")

            fun of(value: String) = LockedCurrencySide(JsonField.of(value))
        }

        /** An enum containing [LockedCurrencySide]'s known values. */
        enum class Known {
            SENDING,
            RECEIVING,
        }

        /**
         * An enum containing [LockedCurrencySide]'s known values, as well as an [_UNKNOWN] member.
         *
         * An instance of [LockedCurrencySide] can contain an unknown value in a couple of cases:
         * - It was deserialized from data that doesn't match any known member. For example, if the
         *   SDK is on an older version than the API, then the API may respond with new members that
         *   the SDK is unaware of.
         * - It was constructed with an arbitrary value using the [of] method.
         */
        enum class Value {
            SENDING,
            RECEIVING,
            /**
             * An enum member indicating that [LockedCurrencySide] was instantiated with an unknown
             * value.
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
                SENDING -> Value.SENDING
                RECEIVING -> Value.RECEIVING
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
                SENDING -> Known.SENDING
                RECEIVING -> Known.RECEIVING
                else -> throw UmaaasInvalidDataException("Unknown LockedCurrencySide: $value")
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

        fun validate(): LockedCurrencySide = apply {
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

            return /* spotless:off */ other is LockedCurrencySide && value == other.value /* spotless:on */
        }

        override fun hashCode() = value.hashCode()

        override fun toString() = value.toString()
    }

    /**
     * Key-value pairs of information about the sender which was requested by the counterparty
     * (recipient) institution. Any fields specified in `requiredPayerDataFields` from the response
     * of the `/receiver/{receiverUmaAddress}` (lookupUma) endpoint MUST be provided here if they
     * were requested. If the counterparty (recipient) institution did not request any information,
     * this field can be omitted.
     */
    class SenderUserInfo
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

            /** Returns a mutable builder for constructing an instance of [SenderUserInfo]. */
            fun builder() = Builder()
        }

        /** A builder for [SenderUserInfo]. */
        class Builder internal constructor() {

            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(senderUserInfo: SenderUserInfo) = apply {
                additionalProperties = senderUserInfo.additionalProperties.toMutableMap()
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
             * Returns an immutable instance of [SenderUserInfo].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             */
            fun build(): SenderUserInfo = SenderUserInfo(additionalProperties.toImmutable())
        }

        private var validated: Boolean = false

        fun validate(): SenderUserInfo = apply {
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

            return /* spotless:off */ other is SenderUserInfo && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() = "SenderUserInfo{additionalProperties=$additionalProperties}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is QuoteCreateParams && body == other.body && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(body, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "QuoteCreateParams{body=$body, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
