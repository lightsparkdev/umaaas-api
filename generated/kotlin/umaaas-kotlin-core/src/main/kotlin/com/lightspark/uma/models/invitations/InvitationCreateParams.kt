// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.invitations

import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.JsonField
import com.lightspark.uma.core.JsonMissing
import com.lightspark.uma.core.JsonValue
import com.lightspark.uma.core.Params
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.time.OffsetDateTime
import java.util.Collections
import java.util.Objects

/** Create an UMA invitation from a given platform user. */
class InvitationCreateParams
private constructor(
    private val body: Body,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    /**
     * The UMA address of the user creating the invitation
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun inviterUma(): String = body.inviterUma()

    /**
     * An amount to send (in the smallest unit of the user's currency) to the invitee when the
     * invitation is claimed. This is optional and if not provided, the invitee will not receive any
     * amount. Note that the actual sending of the amount must be done by the inviter platform once
     * the INVITATION_CLAIMED webhook is received. If the inviter platform either does not send the
     * payment or the payment fails, the invitee will not receive this amount. This field is
     * primarily used for display purposes on the claiming side of the invitation.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun amountToSend(): Long? = body.amountToSend()

    /**
     * When the invitation expires (if at all)
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun expiresAt(): OffsetDateTime? = body.expiresAt()

    /**
     * Returns the raw JSON value of [inviterUma].
     *
     * Unlike [inviterUma], this method doesn't throw if the JSON field has an unexpected type.
     */
    fun _inviterUma(): JsonField<String> = body._inviterUma()

    /**
     * Returns the raw JSON value of [amountToSend].
     *
     * Unlike [amountToSend], this method doesn't throw if the JSON field has an unexpected type.
     */
    fun _amountToSend(): JsonField<Long> = body._amountToSend()

    /**
     * Returns the raw JSON value of [expiresAt].
     *
     * Unlike [expiresAt], this method doesn't throw if the JSON field has an unexpected type.
     */
    fun _expiresAt(): JsonField<OffsetDateTime> = body._expiresAt()

    fun _additionalBodyProperties(): Map<String, JsonValue> = body._additionalProperties()

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        /**
         * Returns a mutable builder for constructing an instance of [InvitationCreateParams].
         *
         * The following fields are required:
         * ```kotlin
         * .inviterUma()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [InvitationCreateParams]. */
    class Builder internal constructor() {

        private var body: Body.Builder = Body.builder()
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(invitationCreateParams: InvitationCreateParams) = apply {
            body = invitationCreateParams.body.toBuilder()
            additionalHeaders = invitationCreateParams.additionalHeaders.toBuilder()
            additionalQueryParams = invitationCreateParams.additionalQueryParams.toBuilder()
        }

        /**
         * Sets the entire request body.
         *
         * This is generally only useful if you are already constructing the body separately.
         * Otherwise, it's more convenient to use the top-level setters instead:
         * - [inviterUma]
         * - [amountToSend]
         * - [expiresAt]
         */
        fun body(body: Body) = apply { this.body = body.toBuilder() }

        /** The UMA address of the user creating the invitation */
        fun inviterUma(inviterUma: String) = apply { body.inviterUma(inviterUma) }

        /**
         * Sets [Builder.inviterUma] to an arbitrary JSON value.
         *
         * You should usually call [Builder.inviterUma] with a well-typed [String] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun inviterUma(inviterUma: JsonField<String>) = apply { body.inviterUma(inviterUma) }

        /**
         * An amount to send (in the smallest unit of the user's currency) to the invitee when the
         * invitation is claimed. This is optional and if not provided, the invitee will not receive
         * any amount. Note that the actual sending of the amount must be done by the inviter
         * platform once the INVITATION_CLAIMED webhook is received. If the inviter platform either
         * does not send the payment or the payment fails, the invitee will not receive this amount.
         * This field is primarily used for display purposes on the claiming side of the invitation.
         */
        fun amountToSend(amountToSend: Long) = apply { body.amountToSend(amountToSend) }

        /**
         * Sets [Builder.amountToSend] to an arbitrary JSON value.
         *
         * You should usually call [Builder.amountToSend] with a well-typed [Long] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun amountToSend(amountToSend: JsonField<Long>) = apply { body.amountToSend(amountToSend) }

        /** When the invitation expires (if at all) */
        fun expiresAt(expiresAt: OffsetDateTime) = apply { body.expiresAt(expiresAt) }

        /**
         * Sets [Builder.expiresAt] to an arbitrary JSON value.
         *
         * You should usually call [Builder.expiresAt] with a well-typed [OffsetDateTime] value
         * instead. This method is primarily for setting the field to an undocumented or not yet
         * supported value.
         */
        fun expiresAt(expiresAt: JsonField<OffsetDateTime>) = apply { body.expiresAt(expiresAt) }

        fun additionalBodyProperties(additionalBodyProperties: Map<String, JsonValue>) = apply {
            body.additionalProperties(additionalBodyProperties)
        }

        fun putAdditionalBodyProperty(key: String, value: JsonValue) = apply {
            body.putAdditionalProperty(key, value)
        }

        fun putAllAdditionalBodyProperties(additionalBodyProperties: Map<String, JsonValue>) =
            apply {
                body.putAllAdditionalProperties(additionalBodyProperties)
            }

        fun removeAdditionalBodyProperty(key: String) = apply { body.removeAdditionalProperty(key) }

        fun removeAllAdditionalBodyProperties(keys: Set<String>) = apply {
            body.removeAllAdditionalProperties(keys)
        }

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
         * Returns an immutable instance of [InvitationCreateParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .inviterUma()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): InvitationCreateParams =
            InvitationCreateParams(
                body.build(),
                additionalHeaders.build(),
                additionalQueryParams.build(),
            )
    }

    fun _body(): Body = body

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams = additionalQueryParams

    class Body
    private constructor(
        private val inviterUma: JsonField<String>,
        private val amountToSend: JsonField<Long>,
        private val expiresAt: JsonField<OffsetDateTime>,
        private val additionalProperties: MutableMap<String, JsonValue>,
    ) {

        @JsonCreator
        private constructor(
            @JsonProperty("inviterUma")
            @ExcludeMissing
            inviterUma: JsonField<String> = JsonMissing.of(),
            @JsonProperty("amountToSend")
            @ExcludeMissing
            amountToSend: JsonField<Long> = JsonMissing.of(),
            @JsonProperty("expiresAt")
            @ExcludeMissing
            expiresAt: JsonField<OffsetDateTime> = JsonMissing.of(),
        ) : this(inviterUma, amountToSend, expiresAt, mutableMapOf())

        /**
         * The UMA address of the user creating the invitation
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun inviterUma(): String = inviterUma.getRequired("inviterUma")

        /**
         * An amount to send (in the smallest unit of the user's currency) to the invitee when the
         * invitation is claimed. This is optional and if not provided, the invitee will not receive
         * any amount. Note that the actual sending of the amount must be done by the inviter
         * platform once the INVITATION_CLAIMED webhook is received. If the inviter platform either
         * does not send the payment or the payment fails, the invitee will not receive this amount.
         * This field is primarily used for display purposes on the claiming side of the invitation.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun amountToSend(): Long? = amountToSend.getNullable("amountToSend")

        /**
         * When the invitation expires (if at all)
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun expiresAt(): OffsetDateTime? = expiresAt.getNullable("expiresAt")

        /**
         * Returns the raw JSON value of [inviterUma].
         *
         * Unlike [inviterUma], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("inviterUma")
        @ExcludeMissing
        fun _inviterUma(): JsonField<String> = inviterUma

        /**
         * Returns the raw JSON value of [amountToSend].
         *
         * Unlike [amountToSend], this method doesn't throw if the JSON field has an unexpected
         * type.
         */
        @JsonProperty("amountToSend")
        @ExcludeMissing
        fun _amountToSend(): JsonField<Long> = amountToSend

        /**
         * Returns the raw JSON value of [expiresAt].
         *
         * Unlike [expiresAt], this method doesn't throw if the JSON field has an unexpected type.
         */
        @JsonProperty("expiresAt")
        @ExcludeMissing
        fun _expiresAt(): JsonField<OffsetDateTime> = expiresAt

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
             * Returns a mutable builder for constructing an instance of [Body].
             *
             * The following fields are required:
             * ```kotlin
             * .inviterUma()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [Body]. */
        class Builder internal constructor() {

            private var inviterUma: JsonField<String>? = null
            private var amountToSend: JsonField<Long> = JsonMissing.of()
            private var expiresAt: JsonField<OffsetDateTime> = JsonMissing.of()
            private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

            internal fun from(body: Body) = apply {
                inviterUma = body.inviterUma
                amountToSend = body.amountToSend
                expiresAt = body.expiresAt
                additionalProperties = body.additionalProperties.toMutableMap()
            }

            /** The UMA address of the user creating the invitation */
            fun inviterUma(inviterUma: String) = inviterUma(JsonField.of(inviterUma))

            /**
             * Sets [Builder.inviterUma] to an arbitrary JSON value.
             *
             * You should usually call [Builder.inviterUma] with a well-typed [String] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun inviterUma(inviterUma: JsonField<String>) = apply { this.inviterUma = inviterUma }

            /**
             * An amount to send (in the smallest unit of the user's currency) to the invitee when
             * the invitation is claimed. This is optional and if not provided, the invitee will not
             * receive any amount. Note that the actual sending of the amount must be done by the
             * inviter platform once the INVITATION_CLAIMED webhook is received. If the inviter
             * platform either does not send the payment or the payment fails, the invitee will not
             * receive this amount. This field is primarily used for display purposes on the
             * claiming side of the invitation.
             */
            fun amountToSend(amountToSend: Long) = amountToSend(JsonField.of(amountToSend))

            /**
             * Sets [Builder.amountToSend] to an arbitrary JSON value.
             *
             * You should usually call [Builder.amountToSend] with a well-typed [Long] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun amountToSend(amountToSend: JsonField<Long>) = apply {
                this.amountToSend = amountToSend
            }

            /** When the invitation expires (if at all) */
            fun expiresAt(expiresAt: OffsetDateTime) = expiresAt(JsonField.of(expiresAt))

            /**
             * Sets [Builder.expiresAt] to an arbitrary JSON value.
             *
             * You should usually call [Builder.expiresAt] with a well-typed [OffsetDateTime] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun expiresAt(expiresAt: JsonField<OffsetDateTime>) = apply {
                this.expiresAt = expiresAt
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
             * Returns an immutable instance of [Body].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             *
             * The following fields are required:
             * ```kotlin
             * .inviterUma()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): Body =
                Body(
                    checkRequired("inviterUma", inviterUma),
                    amountToSend,
                    expiresAt,
                    additionalProperties.toMutableMap(),
                )
        }

        private var validated: Boolean = false

        fun validate(): Body = apply {
            if (validated) {
                return@apply
            }

            inviterUma()
            amountToSend()
            expiresAt()
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
            (if (inviterUma.asKnown() == null) 0 else 1) +
                (if (amountToSend.asKnown() == null) 0 else 1) +
                (if (expiresAt.asKnown() == null) 0 else 1)

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is Body && inviterUma == other.inviterUma && amountToSend == other.amountToSend && expiresAt == other.expiresAt && additionalProperties == other.additionalProperties /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(inviterUma, amountToSend, expiresAt, additionalProperties) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() =
            "Body{inviterUma=$inviterUma, amountToSend=$amountToSend, expiresAt=$expiresAt, additionalProperties=$additionalProperties}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is InvitationCreateParams && body == other.body && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(body, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "InvitationCreateParams{body=$body, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
