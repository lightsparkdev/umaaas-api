// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.config

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
import com.lightspark.uma.models.receiver.CounterpartyFieldDefinition
import com.lightspark.uma.models.receiver.UserInfoFieldName
import java.util.Collections
import java.util.Objects

class PlatformCurrencyConfig
private constructor(
    private val currencyCode: JsonField<String>,
    private val maxAmount: JsonField<Long>,
    private val minAmount: JsonField<Long>,
    private val requiredCounterpartyFields: JsonField<List<CounterpartyFieldDefinition>>,
    private val umaProviderRequiredUserFields: JsonField<List<UserInfoFieldName>>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("currencyCode")
        @ExcludeMissing
        currencyCode: JsonField<String> = JsonMissing.of(),
        @JsonProperty("maxAmount") @ExcludeMissing maxAmount: JsonField<Long> = JsonMissing.of(),
        @JsonProperty("minAmount") @ExcludeMissing minAmount: JsonField<Long> = JsonMissing.of(),
        @JsonProperty("requiredCounterpartyFields")
        @ExcludeMissing
        requiredCounterpartyFields: JsonField<List<CounterpartyFieldDefinition>> = JsonMissing.of(),
        @JsonProperty("umaProviderRequiredUserFields")
        @ExcludeMissing
        umaProviderRequiredUserFields: JsonField<List<UserInfoFieldName>> = JsonMissing.of(),
    ) : this(
        currencyCode,
        maxAmount,
        minAmount,
        requiredCounterpartyFields,
        umaProviderRequiredUserFields,
        mutableMapOf(),
    )

    /**
     * Three-letter currency code (ISO 4217)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun currencyCode(): String = currencyCode.getRequired("currencyCode")

    /**
     * Maximum amount that can be sent in the smallest unit of this currency
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun maxAmount(): Long = maxAmount.getRequired("maxAmount")

    /**
     * Minimum amount that can be sent in the smallest unit of this currency
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun minAmount(): Long = minAmount.getRequired("minAmount")

    /**
     * List of fields which the platform requires from the counterparty institutions about
     * counterparty users. Platforms can set mandatory to false if the platform does not require the
     * field, but would like to have it available. Some fields may be required by the underlying UMA
     * provider.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun requiredCounterpartyFields(): List<CounterpartyFieldDefinition> =
        requiredCounterpartyFields.getRequired("requiredCounterpartyFields")

    /**
     * List of user info field names that are required by the underlying UMA provider when creating
     * a user for this currency. These fields must be supplied when creating or updating a user if
     * this currency is intended to be used by that user. If no fields are required, this field is
     * omitted.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun umaProviderRequiredUserFields(): List<UserInfoFieldName>? =
        umaProviderRequiredUserFields.getNullable("umaProviderRequiredUserFields")

    /**
     * Returns the raw JSON value of [currencyCode].
     *
     * Unlike [currencyCode], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("currencyCode")
    @ExcludeMissing
    fun _currencyCode(): JsonField<String> = currencyCode

    /**
     * Returns the raw JSON value of [maxAmount].
     *
     * Unlike [maxAmount], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("maxAmount") @ExcludeMissing fun _maxAmount(): JsonField<Long> = maxAmount

    /**
     * Returns the raw JSON value of [minAmount].
     *
     * Unlike [minAmount], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("minAmount") @ExcludeMissing fun _minAmount(): JsonField<Long> = minAmount

    /**
     * Returns the raw JSON value of [requiredCounterpartyFields].
     *
     * Unlike [requiredCounterpartyFields], this method doesn't throw if the JSON field has an
     * unexpected type.
     */
    @JsonProperty("requiredCounterpartyFields")
    @ExcludeMissing
    fun _requiredCounterpartyFields(): JsonField<List<CounterpartyFieldDefinition>> =
        requiredCounterpartyFields

    /**
     * Returns the raw JSON value of [umaProviderRequiredUserFields].
     *
     * Unlike [umaProviderRequiredUserFields], this method doesn't throw if the JSON field has an
     * unexpected type.
     */
    @JsonProperty("umaProviderRequiredUserFields")
    @ExcludeMissing
    fun _umaProviderRequiredUserFields(): JsonField<List<UserInfoFieldName>> =
        umaProviderRequiredUserFields

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
         * Returns a mutable builder for constructing an instance of [PlatformCurrencyConfig].
         *
         * The following fields are required:
         * ```kotlin
         * .currencyCode()
         * .maxAmount()
         * .minAmount()
         * .requiredCounterpartyFields()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [PlatformCurrencyConfig]. */
    class Builder internal constructor() {

        private var currencyCode: JsonField<String>? = null
        private var maxAmount: JsonField<Long>? = null
        private var minAmount: JsonField<Long>? = null
        private var requiredCounterpartyFields:
            JsonField<MutableList<CounterpartyFieldDefinition>>? =
            null
        private var umaProviderRequiredUserFields: JsonField<MutableList<UserInfoFieldName>>? = null
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(platformCurrencyConfig: PlatformCurrencyConfig) = apply {
            currencyCode = platformCurrencyConfig.currencyCode
            maxAmount = platformCurrencyConfig.maxAmount
            minAmount = platformCurrencyConfig.minAmount
            requiredCounterpartyFields =
                platformCurrencyConfig.requiredCounterpartyFields.map { it.toMutableList() }
            umaProviderRequiredUserFields =
                platformCurrencyConfig.umaProviderRequiredUserFields.map { it.toMutableList() }
            additionalProperties = platformCurrencyConfig.additionalProperties.toMutableMap()
        }

        /** Three-letter currency code (ISO 4217) */
        fun currencyCode(currencyCode: String) = currencyCode(JsonField.of(currencyCode))

        /**
         * Sets [Builder.currencyCode] to an arbitrary JSON value.
         *
         * You should usually call [Builder.currencyCode] with a well-typed [String] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun currencyCode(currencyCode: JsonField<String>) = apply {
            this.currencyCode = currencyCode
        }

        /** Maximum amount that can be sent in the smallest unit of this currency */
        fun maxAmount(maxAmount: Long) = maxAmount(JsonField.of(maxAmount))

        /**
         * Sets [Builder.maxAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.maxAmount] with a well-typed [Long] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun maxAmount(maxAmount: JsonField<Long>) = apply { this.maxAmount = maxAmount }

        /** Minimum amount that can be sent in the smallest unit of this currency */
        fun minAmount(minAmount: Long) = minAmount(JsonField.of(minAmount))

        /**
         * Sets [Builder.minAmount] to an arbitrary JSON value.
         *
         * You should usually call [Builder.minAmount] with a well-typed [Long] value instead. This
         * method is primarily for setting the field to an undocumented or not yet supported value.
         */
        fun minAmount(minAmount: JsonField<Long>) = apply { this.minAmount = minAmount }

        /**
         * List of fields which the platform requires from the counterparty institutions about
         * counterparty users. Platforms can set mandatory to false if the platform does not require
         * the field, but would like to have it available. Some fields may be required by the
         * underlying UMA provider.
         */
        fun requiredCounterpartyFields(
            requiredCounterpartyFields: List<CounterpartyFieldDefinition>
        ) = requiredCounterpartyFields(JsonField.of(requiredCounterpartyFields))

        /**
         * Sets [Builder.requiredCounterpartyFields] to an arbitrary JSON value.
         *
         * You should usually call [Builder.requiredCounterpartyFields] with a well-typed
         * `List<CounterpartyFieldDefinition>` value instead. This method is primarily for setting
         * the field to an undocumented or not yet supported value.
         */
        fun requiredCounterpartyFields(
            requiredCounterpartyFields: JsonField<List<CounterpartyFieldDefinition>>
        ) = apply {
            this.requiredCounterpartyFields = requiredCounterpartyFields.map { it.toMutableList() }
        }

        /**
         * Adds a single [CounterpartyFieldDefinition] to [requiredCounterpartyFields].
         *
         * @throws IllegalStateException if the field was previously set to a non-list.
         */
        fun addRequiredCounterpartyField(requiredCounterpartyField: CounterpartyFieldDefinition) =
            apply {
                requiredCounterpartyFields =
                    (requiredCounterpartyFields ?: JsonField.of(mutableListOf())).also {
                        checkKnown("requiredCounterpartyFields", it).add(requiredCounterpartyField)
                    }
            }

        /**
         * List of user info field names that are required by the underlying UMA provider when
         * creating a user for this currency. These fields must be supplied when creating or
         * updating a user if this currency is intended to be used by that user. If no fields are
         * required, this field is omitted.
         */
        fun umaProviderRequiredUserFields(umaProviderRequiredUserFields: List<UserInfoFieldName>) =
            umaProviderRequiredUserFields(JsonField.of(umaProviderRequiredUserFields))

        /**
         * Sets [Builder.umaProviderRequiredUserFields] to an arbitrary JSON value.
         *
         * You should usually call [Builder.umaProviderRequiredUserFields] with a well-typed
         * `List<UserInfoFieldName>` value instead. This method is primarily for setting the field
         * to an undocumented or not yet supported value.
         */
        fun umaProviderRequiredUserFields(
            umaProviderRequiredUserFields: JsonField<List<UserInfoFieldName>>
        ) = apply {
            this.umaProviderRequiredUserFields =
                umaProviderRequiredUserFields.map { it.toMutableList() }
        }

        /**
         * Adds a single [UserInfoFieldName] to [umaProviderRequiredUserFields].
         *
         * @throws IllegalStateException if the field was previously set to a non-list.
         */
        fun addUmaProviderRequiredUserField(umaProviderRequiredUserField: UserInfoFieldName) =
            apply {
                umaProviderRequiredUserFields =
                    (umaProviderRequiredUserFields ?: JsonField.of(mutableListOf())).also {
                        checkKnown("umaProviderRequiredUserFields", it)
                            .add(umaProviderRequiredUserField)
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
         * Returns an immutable instance of [PlatformCurrencyConfig].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .currencyCode()
         * .maxAmount()
         * .minAmount()
         * .requiredCounterpartyFields()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): PlatformCurrencyConfig =
            PlatformCurrencyConfig(
                checkRequired("currencyCode", currencyCode),
                checkRequired("maxAmount", maxAmount),
                checkRequired("minAmount", minAmount),
                checkRequired("requiredCounterpartyFields", requiredCounterpartyFields).map {
                    it.toImmutable()
                },
                (umaProviderRequiredUserFields ?: JsonMissing.of()).map { it.toImmutable() },
                additionalProperties.toMutableMap(),
            )
    }

    private var validated: Boolean = false

    fun validate(): PlatformCurrencyConfig = apply {
        if (validated) {
            return@apply
        }

        currencyCode()
        maxAmount()
        minAmount()
        requiredCounterpartyFields().forEach { it.validate() }
        umaProviderRequiredUserFields()?.forEach { it.validate() }
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
        (if (currencyCode.asKnown() == null) 0 else 1) +
            (if (maxAmount.asKnown() == null) 0 else 1) +
            (if (minAmount.asKnown() == null) 0 else 1) +
            (requiredCounterpartyFields.asKnown()?.sumOf { it.validity().toInt() } ?: 0) +
            (umaProviderRequiredUserFields.asKnown()?.sumOf { it.validity().toInt() } ?: 0)

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is PlatformCurrencyConfig && currencyCode == other.currencyCode && maxAmount == other.maxAmount && minAmount == other.minAmount && requiredCounterpartyFields == other.requiredCounterpartyFields && umaProviderRequiredUserFields == other.umaProviderRequiredUserFields && additionalProperties == other.additionalProperties /* spotless:on */
    }

    /* spotless:off */
    private val hashCode: Int by lazy { Objects.hash(currencyCode, maxAmount, minAmount, requiredCounterpartyFields, umaProviderRequiredUserFields, additionalProperties) }
    /* spotless:on */

    override fun hashCode(): Int = hashCode

    override fun toString() =
        "PlatformCurrencyConfig{currencyCode=$currencyCode, maxAmount=$maxAmount, minAmount=$minAmount, requiredCounterpartyFields=$requiredCounterpartyFields, umaProviderRequiredUserFields=$umaProviderRequiredUserFields, additionalProperties=$additionalProperties}"
}
