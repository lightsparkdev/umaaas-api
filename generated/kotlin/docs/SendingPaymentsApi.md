# SendingPaymentsApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createQuote**](SendingPaymentsApi.md#createQuote) | **POST** quotes | Create a payment quote |
| [**getQuoteById**](SendingPaymentsApi.md#getQuoteById) | **GET** quotes/{quoteId} | Get quote by ID |
| [**lookupUma**](SendingPaymentsApi.md#lookupUma) | **GET** receiver/{receiverUmaAddress} | Look up a UMA address for payment |



Create a payment quote

Generate a quote for a payment from one UMA address to another. The quote locks in exchange rates and fees for a set period of time and provides payment instructions that can be used to execute the payment.  Depending on the &#x60;lockedCurrencySide&#x60; parameter, either the sending amount or  receiving amount will be locked.  The returned quote includes payment instructions with the banking details needed to execute the payment and fulfill the quote. These instructions must be followed precisely, including any reference codes provided. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(SendingPaymentsApi::class.java)
val createQuoteRequest : CreateQuoteRequest = {"lookupId":"LookupRequest:019542f5-b3e7-1d02-0000-000000000009","sendingCurrencyCode":"USD","receivingCurrencyCode":"EUR","lockedCurrencySide":"SENDING","lockedCurrencyAmount":1000,"description":"Payment for invoice #1234"} // CreateQuoteRequest | 

launch(Dispatchers.IO) {
    val result : Quote = webService.createQuote(createQuoteRequest)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createQuoteRequest** | [**CreateQuoteRequest**](CreateQuoteRequest.md)|  | |

### Return type

[**Quote**](Quote.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Get quote by ID

Retrieve a quote by its ID. If the quote has been settled, it will include  the transaction ID. This allows clients to track the full lifecycle of a payment from quote creation to settlement. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(SendingPaymentsApi::class.java)
val quoteId : kotlin.String = quoteId_example // kotlin.String | ID of the quote to retrieve

launch(Dispatchers.IO) {
    val result : Quote = webService.getQuoteById(quoteId)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **quoteId** | **kotlin.String**| ID of the quote to retrieve | |

### Return type

[**Quote**](Quote.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Look up a UMA address for payment

Lookup a receiving UMA address to determine supported currencies and exchange rates. This endpoint helps platforms determine what currencies they can send to a given UMA address. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(SendingPaymentsApi::class.java)
val receiverUmaAddress : kotlin.String = receiverUmaAddress_example // kotlin.String | UMA address of the intended recipient
val senderUmaAddress : kotlin.String = senderUmaAddress_example // kotlin.String | UMA address of the sender (optional if userId is provided)
val userId : kotlin.String = userId_example // kotlin.String | System ID of the sender (optional if senderUmaAddress is provided)

launch(Dispatchers.IO) {
    val result : LookupUma200Response = webService.lookupUma(receiverUmaAddress, senderUmaAddress, userId)
}
```

### Parameters
| **receiverUmaAddress** | **kotlin.String**| UMA address of the intended recipient | |
| **senderUmaAddress** | **kotlin.String**| UMA address of the sender (optional if userId is provided) | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **kotlin.String**| System ID of the sender (optional if senderUmaAddress is provided) | [optional] |

### Return type

[**LookupUma200Response**](LookupUma200Response.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

