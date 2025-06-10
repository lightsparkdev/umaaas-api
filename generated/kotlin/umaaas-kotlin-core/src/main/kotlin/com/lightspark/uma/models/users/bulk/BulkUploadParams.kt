// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.models.users.bulk

import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.MultipartField
import com.lightspark.uma.core.Params
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.core.http.Headers
import com.lightspark.uma.core.http.QueryParams
import com.lightspark.uma.core.toImmutable
import com.lightspark.uma.errors.UmaaasInvalidDataException
import java.io.InputStream
import java.nio.file.Path
import java.util.Objects
import kotlin.io.path.inputStream
import kotlin.io.path.name

/**
 * Upload a CSV file containing user information for bulk creation. The CSV file should follow a
 * specific format with required and optional columns based on user type.
 *
 * ### CSV Format
 *
 * The CSV file should have the following columns:
 *
 * Required columns for all users:
 * - umaAddress: The user's UMA address (e.g., $john.doe@uma.domain.com)
 * - platformUserId: Your platform's unique identifier for the user
 * - userType: Either "INDIVIDUAL" or "BUSINESS"
 *
 * Required columns for individual users:
 * - fullName: Individual's full name
 * - dateOfBirth: Date of birth in YYYY-MM-DD format
 * - addressLine1: Street address line 1
 * - city: City
 * - state: State/Province/Region
 * - postalCode: Postal/ZIP code
 * - country: Country code (ISO 3166-1 alpha-2)
 * - accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)
 * - accountNumber: Bank account number
 * - bankName: Name of the bank
 *
 * Required columns for business users:
 * - businessLegalName: Legal name of the business
 * - addressLine1: Street address line 1
 * - city: City
 * - state: State/Province/Region
 * - postalCode: Postal/ZIP code
 * - country: Country code (ISO 3166-1 alpha-2)
 * - accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)
 * - accountNumber: Bank account number
 * - bankName: Name of the bank
 *
 * Optional columns for all users:
 * - addressLine2: Street address line 2
 * - platformAccountId: Your platform's identifier for the bank account
 * - description: Optional description for the user
 *
 * Optional columns for individual users:
 * - email: User's email address
 *
 * Optional columns for business users:
 * - businessRegistrationNumber: Business registration number
 * - businessTaxId: Tax identification number
 *
 * Additional required columns based on account type:
 *
 * For US_ACCOUNT:
 * - routingNumber: ACH routing number (9 digits)
 * - accountCategory: Either "CHECKING" or "SAVINGS"
 *
 * For CLABE:
 * - clabeNumber: 18-digit CLABE number
 *
 * For PIX:
 * - pixKey: PIX key value
 * - pixKeyType: Type of PIX key (CPF, CNPJ, EMAIL, PHONE, RANDOM)
 *
 * For IBAN:
 * - iban: International Bank Account Number
 * - swiftBic: SWIFT/BIC code (8 or 11 characters)
 *
 * See the UserBankAccountInfo and UserInfo schemas for more details on the required and optional
 * fields.
 *
 * ### Example CSV
 *
 * ```csv
 * umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId,businessLegalName,routingNumber,accountCategory
 * john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234,,222888888,SAVINGS
 * acme@uma.domain.com,biz456,BUSINESS,,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678,Acme Corp,121212121,CHECKING
 * ```
 *
 * The upload process is asynchronous and will return a job ID that can be used to track progress.
 * You can monitor the job status using the `/users/bulk/jobs/{jobId}` endpoint.
 */
class BulkUploadParams
private constructor(
    private val body: Body,
    private val additionalHeaders: Headers,
    private val additionalQueryParams: QueryParams,
) : Params {

    /**
     * CSV file containing user information
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
     *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
     */
    fun file(): InputStream = body.file()

    /**
     * Optional webhook URL for job status updates. If not provided, the platform's default webhook
     * URL will be used.
     *
     * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
     *   server responded with an unexpected value).
     */
    fun webhookUrl(): String? = body.webhookUrl()

    /**
     * Returns the raw multipart value of [file].
     *
     * Unlike [file], this method doesn't throw if the multipart field has an unexpected type.
     */
    fun _file(): MultipartField<InputStream> = body._file()

    /**
     * Returns the raw multipart value of [webhookUrl].
     *
     * Unlike [webhookUrl], this method doesn't throw if the multipart field has an unexpected type.
     */
    fun _webhookUrl(): MultipartField<String> = body._webhookUrl()

    fun _additionalHeaders(): Headers = additionalHeaders

    fun _additionalQueryParams(): QueryParams = additionalQueryParams

    fun toBuilder() = Builder().from(this)

    companion object {

        /**
         * Returns a mutable builder for constructing an instance of [BulkUploadParams].
         *
         * The following fields are required:
         * ```kotlin
         * .file()
         * ```
         */
        fun builder() = Builder()
    }

    /** A builder for [BulkUploadParams]. */
    class Builder internal constructor() {

        private var body: Body.Builder = Body.builder()
        private var additionalHeaders: Headers.Builder = Headers.builder()
        private var additionalQueryParams: QueryParams.Builder = QueryParams.builder()

        internal fun from(bulkUploadParams: BulkUploadParams) = apply {
            body = bulkUploadParams.body.toBuilder()
            additionalHeaders = bulkUploadParams.additionalHeaders.toBuilder()
            additionalQueryParams = bulkUploadParams.additionalQueryParams.toBuilder()
        }

        /**
         * Sets the entire request body.
         *
         * This is generally only useful if you are already constructing the body separately.
         * Otherwise, it's more convenient to use the top-level setters instead:
         * - [file]
         * - [webhookUrl]
         */
        fun body(body: Body) = apply { this.body = body.toBuilder() }

        /** CSV file containing user information */
        fun file(file: InputStream) = apply { body.file(file) }

        /**
         * Sets [Builder.file] to an arbitrary multipart value.
         *
         * You should usually call [Builder.file] with a well-typed [InputStream] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun file(file: MultipartField<InputStream>) = apply { body.file(file) }

        /** CSV file containing user information */
        fun file(file: ByteArray) = apply { body.file(file) }

        /** CSV file containing user information */
        fun file(file: Path) = apply { body.file(file) }

        /**
         * Optional webhook URL for job status updates. If not provided, the platform's default
         * webhook URL will be used.
         */
        fun webhookUrl(webhookUrl: String) = apply { body.webhookUrl(webhookUrl) }

        /**
         * Sets [Builder.webhookUrl] to an arbitrary multipart value.
         *
         * You should usually call [Builder.webhookUrl] with a well-typed [String] value instead.
         * This method is primarily for setting the field to an undocumented or not yet supported
         * value.
         */
        fun webhookUrl(webhookUrl: MultipartField<String>) = apply { body.webhookUrl(webhookUrl) }

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
         * Returns an immutable instance of [BulkUploadParams].
         *
         * Further updates to this [Builder] will not mutate the returned instance.
         *
         * The following fields are required:
         * ```kotlin
         * .file()
         * ```
         *
         * @throws IllegalStateException if any required field is unset.
         */
        fun build(): BulkUploadParams =
            BulkUploadParams(body.build(), additionalHeaders.build(), additionalQueryParams.build())
    }

    fun _body(): Map<String, MultipartField<*>> =
        mapOf("file" to _file(), "webhookUrl" to _webhookUrl()).toImmutable()

    override fun _headers(): Headers = additionalHeaders

    override fun _queryParams(): QueryParams = additionalQueryParams

    class Body
    private constructor(
        private val file: MultipartField<InputStream>,
        private val webhookUrl: MultipartField<String>,
    ) {

        /**
         * CSV file containing user information
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type or is
         *   unexpectedly missing or null (e.g. if the server responded with an unexpected value).
         */
        fun file(): InputStream = file.value.getRequired("file")

        /**
         * Optional webhook URL for job status updates. If not provided, the platform's default
         * webhook URL will be used.
         *
         * @throws UmaaasInvalidDataException if the JSON field has an unexpected type (e.g. if the
         *   server responded with an unexpected value).
         */
        fun webhookUrl(): String? = webhookUrl.value.getNullable("webhookUrl")

        /**
         * Returns the raw multipart value of [file].
         *
         * Unlike [file], this method doesn't throw if the multipart field has an unexpected type.
         */
        @JsonProperty("file") @ExcludeMissing fun _file(): MultipartField<InputStream> = file

        /**
         * Returns the raw multipart value of [webhookUrl].
         *
         * Unlike [webhookUrl], this method doesn't throw if the multipart field has an unexpected
         * type.
         */
        @JsonProperty("webhookUrl")
        @ExcludeMissing
        fun _webhookUrl(): MultipartField<String> = webhookUrl

        fun toBuilder() = Builder().from(this)

        companion object {

            /**
             * Returns a mutable builder for constructing an instance of [Body].
             *
             * The following fields are required:
             * ```kotlin
             * .file()
             * ```
             */
            fun builder() = Builder()
        }

        /** A builder for [Body]. */
        class Builder internal constructor() {

            private var file: MultipartField<InputStream>? = null
            private var webhookUrl: MultipartField<String> = MultipartField.of(null)

            internal fun from(body: Body) = apply {
                file = body.file
                webhookUrl = body.webhookUrl
            }

            /** CSV file containing user information */
            fun file(file: InputStream) = file(MultipartField.of(file))

            /**
             * Sets [Builder.file] to an arbitrary multipart value.
             *
             * You should usually call [Builder.file] with a well-typed [InputStream] value instead.
             * This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun file(file: MultipartField<InputStream>) = apply { this.file = file }

            /** CSV file containing user information */
            fun file(file: ByteArray) = file(file.inputStream())

            /** CSV file containing user information */
            fun file(file: Path) =
                file(
                    MultipartField.builder<InputStream>()
                        .value(file.inputStream())
                        .filename(file.name)
                        .build()
                )

            /**
             * Optional webhook URL for job status updates. If not provided, the platform's default
             * webhook URL will be used.
             */
            fun webhookUrl(webhookUrl: String) = webhookUrl(MultipartField.of(webhookUrl))

            /**
             * Sets [Builder.webhookUrl] to an arbitrary multipart value.
             *
             * You should usually call [Builder.webhookUrl] with a well-typed [String] value
             * instead. This method is primarily for setting the field to an undocumented or not yet
             * supported value.
             */
            fun webhookUrl(webhookUrl: MultipartField<String>) = apply {
                this.webhookUrl = webhookUrl
            }

            /**
             * Returns an immutable instance of [Body].
             *
             * Further updates to this [Builder] will not mutate the returned instance.
             *
             * The following fields are required:
             * ```kotlin
             * .file()
             * ```
             *
             * @throws IllegalStateException if any required field is unset.
             */
            fun build(): Body = Body(checkRequired("file", file), webhookUrl)
        }

        private var validated: Boolean = false

        fun validate(): Body = apply {
            if (validated) {
                return@apply
            }

            file()
            webhookUrl()
            validated = true
        }

        fun isValid(): Boolean =
            try {
                validate()
                true
            } catch (e: UmaaasInvalidDataException) {
                false
            }

        override fun equals(other: Any?): Boolean {
            if (this === other) {
                return true
            }

            return /* spotless:off */ other is Body && file == other.file && webhookUrl == other.webhookUrl /* spotless:on */
        }

        /* spotless:off */
        private val hashCode: Int by lazy { Objects.hash(file, webhookUrl) }
        /* spotless:on */

        override fun hashCode(): Int = hashCode

        override fun toString() = "Body{file=$file, webhookUrl=$webhookUrl}"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) {
            return true
        }

        return /* spotless:off */ other is BulkUploadParams && body == other.body && additionalHeaders == other.additionalHeaders && additionalQueryParams == other.additionalQueryParams /* spotless:on */
    }

    override fun hashCode(): Int = /* spotless:off */ Objects.hash(body, additionalHeaders, additionalQueryParams) /* spotless:on */

    override fun toString() =
        "BulkUploadParams{body=$body, additionalHeaders=$additionalHeaders, additionalQueryParams=$additionalQueryParams}"
}
