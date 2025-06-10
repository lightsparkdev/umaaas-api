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
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.errors.UmaaasInvalidDataException
import com.lightspark.uma.models.invitations.CurrencyAmount
import java.time.OffsetDateTime
import java.util.Collections
import java.util.Objects

class OutgoingTransaction
private constructor(
    private val id: JsonField<String>,
    private val platformUserId: JsonField<String>,
    private val receiverUmaAddress: JsonField<String>,
    private val senderUmaAddress: JsonField<String>,
    private val status: JsonField<TransactionStatus>,
    private val type: JsonField<TransactionType>,
    private val userId: JsonField<String>,
    private val counterpartyInformation: JsonField<Transaction.CounterpartyInformation>,
    private val createdAt: JsonField<OffsetDateTime>,
    private val description: JsonField<String>,
    private val settledAt: JsonField<OffsetDateTime>,
    private val sentAmount: JsonField<CurrencyAmount>,
    private val exchangeRate: JsonField<Double>,
    private val fees: JsonField<Long>,
    private val quoteId: JsonField<String>,
    private val receivedAmount: JsonField<CurrencyAmount>,
    private val refund: JsonField<Refund>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("id") @ExcludeMissing id: JsonField<String> = JsonMissing.of(),
        @JsonProperty("platformUserId")
        @ExcludeMissing
        platformUserId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("receiverUmaAddress")
        @ExcludeMissing
        receiverUmaAddress: JsonField<String> = JsonMissing.of(),
        @JsonProperty("senderUmaAddress")
        @ExcludeMissing
        senderUmaAddress: JsonField<String> = JsonMissing.of(),
        @JsonProperty("status")
        @ExcludeMissing
        status: JsonField<TransactionStatus> = JsonMissing.of(),
        @JsonProperty("type") @ExcludeMissing type: JsonField<TransactionType> = JsonMissing.of(),
        @JsonProperty("userId") @ExcludeMissing userId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("counterpartyInformation")
        @ExcludeMissing
        counterpartyInformation: JsonField<Transaction.CounterpartyInformation> = JsonMissing.of(),
        @JsonProperty("createdAt")
        @ExcludeMissing
        createdAt: JsonField<OffsetDateTime> = JsonMissing.of(),
        @JsonProperty("description")
        @ExcludeMissing
        description: JsonField<String> = JsonMissing.of(),
        @JsonProperty("settledAt")
        @ExcludeMissing
        settledAt: JsonField<OffsetDateTime> = JsonMissing.of(),
        @JsonProperty("sentAmount")
        @ExcludeMissing
        sentAmount: JsonField<CurrencyAmount> = JsonMissing.of(),
        @JsonProperty("exchangeRate")
        @ExcludeMissing
        exchangeRate: JsonField<Double> = JsonMissing.of(),
        @JsonProperty("fees") @ExcludeMissing fees: JsonField<Long> = JsonMissing.of(),
        @JsonProperty("quoteId") @ExcludeMissing quoteId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("receivedAmount")
        @ExcludeMissing
        receivedAmount: JsonField<CurrencyAmount> = JsonMissing.of(),
        @JsonProperty("refund") @ExcludeMissing refund: JsonField<Refund> = JsonMissing.of(),
    ) : this(
        id,
        platformUserId,
        receiverUmaAddress,
        senderUmaAddress,
        status,
        type,
        userId,
        counterpartyInformation,
        createdAt,
        description,
        settledAt,
        sentAmount,
        exchangeRate,
        fees,
        quoteId,
        receivedAmount,
        refund,
        mutableMapOf(),
    )

    fun toTransaction(): Transaction =
        Transaction.builder()
            .id(id)
            .platformUserId(platformUserId)
            .receiverUmaAddress(receiverUmaAddress)
            .senderUmaAddress(senderUmaAddress)
            .status(status)
            .type(type)
            .userId(userId)
            .counterpartyInformation(counterpartyInformation)
            .createdAt(createdAt)
            .description(description)
            .settledAt(settledAt)
            .build()

    /**
     * Unique identifier for the transaction
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun id(): String = id.getRequired("id")

    /**
     * Platform-specific ID of the user (sender for outgoing, recipient for incoming)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun platformUserId(): String = platformUserId.getRequired("platformUserId")

    /**
     * UMA address of the payment recipient
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun receiverUmaAddress(): String = receiverUmaAddress.getRequired("receiverUmaAddress")

    /**
     * UMA address of the payment sender
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun senderUmaAddress(): String = senderUmaAddress.getRequired("senderUmaAddress")

    /**
     * Status of a payment transaction
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun status(): TransactionStatus = status.getRequired("status")

    /**
     * Type of transaction (incoming payment or outgoing payment)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun type(): TransactionType = type.getRequired("type")

    /**
     * System ID of the user (sender for outgoing, recipient for incoming)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun userId(): String = userId.getRequired("userId")

    /**
     * Additional information about the counterparty, if available
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun counterpartyInformation(): Transaction.CounterpartyInformation? =
        counterpartyInformation.getNullable("counterpartyInformation")

    /**
     * When the transaction was created
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun createdAt(): OffsetDateTime? = createdAt.getNullable("createdAt")

    /**
     * Optional memo or description for the payment
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun description(): String? = description.getNullable("description")

    /**
     * When the payment was or will be settled
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun settledAt(): OffsetDateTime? = settledAt.getNullable("settledAt")

    /**
     * Amount sent in the sender's currency
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun sentAmount(): CurrencyAmount = sentAmount.getRequired("sentAmount")

    /**
     * Number of sending currency units per receiving currency unit.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun exchangeRate(): Double? = exchangeRate.getNullable("exchangeRate")

    /**
     * The fees associated with the quote in the smallest unit of the sending currency (eg. cents).
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun fees(): Long? = fees.getNullable("fees")

    /**
     * The ID of the quote that was used to trigger this payment
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun quoteId(): String? = quoteId.getNullable("quoteId")

    /**
     * Amount to be received by recipient in the recipient's currency
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun receivedAmount(): CurrencyAmount? = receivedAmount.getNullable("receivedAmount")

    /**
     * The refund if transaction was refunded.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun refund(): Refund? = refund.getNullable("refund")

    /**
     * Returns the raw JSON value of [id].
     *
     * Unlike [id], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("id") @ExcludeMissing fun _id(): JsonField<String> = id

    /**
     * Returns the raw JSON value of [platformUserId].
     *
     * Unlike [platformUserId], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("platformUserId")
    @ExcludeMissing
    fun _platformUserId(): JsonField<String> = platformUserId

    /**
     * Returns the raw JSON value of [receiverUmaAddress].
     *
     * Unlike [receiverUmaAddress], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    @JsonProperty("receiverUmaAddress")
    @ExcludeMissing
    fun _receiverUmaAddress(): JsonField<String> = receiverUmaAddress

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
     * Returns the raw JSON value of [status].
     *
     * Unlike [status], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("status") @ExcludeMissing fun _status(): JsonField<TransactionStatus> = status

    /**
     * Returns the raw JSON value of [type].
     *
     * Unlike [type], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("type") @ExcludeMissing fun _type(): JsonField<TransactionType> = type

    /**
     * Returns the raw JSON value of [userId].
     *
     * Unlike [userId], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("userId") @ExcludeMissing fun _userId(): JsonField<String> = userId

    /**
     * Returns the raw JSON value of [counterpartyInformation].
     *
     * Unlike [counterpartyInformation], this method doesn't throw if the JSON field has an
     * unexpected type.
     */
    @JsonProperty("counterpartyInformation")
    @ExcludeMissing
    fun _counterpartyInformation(): JsonField<Transaction.CounterpartyInformation> =
        counterpartyInformation

    /**
     * Returns the raw JSON value of [createdAt].
     *
     * Unlike [createdAt], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("createdAt")
    @ExcludeMissing
    fun _createdAt(): JsonField<OffsetDateTime> = createdAt

    /**
     * Returns the raw JSON value of [description].
     *
     * Unlike [description], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("description") @ExcludeMissing fun _description(): JsonField<String> = description

    /**
     * Returns the raw JSON value of [settledAt].
     *
     * Unlike [settledAt], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("settledAt")
    @ExcludeMissing
    fun _settledAt(): JsonField<OffsetDateTime> = settledAt

    /**
     * Returns the raw JSON value of [sentAmount].
     *
     * Unlike [sentAmount], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("sentAmount")
    @ExcludeMissing
    fun _sentAmount(): JsonField<CurrencyAmount> = sentAmount

    /**
     * Returns the raw JSON value of [exchangeRate].
     *
     * Unlike [exchangeRate], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("exchangeRate")
    @ExcludeMissing
    fun _exchangeRate(): JsonField<Double> = exchangeRate

    /**
     * Returns the raw JSON value of [fees].
     *
     * Unlike [fees], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("fees") @ExcludeMissing fun _fees(): JsonField<Long> = fees

    /**
     * Returns the raw JSON value of [quoteId].
     *
     * Unlike [quoteId], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("quoteId") @ExcludeMissing fun _quoteId(): JsonField<String> = quoteId

    /**
     * Returns the raw JSON value of [receivedAmount].
     *
     * Unlike [receivedAmount], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("receivedAmount")
    @ExcludeMissing
    fun _receivedAmount(): JsonField<CurrencyAmount> = receivedAmount

    /**
     * Returns the raw JSON value of [refund].
     *
     * Unlike [refund], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("refund") @ExcludeMissing fun _refund(): JsonField<Refund> = refund

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
         * Returns a mutable builder for constructing an instance of [OutgoingTransaction].
         *
         * The following fields are required:
         * ```kotlin
         * .id()
         * .platformUserId()
         * .receiverUmaAddress()
         * .senderUmaAddress()
         * .status()
         * .type()
         * .userId()
         * .sentAmount()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [OutgoingTransaction]. */
    class Builder internal constructor() {

        private var id: JsonField<String>? = null
        private var platformUserId: JsonField<String>? = null
        private var receiverUmaAddress: JsonField<String>? = null
        private var senderUmaAddress: JsonField<String>? = null
        private var status: JsonField<TransactionStatus>? = null
        private var type: JsonField<TransactionType>? = null
        private var userId: JsonField<String>? = null
        private var counterpartyInformation: JsonField<Transaction.CounterpartyInformation> =
            JsonMissing.of()
        private var createdAt: JsonField<OffsetDateTime> = JsonMissing.of()
        private var description: JsonField<String> = JsonMissing.of()
        private var settledAt: JsonField<OffsetDateTime> = JsonMissing.of()
        private var sentAmount: JsonField<CurrencyAmount>? = null
        private var exchangeRate: JsonField<Double> = JsonMissing.of()
        private var fees: JsonField<Long> = JsonMissing.of()
        private var quoteId: JsonField<String> = JsonMissing.of()
        private var receivedAmount: JsonField<CurrencyAmount> = JsonMissing.of()
        private var refund: JsonField<Refund> = JsonMissing.of()
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(outgoingTransaction: OutgoingTransaction) = apply {
            id = outgoingTransaction.id
            platformUserId = outgoingTransaction.platformUserId
            receiverUmaAddress = outgoingTransaction.receiverUmaAddress
            senderUmaAddress = outgoingTransaction.senderUmaAddress
            status = outgoingTransaction.status
            type = outgoingTransaction.type
            userId = outgoingTransaction.userId
            counterpartyInformation = outgoingTransaction.counterpartyInformation
            createdAt = outgoingTransaction.createdAt
            description = outgoingTransaction.description
            settledAt = outgoingTransaction.settledAt
            sentAmount = outgoingTransaction.sentAmount
            exchangeRate = outgoingTransaction.exchangeRate
            fees = outgoingTransaction.fees
            quoteId = outgoingTransaction.quoteId
            receivedAmount = outgoingTransaction.receivedAmount
            refund = outgoingTransaction.refund
            additionalProperties = outgoingTransaction.additionalProperties.toMutableMap()
        }

        /** Unique identifier for the transaction */
        fun id(id: String) = id(JsonField.of(id))

        /**
         * Sets [Builder.id] to an arbitrary JSON value.
         *
         * You should usually call [Builder.id] with a well-typed [String] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun id(id: JsonField<String>) = apply { this.id = id }

        /** Platform-specific ID of the user (sender for outgoing, recipient for incoming) */
        fun platformUserId(platformUserId: String) = platformUserId(JsonField.of(platformUserId))

        /**
         * Sets [Builder.platformUserId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.platformUserId] with a well-typed [String] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun platformUserId(platformUserId: JsonField<String>) = apply {
            this.platformUserId = platformUserId
        }

        /** UMA address of the payment recipient */
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

        /** UMA address of the payment sender */
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

        /** Status of a payment transaction */
        fun status(status: TransactionStatus) = status(JsonField.of(status))

        /**
         * Sets [Builder.status] to an arbitrary JSON value.
         *
         * You should usually call [Builder.status] with a well-typed [TransactionStatus] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun status(status: JsonField<TransactionStatus>) = apply { this.status = status }

        /** Type of transaction (incoming payment or outgoing payment) */
        fun type(type: TransactionType) = type(JsonField.of(type))

        /**
         * Sets [Builder.type] to an arbitrary JSON value.
         *
         * You should usually call [Builder.type] with a well-typed [TransactionType] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun type(type: JsonField<TransactionType>) = apply { this.type = type }

        /** System ID of the user (sender for outgoing, recipient for incoming) */
        fun userId(userId: String) = userId(JsonField.of(userId))

        /**
         * Sets [Builder.userId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.userId] with a well-typed [String] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun userId(userId: JsonField<String>) = apply { this.userId = userId }

        /** Additional information about the counterparty, if available */
        fun counterpartyInformation(counterpartyInformation: Transaction.CounterpartyInformation) =
            counterpartyInformation(JsonField.of(counterpartyInformation))

        /**
         * Sets [Builder.counterpartyInformation] to an arbitrary JSON value.
         *
         * You should usually call [Builder.counterpartyInformation] with a well-typed
         * [Transaction.CounterpartyInformation] value instead. This method is primarily for setting
         * the field to an undocumented or not yet supported value.
         */
        fun counterpartyInformation(
            counterpartyInformation: JsonField<Transaction.CounterpartyInformation>
        ) = apply { this.counterpartyInformation = counterpartyInformation }

        /** When the transaction was created */
        fun createdAt(createdAt: OffsetDateTime) = createdAt(JsonField.of(createdAt))

        /**
         * Sets [Builder.createdAt] to an arbitrary JSON value.
         *
         * You should usually call [Builder.createdAt] with a well-typed [OffsetDateTime] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun createdAt(createdAt: JsonField<OffsetDateTime>) = apply { this.createdAt = createdAt }

        /** Optional memo or description for the payment */
        fun description(description: String) = description(JsonField.of(description))

        /**
         * Sets [Builder.description] to an arbitrary JSON value.
         *
         * You should usually call [Builder.description] with a well-typed [String] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun description(description: JsonField<String>) = apply { this.description = description }

        /** When the payment was or will be settled */
        fun settledAt(settledAt: OffsetDateTime) = settledAt(JsonField.of(settledAt))

        /**
         * Sets [Builder.settledAt] to an arbitrary JSON value.
         *
         * You should usually call [Builder.settledAt] with a well-typed [OffsetDateTime] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun settledAt(settledAt: JsonField<OffsetDateTime>) = apply { this.settledAt = settledAt }

        /** Amount sent in the sender's currency */
        fun sentAmount(sentAmount: CurrencyAmount) = sentAmount(JsonField.of(sentAmount))

        /**
         * Sets [Builder.sentAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.sentAmount] with a well-typed [CurrencyAmount] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun sentAmount(sentAmount: JsonField<CurrencyAmount>) = apply {
            this.sentAmount = sentAmount
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

        /**
         * The fees associated with the quote in the smallest unit of the sending currency (eg.
         * cents).
         */
        fun fees(fees: Long) = fees(JsonField.of(fees))

        /**
         * Sets [Builder.fees] to an arbitrary JSON value.
         *
         * You should usually call [Builder.fees] with a well-typed [Long] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun fees(fees: JsonField<Long>) = apply { this.fees = fees }

        /** The ID of the quote that was used to trigger this payment */
        fun quoteId(quoteId: String) = quoteId(JsonField.of(quoteId))

        /**
         * Sets [Builder.quoteId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.quoteId] with a well-typed [String] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun quoteId(quoteId: JsonField<String>) = apply { this.quoteId = quoteId }

        /** Amount to be received by recipient in the recipient's currency */
        fun receivedAmount(receivedAmount: CurrencyAmount) =
            receivedAmount(JsonField.of(receivedAmount))

        /**
         * Sets [Builder.receivedAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.receivedAmount] with a well-typed [CurrencyAmount] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun receivedAmount(receivedAmount: JsonField<CurrencyAmount>) = apply {
            this.receivedAmount = receivedAmount
        }

        /** The refund if transaction was refunded. */
        fun refund(refund: Refund) = refund(JsonField.of(refund))

        /**
         * Sets [Builder.refund] to an arbitrary JSON value.
         *
         * You should usually call [Builder.refund] with a well-typed [Refund] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun refund(refund: JsonField<Refund>) = apply { this.refund = refund }

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
         * Returns an immutable instance of [OutgoingTransaction].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .id()
         * .platformUserId()
         * .receiverUmaAddress()
         * .senderUmaAddress()
         * .status()
         * .type()
         * .userId()
         * .sentAmount()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): OutgoingTransaction =
            OutgoingTransaction(
                checkRequired("id", id),
                checkRequired("platformUserId", platformUserId),
                checkRequired("receiverUmaAddress", receiverUmaAddress),
                checkRequired("senderUmaAddress", senderUmaAddress),
                checkRequired("status", status),
                checkRequired("type", type),
                checkRequired("userId", userId),
                counterpartyInformation,
                createdAt,
                description,
                settledAt,
                checkRequired("sentAmount", sentAmount),
                exchangeRate,
                fees,
                quoteId,
                receivedAmount,
                refund,
                additionalProperties.toMutableMap(),
            )
    }

    private var validated: Boolean = false

    fun validate(): OutgoingTransaction = apply {
        if (validated) {
            return@apply
        }

        id()
        platformUserId()
        receiverUmaAddress()
        senderUmaAddress()
        status().validate()
        type().validate()
        userId()
        counterpartyInformation()?.validate()
        createdAt()
        description()
        settledAt()
        sentAmount().validate()
        exchangeRate()
        fees()
        quoteId()
        receivedAmount()?.validate()
        refund()?.validate()
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
        (if (id.asKnown() == null) 0 else 1) +
            (if (platformUserId.asKnown() == null) 0 else 1) +
            (if (receiverUmaAddress.asKnown() == null) 0 else 1) +
            (if (senderUmaAddress.asKnown() == null) 0 else 1) +
            (status.asKnown()?.validity() ?: 0) +
            (type.asKnown()?.validity() ?: 0) +
            (if (userId.asKnown() == null) 0 else 1) +
            (counterpartyInformation.asKnown()?.validity() ?: 0) +
            (if (createdAt.asKnown() == null) 0 else 1) +
            (if (description.asKnown() == null) 0 else 1) +
            (if (settledAt.asKnown() == null) 0 else 1) +
            (sentAmount.asKnown()?.validity() ?: 0) +
            (if (exchangeRate.asKnown() == null) 0 else 1) +
            (if (fees.asKnown() == null) 0 else 1) +
            (if (quoteId.asKnown() == null) 0 else 1) +
            (receivedAmount.asKnown()?.validity() ?: 0) +
            (refund.asKnown()?.validity() ?: 0)

    /** The refund if transaction was refunded. */
    class Refund
    private constructor(
        private val initiatedAt: JsonField<OffsetDateTime>,
        private val reference: JsonField<String>,
        private val settledAt: JsonField<OffsetDateTime>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("initiatedAt")
            @ExcludeMissing
            initiatedAt: JsonField<OffsetDateTime> = JsonMissing.of(),
            @JsonProperty("reference")
            @ExcludeMissing
            reference: JsonField<String> = JsonMissing.of(),
            @JsonProperty("settledAt")
            @ExcludeMissing
            settledAt: JsonField<OffsetDateTime> = JsonMissing.of(),
        ) : this(initiatedAt, reference, settledAt, mutableMapOf())

        /**
         * When the refund was initiated
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun initiatedAt(): OffsetDateTime = initiatedAt.getRequired("initiatedAt")

        /**
         * The unique reference code of the refund
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun reference(): String = reference.getRequired("reference")

        /**
         * When the refund was or will be settled
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun settledAt(): OffsetDateTime? = settledAt.getNullable("settledAt")

        /**
         * Returns the raw JSON value of [initiatedAt].
         *
         * Unlike [initiatedAt], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("initiatedAt")
        @ExcludeMissing
        fun _initiatedAt(): JsonField<OffsetDateTime> = initiatedAt

        /**
         * Returns the raw JSON value of [reference].
         *
         * Unlike [reference], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("reference") @ExcludeMissing fun _reference(): JsonField<String> = reference

        /**
         * Returns the raw JSON value of [settledAt].
         *
         * Unlike [settledAt], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("settledAt")
        @ExcludeMissing
        fun _settledAt(): JsonField<OffsetDateTime> = settledAt

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
             * Returns a mutable builder for constructing an instance of [Refund].
             *
             * The following fields are required:
             * ```kotlin
             * .initiatedAt()
             * .reference()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [Refund]. */
        class Builder internal constructor() {

            private var initiatedAt: JsonField<OffsetDateTime>? = null
            private var reference: JsonField<String>? = null
            private var settledAt: JsonField<OffsetDateTime> = JsonMissing.of()
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(refund: Refund) = apply {
                initiatedAt = refund.initiatedAt
                reference = refund.reference
                settledAt = refund.settledAt
                additionalProperties = refund.additionalProperties.toMutableMap()
            }

            /** When the refund was initiated */
            fun initiatedAt(initiatedAt: OffsetDateTime) = initiatedAt(JsonField.of(initiatedAt))

            /**
             * Sets [Builder.initiatedAt] to an arbitrary JSON value.
             *
             * You should usually call [Builder.initiatedAt] with a well-typed [OffsetDateTime]
             * value instead. This method is primarily for setting the field to an undocumented or
             * not yet supported value.
             */
            fun initiatedAt(initiatedAt: JsonField<OffsetDateTime>) = apply {
                this.initiatedAt = initiatedAt
            }

            /** The unique reference code of the refund */
            fun reference(reference: String) = reference(JsonField.of(reference))

            /**
             * Sets [Builder.reference] to an arbitrary JSON value.
             *
             * You should usually call [Builder.reference] with a well-typed [String] value instead.
             * This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun reference(reference: JsonField<String>) = apply { this.reference = reference }

            /** When the refund was or will be settled */
            fun settledAt(settledAt: OffsetDateTime) = settledAt(JsonField.of(settledAt))

            /**
             * Sets [Builder.settledAt] to an arbitrary JSON value.
             *
             * You should usually call [Builder.settledAt] with a well-typed [OffsetDateTime] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun settledAt(settledAt: JsonField<OffsetDateTime>) = apply {
                this.settledAt = settledAt
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
             * Returns an immutable instance of [Refund].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             *
             * The following fields are required:
             * ```kotlin
             * .initiatedAt()
             * .reference()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): Refund =
                Refund(
                    checkRequired("initiatedAt", initiatedAt),
                    checkRequired("reference", reference),
                    settledAt,
                    additionalProperties.toMutableMap(),
                )
        }

        private var validated: Boolean = false

        fun validate(): Refund = apply {
            if (validated) {
                return@apply
            }

            initiatedAt()
            reference()
            settledAt()
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
            (if (initiatedAt.asKnown() == null) 0 else 1) +
                (if (reference.asKnown() == null) 0 else 1) +
                (if (settledAt.asKnown() == null) 0 else 1)

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is Refund && initiatedAt == other.initiatedAt && reference == other.reference && settledAt == other.settledAt && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(initiatedAt, reference, settledAt, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "Refund{initiatedAt=$initiatedAt, reference=$reference, settledAt=$settledAt, additionalProperties=$additionalProperties}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is OutgoingTransaction && id == other.id && platformUserId == other.platformUserId && receiverUmaAddress == other.receiverUmaAddress && senderUmaAddress == other.senderUmaAddress && status == other.status && type == other.type && userId == other.userId && counterpartyInformation == other.counterpartyInformation && createdAt == other.createdAt && description == other.description && settledAt == other.settledAt && sentAmount == other.sentAmount && exchangeRate == other.exchangeRate && fees == other.fees && quoteId == other.quoteId && receivedAmount == other.receivedAmount && refund == other.refund && additionalProperties == other.additionalProperties /* spotless:on */
    }

    /* spotless:off */
    private val hashCode: Int by lazy { Objects.hash(id, platformUserId, receiverUmaAddress, senderUmaAddress, status, type, userId, counterpartyInformation, createdAt, description, settledAt, sentAmount, exchangeRate, fees, quoteId, receivedAmount, refund, additionalProperties) }
    /* spotless:on */

    override fun hashCode(): Int = hashCode

    override fun toString() =
        "OutgoingTransaction{id=$id, platformUserId=$platformUserId, receiverUmaAddress=$receiverUmaAddress, senderUmaAddress=$senderUmaAddress, status=$status, type=$type, userId=$userId, counterpartyInformation=$counterpartyInformation, createdAt=$createdAt, description=$description, settledAt=$settledAt, sentAmount=$sentAmount, exchangeRate=$exchangeRate, fees=$fees, quoteId=$quoteId, receivedAmount=$receivedAmount, refund=$refund, additionalProperties=$additionalProperties}"
}
