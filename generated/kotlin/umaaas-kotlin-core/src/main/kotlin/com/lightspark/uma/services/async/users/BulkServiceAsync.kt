// File generated from our OpenAPI spec by Stainless.

package com.lightspark.uma.services.async.users

import com.google.errorprone.annotations.MustBeClosed
import com.lightspark.uma.core.RequestOptions
import com.lightspark.uma.core.http.HttpResponseFor
import com.lightspark.uma.models.users.bulk.BulkGetJobStatusParams
import com.lightspark.uma.models.users.bulk.BulkGetJobStatusResponse
import com.lightspark.uma.models.users.bulk.BulkUploadParams
import com.lightspark.uma.models.users.bulk.BulkUploadResponse

interface BulkServiceAsync {

    /**
     * Returns a view of this service that provides access to raw HTTP responses for each method.
     */
    fun withRawResponse(): WithRawResponse

    /**
     * Retrieve the current status and results of a bulk user import job. This endpoint can be used
     * to track the progress of both CSV uploads.
     *
     * The response includes:
     * - Overall job status
     * - Progress statistics
     * - Detailed error information for failed entries
     * - Completion timestamp when finished
     */
    suspend fun getJobStatus(
        jobId: String,
        params: BulkGetJobStatusParams = BulkGetJobStatusParams.none(),
        requestOptions: RequestOptions = RequestOptions.none(),
    ): BulkGetJobStatusResponse =
        getJobStatus(params.toBuilder().jobId(jobId).build(), requestOptions)

    /** @see [getJobStatus] */
    suspend fun getJobStatus(
        params: BulkGetJobStatusParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): BulkGetJobStatusResponse

    /** @see [getJobStatus] */
    suspend fun getJobStatus(
        jobId: String,
        requestOptions: RequestOptions,
    ): BulkGetJobStatusResponse = getJobStatus(jobId, BulkGetJobStatusParams.none(), requestOptions)

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
     * See the UserBankAccountInfo and UserInfo schemas for more details on the required and
     * optional fields.
     *
     * ### Example CSV
     *
     * ```csv
     * umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId,businessLegalName,routingNumber,accountCategory
     * john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234,,222888888,SAVINGS
     * acme@uma.domain.com,biz456,BUSINESS,,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678,Acme Corp,121212121,CHECKING
     * ```
     *
     * The upload process is asynchronous and will return a job ID that can be used to track
     * progress. You can monitor the job status using the `/users/bulk/jobs/{jobId}` endpoint.
     */
    suspend fun upload(
        params: BulkUploadParams,
        requestOptions: RequestOptions = RequestOptions.none(),
    ): BulkUploadResponse

    /** A view of [BulkServiceAsync] that provides access to raw HTTP responses for each method. */
    interface WithRawResponse {

        /**
         * Returns a raw HTTP response for `get /users/bulk/jobs/{jobId}`, but is otherwise the same
         * as [BulkServiceAsync.getJobStatus].
         */
        @MustBeClosed
        suspend fun getJobStatus(
            jobId: String,
            params: BulkGetJobStatusParams = BulkGetJobStatusParams.none(),
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<BulkGetJobStatusResponse> =
            getJobStatus(params.toBuilder().jobId(jobId).build(), requestOptions)

        /** @see [getJobStatus] */
        @MustBeClosed
        suspend fun getJobStatus(
            params: BulkGetJobStatusParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<BulkGetJobStatusResponse>

        /** @see [getJobStatus] */
        @MustBeClosed
        suspend fun getJobStatus(
            jobId: String,
            requestOptions: RequestOptions,
        ): HttpResponseFor<BulkGetJobStatusResponse> =
            getJobStatus(jobId, BulkGetJobStatusParams.none(), requestOptions)

        /**
         * Returns a raw HTTP response for `post /users/bulk/csv`, but is otherwise the same as
         * [BulkServiceAsync.upload].
         */
        @MustBeClosed
        suspend fun upload(
            params: BulkUploadParams,
            requestOptions: RequestOptions = RequestOptions.none(),
        ): HttpResponseFor<BulkUploadResponse>
    }
}
