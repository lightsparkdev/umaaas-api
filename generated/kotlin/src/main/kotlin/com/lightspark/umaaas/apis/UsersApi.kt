package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.BulkUserImportJob
import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.ListUsers200Response
import com.lightspark.umaaas.models.UpdateUserByIdRequest
import com.lightspark.umaaas.models.UploadUsersCsv202Response
import com.lightspark.umaaas.models.User
import com.lightspark.umaaas.models.UserType

import okhttp3.MultipartBody

interface UsersApi {
    /**
     * POST users
     * Add a new user
     * Register a new user in the system with UMA address and bank account information
     * Responses:
     *  - 201: User created successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *  - 409: Conflict - User with the UMA address already exists
     *
     * @param user 
     * @return [User]
     */
    @POST("users")
    suspend fun createUser(@Body user: User): Response<User>

    /**
     * DELETE users/{userId}
     * Delete user by ID
     * Delete a user by their system-generated ID
     * Responses:
     *  - 200: User deleted successfully
     *  - 401: Unauthorized
     *  - 404: User not found
     *  - 410: User deleted already
     *
     * @param userId System-generated unique user identifier
     * @return [User]
     */
    @DELETE("users/{userId}")
    suspend fun deleteUserById(@Path("userId") userId: kotlin.String): Response<User>

    /**
     * GET users/bulk/jobs/{jobId}
     * Get bulk import job status
     * Retrieve the current status and results of a bulk user import job. This endpoint can be used to track the progress of both CSV uploads.  The response includes: - Overall job status - Progress statistics - Detailed error information for failed entries - Completion timestamp when finished 
     * Responses:
     *  - 200: Job status retrieved successfully
     *  - 401: Unauthorized
     *  - 404: Job not found
     *
     * @param jobId ID of the bulk import job to retrieve
     * @return [BulkUserImportJob]
     */
    @GET("users/bulk/jobs/{jobId}")
    suspend fun getBulkUserImportJob(@Path("jobId") jobId: kotlin.String): Response<BulkUserImportJob>

    /**
     * GET users/{userId}
     * Get user by ID
     * Retrieve a user by their system-generated ID
     * Responses:
     *  - 200: Successful operation
     *  - 401: Unauthorized
     *  - 404: User not found
     *
     * @param userId System-generated unique user identifier
     * @return [User]
     */
    @GET("users/{userId}")
    suspend fun getUserById(@Path("userId") userId: kotlin.String): Response<User>

    /**
     * GET users
     * List users
     * Retrieve a list of users with optional filtering parameters. Returns all users that match the specified filters. If no filters are provided, returns all users (paginated). 
     * Responses:
     *  - 200: Successful operation
     *  - 400: Bad request - Invalid parameters
     *  - 401: Unauthorized
     *
     * @param platformUserId Filter by platform-specific user identifier (optional)
     * @param umaAddress Filter by UMA address (optional)
     * @param userType Filter by user type (optional)
     * @param createdAfter Filter users created after this timestamp (inclusive) (optional)
     * @param createdBefore Filter users created before this timestamp (inclusive) (optional)
     * @param updatedAfter Filter users updated after this timestamp (inclusive) (optional)
     * @param updatedBefore Filter users updated before this timestamp (inclusive) (optional)
     * @param limit Maximum number of results to return (default 20, max 100) (optional, default to 20)
     * @param cursor Cursor for pagination (returned from previous request) (optional)
     * @param isIncludingDeleted Whether to include deleted users in the results. Default is false. (optional)
     * @return [ListUsers200Response]
     */
    @GET("users")
    suspend fun listUsers(@Query("platformUserId") platformUserId: kotlin.String? = null, @Query("umaAddress") umaAddress: kotlin.String? = null, @Query("userType") userType: UserType? = null, @Query("createdAfter") createdAfter: java.time.OffsetDateTime? = null, @Query("createdBefore") createdBefore: java.time.OffsetDateTime? = null, @Query("updatedAfter") updatedAfter: java.time.OffsetDateTime? = null, @Query("updatedBefore") updatedBefore: java.time.OffsetDateTime? = null, @Query("limit") limit: kotlin.Int? = 20, @Query("cursor") cursor: kotlin.String? = null, @Query("isIncludingDeleted") isIncludingDeleted: kotlin.Boolean? = null): Response<ListUsers200Response>

    /**
     * PATCH users/{userId}
     * Update user by ID
     * Update a user&#39;s metadata by their system-generated ID
     * Responses:
     *  - 200: User updated successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *  - 404: User not found
     *
     * @param userId System-generated unique user identifier
     * @param updateUserByIdRequest 
     * @return [User]
     */
    @PATCH("users/{userId}")
    suspend fun updateUserById(@Path("userId") userId: kotlin.String, @Body updateUserByIdRequest: UpdateUserByIdRequest): Response<User>

    /**
     * POST users/bulk/csv
     * Upload users via CSV file
     * Upload a CSV file containing user information for bulk creation. The CSV file should follow a specific format with required and optional columns based on user type.  ### CSV Format The CSV file should have the following columns:  Required columns for all users: - umaAddress: The user&#39;s UMA address (e.g., $john.doe@uma.domain.com) - platformUserId: Your platform&#39;s unique identifier for the user - userType: Either \&quot;INDIVIDUAL\&quot; or \&quot;BUSINESS\&quot;  Required columns for individual users: - fullName: Individual&#39;s full name - dateOfBirth: Date of birth in YYYY-MM-DD format - addressLine1: Street address line 1 - city: City - state: State/Province/Region - postalCode: Postal/ZIP code - country: Country code (ISO 3166-1 alpha-2) - accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN) - accountNumber: Bank account number - bankName: Name of the bank  Required columns for business users: - businessLegalName: Legal name of the business - addressLine1: Street address line 1 - city: City - state: State/Province/Region - postalCode: Postal/ZIP code - country: Country code (ISO 3166-1 alpha-2) - accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN) - accountNumber: Bank account number - bankName: Name of the bank  Optional columns for all users: - addressLine2: Street address line 2 - platformAccountId: Your platform&#39;s identifier for the bank account - description: Optional description for the user  Optional columns for individual users: - email: User&#39;s email address  Optional columns for business users: - businessRegistrationNumber: Business registration number - businessTaxId: Tax identification number  Additional required columns based on account type:  For US_ACCOUNT: - routingNumber: ACH routing number (9 digits) - accountCategory: Either \&quot;CHECKING\&quot; or \&quot;SAVINGS\&quot;  For CLABE: - clabeNumber: 18-digit CLABE number  For PIX: - pixKey: PIX key value - pixKeyType: Type of PIX key (CPF, CNPJ, EMAIL, PHONE, RANDOM)  For IBAN: - iban: International Bank Account Number - swiftBic: SWIFT/BIC code (8 or 11 characters)  See the UserBankAccountInfo and UserInfo schemas for more details on the required and optional fields.  ### Example CSV &#x60;&#x60;&#x60;csv umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId,businessLegalName,routingNumber,accountCategory john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234,,222888888,SAVINGS acme@uma.domain.com,biz456,BUSINESS,,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678,Acme Corp,121212121,CHECKING &#x60;&#x60;&#x60;  The upload process is asynchronous and will return a job ID that can be used to track progress. You can monitor the job status using the &#x60;/users/bulk/jobs/{jobId}&#x60; endpoint. 
     * Responses:
     *  - 202: CSV upload accepted for processing
     *  - 401: Unauthorized
     *
     * @param file CSV file containing user information
     * @param webhookUrl Optional webhook URL for job status updates. If not provided, the platform&#39;s default webhook URL will be used. (optional)
     * @return [UploadUsersCsv202Response]
     */
    @Multipart
    @POST("users/bulk/csv")
    suspend fun uploadUsersCsv(@Part file: MultipartBody.Part, @Part("webhookUrl") webhookUrl: java.net.URI? = null): Response<UploadUsersCsv202Response>

}
