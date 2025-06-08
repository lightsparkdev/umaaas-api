# WebhooksApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**sendTestWebhook**](WebhooksApi.md#sendTestWebhook) | **POST** webhooks/test | Send a test webhook |



Send a test webhook

Send a test webhook to the configured endpoint

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(WebhooksApi::class.java)

launch(Dispatchers.IO) {
    val result : TestWebhookResponse = webService.sendTestWebhook()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TestWebhookResponse**](TestWebhookResponse.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

