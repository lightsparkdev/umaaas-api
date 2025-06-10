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

class IncomingTransaction
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
    private val receivedAmount: JsonField<CurrencyAmount>,
    private val reconciliationInstructions: JsonField<ReconciliationInstructions>,
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
        @JsonProperty("receivedAmount")
        @ExcludeMissing
        receivedAmount: JsonField<CurrencyAmount> = JsonMissing.of(),
        @JsonProperty("reconciliationInstructions")
        @ExcludeMissing
        reconciliationInstructions: JsonField<ReconciliationInstructions> = JsonMissing.of(),
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
        receivedAmount,
        reconciliationInstructions,
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
     * Amount received in the recipient's currency
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun receivedAmount(): CurrencyAmount = receivedAmount.getRequired("receivedAmount")

    /**
     * Included for all transactions except those with "CREATED" status
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun reconciliationInstructions(): ReconciliationInstructions? =
        reconciliationInstructions.getNullable("reconciliationInstructions")

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
     * Returns the raw JSON value of [receivedAmount].
     *
     * Unlike [receivedAmount], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("receivedAmount")
    @ExcludeMissing
    fun _receivedAmount(): JsonField<CurrencyAmount> = receivedAmount

    /**
     * Returns the raw JSON value of [reconciliationInstructions].
     *
     * Unlike [reconciliationInstructions], this method doesn't throw if the JSON field has an
     * unexpected type.
     */
    @JsonProperty("reconciliationInstructions")
    @ExcludeMissing
    fun _reconciliationInstructions(): JsonField<ReconciliationInstructions> =
        reconciliationInstructions

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
         * Returns a mutable builder for constructing an instance of [IncomingTransaction].
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
         * .receivedAmount()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [IncomingTransaction]. */
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
        private var receivedAmount: JsonField<CurrencyAmount>? = null
        private var reconciliationInstructions: JsonField<ReconciliationInstructions> =
            JsonMissing.of()
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(incomingTransaction: IncomingTransaction) = apply {
            id = incomingTransaction.id
            platformUserId = incomingTransaction.platformUserId
            receiverUmaAddress = incomingTransaction.receiverUmaAddress
            senderUmaAddress = incomingTransaction.senderUmaAddress
            status = incomingTransaction.status
            type = incomingTransaction.type
            userId = incomingTransaction.userId
            counterpartyInformation = incomingTransaction.counterpartyInformation
            createdAt = incomingTransaction.createdAt
            description = incomingTransaction.description
            settledAt = incomingTransaction.settledAt
            receivedAmount = incomingTransaction.receivedAmount
            reconciliationInstructions = incomingTransaction.reconciliationInstructions
            additionalProperties = incomingTransaction.additionalProperties.toMutableMap()
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

        /** Amount received in the recipient's currency */
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

        /** Included for all transactions except those with "CREATED" status */
        fun reconciliationInstructions(reconciliationInstructions: ReconciliationInstructions) =
            reconciliationInstructions(JsonField.of(reconciliationInstructions))

        /**
         * Sets [Builder.reconciliationInstructions] to an arbitrary JSON value.
         *
         * You should usually call [Builder.reconciliationInstructions] with a well-typed
         * [ReconciliationInstructions] value instead. This method is primarily for setting the
         * field to an undocumented or not yet supported value.
         */
        fun reconciliationInstructions(
            reconciliationInstructions: JsonField<ReconciliationInstructions>
        ) = apply { this.reconciliationInstructions = reconciliationInstructions }

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
         * Returns an immutable instance of [IncomingTransaction].
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
         * .receivedAmount()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): IncomingTransaction =
            IncomingTransaction(
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
                checkRequired("receivedAmount", receivedAmount),
                reconciliationInstructions,
                additionalProperties.toMutableMap(),
            )
    }

    private var validated: Boolean = false

    fun validate(): IncomingTransaction = apply {
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
        receivedAmount().validate()
        reconciliationInstructions()?.validate()
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
            (receivedAmount.asKnown()?.validity() ?: 0) +
            (reconciliationInstructions.asKnown()?.validity() ?: 0)

    /** Included for all transactions except those with "CREATED" status */
    class ReconciliationInstructions
    private constructor(
        private val reference: JsonField<String>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("reference")
            @ExcludeMissing
            reference: JsonField<String> = JsonMissing.of()
        ) : this(reference, mutableMapOf())

        /**
         * Unique reference code that must be included with the payment to match it with the correct
         * incoming transaction
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun reference(): String = reference.getRequired("reference")

        /**
         * Returns the raw JSON value of [reference].
         *
         * Unlike [reference], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("reference") @ExcludeMissing fun _reference(): JsonField<String> = reference

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
             * Returns a mutable builder for constructing an instance of
             * [ReconciliationInstructions].
             *
             * The following fields are required:
             * ```kotlin
             * .reference()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [ReconciliationInstructions]. */
        class Builder internal constructor() {

            private var reference: JsonField<String>? = null
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(reconciliationInstructions: ReconciliationInstructions) = apply {
                reference = reconciliationInstructions.reference
                additionalProperties =
                    reconciliationInstructions.additionalProperties.toMutableMap()
            }

            /**
             * Unique reference code that must be included with the payment to match it with the
             * correct incoming transaction
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
             * Returns an immutable instance of [ReconciliationInstructions].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             *
             * The following fields are required:
             * ```kotlin
             * .reference()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): ReconciliationInstructions =
                ReconciliationInstructions(
                    checkRequired("reference", reference),
                    additionalProperties.toMutableMap(),
                )
        }

        private var validated: Boolean = false

        fun validate(): ReconciliationInstructions = apply {
            if (validated) {
                return@apply
            }

            reference()
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
        internal fun validity(): Int = (if (reference.asKnown() == null) 0 else 1)

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is ReconciliationInstructions && reference == other.reference && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(reference, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "ReconciliationInstructions{reference=$reference, additionalProperties=$additionalProperties}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is IncomingTransaction && id == other.id && platformUserId == other.platformUserId && receiverUmaAddress == other.receiverUmaAddress && senderUmaAddress == other.senderUmaAddress && status == other.status && type == other.type && userId == other.userId && counterpartyInformation == other.counterpartyInformation && createdAt == other.createdAt && description == other.description && settledAt == other.settledAt && receivedAmount == other.receivedAmount && reconciliationInstructions == other.reconciliationInstructions && additionalProperties == other.additionalProperties /* spotless:on */
    }

    /* spotless:off */
    private val hashCode: Int by lazy { Objects.hash(id, platformUserId, receiverUmaAddress, senderUmaAddress, status, type, userId, counterpartyInformation, createdAt, description, settledAt, receivedAmount, reconciliationInstructions, additionalProperties) }
    /* spotless:on */

    override fun hashCode(): Int = hashCode

    override fun toString() =
        "IncomingTransaction{id=$id, platformUserId=$platformUserId, receiverUmaAddress=$receiverUmaAddress, senderUmaAddress=$senderUmaAddress, status=$status, type=$type, userId=$userId, counterpartyInformation=$counterpartyInformation, createdAt=$createdAt, description=$description, settledAt=$settledAt, receivedAmount=$receivedAmount, reconciliationInstructions=$reconciliationInstructions, additionalProperties=$additionalProperties}"
}
