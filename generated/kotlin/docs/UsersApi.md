# UsersApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createUser**](UsersApi.md#createUser) | **POST** users | Add a new user |
| [**deleteUserById**](UsersApi.md#deleteUserById) | **DELETE** users/{userId} | Delete user by ID |
| [**getBulkUserImportJob**](UsersApi.md#getBulkUserImportJob) | **GET** users/bulk/jobs/{jobId} | Get bulk import job status |
| [**getUserById**](UsersApi.md#getUserById) | **GET** users/{userId} | Get user by ID |
| [**listUsers**](UsersApi.md#listUsers) | **GET** users | List users |
| [**updateUserById**](UsersApi.md#updateUserById) | **PATCH** users/{userId} | Update user by ID |
| [**uploadUsersCsv**](UsersApi.md#uploadUsersCsv) | **POST** users/bulk/csv | Upload users via CSV file |



Add a new user

Register a new user in the system with UMA address and bank account information

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(UsersApi::class.java)
val user : User = {"umaAddress":"$jane.doe@uma.domain.com","platformUserId":"7b3c5a89d2f1e0","userType":"INDIVIDUAL","fullName":"Jane Doe","dateOfBirth":"1992-03-25","address":{"line1":"123 Pine Street","line2":"Unit 501","city":"Seattle","state":"WA","postalCode":"98101","country":"US"},"bankAccountInfo":{"accountType":"US_ACCOUNT","accountNumber":"12345678901","routingNumber":"123456789","accountCategory":"CHECKING","bankName":"Chase Bank","platformAccountId":"chase_primary_1234"}} // User | 

launch(Dispatchers.IO) {
    val result : User = webService.createUser(user)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user** | [**User**](User.md)|  | |

### Return type

[**User**](User.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Delete user by ID

Delete a user by their system-generated ID

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(UsersApi::class.java)
val userId : kotlin.String = userId_example // kotlin.String | System-generated unique user identifier

launch(Dispatchers.IO) {
    val result : User = webService.deleteUserById(userId)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **kotlin.String**| System-generated unique user identifier | |

### Return type

[**User**](User.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Get bulk import job status

Retrieve the current status and results of a bulk user import job. This endpoint can be used to track the progress of both CSV uploads.  The response includes: - Overall job status - Progress statistics - Detailed error information for failed entries - Completion timestamp when finished 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(UsersApi::class.java)
val jobId : kotlin.String = jobId_example // kotlin.String | ID of the bulk import job to retrieve

launch(Dispatchers.IO) {
    val result : BulkUserImportJob = webService.getBulkUserImportJob(jobId)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **jobId** | **kotlin.String**| ID of the bulk import job to retrieve | |

### Return type

[**BulkUserImportJob**](BulkUserImportJob.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Get user by ID

Retrieve a user by their system-generated ID

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(UsersApi::class.java)
val userId : kotlin.String = userId_example // kotlin.String | System-generated unique user identifier

launch(Dispatchers.IO) {
    val result : User = webService.getUserById(userId)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **kotlin.String**| System-generated unique user identifier | |

### Return type

[**User**](User.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


List users

Retrieve a list of users with optional filtering parameters. Returns all users that match the specified filters. If no filters are provided, returns all users (paginated). 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(UsersApi::class.java)
val platformUserId : kotlin.String = platformUserId_example // kotlin.String | Filter by platform-specific user identifier
val umaAddress : kotlin.String = umaAddress_example // kotlin.String | Filter by UMA address
val userType : UserType =  // UserType | Filter by user type
val createdAfter : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users created after this timestamp (inclusive)
val createdBefore : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users created before this timestamp (inclusive)
val updatedAfter : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users updated after this timestamp (inclusive)
val updatedBefore : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users updated before this timestamp (inclusive)
val limit : kotlin.Int = 56 // kotlin.Int | Maximum number of results to return (default 20, max 100)
val cursor : kotlin.String = cursor_example // kotlin.String | Cursor for pagination (returned from previous request)
val isIncludingDeleted : kotlin.Boolean = true // kotlin.Boolean | Whether to include deleted users in the results. Default is false.

launch(Dispatchers.IO) {
    val result : ListUsers200Response = webService.listUsers(platformUserId, umaAddress, userType, createdAfter, createdBefore, updatedAfter, updatedBefore, limit, cursor, isIncludingDeleted)
}
```

### Parameters
| **platformUserId** | **kotlin.String**| Filter by platform-specific user identifier | [optional] |
| **umaAddress** | **kotlin.String**| Filter by UMA address | [optional] |
| **userType** | [**UserType**](.md)| Filter by user type | [optional] [enum: INDIVIDUAL, BUSINESS] |
| **createdAfter** | **java.time.OffsetDateTime**| Filter users created after this timestamp (inclusive) | [optional] |
| **createdBefore** | **java.time.OffsetDateTime**| Filter users created before this timestamp (inclusive) | [optional] |
| **updatedAfter** | **java.time.OffsetDateTime**| Filter users updated after this timestamp (inclusive) | [optional] |
| **updatedBefore** | **java.time.OffsetDateTime**| Filter users updated before this timestamp (inclusive) | [optional] |
| **limit** | **kotlin.Int**| Maximum number of results to return (default 20, max 100) | [optional] [default to 20] |
| **cursor** | **kotlin.String**| Cursor for pagination (returned from previous request) | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **isIncludingDeleted** | **kotlin.Boolean**| Whether to include deleted users in the results. Default is false. | [optional] |

### Return type

[**ListUsers200Response**](ListUsers200Response.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Update user by ID

Update a user&#39;s metadata by their system-generated ID

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(UsersApi::class.java)
val userId : kotlin.String = userId_example // kotlin.String | System-generated unique user identifier
val updateUserByIdRequest : UpdateUserByIdRequest = {"userType":"INDIVIDUAL","fullName":"John Smith","dateOfBirth":"1985-06-15","address":{"line1":"456 Market St","city":"San Francisco","state":"CA","postalCode":"94103","country":"US"},"bankAccountInfo":{"accountType":"US_ACCOUNT","accountNumber":"11122233344","routingNumber":"111222333","accountCategory":"CHECKING","bankName":"Wells Fargo","platformAccountId":"wf_checking_9012"}} // UpdateUserByIdRequest | 

launch(Dispatchers.IO) {
    val result : User = webService.updateUserById(userId, updateUserByIdRequest)
}
```

### Parameters
| **userId** | **kotlin.String**| System-generated unique user identifier | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updateUserByIdRequest** | [**UpdateUserByIdRequest**](UpdateUserByIdRequest.md)|  | |

### Return type

[**User**](User.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Upload users via CSV file

Upload a CSV file containing user information for bulk creation. The CSV file should follow a specific format with required and optional columns based on user type.  ### CSV Format The CSV file should have the following columns:  Required columns for all users: - umaAddress: The user&#39;s UMA address (e.g., $john.doe@uma.domain.com) - platformUserId: Your platform&#39;s unique identifier for the user - userType: Either \&quot;INDIVIDUAL\&quot; or \&quot;BUSINESS\&quot;  Required columns for individual users: - fullName: Individual&#39;s full name - dateOfBirth: Date of birth in YYYY-MM-DD format - addressLine1: Street address line 1 - city: City - state: State/Province/Region - postalCode: Postal/ZIP code - country: Country code (ISO 3166-1 alpha-2) - accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN) - accountNumber: Bank account number - bankName: Name of the bank  Required columns for business users: - businessLegalName: Legal name of the business - addressLine1: Street address line 1 - city: City - state: State/Province/Region - postalCode: Postal/ZIP code - country: Country code (ISO 3166-1 alpha-2) - accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN) - accountNumber: Bank account number - bankName: Name of the bank  Optional columns for all users: - addressLine2: Street address line 2 - platformAccountId: Your platform&#39;s identifier for the bank account - description: Optional description for the user  Optional columns for individual users: - email: User&#39;s email address  Optional columns for business users: - businessRegistrationNumber: Business registration number - businessTaxId: Tax identification number  Additional required columns based on account type:  For US_ACCOUNT: - routingNumber: ACH routing number (9 digits) - accountCategory: Either \&quot;CHECKING\&quot; or \&quot;SAVINGS\&quot;  For CLABE: - clabeNumber: 18-digit CLABE number  For PIX: - pixKey: PIX key value - pixKeyType: Type of PIX key (CPF, CNPJ, EMAIL, PHONE, RANDOM)  For IBAN: - iban: International Bank Account Number - swiftBic: SWIFT/BIC code (8 or 11 characters)  See the UserBankAccountInfo and UserInfo schemas for more details on the required and optional fields.  ### Example CSV &#x60;&#x60;&#x60;csv umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId,businessLegalName,routingNumber,accountCategory john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234,,222888888,SAVINGS acme@uma.domain.com,biz456,BUSINESS,,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678,Acme Corp,121212121,CHECKING &#x60;&#x60;&#x60;  The upload process is asynchronous and will return a job ID that can be used to track progress. You can monitor the job status using the &#x60;/users/bulk/jobs/{jobId}&#x60; endpoint. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(UsersApi::class.java)
val file : java.io.File = BINARY_DATA_HERE // java.io.File | CSV file containing user information
val webhookUrl : java.net.URI = webhookUrl_example // java.net.URI | Optional webhook URL for job status updates. If not provided, the platform's default webhook URL will be used.

launch(Dispatchers.IO) {
    val result : UploadUsersCsv202Response = webService.uploadUsersCsv(file, webhookUrl)
}
```

### Parameters
| **file** | **java.io.File**| CSV file containing user information | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **webhookUrl** | **java.net.URI**| Optional webhook URL for job status updates. If not provided, the platform&#39;s default webhook URL will be used. | [optional] |

### Return type

[**UploadUsersCsv202Response**](UploadUsersCsv202Response.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

