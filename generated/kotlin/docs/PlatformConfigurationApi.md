# PlatformConfigurationApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPlatformConfig**](PlatformConfigurationApi.md#getPlatformConfig) | **GET** config | Get platform configuration |
| [**updatePlatformConfig**](PlatformConfigurationApi.md#updatePlatformConfig) | **PATCH** config | Update platform configuration |



Get platform configuration

Retrieve the current platform configuration

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(PlatformConfigurationApi::class.java)

launch(Dispatchers.IO) {
    val result : PlatformConfig = webService.getPlatformConfig()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PlatformConfig**](PlatformConfig.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Update platform configuration

Update the platform configuration settings

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(PlatformConfigurationApi::class.java)
val updatePlatformConfigRequest : UpdatePlatformConfigRequest = {"umaDomain":"mycompany.com","webhookEndpoint":"https://api.mycompany.com/webhooks/uma","supportedCurrencies":[{"currencyCode":"USD","minAmount":100,"maxAmount":1000000,"requiredCounterpartyFields":[{"name":"FULL_NAME","mandatory":true},{"name":"NATIONALITY","mandatory":true},{"name":"DATE_OF_BIRTH","mandatory":true}]}]} // UpdatePlatformConfigRequest | 

launch(Dispatchers.IO) {
    val result : PlatformConfig = webService.updatePlatformConfig(updatePlatformConfigRequest)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updatePlatformConfigRequest** | [**UpdatePlatformConfigRequest**](UpdatePlatformConfigRequest.md)|  | |

### Return type

[**PlatformConfig**](PlatformConfig.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

