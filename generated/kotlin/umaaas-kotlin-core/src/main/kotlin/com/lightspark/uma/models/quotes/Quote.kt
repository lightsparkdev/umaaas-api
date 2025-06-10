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
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.toImmutable
import com.lightspark.uma.errors.UmaaasInvalidDataException
import com.lightspark.uma.models.users.BankAccountType
import java.time.OffsetDateTime
import java.util.Collections
import java.util.Objects

class Quote
private constructor(
    private val exchangeRate: JsonField<Double>,
    private val expiresAt: JsonField<OffsetDateTime>,
    private val feesIncluded: JsonField<Long>,
    private val paymentInstructions: JsonField<PaymentInstructions>,
    private val quoteId: JsonField<String>,
    private val receivingCurrency: JsonField<Currency>,
    private val sendingCurrency: JsonField<Currency>,
    private val totalReceivingAmount: JsonField<Long>,
    private val totalSendingAmount: JsonField<Long>,
    private val transactionId: JsonField<String>,
    private val counterpartyInformation: JsonField<CounterpartyInformation>,
    private val status: JsonField<Status>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("exchangeRate")
        @ExcludeMissing
        exchangeRate: JsonField<Double> = JsonMissing.of(),
        @JsonProperty("expiresAt")
        @ExcludeMissing
        expiresAt: JsonField<OffsetDateTime> = JsonMissing.of(),
        @JsonProperty("feesIncluded")
        @ExcludeMissing
        feesIncluded: JsonField<Long> = JsonMissing.of(),
        @JsonProperty("paymentInstructions")
        @ExcludeMissing
        paymentInstructions: JsonField<PaymentInstructions> = JsonMissing.of(),
        @JsonProperty("quoteId") @ExcludeMissing quoteId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("receivingCurrency")
        @ExcludeMissing
        receivingCurrency: JsonField<Currency> = JsonMissing.of(),
        @JsonProperty("sendingCurrency")
        @ExcludeMissing
        sendingCurrency: JsonField<Currency> = JsonMissing.of(),
        @JsonProperty("totalReceivingAmount")
        @ExcludeMissing
        totalReceivingAmount: JsonField<Long> = JsonMissing.of(),
        @JsonProperty("totalSendingAmount")
        @ExcludeMissing
        totalSendingAmount: JsonField<Long> = JsonMissing.of(),
        @JsonProperty("transactionId")
        @ExcludeMissing
        transactionId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("counterpartyInformation")
        @ExcludeMissing
        counterpartyInformation: JsonField<CounterpartyInformation> = JsonMissing.of(),
        @JsonProperty("status") @ExcludeMissing status: JsonField<Status> = JsonMissing.of(),
    ) : this(
        exchangeRate,
        expiresAt,
        feesIncluded,
        paymentInstructions,
        quoteId,
        receivingCurrency,
        sendingCurrency,
        totalReceivingAmount,
        totalSendingAmount,
        transactionId,
        counterpartyInformation,
        status,
        mutableMapOf(),
    )

    /**
     * Number of sending currency units per receiving currency unit.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun exchangeRate(): Double = exchangeRate.getRequired("exchangeRate")

    /**
     * When this quote expires (typically 1-5 minutes after creation)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun expiresAt(): OffsetDateTime = expiresAt.getRequired("expiresAt")

    /**
     * The fees associated with the quote in the smallest unit of the sending currency (eg. cents).
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun feesIncluded(): Long = feesIncluded.getRequired("feesIncluded")

    /**
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun paymentInstructions(): PaymentInstructions =
        paymentInstructions.getRequired("paymentInstructions")

    /**
     * Unique identifier for this quote
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun quoteId(): String = quoteId.getRequired("quoteId")

    /**
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun receivingCurrency(): Currency = receivingCurrency.getRequired("receivingCurrency")

    /**
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun sendingCurrency(): Currency = sendingCurrency.getRequired("sendingCurrency")

    /**
     * The total amount that will be received in the smallest unit of the receiving currency (eg.
     * cents).
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun totalReceivingAmount(): Long = totalReceivingAmount.getRequired("totalReceivingAmount")

    /**
     * The total amount that will be sent in the smallest unit of the sending currency (eg. cents).
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun totalSendingAmount(): Long = totalSendingAmount.getRequired("totalSendingAmount")

    /**
     * The ID of the transaction created from this quote.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun transactionId(): String = transactionId.getRequired("transactionId")

    /**
     * Information about the recipient, as required by the platform in their configuration.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun counterpartyInformation(): CounterpartyInformation? =
        counterpartyInformation.getNullable("counterpartyInformation")

    /**
     * Current status of the quote
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun status(): Status? = status.getNullable("status")

    /**
     * Returns the raw JSON value of [exchangeRate].
     *
     * Unlike [exchangeRate], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("exchangeRate")
    @ExcludeMissing
    fun _exchangeRate(): JsonField<Double> = exchangeRate

    /**
     * Returns the raw JSON value of [expiresAt].
     *
     * Unlike [expiresAt], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("expiresAt")
    @ExcludeMissing
    fun _expiresAt(): JsonField<OffsetDateTime> = expiresAt

    /**
     * Returns the raw JSON value of [feesIncluded].
     *
     * Unlike [feesIncluded], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("feesIncluded")
    @ExcludeMissing
    fun _feesIncluded(): JsonField<Long> = feesIncluded

    /**
     * Returns the raw JSON value of [paymentInstructions].
     *
     * Unlike [paymentInstructions], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    @JsonProperty("paymentInstructions")
    @ExcludeMissing
    fun _paymentInstructions(): JsonField<PaymentInstructions> = paymentInstructions

    /**
     * Returns the raw JSON value of [quoteId].
     *
     * Unlike [quoteId], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("quoteId") @ExcludeMissing fun _quoteId(): JsonField<String> = quoteId

    /**
     * Returns the raw JSON value of [receivingCurrency].
     *
     * Unlike [receivingCurrency], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    @JsonProperty("receivingCurrency")
    @ExcludeMissing
    fun _receivingCurrency(): JsonField<Currency> = receivingCurrency

    /**
     * Returns the raw JSON value of [sendingCurrency].
     *
     * Unlike [sendingCurrency], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("sendingCurrency")
    @ExcludeMissing
    fun _sendingCurrency(): JsonField<Currency> = sendingCurrency

    /**
     * Returns the raw JSON value of [totalReceivingAmount].
     *
     * Unlike [totalReceivingAmount], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    @JsonProperty("totalReceivingAmount")
    @ExcludeMissing
    fun _totalReceivingAmount(): JsonField<Long> = totalReceivingAmount

    /**
     * Returns the raw JSON value of [totalSendingAmount].
     *
     * Unlike [totalSendingAmount], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    @JsonProperty("totalSendingAmount")
    @ExcludeMissing
    fun _totalSendingAmount(): JsonField<Long> = totalSendingAmount

    /**
     * Returns the raw JSON value of [transactionId].
     *
     * Unlike [transactionId], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("transactionId")
    @ExcludeMissing
    fun _transactionId(): JsonField<String> = transactionId

    /**
     * Returns the raw JSON value of [counterpartyInformation].
     *
     * Unlike [counterpartyInformation], this method doesn't throw if the JSON field has an
     * unexpected type.
     */
    @JsonProperty("counterpartyInformation")
    @ExcludeMissing
    fun _counterpartyInformation(): JsonField<CounterpartyInformation> = counterpartyInformation

    /**
     * Returns the raw JSON value of [status].
     *
     * Unlike [status], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("status") @ExcludeMissing fun _status(): JsonField<Status> = status

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
         * Returns a mutable builder for constructing an instance of [Quote].
         *
         * The following fields are required:
         * ```kotlin
         * .exchangeRate()
         * .expiresAt()
         * .feesIncluded()
         * .paymentInstructions()
         * .quoteId()
         * .receivingCurrency()
         * .sendingCurrency()
         * .totalReceivingAmount()
         * .totalSendingAmount()
         * .transactionId()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [Quote]. */
    class Builder internal constructor() {

        private var exchangeRate: JsonField<Double>? = null
        private var expiresAt: JsonField<OffsetDateTime>? = null
        private var feesIncluded: JsonField<Long>? = null
        private var paymentInstructions: JsonField<PaymentInstructions>? = null
        private var quoteId: JsonField<String>? = null
        private var receivingCurrency: JsonField<Currency>? = null
        private var sendingCurrency: JsonField<Currency>? = null
        private var totalReceivingAmount: JsonField<Long>? = null
        private var totalSendingAmount: JsonField<Long>? = null
        private var transactionId: JsonField<String>? = null
        private var counterpartyInformation: JsonField<CounterpartyInformation> = JsonMissing.of()
        private var status: JsonField<Status> = JsonMissing.of()
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(quote: Quote) = apply {
            exchangeRate = quote.exchangeRate
            expiresAt = quote.expiresAt
            feesIncluded = quote.feesIncluded
            paymentInstructions = quote.paymentInstructions
            quoteId = quote.quoteId
            receivingCurrency = quote.receivingCurrency
            sendingCurrency = quote.sendingCurrency
            totalReceivingAmount = quote.totalReceivingAmount
            totalSendingAmount = quote.totalSendingAmount
            transactionId = quote.transactionId
            counterpartyInformation = quote.counterpartyInformation
            status = quote.status
            additionalProperties = quote.additionalProperties.toMutableMap()
        }

        /** Number of sending currency units per receiving currency unit. */
        fun exchangeRate(exchangeRate: Double) = exchangeRate(JsonField.of(exchangeRate))

        /**
         * Sets [Builder.exchangeRate] to an arbitrary JSON value.
         *
         * You should usually call [Builder.exchangeRate] with a well-typed [Double] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun exchangeRate(exchangeRate: JsonField<Double>) = apply {
            this.exchangeRate = exchangeRate
        }

        /** When this quote expires (typically 1-5 minutes after creation) */
        fun expiresAt(expiresAt: OffsetDateTime) = expiresAt(JsonField.of(expiresAt))

        /**
         * Sets [Builder.expiresAt] to an arbitrary JSON value.
         *
         * You should usually call [Builder.expiresAt] with a well-typed [OffsetDateTime] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun expiresAt(expiresAt: JsonField<OffsetDateTime>) = apply { this.expiresAt = expiresAt }

        /**
         * The fees associated with the quote in the smallest unit of the sending currency (eg.
         * cents).
         */
        fun feesIncluded(feesIncluded: Long) = feesIncluded(JsonField.of(feesIncluded))

        /**
         * Sets [Builder.feesIncluded] to an arbitrary JSON value.
         *
         * You should usually call [Builder.feesIncluded] with a well-typed [Long] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun feesIncluded(feesIncluded: JsonField<Long>) = apply { this.feesIncluded = feesIncluded }

        fun paymentInstructions(paymentInstructions: PaymentInstructions) =
            paymentInstructions(JsonField.of(paymentInstructions))

        /**
         * Sets [Builder.paymentInstructions] to an arbitrary JSON value.
         *
         * You should usually call [Builder.paymentInstructions] with a well-typed
         * [PaymentInstructions] value instead. This method is primarily for setting the field to an
         * undocumented or not yet supported value.
         */
        fun paymentInstructions(paymentInstructions: JsonField<PaymentInstructions>) = apply {
            this.paymentInstructions = paymentInstructions
        }

        /** Unique identifier for this quote */
        fun quoteId(quoteId: String) = quoteId(JsonField.of(quoteId))

        /**
         * Sets [Builder.quoteId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.quoteId] with a well-typed [String] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun quoteId(quoteId: JsonField<String>) = apply { this.quoteId = quoteId }

        fun receivingCurrency(receivingCurrency: Currency) =
            receivingCurrency(JsonField.of(receivingCurrency))

        /**
         * Sets [Builder.receivingCurrency] to an arbitrary JSON value.
         *
         * You should usually call [Builder.receivingCurrency] with a well-typed [Currency] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun receivingCurrency(receivingCurrency: JsonField<Currency>) = apply {
            this.receivingCurrency = receivingCurrency
        }

        fun sendingCurrency(sendingCurrency: Currency) =
            sendingCurrency(JsonField.of(sendingCurrency))

        /**
         * Sets [Builder.sendingCurrency] to an arbitrary JSON value.
         *
         * You should usually call [Builder.sendingCurrency] with a well-typed [Currency] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun sendingCurrency(sendingCurrency: JsonField<Currency>) = apply {
            this.sendingCurrency = sendingCurrency
        }

        /**
         * The total amount that will be received in the smallest unit of the receiving currency
         * (eg. cents).
         */
        fun totalReceivingAmount(totalReceivingAmount: Long) =
            totalReceivingAmount(JsonField.of(totalReceivingAmount))

        /**
         * Sets [Builder.totalReceivingAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.totalReceivingAmount] with a well-typed [Long] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun totalReceivingAmount(totalReceivingAmount: JsonField<Long>) = apply {
            this.totalReceivingAmount = totalReceivingAmount
        }

        /**
         * The total amount that will be sent in the smallest unit of the sending currency (eg.
         * cents).
         */
        fun totalSendingAmount(totalSendingAmount: Long) =
            totalSendingAmount(JsonField.of(totalSendingAmount))

        /**
         * Sets [Builder.totalSendingAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.totalSendingAmount] with a well-typed [Long] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun totalSendingAmount(totalSendingAmount: JsonField<Long>) = apply {
            this.totalSendingAmount = totalSendingAmount
        }

        /** The ID of the transaction created from this quote. */
        fun transactionId(transactionId: String) = transactionId(JsonField.of(transactionId))

        /**
         * Sets [Builder.transactionId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.transactionId] with a well-typed [String] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun transactionId(transactionId: JsonField<String>) = apply {
            this.transactionId = transactionId
        }

        /** Information about the recipient, as required by the platform in their configuration. */
        fun counterpartyInformation(counterpartyInformation: CounterpartyInformation) =
            counterpartyInformation(JsonField.of(counterpartyInformation))

        /**
         * Sets [Builder.counterpartyInformation] to an arbitrary JSON value.
         *
         * You should usually call [Builder.counterpartyInformation] with a well-typed
         * [CounterpartyInformation] value instead. This method is primarily for setting the field
         * to an undocumented or not yet supported value.
         */
        fun counterpartyInformation(counterpartyInformation: JsonField<CounterpartyInformation>) =
            apply {
                this.counterpartyInformation = counterpartyInformation
            }

        /** Current status of the quote */
        fun status(status: Status) = status(JsonField.of(status))

        /**
         * Sets [Builder.status] to an arbitrary JSON value.
         *
         * You should usually call [Builder.status] with a well-typed [Status] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun status(status: JsonField<Status>) = apply { this.status = status }

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
         * Returns an immutable instance of [Quote].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .exchangeRate()
         * .expiresAt()
         * .feesIncluded()
         * .paymentInstructions()
         * .quoteId()
         * .receivingCurrency()
         * .sendingCurrency()
         * .totalReceivingAmount()
         * .totalSendingAmount()
         * .transactionId()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): Quote =
            Quote(
                checkRequired("exchangeRate", exchangeRate),
                checkRequired("expiresAt", expiresAt),
                checkRequired("feesIncluded", feesIncluded),
                checkRequired("paymentInstructions", paymentInstructions),
                checkRequired("quoteId", quoteId),
                checkRequired("receivingCurrency", receivingCurrency),
                checkRequired("sendingCurrency", sendingCurrency),
                checkRequired("totalReceivingAmount", totalReceivingAmount),
                checkRequired("totalSendingAmount", totalSendingAmount),
                checkRequired("transactionId", transactionId),
                counterpartyInformation,
                status,
                additionalProperties.toMutableMap(),
            )
    }

    private var validated: Boolean = false

    fun validate(): Quote = apply {
        if (validated) {
            return@apply
        }

        exchangeRate()
        expiresAt()
        feesIncluded()
        paymentInstructions().validate()
        quoteId()
        receivingCurrency().validate()
        sendingCurrency().validate()
        totalReceivingAmount()
        totalSendingAmount()
        transactionId()
        counterpartyInformation()?.validate()
        status()?.validate()
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
     * Returns a score indicating how many valid values are contained in this object recursively.
     *
     * Used for best match union deserialization.
     */
    internal fun validity(): Int =
        (if (exchangeRate.asKnown() == null) 0 else 1) +
            (if (expiresAt.asKnown() == null) 0 else 1) +
            (if (feesIncluded.asKnown() == null) 0 else 1) +
            (paymentInstructions.asKnown()?.validity() ?: 0) +
            (if (quoteId.asKnown() == null) 0 else 1) +
            (receivingCurrency.asKnown()?.validity() ?: 0) +
            (sendingCurrency.asKnown()?.validity() ?: 0) +
            (if (totalReceivingAmount.asKnown() == null) 0 else 1) +
            (if (totalSendingAmount.asKnown() == null) 0 else 1) +
            (if (transactionId.asKnown() == null) 0 else 1) +
            (counterpartyInformation.asKnown()?.validity() ?: 0) +
            (status.asKnown()?.validity() ?: 0)

    class PaymentInstructions
    private constructor(
        private val bankAccountInfo: JsonField<BankAccountInfo>,
        private val reference: JsonField<String>,
        private val instructionsNotes: JsonField<String>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("bankAccountInfo")
            @ExcludeMissing
            bankAccountInfo: JsonField<BankAccountInfo> = JsonMissing.of(),
            @JsonProperty("reference")
            @ExcludeMissing
            reference: JsonField<String> = JsonMissing.of(),
            @JsonProperty("instructionsNotes")
            @ExcludeMissing
            instructionsNotes: JsonField<String> = JsonMissing.of(),
        ) : this(bankAccountInfo, reference, instructionsNotes, mutableMapOf())

        /**
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun bankAccountInfo(): BankAccountInfo = bankAccountInfo.getRequired("bankAccountInfo")

        /**
         * Unique reference code that must be included with the payment to properly credit it
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun reference(): String = reference.getRequired("reference")

        /**
         * Additional human-readable instructions for making the payment
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun instructionsNotes(): String? = instructionsNotes.getNullable("instructionsNotes")

        /**
         * Returns the raw JSON value of [bankAccountInfo].
         *
         * Unlike [bankAccountInfo], this method doesn't throw if the JSON field has an unexpected
         * type.
         */
        @JsonProperty("bankAccountInfo")
        @ExcludeMissing
        fun _bankAccountInfo(): JsonField<BankAccountInfo> = bankAccountInfo

        /**
         * Returns the raw JSON value of [reference].
         *
         * Unlike [reference], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("reference") @ExcludeMissing fun _reference(): JsonField<String> = reference

        /**
         * Returns the raw JSON value of [instructionsNotes].
         *
         * Unlike [instructionsNotes], this method doesn't throw if the JSON field has an unexpected
         * type.
         */
        @JsonProperty("instructionsNotes")
        @ExcludeMissing
        fun _instructionsNotes(): JsonField<String> = instructionsNotes

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
             * Returns a mutable builder for constructing an instance of [PaymentInstructions].
             *
             * The following fields are required:
             * ```kotlin
             * .bankAccountInfo()
             * .reference()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [PaymentInstructions]. */
        class Builder internal constructor() {

            private var bankAccountInfo: JsonField<BankAccountInfo>? = null
            private var reference: JsonField<String>? = null
            private var instructionsNotes: JsonField<String> = JsonMissing.of()
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(paymentInstructions: PaymentInstructions) = apply {
                bankAccountInfo = paymentInstructions.bankAccountInfo
                reference = paymentInstructions.reference
                instructionsNotes = paymentInstructions.instructionsNotes
                additionalProperties = paymentInstructions.additionalProperties.toMutableMap()
            }

            fun bankAccountInfo(bankAccountInfo: BankAccountInfo) =
                bankAccountInfo(JsonField.of(bankAccountInfo))

            /**
             * Sets [Builder.bankAccountInfo] to an arbitrary JSON value.
             *
             * You should usually call [Builder.bankAccountInfo] with a well-typed [BankAccountInfo]
             * value instead. This method is primarily for setting the field to an undocumented or
             * not yet supported value.
             */
            fun bankAccountInfo(bankAccountInfo: JsonField<BankAccountInfo>) = apply {
                this.bankAccountInfo = bankAccountInfo
            }

            /**
             * Unique reference code that must be included with the payment to properly credit it
             */
            fun reference(reference: String) = reference(JsonField.of(reference))

            /**
             * Sets [Builder.reference] to an arbitrary JSON value.
             *
             * You should usually call [Builder.reference] with a well-typed [String] value instead.
             * This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun reference(reference: JsonField<String>) = apply { this.reference = reference }

            /** Additional human-readable instructions for making the payment */
            fun instructionsNotes(instructionsNotes: String) =
                instructionsNotes(JsonField.of(instructionsNotes))

            /**
             * Sets [Builder.instructionsNotes] to an arbitrary JSON value.
             *
             * You should usually call [Builder.instructionsNotes] with a well-typed [String] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun instructionsNotes(instructionsNotes: JsonField<String>) = apply {
                this.instructionsNotes = instructionsNotes
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
             * Returns an immutable instance of [PaymentInstructions].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             *
             * The following fields are required:
             * ```kotlin
             * .bankAccountInfo()
             * .reference()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): PaymentInstructions =
                PaymentInstructions(
                    checkRequired("bankAccountInfo", bankAccountInfo),
                    checkRequired("reference", reference),
                    instructionsNotes,
                    additionalProperties.toMutableMap(),
                )
        }

        private var validated: Boolean = false

        fun validate(): PaymentInstructions = apply {
            if (validated) {
                return@apply
            }

            bankAccountInfo().validate()
            reference()
            instructionsNotes()
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
            (bankAccountInfo.asKnown()?.validity() ?: 0) +
                (if (reference.asKnown() == null) 0 else 1) +
                (if (instructionsNotes.asKnown() == null) 0 else 1)

        class BankAccountInfo
        private constructor(
            private val accountType: JsonField<BankAccountType>,
            private val additionalProperties: MutableMap<String, JsonValue>,
        ) {

            @JsonCreator
            private constructor(
                @JsonProperty("accountType")
                @ExcludeMissing
                accountType: JsonField<BankAccountType> = JsonMissing.of()
            ) : this(accountType, mutableMapOf())

            /**
             * Type of bank account information
             *
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
             *   unexpectedly missing or null (e.g. if the server responded with an unexpected
             *   value).
             */
            fun accountType(): BankAccountType = accountType.getRequired("accountType")

            /**
             * Returns the raw JSON value of [accountType].
             *
             * Unlike [accountType], this method doesn't throw if the JSON field has an unexpected
             * type.
             */
            @JsonProperty("accountType")
            @ExcludeMissing
            fun _accountType(): JsonField<BankAccountType> = accountType

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
                 * Returns a mutable builder for constructing an instance of [BankAccountInfo].
                 *
                 * The following fields are required:
                 * ```kotlin
                 * .accountType()
                 * ```
                 */
                fun builder() = Builder()
            }

            /** A builder for [BankAccountInfo]. */
            class Builder internal constructor() {

                private var accountType: JsonField<BankAccountType>? = null
                private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

                internal fun from(bankAccountInfo: BankAccountInfo) = apply {
                    accountType = bankAccountInfo.accountType
                    additionalProperties = bankAccountInfo.additionalProperties.toMutableMap()
                }

                /** Type of bank account information */
                fun accountType(accountType: BankAccountType) =
                    accountType(JsonField.of(accountType))

                /**
                 * Sets [Builder.accountType] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.accountType] with a well-typed [BankAccountType]
                 * value instead. This method is primarily for setting the field to an undocumented
                 * or not yet supported value.
                 */
                fun accountType(accountType: JsonField<BankAccountType>) = apply {
                    this.accountType = accountType
                }

                fun additionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
                    this.additionalProperties.clear()
                    putAllAdditionalProperties(additionalProperties)
                }

                fun putAdditionalProperty(key: String, value: JsonValue) = apply {
                    additionalProperties.put(key, value)
                }

                fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) =
                    apply {
                        this.additionalProperties.putAll(additionalProperties)
                    }

                fun removeAdditionalProperty(key: String) = apply {
                    additionalProperties.remove(key)
                }

                fun removeAllAdditionalProperties(keys: Set<String>) = apply {
                    keys.forEach(::removeAdditionalProperty)
                }

                /**
                 * Returns an immutable instance of [BankAccountInfo].
                 *
                 * Further updates to this [Builder] will not mutate the returned instance.
                 *
                 * The following fields are required:
                 * ```kotlin
                 * .accountType()
                 * ```
                 *
                 * @throws IllegalStateException if any required field is unset.
                 */
                fun build(): BankAccountInfo =
                    BankAccountInfo(
                        checkRequired("accountType", accountType),
                        additionalProperties.toMutableMap(),
                    )
            }

            private var validated: Boolean = false

            fun validate(): BankAccountInfo = apply {
                if (validated) {
                    return@apply
                }

                accountType().validate()
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
            internal fun validity(): Int = (accountType.asKnown()?.validity() ?: 0)

            override fun equals(other: Any?): Boolean {
                if (this === other) {
                    return true
                }

                return /* spotless:off */ other is BankAccountInfo && accountType == other.accountType && additionalProperties == other.additionalProperties /* spotless:on */
            }

            /* spotless:off */
            private val hashCode: Int by lazy { Objects.hash(accountType, additionalProperties) }
            /* spotless:on */

            override fun hashCode(): Int = hashCode

            override fun toString() =
                "BankAccountInfo{accountType=$accountType, additionalProperties=$additionalProperties}"
        }

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is PaymentInstructions && bankAccountInfo == other.bankAccountInfo && reference == other.reference && instructionsNotes == other.instructionsNotes && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(bankAccountInfo, reference, instructionsNotes, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "PaymentInstructions{bankAccountInfo=$bankAccountInfo, reference=$reference, instructionsNotes=$instructionsNotes, additionalProperties=$additionalProperties}"
    }

    /** Information about the recipient, as required by the platform in their configuration. */
    class CounterpartyInformation
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

            /**
             * Returns a mutable builder for constructing an instance of [CounterpartyInformation].
             */
            fun builder() = Builder()
        }

        /** A builder for [CounterpartyInformation]. */
        class Builder internal constructor() {

            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(counterpartyInformation: CounterpartyInformation) = apply {
                additionalProperties = counterpartyInformation.additionalProperties.toMutableMap()
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
             * Returns an immutable instance of [CounterpartyInformation].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             */
            fun build(): CounterpartyInformation =
                CounterpartyInformation(additionalProperties.toImmutable())
        }

        private var validated: Boolean = false

        fun validate(): CounterpartyInformation = apply {
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

            return /* spotless:off */ other is CounterpartyInformation && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "CounterpartyInformation{additionalProperties=$additionalProperties}"
    }

    /** Current status of the quote */
    class Status @JsonCreator private constructor(private val value: JsonField<String>) : Enum {

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

            val PENDING = of("PENDING")

            val PROCESSING = of("PROCESSING")

            val COMPLETED = of("COMPLETED")

            val FAILED = of("FAILED")

            val EXPIRED = of("EXPIRED")

            fun of(value: String) = Status(JsonField.of(value))
        }

        /** An enum containing [Status]'s known values. */
        enum class Known {
            PENDING,
            PROCESSING,
            COMPLETED,
            FAILED,
            EXPIRED,
        }

        /**
         * An enum containing [Status]'s known values, as well as an [_UNKNOWN] member.
         *
         * An instance of [Status] can contain an unknown value in a couple of cases:
         * - It was deserialized from data that doesn't match any known member. For example, if the
         *   SDK is on an older version than the API, then the API may respond with new members that
         *   the SDK is unaware of.
         * - It was constructed with an arbitrary value using the [of] method.
         */
        enum class Value {
            PENDING,
            PROCESSING,
            COMPLETED,
            FAILED,
            EXPIRED,
            /** An enum member indicating that [Status] was instantiated with an unknown value. */
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
                PENDING -> Value.PENDING
                PROCESSING -> Value.PROCESSING
                COMPLETED -> Value.COMPLETED
                FAILED -> Value.FAILED
                EXPIRED -> Value.EXPIRED
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
                PENDING -> Known.PENDING
                PROCESSING -> Known.PROCESSING
                COMPLETED -> Known.COMPLETED
                FAILED -> Known.FAILED
                EXPIRED -> Known.EXPIRED
                else -> throw UmaaasInvalidDataException("Unknown Status: $value")
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

        fun validate(): Status = apply {
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

            return /* spotless:off */ other is Status && value == other.value /* spotless:on */
        }

        override fun hashCode() = value.hashCode()

        override fun toString() = value.toString()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is Quote && exchangeRate == other.exchangeRate && expiresAt == other.expiresAt && feesIncluded == other.feesIncluded && paymentInstructions == other.paymentInstructions && quoteId == other.quoteId && receivingCurrency == other.receivingCurrency && sendingCurrency == other.sendingCurrency && totalReceivingAmount == other.totalReceivingAmount && totalSendingAmount == other.totalSendingAmount && transactionId == other.transactionId && counterpartyInformation == other.counterpartyInformation && status == other.status && additionalProperties == other.additionalProperties /* spotless:on */
    }

    /* spotless:off */
    private val hashCode: Int by lazy { Objects.hash(exchangeRate, expiresAt, feesIncluded, paymentInstructions, quoteId, receivingCurrency, sendingCurrency, totalReceivingAmount, totalSendingAmount, transactionId, counterpartyInformation, status, additionalProperties) }
    /* spotless:on */

    override fun hashCode(): Int = hashCode

    override fun toString() =
        "Quote{exchangeRate=$exchangeRate, expiresAt=$expiresAt, feesIncluded=$feesIncluded, paymentInstructions=$paymentInstructions, quoteId=$quoteId, receivingCurrency=$receivingCurrency, sendingCurrency=$sendingCurrency, totalReceivingAmount=$totalReceivingAmount, totalSendingAmount=$totalSendingAmount, transactionId=$transactionId, counterpartyInformation=$counterpartyInformation, status=$status, additionalProperties=$additionalProperties}"
}
