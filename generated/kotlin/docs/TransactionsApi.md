# TransactionsApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**approvePendingPayment**](TransactionsApi.md#approvePendingPayment) | **POST** transactions/{transactionId}/approve | Approve a pending incoming payment |
| [**getTransactionById**](TransactionsApi.md#getTransactionById) | **GET** transactions/{transactionId} | Get transaction by ID |
| [**listTransactions**](TransactionsApi.md#listTransactions) | **GET** transactions | List transactions |
| [**rejectPendingPayment**](TransactionsApi.md#rejectPendingPayment) | **POST** transactions/{transactionId}/reject | Reject a pending incoming payment |



Approve a pending incoming payment

Approve a pending incoming payment that was previously acknowledged with a 202 response. This endpoint allows platforms to asynchronously approve payments after async processing. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(TransactionsApi::class.java)
val transactionId : kotlin.String = transactionId_example // kotlin.String | Unique identifier of the transaction to approve
val approvePendingPaymentRequest : ApprovePendingPaymentRequest =  // ApprovePendingPaymentRequest | 

launch(Dispatchers.IO) {
    val result : IncomingTransaction = webService.approvePendingPayment(transactionId, approvePendingPaymentRequest)
}
```

### Parameters
| **transactionId** | **kotlin.String**| Unique identifier of the transaction to approve | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **approvePendingPaymentRequest** | [**ApprovePendingPaymentRequest**](ApprovePendingPaymentRequest.md)|  | [optional] |

### Return type

[**IncomingTransaction**](IncomingTransaction.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Get transaction by ID

Retrieve detailed information about a specific transaction

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(TransactionsApi::class.java)
val transactionId : kotlin.String = transactionId_example // kotlin.String | Unique identifier of the transaction

launch(Dispatchers.IO) {
    val result : Transaction = webService.getTransactionById(transactionId)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **transactionId** | **kotlin.String**| Unique identifier of the transaction | |

### Return type

[**Transaction**](Transaction.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


List transactions

Retrieve a paginated list of transactions with optional filtering. The transactions can be filtered by user ID, platform user ID, UMA address,  date range, status, and transaction type. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(TransactionsApi::class.java)
val userId : kotlin.String = userId_example // kotlin.String | Filter by system user ID
val platformUserId : kotlin.String = platformUserId_example // kotlin.String | Filter by platform-specific user ID
val umaAddress : kotlin.String = umaAddress_example // kotlin.String | Filter by UMA address (either sender or receiver)
val senderUmaAddress : kotlin.String = senderUmaAddress_example // kotlin.String | Filter by sender UMA address
val receiverUmaAddress : kotlin.String = receiverUmaAddress_example // kotlin.String | Filter by receiver UMA address
val status : TransactionStatus =  // TransactionStatus | Filter by transaction status
val type : TransactionType =  // TransactionType | Filter by transaction type
val reference : kotlin.String = reference_example // kotlin.String | Filter by reference
val startDate : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter by start date (inclusive) in ISO 8601 format
val endDate : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | Filter by end date (inclusive) in ISO 8601 format
val limit : kotlin.Int = 56 // kotlin.Int | Maximum number of results to return (default 20, max 100)
val cursor : kotlin.String = cursor_example // kotlin.String | Cursor for pagination (returned from previous request)
val sortOrder : kotlin.String = sortOrder_example // kotlin.String | Order to sort results in

launch(Dispatchers.IO) {
    val result : ListTransactions200Response = webService.listTransactions(userId, platformUserId, umaAddress, senderUmaAddress, receiverUmaAddress, status, type, reference, startDate, endDate, limit, cursor, sortOrder)
}
```

### Parameters
| **userId** | **kotlin.String**| Filter by system user ID | [optional] |
| **platformUserId** | **kotlin.String**| Filter by platform-specific user ID | [optional] |
| **umaAddress** | **kotlin.String**| Filter by UMA address (either sender or receiver) | [optional] |
| **senderUmaAddress** | **kotlin.String**| Filter by sender UMA address | [optional] |
| **receiverUmaAddress** | **kotlin.String**| Filter by receiver UMA address | [optional] |
| **status** | [**TransactionStatus**](.md)| Filter by transaction status | [optional] [enum: CREATED, PENDING, PROCESSING, COMPLETED, REJECTED, FAILED, REFUNDED] |
| **type** | [**TransactionType**](.md)| Filter by transaction type | [optional] [enum: INCOMING, OUTGOING] |
| **reference** | **kotlin.String**| Filter by reference | [optional] |
| **startDate** | **java.time.OffsetDateTime**| Filter by start date (inclusive) in ISO 8601 format | [optional] |
| **endDate** | **java.time.OffsetDateTime**| Filter by end date (inclusive) in ISO 8601 format | [optional] |
| **limit** | **kotlin.Int**| Maximum number of results to return (default 20, max 100) | [optional] [default to 20] |
| **cursor** | **kotlin.String**| Cursor for pagination (returned from previous request) | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **sortOrder** | **kotlin.String**| Order to sort results in | [optional] [default to desc] [enum: asc, desc] |

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Reject a pending incoming payment

Reject a pending incoming payment that was previously acknowledged with a 202 response. This endpoint allows platforms to asynchronously reject payments after additional processing. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(TransactionsApi::class.java)
val transactionId : kotlin.String = transactionId_example // kotlin.String | Unique identifier of the transaction to reject
val rejectPendingPaymentRequest : RejectPendingPaymentRequest =  // RejectPendingPaymentRequest | 

launch(Dispatchers.IO) {
    val result : IncomingTransaction = webService.rejectPendingPayment(transactionId, rejectPendingPaymentRequest)
}
```

### Parameters
| **transactionId** | **kotlin.String**| Unique identifier of the transaction to reject | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **rejectPendingPaymentRequest** | [**RejectPendingPaymentRequest**](RejectPendingPaymentRequest.md)|  | [optional] |

### Return type

[**IncomingTransaction**](IncomingTransaction.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

