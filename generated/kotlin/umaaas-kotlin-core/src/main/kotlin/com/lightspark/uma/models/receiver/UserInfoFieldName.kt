// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.receiver

import com.fasterxml.jackson.annotation.JsonCreator
import com.lightspark.uma.core.Enum
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.errors.UmaaasInvalidDataException

/** Name of a type of field containing info about a platform's user or counterparty user. */
class UserInfoFieldName @JsonCreator private constructor(private val value: JsonField<String>) :
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

        val FULL_NAME = of("FULL_NAME")

        val DATE_OF_BIRTH = of("DATE_OF_BIRTH")

        val NATIONALITY = of("NATIONALITY")

        val PHONE_NUMBER = of("PHONE_NUMBER")

        val EMAIL = of("EMAIL")

        val ADDRESS = of("ADDRESS")

        val TAX_ID = of("TAX_ID")

        val REGISTRATION_NUMBER = of("REGISTRATION_NUMBER")

        val ACCOUNT_NUMBER = of("ACCOUNT_NUMBER")

        val USER_TYPE = of("USER_TYPE")

        fun of(value: String) = UserInfoFieldName(JsonField.of(value))
    }

    /** An enum containing [UserInfoFieldName]'s known values. */
    enum class Known {
        FULL_NAME,
        DATE_OF_BIRTH,
        NATIONALITY,
        PHONE_NUMBER,
        EMAIL,
        ADDRESS,
        TAX_ID,
        REGISTRATION_NUMBER,
        ACCOUNT_NUMBER,
        USER_TYPE,
    }

    /**
     * An enum containing [UserInfoFieldName]'s known values, as well as an [_UNKNOWN] member.
     *
     * An instance of [UserInfoFieldName] can contain an unknown value in a couple of cases:
     * - It was deserialized from data that doesn't match any known member. For example, if the SDK
     *   is on an older version than the API, then the API may respond with new members that the SDK
     *   is unaware of.
     * - It was constructed with an arbitrary value using the [of] method.
     */
    enum class Value {
        FULL_NAME,
        DATE_OF_BIRTH,
        NATIONALITY,
        PHONE_NUMBER,
        EMAIL,
        ADDRESS,
        TAX_ID,
        REGISTRATION_NUMBER,
        ACCOUNT_NUMBER,
        USER_TYPE,
        /**
         * An enum member indicating that [UserInfoFieldName] was instantiated with an unknown
         * value.
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
            FULL_NAME -> Value.FULL_NAME
            DATE_OF_BIRTH -> Value.DATE_OF_BIRTH
            NATIONALITY -> Value.NATIONALITY
            PHONE_NUMBER -> Value.PHONE_NUMBER
            EMAIL -> Value.EMAIL
            ADDRESS -> Value.ADDRESS
            TAX_ID -> Value.TAX_ID
            REGISTRATION_NUMBER -> Value.REGISTRATION_NUMBER
            ACCOUNT_NUMBER -> Value.ACCOUNT_NUMBER
            USER_TYPE -> Value.USER_TYPE
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
            FULL_NAME -> Known.FULL_NAME
            DATE_OF_BIRTH -> Known.DATE_OF_BIRTH
            NATIONALITY -> Known.NATIONALITY
            PHONE_NUMBER -> Known.PHONE_NUMBER
            EMAIL -> Known.EMAIL
            ADDRESS -> Known.ADDRESS
            TAX_ID -> Known.TAX_ID
            REGISTRATION_NUMBER -> Known.REGISTRATION_NUMBER
            ACCOUNT_NUMBER -> Known.ACCOUNT_NUMBER
            USER_TYPE -> Known.USER_TYPE
            else -> throw UmaaasInvalidDataException("Unknown UserInfoFieldName: $value")
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

    fun validate(): UserInfoFieldName = apply {
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

        return /* spotless:off */ other is UserInfoFieldName && value == other.value /* spotless:on */
    }

    override fun hashCode() = value.hashCode()

    override fun toString() = value.toString()
}
