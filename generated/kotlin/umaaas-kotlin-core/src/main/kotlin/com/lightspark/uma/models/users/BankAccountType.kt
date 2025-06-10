// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.annotation.JsonCreator
import com.lightspark.uma.core.Enum
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.errors.UmaaasInvalidDataException

/** Type of bank account information */
class BankAccountType @JsonCreator private constructor(private val value: JsonField<String>) :
    Enum {

    /**
     * Returns this class instance's raw value.
     *
     * This is usually only useful if this instance was deserialized from data that doesn't match
     * any known member, and you want to know that value. For example, if the SDK is on an older
     * version than the API, then the API may respond with new members that the SDK is unaware of.
     */
    @com.fasterxml.jackson.annotation.JsonValue fun _value(): JsonField<String> = value

    companion object {

        val CLABE = of("CLABE")

        val US_ACCOUNT = of("US_ACCOUNT")

        val PIX = of("PIX")

        val IBAN = of("IBAN")

        val FBO = of("FBO")

        fun of(value: String) = BankAccountType(JsonField.of(value))
    }

    /** An enum containing [BankAccountType]'s known values. */
    enum class Known {
        CLABE,
        US_ACCOUNT,
        PIX,
        IBAN,
        FBO,
    }

    /**
     * An enum containing [BankAccountType]'s known values, as well as an [_UNKNOWN] member.
     *
     * An instance of [BankAccountType] can contain an unknown value in a couple of cases:
     * - It was deserialized from data that doesn't match any known member. For example, if the SDK
     *   is on an older version than the API, then the API may respond with new members that the SDK
     *   is unaware of.
     * - It was constructed with an arbitrary value using the [of] method.
     */
    enum class Value {
        CLABE,
        US_ACCOUNT,
        PIX,
        IBAN,
        FBO,
        /**
         * An enum member indicating that [BankAccountType] was instantiated with an unknown value.
         */
        _UNKNOWN,
    }

    /**
     * Returns an enum member corresponding to this class instance's value, or [Value._UNKNOWN] if
     * the class was instantiated with an unknown value.
     *
     * Use the [known] method instead if you're certain the value is always known or if you want to
     * throw for the unknown case.
     */
    fun value(): Value =
        when (this) {
            CLABE -> Value.CLABE
            US_ACCOUNT -> Value.US_ACCOUNT
            PIX -> Value.PIX
            IBAN -> Value.IBAN
            FBO -> Value.FBO
            else -> Value._UNKNOWN
        }

    /**
     * Returns an enum member corresponding to this class instance's value.
     *
     * Use the [value] method instead if you're uncertain the value is always known and don't want
     * to throw for the unknown case.
     *
     * @throws UmaaasInvalidDataException if this class instance's value is a not a known member.
     */
    fun known(): Known =
        when (this) {
            CLABE -> Known.CLABE
            US_ACCOUNT -> Known.US_ACCOUNT
            PIX -> Known.PIX
            IBAN -> Known.IBAN
            FBO -> Known.FBO
            else -> throw UmaaasInvalidDataException("Unknown BankAccountType: $value")
        }

    /**
     * Returns this class instance's primitive wire representation.
     *
     * This differs from the [toString] method because that method is primarily for debugging and
     * generally doesn't throw.
     *
     * @throws UmaaasInvalidDataException if this class instance's value does not have the expected
     *   primitive type.
     */
    fun asString(): String =
        _value().asString() ?: throw UmaaasInvalidDataException("Value is not a String")

    private var validated: Boolean = false

    fun validate(): BankAccountType = apply {
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
     * Returns a score indicating how many valid values are contained in this object recursively.
     *
     * Used for best match union deserialization.
     */
    internal fun validity(): Int = if (value() == Value._UNKNOWN) 0 else 1

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is BankAccountType && value == other.value /* spotless:on */
    }

    override fun hashCode() = value.hashCode()

    override fun toString() = value.toString()
}
