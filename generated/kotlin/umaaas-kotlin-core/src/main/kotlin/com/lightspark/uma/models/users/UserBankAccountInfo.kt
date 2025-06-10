// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

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

class UserBankAccountInfo
private constructor(
    private val accountType: JsonField<BankAccountType>,
    private val platformAccountId: JsonField<String>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("accountType")
        @ExcludeMissing
        accountType: JsonField<BankAccountType> = JsonMissing.of(),
        @JsonProperty("platformAccountId")
        @ExcludeMissing
        platformAccountId: JsonField<String> = JsonMissing.of(),
    ) : this(accountType, platformAccountId, mutableMapOf())

    /**
     * Type of bank account information
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun accountType(): BankAccountType = accountType.getRequired("accountType")

    /**
     * Platform-specific identifier for this bank account. This optional field allows platforms to
     * link bank accounts to their internal account systems. The value can be any string that helps
     * identify the account in your system (e.g. database IDs, custom references, etc.).
     *
     * This field is particularly useful when:
     * - Tracking multiple bank accounts for the same user
     * - Linking accounts to internal accounting systems
     * - Maintaining consistency between UMAaaS and your platform's account records
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun platformAccountId(): String? = platformAccountId.getNullable("platformAccountId")

    /**
     * Returns the raw JSON value of [accountType].
     *
     * Unlike [accountType], this method doesn't throw if the JSON field has an unexpected type.
     */
    @JsonProperty("accountType")
    @ExcludeMissing
    fun _accountType(): JsonField<BankAccountType> = accountType

    /**
     * Returns the raw JSON value of [platformAccountId].
     *
     * Unlike [platformAccountId], this method doesn't throw if the JSON field has an unexpected
     * type.
     */
    @JsonProperty("platformAccountId")
    @ExcludeMissing
    fun _platformAccountId(): JsonField<String> = platformAccountId

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
         * Returns a mutable builder for constructing an instance of [UserBankAccountInfo].
         *
         * The following fields are required:
         * ```kotlin
         * .accountType()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [UserBankAccountInfo]. */
    class Builder internal constructor() {

        private var accountType: JsonField<BankAccountType>? = null
        private var platformAccountId: JsonField<String> = JsonMissing.of()
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(userBankAccountInfo: UserBankAccountInfo) = apply {
            accountType = userBankAccountInfo.accountType
            platformAccountId = userBankAccountInfo.platformAccountId
            additionalProperties = userBankAccountInfo.additionalProperties.toMutableMap()
        }

        /** Type of bank account information */
        fun accountType(accountType: BankAccountType) = accountType(JsonField.of(accountType))

        /**
         * Sets [Builder.accountType] to an arbitrary JSON value.
         *
         * You should usually call [Builder.accountType] with a well-typed [BankAccountType] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun accountType(accountType: JsonField<BankAccountType>) = apply {
            this.accountType = accountType
        }

        /**
         * Platform-specific identifier for this bank account. This optional field allows platforms
         * to link bank accounts to their internal account systems. The value can be any string that
         * helps identify the account in your system (e.g. database IDs, custom references, etc.).
         *
         * This field is particularly useful when:
         * - Tracking multiple bank accounts for the same user
         * - Linking accounts to internal accounting systems
         * - Maintaining consistency between UMAaaS and your platform's account records
         */
        fun platformAccountId(platformAccountId: String) =
            platformAccountId(JsonField.of(platformAccountId))

        /**
         * Sets [Builder.platformAccountId] to an arbitrary JSON value.
         *
         * You should usually call [Builder.platformAccountId] with a well-typed [String] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun platformAccountId(platformAccountId: JsonField<String>) = apply {
            this.platformAccountId = platformAccountId
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
         * Returns an immutable instance of [UserBankAccountInfo].
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
        fun build(): UserBankAccountInfo =
            UserBankAccountInfo(
                checkRequired("accountType", accountType),
                platformAccountId,
                additionalProperties.toMutableMap(),
            )
    }

    private var validated: Boolean = false

    fun validate(): UserBankAccountInfo = apply {
        if (validated) {
            return@apply
        }

        accountType().validate()
        platformAccountId()
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
        (accountType.asKnown()?.validity() ?: 0) +
            (if (platformAccountId.asKnown() == null) 0 else 1)

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is UserBankAccountInfo && accountType == other.accountType && platformAccountId == other.platformAccountId && additionalProperties == other.additionalProperties /* spotless:on */
    }

    /* spotless:off */
    private val hashCode: Int by lazy { Objects.hash(accountType, platformAccountId, additionalProperties) }
    /* spotless:on */

    override fun hashCode(): Int = hashCode

    override fun toString() =
        "UserBankAccountInfo{accountType=$accountType, platformAccountId=$platformAccountId, additionalProperties=$additionalProperties}"
}
