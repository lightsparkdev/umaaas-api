// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.receiver

import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.core.JsonMissing
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.checkKnown
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.toImmutable
import com.lightspark.uma.errors.UmaaasInvalidDataException
import com.lightspark.uma.models.quotes.Currency
import java.util.Collections
import java.util.Objects

class ReceiverLookupResponse
private constructor(
    private val lookupId: JsonField<String>,
    private val receiverUmaAddress: JsonField<String>,
    private val supportedCurrencies: JsonField<List<SupportedCurrency>>,
    private val requiredPayerDataFields: JsonField<List<CounterpartyFieldDefinition>>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("lookupId") @ExcludeMissing lookupId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("receiverUmaAddress")
        @ExcludeMissing
        receiverUmaAddress: JsonField<String> = JsonMissing.of(),
        @JsonProperty("supportedCurrencies")
        @ExcludeMissing
        supportedCurrencies: JsonField<List<SupportedCurrency>> = JsonMissing.of(),
        @JsonProperty("requiredPayerDataFields")
        @ExcludeMissing
        requiredPayerDataFields: JsonField<List<CounterpartyFieldDefinition>> = JsonMissing.of(),
    ) : this(
        lookupId,
        receiverUmaAddress,
        supportedCurrencies,
        requiredPayerDataFields,
        mutableMapOf(),
    )

    /**
     * Unique identifier for the lookup. Needed in the subsequent create quote request.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun lookupId(): String = lookupId.getRequired("lookupId")

    /**
     * The UMA address that was looked up
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun receiverUmaAddress(): String = receiverUmaAddress.getRequired("receiverUmaAddress")

    /**
     * List of currencies supported by the receiving UMA address
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun supportedCurrencies(): List<SupportedCurrency> =
        supportedCurrencies.getRequired("supportedCurrencies")

    /**
     * Fields required by the receiving institution about the payer before payment can be completed
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun requiredPayerDataFields(): List<CounterpartyFieldDefinition>? =
        requiredPayerDataFields.getNullable("requiredPayerDataFields")

    /**
     * Returns the raw JSON value of [lookupId].
     *
     * Unlike [lookupId], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("lookupId") @ExcludeMissing fun _lookupId(): JsonField<String> = lookupId

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
     * Returns the raw JSON value of [supportedCurrencies].
     *
     * Unlike [supportedCurrencies], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    @JsonProperty("supportedCurrencies")
    @ExcludeMissing
    fun _supportedCurrencies(): JsonField<List<SupportedCurrency>> = supportedCurrencies

    /**
     * Returns the raw JSON value of [requiredPayerDataFields].
     *
     * Unlike [requiredPayerDataFields], this method doesn't throw if the JSON field has an
     * unexpected type.
     */
    @JsonProperty("requiredPayerDataFields")
    @ExcludeMissing
    fun _requiredPayerDataFields(): JsonField<List<CounterpartyFieldDefinition>> =
        requiredPayerDataFields

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
         * Returns a mutable builder for constructing an instance of [ReceiverLookupResponse].
         *
         * The following fields are required:
         * ```kotlin
         * .lookupId()
         * .receiverUmaAddress()
         * .supportedCurrencies()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [ReceiverLookupResponse]. */
    class Builder internal constructor() {

        private var lookupId: JsonField<String>? = null
        private var receiverUmaAddress: JsonField<String>? = null
        private var supportedCurrencies: JsonField<MutableList<SupportedCurrency>>? = null
        private var requiredPayerDataFields: JsonField<MutableList<CounterpartyFieldDefinition>>? =
            null
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(receiverLookupResponse: ReceiverLookupResponse) = apply {
            lookupId = receiverLookupResponse.lookupId
            receiverUmaAddress = receiverLookupResponse.receiverUmaAddress
            supportedCurrencies =
                receiverLookupResponse.supportedCurrencies.map { it.toMutableList() }
            requiredPayerDataFields =
                receiverLookupResponse.requiredPayerDataFields.map { it.toMutableList() }
            additionalProperties = receiverLookupResponse.additionalProperties.toMutableMap()
        }

        /** Unique identifier for the lookup. Needed in the subsequent create quote request. */
        fun lookupId(lookupId: String) = lookupId(JsonField.of(lookupId))

        /**
         * Sets [Builder.lookupId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.lookupId] with a well-typed [String] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun lookupId(lookupId: JsonField<String>) = apply { this.lookupId = lookupId }

        /** The UMA address that was looked up */
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

        /** List of currencies supported by the receiving UMA address */
        fun supportedCurrencies(supportedCurrencies: List<SupportedCurrency>) =
            supportedCurrencies(JsonField.of(supportedCurrencies))

        /**
         * Sets [Builder.supportedCurrencies] to an arbitrary JSON value.
         *
         * You should usually call [Builder.supportedCurrencies] with a well-typed
         * `List<SupportedCurrency>` value instead. This method is primarily for setting the field
         * to an undocumented or not yet supported value.
         */
        fun supportedCurrencies(supportedCurrencies: JsonField<List<SupportedCurrency>>) = apply {
            this.supportedCurrencies = supportedCurrencies.map { it.toMutableList() }
        }

        /**
         * Adds a single [SupportedCurrency] to [supportedCurrencies].
         *
         * @throws IllegalStateException if the field was previously set to a non-list.
         */
        fun addSupportedCurrency(supportedCurrency: SupportedCurrency) = apply {
            supportedCurrencies =
                (supportedCurrencies ?: JsonField.of(mutableListOf())).also {
                    checkKnown("supportedCurrencies", it).add(supportedCurrency)
                }
        }

        /**
         * Fields required by the receiving institution about the payer before payment can be
         * completed
         */
        fun requiredPayerDataFields(requiredPayerDataFields: List<CounterpartyFieldDefinition>) =
            requiredPayerDataFields(JsonField.of(requiredPayerDataFields))

        /**
         * Sets [Builder.requiredPayerDataFields] to an arbitrary JSON value.
         *
         * You should usually call [Builder.requiredPayerDataFields] with a well-typed
         * `List<CounterpartyFieldDefinition>` value instead. This method is primarily for setting
         * the field to an undocumented or not yet supported value.
         */
        fun requiredPayerDataFields(
            requiredPayerDataFields: JsonField<List<CounterpartyFieldDefinition>>
        ) = apply {
            this.requiredPayerDataFields = requiredPayerDataFields.map { it.toMutableList() }
        }

        /**
         * Adds a single [CounterpartyFieldDefinition] to [requiredPayerDataFields].
         *
         * @throws IllegalStateException if the field was previously set to a non-list.
         */
        fun addRequiredPayerDataField(requiredPayerDataField: CounterpartyFieldDefinition) = apply {
            requiredPayerDataFields =
                (requiredPayerDataFields ?: JsonField.of(mutableListOf())).also {
                    checkKnown("requiredPayerDataFields", it).add(requiredPayerDataField)
                }
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
         * Returns an immutable instance of [ReceiverLookupResponse].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .lookupId()
         * .receiverUmaAddress()
         * .supportedCurrencies()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): ReceiverLookupResponse =
            ReceiverLookupResponse(
                checkRequired("lookupId", lookupId),
                checkRequired("receiverUmaAddress", receiverUmaAddress),
                checkRequired("supportedCurrencies", supportedCurrencies).map { it.toImmutable() },
                (requiredPayerDataFields ?: JsonMissing.of()).map { it.toImmutable() },
                additionalProperties.toMutableMap(),
            )
    }

    private var validated: Boolean = false

    fun validate(): ReceiverLookupResponse = apply {
        if (validated) {
            return@apply
        }

        lookupId()
        receiverUmaAddress()
        supportedCurrencies().forEach { it.validate() }
        requiredPayerDataFields()?.forEach { it.validate() }
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
        (if (lookupId.asKnown() == null) 0 else 1) +
            (if (receiverUmaAddress.asKnown() == null) 0 else 1) +
            (supportedCurrencies.asKnown()?.sumOf { it.validity().toInt() } ?: 0) +
            (requiredPayerDataFields.asKnown()?.sumOf { it.validity().toInt() } ?: 0)

    class SupportedCurrency
    private constructor(
        private val currency: JsonField<Currency>,
        private val estimatedExchangeRate: JsonField<Double>,
        private val max: JsonField<Long>,
        private val min: JsonField<Long>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("currency")
            @ExcludeMissing
            currency: JsonField<Currency> = JsonMissing.of(),
            @JsonProperty("estimatedExchangeRate")
            @ExcludeMissing
            estimatedExchangeRate: JsonField<Double> = JsonMissing.of(),
            @JsonProperty("max") @ExcludeMissing max: JsonField<Long> = JsonMissing.of(),
            @JsonProperty("min") @ExcludeMissing min: JsonField<Long> = JsonMissing.of(),
        ) : this(currency, estimatedExchangeRate, max, min, mutableMapOf())

        /**
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun currency(): Currency = currency.getRequired("currency")

        /**
         * An estimated exchange rate from the sender's currency to this currency. This is not a
         * locked rate and is subject to change when calling the quotes endpoint.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun estimatedExchangeRate(): Double =
            estimatedExchangeRate.getRequired("estimatedExchangeRate")

        /**
         * The maximum amount that can be received in this currency.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun max(): Long = max.getRequired("max")

        /**
         * The minimum amount that can be received in this currency.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun min(): Long = min.getRequired("min")

        /**
         * Returns the raw JSON value of [currency].
         *
         * Unlike [currency], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("currency") @ExcludeMissing fun _currency(): JsonField<Currency> = currency

        /**
         * Returns the raw JSON value of [estimatedExchangeRate].
         *
         * Unlike [estimatedExchangeRate], this method doesn't throw if the JSON field has an
         * unexpected type.
         */
        @JsonProperty("estimatedExchangeRate")
        @ExcludeMissing
        fun _estimatedExchangeRate(): JsonField<Double> = estimatedExchangeRate

        /**
         * Returns the raw JSON value of [max].
         *
         * Unlike [max], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("max") @ExcludeMissing fun _max(): JsonField<Long> = max

        /**
         * Returns the raw JSON value of [min].
         *
         * Unlike [min], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("min") @ExcludeMissing fun _min(): JsonField<Long> = min

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
             * Returns a mutable builder for constructing an instance of [SupportedCurrency].
             *
             * The following fields are required:
             * ```kotlin
             * .currency()
             * .estimatedExchangeRate()
             * .max()
             * .min()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [SupportedCurrency]. */
        class Builder internal constructor() {

            private var currency: JsonField<Currency>? = null
            private var estimatedExchangeRate: JsonField<Double>? = null
            private var max: JsonField<Long>? = null
            private var min: JsonField<Long>? = null
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(supportedCurrency: SupportedCurrency) = apply {
                currency = supportedCurrency.currency
                estimatedExchangeRate = supportedCurrency.estimatedExchangeRate
                max = supportedCurrency.max
                min = supportedCurrency.min
                additionalProperties = supportedCurrency.additionalProperties.toMutableMap()
            }

            fun currency(currency: Currency) = currency(JsonField.of(currency))

            /**
             * Sets [Builder.currency] to an arbitrary JSON value.
             *
             * You should usually call [Builder.currency] with a well-typed [Currency] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun currency(currency: JsonField<Currency>) = apply { this.currency = currency }

            /**
             * An estimated exchange rate from the sender's currency to this currency. This is not a
             * locked rate and is subject to change when calling the quotes endpoint.
             */
            fun estimatedExchangeRate(estimatedExchangeRate: Double) =
                estimatedExchangeRate(JsonField.of(estimatedExchangeRate))

            /**
             * Sets [Builder.estimatedExchangeRate] to an arbitrary JSON value.
             *
             * You should usually call [Builder.estimatedExchangeRate] with a well-typed [Double]
             * value instead. This method is primarily for setting the field to an undocumented or
             * not yet supported value.
             */
            fun estimatedExchangeRate(estimatedExchangeRate: JsonField<Double>) = apply {
                this.estimatedExchangeRate = estimatedExchangeRate
            }

            /** The maximum amount that can be received in this currency. */
            fun max(max: Long) = max(JsonField.of(max))

            /**
             * Sets [Builder.max] to an arbitrary JSON value.
             *
             * You should usually call [Builder.max] with a well-typed [Long] value instead. This
             * method is primarily for setting the field to an undocumented or not yet supported
             * value.
             */
            fun max(max: JsonField<Long>) = apply { this.max = max }

            /** The minimum amount that can be received in this currency. */
            fun min(min: Long) = min(JsonField.of(min))

            /**
             * Sets [Builder.min] to an arbitrary JSON value.
             *
             * You should usually call [Builder.min] with a well-typed [Long] value instead. This
             * method is primarily for setting the field to an undocumented or not yet supported
             * value.
             */
            fun min(min: JsonField<Long>) = apply { this.min = min }

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
             * Returns an immutable instance of [SupportedCurrency].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             *
             * The following fields are required:
             * ```kotlin
             * .currency()
             * .estimatedExchangeRate()
             * .max()
             * .min()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): SupportedCurrency =
                SupportedCurrency(
                    checkRequired("currency", currency),
                    checkRequired("estimatedExchangeRate", estimatedExchangeRate),
                    checkRequired("max", max),
                    checkRequired("min", min),
                    additionalProperties.toMutableMap(),
                )
        }

        private var validated: Boolean = false

        fun validate(): SupportedCurrency = apply {
            if (validated) {
                return@apply
            }

            currency().validate()
            estimatedExchangeRate()
            max()
            min()
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
            (currency.asKnown()?.validity() ?: 0) +
                (if (estimatedExchangeRate.asKnown() == null) 0 else 1) +
                (if (max.asKnown() == null) 0 else 1) +
                (if (min.asKnown() == null) 0 else 1)

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is SupportedCurrency && currency == other.currency && estimatedExchangeRate == other.estimatedExchangeRate && max == other.max && min == other.min && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(currency, estimatedExchangeRate, max, min, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "SupportedCurrency{currency=$currency, estimatedExchangeRate=$estimatedExchangeRate, max=$max, min=$min, additionalProperties=$additionalProperties}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is ReceiverLookupResponse && lookupId == other.lookupId && receiverUmaAddress == other.receiverUmaAddress && supportedCurrencies == other.supportedCurrencies && requiredPayerDataFields == other.requiredPayerDataFields && additionalProperties == other.additionalProperties /* spotless:on */
    }

    /* spotless:off */
    private val hashCode: Int by lazy { Objects.hash(lookupId, receiverUmaAddress, supportedCurrencies, requiredPayerDataFields, additionalProperties) }
    /* spotless:on */

    override fun hashCode(): Int = hashCode

    override fun toString() =
        "ReceiverLookupResponse{lookupId=$lookupId, receiverUmaAddress=$receiverUmaAddress, supportedCurrencies=$supportedCurrencies, requiredPayerDataFields=$requiredPayerDataFields, additionalProperties=$additionalProperties}"
}
