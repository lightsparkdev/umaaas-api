# umaaas_api.TransactionsApi

All URIs are relative to *https://api.uma.money/umaaas/rc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve_pending_payment**](TransactionsApi.md#approve_pending_payment) | **POST** /transactions/{transactionId}/approve | Approve a pending incoming payment
[**get_transaction_by_id**](TransactionsApi.md#get_transaction_by_id) | **GET** /transactions/{transactionId} | Get transaction by ID
[**list_transactions**](TransactionsApi.md#list_transactions) | **GET** /transactions | List transactions
[**reject_pending_payment**](TransactionsApi.md#reject_pending_payment) | **POST** /transactions/{transactionId}/reject | Reject a pending incoming payment


# **approve_pending_payment**
> IncomingTransaction approve_pending_payment(transaction_id, approve_pending_payment_request=approve_pending_payment_request)

Approve a pending incoming payment

Approve a pending incoming payment that was previously acknowledged with a 202 response.
This endpoint allows platforms to asynchronously approve payments after async processing.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.approve_pending_payment_request import ApprovePendingPaymentRequest
from umaaas_api.models.incoming_transaction import IncomingTransaction
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.uma.money/umaaas/rc
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.uma.money/umaaas/rc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = umaaas_api.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.TransactionsApi(api_client)
    transaction_id = 'transaction_id_example' # str | Unique identifier of the transaction to approve
    approve_pending_payment_request = umaaas_api.ApprovePendingPaymentRequest() # ApprovePendingPaymentRequest |  (optional)

    try:
        # Approve a pending incoming payment
        api_response = api_instance.approve_pending_payment(transaction_id, approve_pending_payment_request=approve_pending_payment_request)
        print("The response of TransactionsApi->approve_pending_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->approve_pending_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| Unique identifier of the transaction to approve | 
 **approve_pending_payment_request** | [**ApprovePendingPaymentRequest**](ApprovePendingPaymentRequest.md)|  | [optional] 

### Return type

[**IncomingTransaction**](IncomingTransaction.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment approved successfully |  -  |
**400** | Bad request - Invalid parameters or payment cannot be approved |  -  |
**401** | Unauthorized |  -  |
**404** | Transaction not found |  -  |
**409** | Conflict - Payment is not in a pending state or has already been processed or timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transaction_by_id**
> GetTransactionById200Response get_transaction_by_id(transaction_id)

Get transaction by ID

Retrieve detailed information about a specific transaction

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.get_transaction_by_id200_response import GetTransactionById200Response
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.uma.money/umaaas/rc
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.uma.money/umaaas/rc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = umaaas_api.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.TransactionsApi(api_client)
    transaction_id = 'transaction_id_example' # str | Unique identifier of the transaction

    try:
        # Get transaction by ID
        api_response = api_instance.get_transaction_by_id(transaction_id)
        print("The response of TransactionsApi->get_transaction_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->get_transaction_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| Unique identifier of the transaction | 

### Return type

[**GetTransactionById200Response**](GetTransactionById200Response.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Unauthorized |  -  |
**404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_transactions**
> ListTransactions200Response list_transactions(user_id=user_id, platform_user_id=platform_user_id, uma_address=uma_address, sender_uma_address=sender_uma_address, receiver_uma_address=receiver_uma_address, status=status, type=type, reference=reference, start_date=start_date, end_date=end_date, limit=limit, cursor=cursor, sort_order=sort_order)

List transactions

Retrieve a paginated list of transactions with optional filtering.
The transactions can be filtered by user ID, platform user ID, UMA address, 
date range, status, and transaction type.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.list_transactions200_response import ListTransactions200Response
from umaaas_api.models.transaction_status import TransactionStatus
from umaaas_api.models.transaction_type import TransactionType
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.uma.money/umaaas/rc
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.uma.money/umaaas/rc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = umaaas_api.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.TransactionsApi(api_client)
    user_id = 'user_id_example' # str | Filter by system user ID (optional)
    platform_user_id = 'platform_user_id_example' # str | Filter by platform-specific user ID (optional)
    uma_address = 'uma_address_example' # str | Filter by UMA address (either sender or receiver) (optional)
    sender_uma_address = 'sender_uma_address_example' # str | Filter by sender UMA address (optional)
    receiver_uma_address = 'receiver_uma_address_example' # str | Filter by receiver UMA address (optional)
    status = umaaas_api.TransactionStatus() # TransactionStatus | Filter by transaction status (optional)
    type = umaaas_api.TransactionType() # TransactionType | Filter by transaction type (optional)
    reference = 'reference_example' # str | Filter by reference (optional)
    start_date = '2013-10-20T19:20:30+01:00' # datetime | Filter by start date (inclusive) in ISO 8601 format (optional)
    end_date = '2013-10-20T19:20:30+01:00' # datetime | Filter by end date (inclusive) in ISO 8601 format (optional)
    limit = 20 # int | Maximum number of results to return (default 20, max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (returned from previous request) (optional)
    sort_order = desc # str | Order to sort results in (optional) (default to desc)

    try:
        # List transactions
        api_response = api_instance.list_transactions(user_id=user_id, platform_user_id=platform_user_id, uma_address=uma_address, sender_uma_address=sender_uma_address, receiver_uma_address=receiver_uma_address, status=status, type=type, reference=reference, start_date=start_date, end_date=end_date, limit=limit, cursor=cursor, sort_order=sort_order)
        print("The response of TransactionsApi->list_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->list_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Filter by system user ID | [optional] 
 **platform_user_id** | **str**| Filter by platform-specific user ID | [optional] 
 **uma_address** | **str**| Filter by UMA address (either sender or receiver) | [optional] 
 **sender_uma_address** | **str**| Filter by sender UMA address | [optional] 
 **receiver_uma_address** | **str**| Filter by receiver UMA address | [optional] 
 **status** | [**TransactionStatus**](.md)| Filter by transaction status | [optional] 
 **type** | [**TransactionType**](.md)| Filter by transaction type | [optional] 
 **reference** | **str**| Filter by reference | [optional] 
 **start_date** | **datetime**| Filter by start date (inclusive) in ISO 8601 format | [optional] 
 **end_date** | **datetime**| Filter by end date (inclusive) in ISO 8601 format | [optional] 
 **limit** | **int**| Maximum number of results to return (default 20, max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (returned from previous request) | [optional] 
 **sort_order** | **str**| Order to sort results in | [optional] [default to desc]

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request - Invalid parameters |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reject_pending_payment**
> IncomingTransaction reject_pending_payment(transaction_id, reject_pending_payment_request=reject_pending_payment_request)

Reject a pending incoming payment

Reject a pending incoming payment that was previously acknowledged with a 202 response.
This endpoint allows platforms to asynchronously reject payments after additional processing.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.incoming_transaction import IncomingTransaction
from umaaas_api.models.reject_pending_payment_request import RejectPendingPaymentRequest
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.uma.money/umaaas/rc
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.uma.money/umaaas/rc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = umaaas_api.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.TransactionsApi(api_client)
    transaction_id = 'transaction_id_example' # str | Unique identifier of the transaction to reject
    reject_pending_payment_request = umaaas_api.RejectPendingPaymentRequest() # RejectPendingPaymentRequest |  (optional)

    try:
        # Reject a pending incoming payment
        api_response = api_instance.reject_pending_payment(transaction_id, reject_pending_payment_request=reject_pending_payment_request)
        print("The response of TransactionsApi->reject_pending_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->reject_pending_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| Unique identifier of the transaction to reject | 
 **reject_pending_payment_request** | [**RejectPendingPaymentRequest**](RejectPendingPaymentRequest.md)|  | [optional] 

### Return type

[**IncomingTransaction**](IncomingTransaction.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment rejected successfully |  -  |
**400** | Bad request - Invalid parameters or payment cannot be rejected |  -  |
**401** | Unauthorized |  -  |
**404** | Transaction not found |  -  |
**409** | Conflict - Payment is not in a pending state or has already been processed or timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

