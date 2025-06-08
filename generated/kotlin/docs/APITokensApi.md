# APITokensApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createToken**](APITokensApi.md#createToken) | **POST** tokens | Create a new API token |
| [**deleteTokenById**](APITokensApi.md#deleteTokenById) | **DELETE** tokens/{tokenId} | Delete API token by ID |
| [**getTokenById**](APITokensApi.md#getTokenById) | **GET** tokens/{tokenId} | Get API token by ID |
| [**listTokens**](APITokensApi.md#listTokens) | **GET** tokens | List tokens |



Create a new API token

Create a new API token to access the UMAaaS APIs.

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(APITokensApi::class.java)
val tokenCreate : TokenCreate =  // TokenCreate | 

launch(Dispatchers.IO) {
    val result : ApiToken = webService.createToken(tokenCreate)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **tokenCreate** | [**TokenCreate**](TokenCreate.md)|  | |

### Return type

[**ApiToken**](ApiToken.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Delete API token by ID

Delete an API token by their system-generated ID

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(APITokensApi::class.java)
val tokenId : kotlin.String = tokenId_example // kotlin.String | System-generated unique token identifier

launch(Dispatchers.IO) {
    webService.deleteTokenById(tokenId)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **tokenId** | **kotlin.String**| System-generated unique token identifier | |

### Return type

null (empty response body)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Get API token by ID

Retrieve an API token by their system-generated ID

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(APITokensApi::class.java)
val tokenId : kotlin.String = tokenId_example // kotlin.String | System-generated unique token identifier

launch(Dispatchers.IO) {
    val result : ApiToken = webService.getTokenById(tokenId)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **tokenId** | **kotlin.String**| System-generated unique token identifier | |

### Return type

[**ApiToken**](ApiToken.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


List tokens

Retrieve a list of API tokens with optional filtering parameters. Returns all tokens that match the specified filters. If no filters are provided, returns all tokens (paginated). 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(APITokensApi::class.java)
val name : kotlin.String = name_example // kotlin.String | Filter by name of the token
val createdAfter : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users created after this timestamp (inclusive)
val createdBefore : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users created before this timestamp (inclusive)
val updatedAfter : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users updated after this timestamp (inclusive)
val updatedBefore : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter users updated before this timestamp (inclusive)
val limit : kotlin.Int = 56 // kotlin.Int | Maximum number of results to return (default 20, max 100)
val cursor : kotlin.String = cursor_example // kotlin.String | Cursor for pagination (returned from previous request)

launch(Dispatchers.IO) {
    val result : ListTokens200Response = webService.listTokens(name, createdAfter, createdBefore, updatedAfter, updatedBefore, limit, cursor)
}
```

### Parameters
| **name** | **kotlin.String**| Filter by name of the token | [optional] |
| **createdAfter** | **java.time.OffsetDateTime**| Filter users created after this timestamp (inclusive) | [optional] |
| **createdBefore** | **java.time.OffsetDateTime**| Filter users created before this timestamp (inclusive) | [optional] |
| **updatedAfter** | **java.time.OffsetDateTime**| Filter users updated after this timestamp (inclusive) | [optional] |
| **updatedBefore** | **java.time.OffsetDateTime**| Filter users updated before this timestamp (inclusive) | [optional] |
| **limit** | **kotlin.Int**| Maximum number of results to return (default 20, max 100) | [optional] [default to 20] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **cursor** | **kotlin.String**| Cursor for pagination (returned from previous request) | [optional] |

### Return type

[**ListTokens200Response**](ListTokens200Response.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

