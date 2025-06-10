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
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.util.Collections
import java.util.Objects

class CounterpartyFieldDefinition
private constructor(
    private val mandatory: JsonField<Boolean>,
    private val name: JsonField<UserInfoFieldName>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("mandatory") @ExcludeMissing mandatory: JsonField<Boolean> = JsonMissing.of(),
        @JsonProperty("name") @ExcludeMissing name: JsonField<UserInfoFieldName> = JsonMissing.of(),
    ) : this(mandatory, name, mutableMapOf())

    /**
     * Whether the field is mandatory
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun mandatory(): Boolean = mandatory.getRequired("mandatory")

    /**
     * Name of a type of field containing info about a platform's user or counterparty user.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun name(): UserInfoFieldName = name.getRequired("name")

    /**
     * Returns the raw JSON value of [mandatory].
     *
     * Unlike [mandatory], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("mandatory") @ExcludeMissing fun _mandatory(): JsonField<Boolean> = mandatory

    /**
     * Returns the raw JSON value of [name].
     *
     * Unlike [name], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("name") @ExcludeMissing fun _name(): JsonField<UserInfoFieldName> = name

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
         * Returns a mutable builder for constructing an instance of [CounterpartyFieldDefinition].
         *
         * The following fields are required:
         * ```kotlin
         * .mandatory()
         * .name()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [CounterpartyFieldDefinition]. */
    class Builder internal constructor() {

        private var mandatory: JsonField<Boolean>? = null
        private var name: JsonField<UserInfoFieldName>? = null
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(counterpartyFieldDefinition: CounterpartyFieldDefinition) = apply {
            mandatory = counterpartyFieldDefinition.mandatory
            name = counterpartyFieldDefinition.name
            additionalProperties = counterpartyFieldDefinition.additionalProperties.toMutableMap()
        }

        /** Whether the field is mandatory */
        fun mandatory(mandatory: Boolean) = mandatory(JsonField.of(mandatory))

        /**
         * Sets [Builder.mandatory] to an arbitrary JSON value.
         *
         * You should usually call [Builder.mandatory] with a well-typed [Boolean] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun mandatory(mandatory: JsonField<Boolean>) = apply { this.mandatory = mandatory }

        /** Name of a type of field containing info about a platform's user or counterparty user. */
        fun name(name: UserInfoFieldName) = name(JsonField.of(name))

        /**
         * Sets [Builder.name] to an arbitrary JSON value.
         *
         * You should usually call [Builder.name] with a well-typed [UserInfoFieldName] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun name(name: JsonField<UserInfoFieldName>) = apply { this.name = name }

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
         * Returns an immutable instance of [CounterpartyFieldDefinition].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .mandatory()
         * .name()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): CounterpartyFieldDefinition =
            CounterpartyFieldDefinition(
                checkRequired("mandatory", mandatory),
                checkRequired("name", name),
                additionalProperties.toMutableMap(),
            )
    }

    private var validated: Boolean = false

    fun validate(): CounterpartyFieldDefinition = apply {
        if (validated) {
            return@apply
        }

        mandatory()
        name().validate()
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
        (if (mandatory.asKnown() == null) 0 else 1) + (name.asKnown()?.validity() ?: 0)

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is CounterpartyFieldDefinition && mandatory == other.mandatory && name == other.name && additionalProperties == other.additionalProperties /* spotless:on */
    }

    /* spotless:off */
    private val hashCode: Int by lazy { Objects.hash(mandatory, name, additionalProperties) }
    /* spotless:on */

    override fun hashCode(): Int = hashCode

    override fun toString() =
        "CounterpartyFieldDefinition{mandatory=$mandatory, name=$name, additionalProperties=$additionalProperties}"
}
