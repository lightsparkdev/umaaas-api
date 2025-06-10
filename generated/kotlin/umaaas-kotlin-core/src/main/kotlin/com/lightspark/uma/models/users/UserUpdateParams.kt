// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users

import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.ObjectCodec
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.lightspark.uma.core.BaseDeserializer
import com.lightspark.uma.core.BaseSerializer
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.core.JsonMissing
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.Params
import com.lightspark.uma.core.allMaxBy
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.getOrThrow
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.time.LocalDate
import java.util.Collections
import java.util.Objects

/** Update a user's metadata by their system-generated ID */
class UserUpdateParams
private constructor(
    private val userId: String?,
    private val body: Body,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    fun userId(): String? = userId

    fun body(): Body = body

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        /**
         * Returns a mutable builder for constructing an instance of [UserUpdateParams].
         *
         * The following fields are required:
         * ```kotlin
         * .body()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [UserUpdateParams]. */
    class Builder internal constructor() {

        private var userId: String? = null
        private var body: Body? = null
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(userUpdateParams: UserUpdateParams) = apply {
            userId = userUpdateParams.userId
            body = userUpdateParams.body
            additionalHeaders = userUpdateParams.additionalHeaders.toBuilder()
            additionalQueryParams = userUpdateParams.additionalQueryParams.toBuilder()
        }

        fun userId(userId: String?) = apply { this.userId = userId }

        fun body(body: Body) = apply { this.body = body }

        /** Alias for calling [body] with `Body.ofIndividualUpdate(individualUpdate)`. */
        fun body(individualUpdate: Body.IndividualUpdate) =
            body(Body.ofIndividualUpdate(individualUpdate))

        /** Alias for calling [body] with `Body.ofBusinessUpdate(businessUpdate)`. */
        fun body(businessUpdate: Body.BusinessUpdate) = body(Body.ofBusinessUpdate(businessUpdate))

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
         * Returns an immutable instance of [UserUpdateParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .body()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): UserUpdateParams =
            UserUpdateParams(
                userId,
                checkRequired("body", body),
                additionalHeaders.build(),
                additionalQueryParams.build(),
            )
    }

    fun _body(): Body = body

    fun _pathParam(index: Int): String =
        when (index) {
            0 -> userId ?: ""
            else -> ""
        }

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams = additionalQueryParams

    @JsonDeserialize(using = Body.Deserializer::class)
    @JsonSerialize(using = Body.Serializer::class)
    class Body
    private constructor(
        private val individualUpdate: IndividualUpdate? = null,
        private val businessUpdate: BusinessUpdate? = null,
        private val _json: JsonValue? = null,
    ) {

        fun individualUpdate(): IndividualUpdate? = individualUpdate

        fun businessUpdate(): BusinessUpdate? = businessUpdate

        fun isIndividualUpdate(): Boolean = individualUpdate != null

        fun isBusinessUpdate(): Boolean = businessUpdate != null

        fun asIndividualUpdate(): IndividualUpdate = individualUpdate.getOrThrow("individualUpdate")

        fun asBusinessUpdate(): BusinessUpdate = businessUpdate.getOrThrow("businessUpdate")

        fun _json(): JsonValue? = _json

        fun <T> accept(visitor: Visitor<T>): T =
            when {
                individualUpdate != null -> visitor.visitIndividualUpdate(individualUpdate)
                businessUpdate != null -> visitor.visitBusinessUpdate(businessUpdate)
                else -> visitor.unknown(_json)
            }

        private var validated: Boolean = false

        fun validate(): Body = apply {
            if (validated) {
                return@apply
            }

            accept(
                object : Visitor<Unit> {
                    override fun visitIndividualUpdate(individualUpdate: IndividualUpdate) {
                        individualUpdate.validate()
                    }

                    override fun visitBusinessUpdate(businessUpdate: BusinessUpdate) {
                        businessUpdate.validate()
                    }
                }
            )
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
            accept(
                object : Visitor<Int> {
                    override fun visitIndividualUpdate(individualUpdate: IndividualUpdate) =
                        individualUpdate.validity()

                    override fun visitBusinessUpdate(businessUpdate: BusinessUpdate) =
                        businessUpdate.validity()

                    override fun unknown(json: JsonValue?) = 0
                }
            )

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is Body && individualUpdate == other.individualUpdate && businessUpdate == other.businessUpdate /* spotless:on */
        }

        override fun hashCode(): Int = /* spotless:off */ Objects.hash(individualUpdate, businessUpdate) /* spotless:on */

        override fun toString(): String =
            when {
                individualUpdate != null -> "Body{individualUpdate=$individualUpdate}"
                businessUpdate != null -> "Body{businessUpdate=$businessUpdate}"
                _json != null -> "Body{_unknown=$_json}"
                else -> throw IllegalStateException("Invalid Body")
            }

        companion object {

            fun ofIndividualUpdate(individualUpdate: IndividualUpdate) =
                Body(individualUpdate = individualUpdate)

            fun ofBusinessUpdate(businessUpdate: BusinessUpdate) =
                Body(businessUpdate = businessUpdate)
        }

        /** An interface that defines how to map each variant of [Body] to a value of type [T]. */
        interface Visitor<out T> {

            fun visitIndividualUpdate(individualUpdate: IndividualUpdate): T

            fun visitBusinessUpdate(businessUpdate: BusinessUpdate): T

            /**
             * Maps an unknown variant of [Body] to a value of type [T].
             *
             * An instance of [Body] can contain an unknown variant if it was deserialized from data
             * that doesn't match any known variant. For example, if the SDK is on an older version
             * than the API, then the API may respond with new variants that the SDK is unaware of.
             *
             * @throws UmaaasInvalidDataException in the default implementation.
             */
            fun unknown(json: JsonValue?): T {
                throw UmaaasInvalidDataException("Unknown Body: $json")
            }
        }

        internal class Deserializer : BaseDeserializer<Body>(Body::class) {

            override fun ObjectCodec.deserialize(node: JsonNode): Body {
                val json = JsonValue.fromJsonNode(node)

                val bestMatches =
                    sequenceOf(
                            tryDeserialize(node, jacksonTypeRef<IndividualUpdate>())?.let {
                                Body(individualUpdate = it, _json = json)
                            },
                            tryDeserialize(node, jacksonTypeRef<BusinessUpdate>())?.let {
                                Body(businessUpdate = it, _json = json)
                            },
                        )
                        .filterNotNull()
                        .allMaxBy { it.validity() }
                        .toList()
                return when (bestMatches.size) {
                    // This can happen if what we're deserializing is completely incompatible with
                    // all the possible variants (e.g. deserializing from boolean).
                    0 -> Body(_json = json)
                    1 -> bestMatches.single()
                    // If there's more than one match with the highest validity, then use the first
                    // completely valid match, or simply the first match if none are completely
                    // valid.
                    else -> bestMatches.firstOrNull { it.isValid() } ?: bestMatches.first()
                }
            }
        }

        internal class Serializer : BaseSerializer<Body>(Body::class) {

            override fun serialize(
                value: Body,
                generator: JsonGenerator,
                provider: SerializerProvider,
            ) {
                when {
                    value.individualUpdate != null -> generator.writeObject(value.individualUpdate)
                    value.businessUpdate != null -> generator.writeObject(value.businessUpdate)
                    value._json != null -> generator.writeObject(value._json)
                    else -> throw IllegalStateException("Invalid Body")
                }
            }
        }

        class IndividualUpdate
        private constructor(
            private val address: JsonField<Address>,
            private val bankAccountInfo: JsonField<UserBankAccountInfo>,
            private val dateOfBirth: JsonField<LocalDate>,
            private val fullName: JsonField<String>,
            private val nationality: JsonField<String>,
            private val umaAddress: JsonField<String>,
            private val additionalProperties: MutableMap<String, JsonValue>,
        ) {

            @JsonCreator
            private constructor(
                @JsonProperty("address")
                @ExcludeMissing
                address: JsonField<Address> = JsonMissing.of(),
                @JsonProperty("bankAccountInfo")
                @ExcludeMissing
                bankAccountInfo: JsonField<UserBankAccountInfo> = JsonMissing.of(),
                @JsonProperty("dateOfBirth")
                @ExcludeMissing
                dateOfBirth: JsonField<LocalDate> = JsonMissing.of(),
                @JsonProperty("fullName")
                @ExcludeMissing
                fullName: JsonField<String> = JsonMissing.of(),
                @JsonProperty("nationality")
                @ExcludeMissing
                nationality: JsonField<String> = JsonMissing.of(),
                @JsonProperty("umaAddress")
                @ExcludeMissing
                umaAddress: JsonField<String> = JsonMissing.of(),
            ) : this(
                address,
                bankAccountInfo,
                dateOfBirth,
                fullName,
                nationality,
                umaAddress,
                mutableMapOf(),
            )

            /**
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun address(): Address? = address.getNullable("address")

            /**
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun bankAccountInfo(): UserBankAccountInfo? =
                bankAccountInfo.getNullable("bankAccountInfo")

            /**
             * Date of birth in ISO 8601 format (YYYY-MM-DD)
             *
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun dateOfBirth(): LocalDate? = dateOfBirth.getNullable("dateOfBirth")

            /**
             * Individual's full name
             *
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun fullName(): String? = fullName.getNullable("fullName")

            /**
             * Country code (ISO 3166-1 alpha-2)
             *
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun nationality(): String? = nationality.getNullable("nationality")

            /**
             * Full UMA address
             *
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun umaAddress(): String? = umaAddress.getNullable("umaAddress")

            /**
             * Returns the raw JSON value of [address].
             *
             * Unlike [address], this method doesn't throw if the JSON field has an unexpected type.
             */
            @JsonProperty("address") @ExcludeMissing fun _address(): JsonField<Address> = address

            /**
             * Returns the raw JSON value of [bankAccountInfo].
             *
             * Unlike [bankAccountInfo], this method doesn't throw if the JSON field has an
             * unexpected type.
             */
            @JsonProperty("bankAccountInfo")
            @ExcludeMissing
            fun _bankAccountInfo(): JsonField<UserBankAccountInfo> = bankAccountInfo

            /**
             * Returns the raw JSON value of [dateOfBirth].
             *
             * Unlike [dateOfBirth], this method doesn't throw if the JSON field has an unexpected
             * type.
             */
            @JsonProperty("dateOfBirth")
            @ExcludeMissing
            fun _dateOfBirth(): JsonField<LocalDate> = dateOfBirth

            /**
             * Returns the raw JSON value of [fullName].
             *
             * Unlike [fullName], this method doesn't throw if the JSON field has an unexpected
             * type.
             */
            @JsonProperty("fullName") @ExcludeMissing fun _fullName(): JsonField<String> = fullName

            /**
             * Returns the raw JSON value of [nationality].
             *
             * Unlike [nationality], this method doesn't throw if the JSON field has an unexpected
             * type.
             */
            @JsonProperty("nationality")
            @ExcludeMissing
            fun _nationality(): JsonField<String> = nationality

            /**
             * Returns the raw JSON value of [umaAddress].
             *
             * Unlike [umaAddress], this method doesn't throw if the JSON field has an unexpected
             * type.
             */
            @JsonProperty("umaAddress")
            @ExcludeMissing
            fun _umaAddress(): JsonField<String> = umaAddress

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

                /** Returns a mutable builder for constructing an instance of [IndividualUpdate]. */
                fun builder() = Builder()
            }

            /** A builder for [IndividualUpdate]. */
            class Builder internal constructor() {

                private var address: JsonField<Address> = JsonMissing.of()
                private var bankAccountInfo: JsonField<UserBankAccountInfo> = JsonMissing.of()
                private var dateOfBirth: JsonField<LocalDate> = JsonMissing.of()
                private var fullName: JsonField<String> = JsonMissing.of()
                private var nationality: JsonField<String> = JsonMissing.of()
                private var umaAddress: JsonField<String> = JsonMissing.of()
                private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

                internal fun from(individualUpdate: IndividualUpdate) = apply {
                    address = individualUpdate.address
                    bankAccountInfo = individualUpdate.bankAccountInfo
                    dateOfBirth = individualUpdate.dateOfBirth
                    fullName = individualUpdate.fullName
                    nationality = individualUpdate.nationality
                    umaAddress = individualUpdate.umaAddress
                    additionalProperties = individualUpdate.additionalProperties.toMutableMap()
                }

                fun address(address: Address) = address(JsonField.of(address))

                /**
                 * Sets [Builder.address] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.address] with a well-typed [Address] value
                 * instead. This method is primarily for setting the field to an undocumented or not
                 * yet supported value.
                 */
                fun address(address: JsonField<Address>) = apply { this.address = address }

                fun bankAccountInfo(bankAccountInfo: UserBankAccountInfo) =
                    bankAccountInfo(JsonField.of(bankAccountInfo))

                /**
                 * Sets [Builder.bankAccountInfo] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.bankAccountInfo] with a well-typed
                 * [UserBankAccountInfo] value instead. This method is primarily for setting the
                 * field to an undocumented or not yet supported value.
                 */
                fun bankAccountInfo(bankAccountInfo: JsonField<UserBankAccountInfo>) = apply {
                    this.bankAccountInfo = bankAccountInfo
                }

                /** Date of birth in ISO 8601 format (YYYY-MM-DD) */
                fun dateOfBirth(dateOfBirth: LocalDate) = dateOfBirth(JsonField.of(dateOfBirth))

                /**
                 * Sets [Builder.dateOfBirth] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.dateOfBirth] with a well-typed [LocalDate] value
                 * instead. This method is primarily for setting the field to an undocumented or not
                 * yet supported value.
                 */
                fun dateOfBirth(dateOfBirth: JsonField<LocalDate>) = apply {
                    this.dateOfBirth = dateOfBirth
                }

                /** Individual's full name */
                fun fullName(fullName: String) = fullName(JsonField.of(fullName))

                /**
                 * Sets [Builder.fullName] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.fullName] with a well-typed [String] value
                 * instead. This method is primarily for setting the field to an undocumented or not
                 * yet supported value.
                 */
                fun fullName(fullName: JsonField<String>) = apply { this.fullName = fullName }

                /** Country code (ISO 3166-1 alpha-2) */
                fun nationality(nationality: String) = nationality(JsonField.of(nationality))

                /**
                 * Sets [Builder.nationality] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.nationality] with a well-typed [String] value
                 * instead. This method is primarily for setting the field to an undocumented or not
                 * yet supported value.
                 */
                fun nationality(nationality: JsonField<String>) = apply {
                    this.nationality = nationality
                }

                /** Full UMA address */
                fun umaAddress(umaAddress: String) = umaAddress(JsonField.of(umaAddress))

                /**
                 * Sets [Builder.umaAddress] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.umaAddress] with a well-typed [String] value
                 * instead. This method is primarily for setting the field to an undocumented or not
                 * yet supported value.
                 */
                fun umaAddress(umaAddress: JsonField<String>) = apply {
                    this.umaAddress = umaAddress
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
                 * Returns an immutable instance of [IndividualUpdate].
                 *
                 * Further updates to this [Builder] will not mutate the returned instance.
                 */
                fun build(): IndividualUpdate =
                    IndividualUpdate(
                        address,
                        bankAccountInfo,
                        dateOfBirth,
                        fullName,
                        nationality,
                        umaAddress,
                        additionalProperties.toMutableMap(),
                    )
            }

            private var validated: Boolean = false

            fun validate(): IndividualUpdate = apply {
                if (validated) {
                    return@apply
                }

                address()?.validate()
                bankAccountInfo()?.validate()
                dateOfBirth()
                fullName()
                nationality()
                umaAddress()
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
                (address.asKnown()?.validity() ?: 0) +
                    (bankAccountInfo.asKnown()?.validity() ?: 0) +
                    (if (dateOfBirth.asKnown() == null) 0 else 1) +
                    (if (fullName.asKnown() == null) 0 else 1) +
                    (if (nationality.asKnown() == null) 0 else 1) +
                    (if (umaAddress.asKnown() == null) 0 else 1)

            override fun equals(other: Any?): Boolean {
                if (this === other) {
                    return true
                }

                return /* spotless:off */ other is IndividualUpdate && address == other.address && bankAccountInfo == other.bankAccountInfo && dateOfBirth == other.dateOfBirth && fullName == other.fullName && nationality == other.nationality && umaAddress == other.umaAddress && additionalProperties == other.additionalProperties /* spotless:on */
            }

            /* spotless:off */
            private val hashCode: Int by lazy { Objects.hash(address, bankAccountInfo, dateOfBirth, fullName, nationality, umaAddress, additionalProperties) }
            /* spotless:on */

            override fun hashCode(): Int = hashCode

            override fun toString() =
                "IndividualUpdate{address=$address, bankAccountInfo=$bankAccountInfo, dateOfBirth=$dateOfBirth, fullName=$fullName, nationality=$nationality, umaAddress=$umaAddress, additionalProperties=$additionalProperties}"
        }

        class BusinessUpdate
        private constructor(
            private val address: JsonField<Address>,
            private val bankAccountInfo: JsonField<UserBankAccountInfo>,
            private val businessInfo: JsonField<BusinessInfo>,
            private val umaAddress: JsonField<String>,
            private val additionalProperties: MutableMap<String, JsonValue>,
        ) {

            @JsonCreator
            private constructor(
                @JsonProperty("address")
                @ExcludeMissing
                address: JsonField<Address> = JsonMissing.of(),
                @JsonProperty("bankAccountInfo")
                @ExcludeMissing
                bankAccountInfo: JsonField<UserBankAccountInfo> = JsonMissing.of(),
                @JsonProperty("businessInfo")
                @ExcludeMissing
                businessInfo: JsonField<BusinessInfo> = JsonMissing.of(),
                @JsonProperty("umaAddress")
                @ExcludeMissing
                umaAddress: JsonField<String> = JsonMissing.of(),
            ) : this(address, bankAccountInfo, businessInfo, umaAddress, mutableMapOf())

            /**
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun address(): Address? = address.getNullable("address")

            /**
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun bankAccountInfo(): UserBankAccountInfo? =
                bankAccountInfo.getNullable("bankAccountInfo")

            /**
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun businessInfo(): BusinessInfo? = businessInfo.getNullable("businessInfo")

            /**
             * Full UMA address
             *
             * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if
             *   the server responded with an unexpected value).
             */
            fun umaAddress(): String? = umaAddress.getNullable("umaAddress")

            /**
             * Returns the raw JSON value of [address].
             *
             * Unlike [address], this method doesn't throw if the JSON field has an unexpected type.
             */
            @JsonProperty("address") @ExcludeMissing fun _address(): JsonField<Address> = address

            /**
             * Returns the raw JSON value of [bankAccountInfo].
             *
             * Unlike [bankAccountInfo], this method doesn't throw if the JSON field has an
             * unexpected type.
             */
            @JsonProperty("bankAccountInfo")
            @ExcludeMissing
            fun _bankAccountInfo(): JsonField<UserBankAccountInfo> = bankAccountInfo

            /**
             * Returns the raw JSON value of [businessInfo].
             *
             * Unlike [businessInfo], this method doesn't throw if the JSON field has an unexpected
             * type.
             */
            @JsonProperty("businessInfo")
            @ExcludeMissing
            fun _businessInfo(): JsonField<BusinessInfo> = businessInfo

            /**
             * Returns the raw JSON value of [umaAddress].
             *
             * Unlike [umaAddress], this method doesn't throw if the JSON field has an unexpected
             * type.
             */
            @JsonProperty("umaAddress")
            @ExcludeMissing
            fun _umaAddress(): JsonField<String> = umaAddress

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

                /** Returns a mutable builder for constructing an instance of [BusinessUpdate]. */
                fun builder() = Builder()
            }

            /** A builder for [BusinessUpdate]. */
            class Builder internal constructor() {

                private var address: JsonField<Address> = JsonMissing.of()
                private var bankAccountInfo: JsonField<UserBankAccountInfo> = JsonMissing.of()
                private var businessInfo: JsonField<BusinessInfo> = JsonMissing.of()
                private var umaAddress: JsonField<String> = JsonMissing.of()
                private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

                internal fun from(businessUpdate: BusinessUpdate) = apply {
                    address = businessUpdate.address
                    bankAccountInfo = businessUpdate.bankAccountInfo
                    businessInfo = businessUpdate.businessInfo
                    umaAddress = businessUpdate.umaAddress
                    additionalProperties = businessUpdate.additionalProperties.toMutableMap()
                }

                fun address(address: Address) = address(JsonField.of(address))

                /**
                 * Sets [Builder.address] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.address] with a well-typed [Address] value
                 * instead. This method is primarily for setting the field to an undocumented or not
                 * yet supported value.
                 */
                fun address(address: JsonField<Address>) = apply { this.address = address }

                fun bankAccountInfo(bankAccountInfo: UserBankAccountInfo) =
                    bankAccountInfo(JsonField.of(bankAccountInfo))

                /**
                 * Sets [Builder.bankAccountInfo] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.bankAccountInfo] with a well-typed
                 * [UserBankAccountInfo] value instead. This method is primarily for setting the
                 * field to an undocumented or not yet supported value.
                 */
                fun bankAccountInfo(bankAccountInfo: JsonField<UserBankAccountInfo>) = apply {
                    this.bankAccountInfo = bankAccountInfo
                }

                fun businessInfo(businessInfo: BusinessInfo) =
                    businessInfo(JsonField.of(businessInfo))

                /**
                 * Sets [Builder.businessInfo] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.businessInfo] with a well-typed [BusinessInfo]
                 * value instead. This method is primarily for setting the field to an undocumented
                 * or not yet supported value.
                 */
                fun businessInfo(businessInfo: JsonField<BusinessInfo>) = apply {
                    this.businessInfo = businessInfo
                }

                /** Full UMA address */
                fun umaAddress(umaAddress: String) = umaAddress(JsonField.of(umaAddress))

                /**
                 * Sets [Builder.umaAddress] to an arbitrary JSON value.
                 *
                 * You should usually call [Builder.umaAddress] with a well-typed [String] value
                 * instead. This method is primarily for setting the field to an undocumented or not
                 * yet supported value.
                 */
                fun umaAddress(umaAddress: JsonField<String>) = apply {
                    this.umaAddress = umaAddress
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
                 * Returns an immutable instance of [BusinessUpdate].
                 *
                 * Further updates to this [Builder] will not mutate the returned instance.
                 */
                fun build(): BusinessUpdate =
                    BusinessUpdate(
                        address,
                        bankAccountInfo,
                        businessInfo,
                        umaAddress,
                        additionalProperties.toMutableMap(),
                    )
            }

            private var validated: Boolean = false

            fun validate(): BusinessUpdate = apply {
                if (validated) {
                    return@apply
                }

                address()?.validate()
                bankAccountInfo()?.validate()
                businessInfo()?.validate()
                umaAddress()
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
                (address.asKnown()?.validity() ?: 0) +
                    (bankAccountInfo.asKnown()?.validity() ?: 0) +
                    (businessInfo.asKnown()?.validity() ?: 0) +
                    (if (umaAddress.asKnown() == null) 0 else 1)

            class BusinessInfo
            private constructor(
                private val legalName: JsonField<String>,
                private val registrationNumber: JsonField<String>,
                private val taxId: JsonField<String>,
                private val additionalProperties: MutableMap<String, JsonValue>,
            ) {

                @JsonCreator
                private constructor(
                    @JsonProperty("legalName")
                    @ExcludeMissing
                    legalName: JsonField<String> = JsonMissing.of(),
                    @JsonProperty("registrationNumber")
                    @ExcludeMissing
                    registrationNumber: JsonField<String> = JsonMissing.of(),
                    @JsonProperty("taxId")
                    @ExcludeMissing
                    taxId: JsonField<String> = JsonMissing.of(),
                ) : this(legalName, registrationNumber, taxId, mutableMapOf())

                /**
                 * Legal name of the business
                 *
                 * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g.
                 *   if the server responded with an unexpected value).
                 */
                fun legalName(): String? = legalName.getNullable("legalName")

                /**
                 * Business registration number
                 *
                 * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g.
                 *   if the server responded with an unexpected value).
                 */
                fun registrationNumber(): String? =
                    registrationNumber.getNullable("registrationNumber")

                /**
                 * Tax identification number
                 *
                 * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g.
                 *   if the server responded with an unexpected value).
                 */
                fun taxId(): String? = taxId.getNullable("taxId")

                /**
                 * Returns the raw JSON value of [legalName].
                 *
                 * Unlike [legalName], this method doesn't throw if the JSON field has an unexpected
                 * type.
                 */
                @JsonProperty("legalName")
                @ExcludeMissing
                fun _legalName(): JsonField<String> = legalName

                /**
                 * Returns the raw JSON value of [registrationNumber].
                 *
                 * Unlike [registrationNumber], this method doesn't throw if the JSON field has an
                 * unexpected type.
                 */
                @JsonProperty("registrationNumber")
                @ExcludeMissing
                fun _registrationNumber(): JsonField<String> = registrationNumber

                /**
                 * Returns the raw JSON value of [taxId].
                 *
                 * Unlike [taxId], this method doesn't throw if the JSON field has an unexpected
                 * type.
                 */
                @JsonProperty("taxId") @ExcludeMissing fun _taxId(): JsonField<String> = taxId

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

                    /** Returns a mutable builder for constructing an instance of [BusinessInfo]. */
                    fun builder() = Builder()
                }

                /** A builder for [BusinessInfo]. */
                class Builder internal constructor() {

                    private var legalName: JsonField<String> = JsonMissing.of()
                    private var registrationNumber: JsonField<String> = JsonMissing.of()
                    private var taxId: JsonField<String> = JsonMissing.of()
                    private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

                    internal fun from(businessInfo: BusinessInfo) = apply {
                        legalName = businessInfo.legalName
                        registrationNumber = businessInfo.registrationNumber
                        taxId = businessInfo.taxId
                        additionalProperties = businessInfo.additionalProperties.toMutableMap()
                    }

                    /** Legal name of the business */
                    fun legalName(legalName: String) = legalName(JsonField.of(legalName))

                    /**
                     * Sets [Builder.legalName] to an arbitrary JSON value.
                     *
                     * You should usually call [Builder.legalName] with a well-typed [String] value
                     * instead. This method is primarily for setting the field to an undocumented or
                     * not yet supported value.
                     */
                    fun legalName(legalName: JsonField<String>) = apply {
                        this.legalName = legalName
                    }

                    /** Business registration number */
                    fun registrationNumber(registrationNumber: String) =
                        registrationNumber(JsonField.of(registrationNumber))

                    /**
                     * Sets [Builder.registrationNumber] to an arbitrary JSON value.
                     *
                     * You should usually call [Builder.registrationNumber] with a well-typed
                     * [String] value instead. This method is primarily for setting the field to an
                     * undocumented or not yet supported value.
                     */
                    fun registrationNumber(registrationNumber: JsonField<String>) = apply {
                        this.registrationNumber = registrationNumber
                    }

                    /** Tax identification number */
                    fun taxId(taxId: String) = taxId(JsonField.of(taxId))

                    /**
                     * Sets [Builder.taxId] to an arbitrary JSON value.
                     *
                     * You should usually call [Builder.taxId] with a well-typed [String] value
                     * instead. This method is primarily for setting the field to an undocumented or
                     * not yet supported value.
                     */
                    fun taxId(taxId: JsonField<String>) = apply { this.taxId = taxId }

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
                     * Returns an immutable instance of [BusinessInfo].
                     *
                     * Further updates to this [Builder] will not mutate the returned instance.
                     */
                    fun build(): BusinessInfo =
                        BusinessInfo(
                            legalName,
                            registrationNumber,
                            taxId,
                            additionalProperties.toMutableMap(),
                        )
                }

                private var validated: Boolean = false

                fun validate(): BusinessInfo = apply {
                    if (validated) {
                        return@apply
                    }

                    legalName()
                    registrationNumber()
                    taxId()
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
                    (if (legalName.asKnown() == null) 0 else 1) +
                        (if (registrationNumber.asKnown() == null) 0 else 1) +
                        (if (taxId.asKnown() == null) 0 else 1)

                override fun equals(other: Any?): Boolean {
                    if (this === other) {
                        return true
                    }

                    return /* spotless:off */ other is BusinessInfo && legalName == other.legalName && registrationNumber == other.registrationNumber && taxId == other.taxId && additionalProperties == other.additionalProperties /* spotless:on */
                }

                /* spotless:off */
                private val hashCode: Int by lazy { Objects.hash(legalName, registrationNumber, taxId, additionalProperties) }
                /* spotless:on */

                override fun hashCode(): Int = hashCode

                override fun toString() =
                    "BusinessInfo{legalName=$legalName, registrationNumber=$registrationNumber, taxId=$taxId, additionalProperties=$additionalProperties}"
            }

            override fun equals(other: Any?): Boolean {
                if (this === other) {
                    return true
                }

                return /* spotless:off */ other is BusinessUpdate && address == other.address && bankAccountInfo == other.bankAccountInfo && businessInfo == other.businessInfo && umaAddress == other.umaAddress && additionalProperties == other.additionalProperties /* spotless:on */
            }

            /* spotless:off */
            private val hashCode: Int by lazy { Objects.hash(address, bankAccountInfo, businessInfo, umaAddress, additionalProperties) }
            /* spotless:on */

            override fun hashCode(): Int = hashCode

            override fun toString() =
                "BusinessUpdate{address=$address, bankAccountInfo=$bankAccountInfo, businessInfo=$businessInfo, umaAddress=$umaAddress, additionalProperties=$additionalProperties}"
        }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is UserUpdateParams && userId == other.userId && body == other.body && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(userId, body, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "UserUpdateParams{userId=$userId, body=$body, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
