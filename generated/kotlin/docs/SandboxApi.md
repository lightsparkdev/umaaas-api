# SandboxApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**sandboxReceive**](SandboxApi.md#sandboxReceive) | **POST** sandbox/receive | Simulate payment send to test receiving a payment |
| [**sandboxSend**](SandboxApi.md#sandboxSend) | **POST** sandbox/send | Simulate sending funds |



Simulate payment send to test receiving a payment

Simulate sending payment from an sandbox uma address to a platform user to test payment receive. This endpoint is only for the sandbox environment and will fail for production platforms/keys. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(SandboxApi::class.java)
val sandboxReceiveRequest : SandboxReceiveRequest =  // SandboxReceiveRequest | 

launch(Dispatchers.IO) {
    val result : IncomingTransaction = webService.sandboxReceive(sandboxReceiveRequest)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **sandboxReceiveRequest** | [**SandboxReceiveRequest**](SandboxReceiveRequest.md)|  | |

### Return type

[**IncomingTransaction**](IncomingTransaction.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Simulate sending funds

Simulate sending funds to the bank account as instructed in the quote.  This endpoint is only for the sandbox environment and will fail for production platforms/keys. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(SandboxApi::class.java)
val sandboxSendRequest : SandboxSendRequest =  // SandboxSendRequest | 

launch(Dispatchers.IO) {
    val result : OutgoingTransaction = webService.sandboxSend(sandboxSendRequest)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **sandboxSendRequest** | [**SandboxSendRequest**](SandboxSendRequest.md)|  | |

### Return type

[**OutgoingTransaction**](OutgoingTransaction.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

