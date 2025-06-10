// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.receiver

import com.lightspark.uma.core.Params
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import java.util.Objects

/**
 * Lookup a receiving UMA address to determine supported currencies and exchange rates. This
 * endpoint helps platforms determine what currencies they can send to a given UMA address.
 */
class ReceiverLookupParams
private constructor(
    private val receiverUmaAddress: String?,
    private val senderUmaAddress: String?,
    private val userId: String?,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    fun receiverUmaAddress(): String? = receiverUmaAddress

    /** UMA address of the sender (optional if userId is provided) */
    fun senderUmaAddress(): String? = senderUmaAddress

    /** System ID of the sender (optional if senderUmaAddress is provided) */
    fun userId(): String? = userId

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        fun none(): ReceiverLookupParams = builder().build()

        /** Returns a mutable builder for constructing an instance of [ReceiverLookupParams]. */
        fun builder() = Builder()
    }

    /** A builder for [ReceiverLookupParams]. */
    class Builder internal constructor() {

        private var receiverUmaAddress: String? = null
        private var senderUmaAddress: String? = null
        private var userId: String? = null
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(receiverLookupParams: ReceiverLookupParams) = apply {
            receiverUmaAddress = receiverLookupParams.receiverUmaAddress
            senderUmaAddress = receiverLookupParams.senderUmaAddress
            userId = receiverLookupParams.userId
            additionalHeaders = receiverLookupParams.additionalHeaders.toBuilder()
            additionalQueryParams = receiverLookupParams.additionalQueryParams.toBuilder()
        }

        fun receiverUmaAddress(receiverUmaAddress: String?) = apply {
            this.receiverUmaAddress = receiverUmaAddress
        }

        /** UMA address of the sender (optional if userId is provided) */
        fun senderUmaAddress(senderUmaAddress: String?) = apply {
            this.senderUmaAddress = senderUmaAddress
        }

        /** System ID of the sender (optional if senderUmaAddress is provided) */
        fun userId(userId: String?) = apply { this.userId = userId }

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
         * Returns an immutable instance of [ReceiverLookupParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         */
        fun build(): ReceiverLookupParams =
            ReceiverLookupParams(
                receiverUmaAddress,
                senderUmaAddress,
                userId,
                additionalHeaders.build(),
                additionalQueryParams.build(),
            )
    }

    fun _pathParam(index: Int): String =
        when (index) {
            0 -> receiverUmaAddress ?: ""
            else -> ""
        }

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams =
        QueryParams.builder()
            .apply {
                senderUmaAddress?.let { put("senderUmaAddress", it) }
                userId?.let { put("userId", it) }
                putAll(additionalQueryParams)
            }
            .build()

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is ReceiverLookupParams && receiverUmaAddress == other.receiverUmaAddress && senderUmaAddress == other.senderUmaAddress && userId == other.userId && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(receiverUmaAddress, senderUmaAddress, userId, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "ReceiverLookupParams{receiverUmaAddress=$receiverUmaAddress, senderUmaAddress=$senderUmaAddress, userId=$userId, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
