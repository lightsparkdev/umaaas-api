# umaaas_api.SendingPaymentsApi

All URIs are relative to *https://api.lightspark.com/umaaas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_quote**](SendingPaymentsApi.md#create_quote) | **POST** /quotes | Create a payment quote
[**get_payment_status**](SendingPaymentsApi.md#get_payment_status) | **GET** /payments/status/{quoteId} | Check payment status for a quote
[**get_quote_by_id**](SendingPaymentsApi.md#get_quote_by_id) | **GET** /quotes/{quoteId} | Get quote by ID
[**lookup_uma**](SendingPaymentsApi.md#lookup_uma) | **GET** /receiver/{receiverUmaAddress} | Look up a UMA address for payment


# **create_quote**
> Quote create_quote(create_quote_request)

Create a payment quote

Generate a quote for a payment from one UMA address to another.
The quote locks in exchange rates and fees for a set period of time and provides
payment instructions that can be used to execute the payment.

Depending on the `lockedCurrencySide` parameter, either the sending amount or 
receiving amount will be locked.

The returned quote includes payment instructions with the banking details
needed to execute the payment and fulfill the quote. These instructions
must be followed precisely, including any reference codes provided.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.create_quote_request import CreateQuoteRequest
from umaaas_api.models.quote import Quote
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lightspark.com/umaaas/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.lightspark.com/umaaas/v1"
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
    api_instance = umaaas_api.SendingPaymentsApi(api_client)
    create_quote_request = {"receiverUmaAddress":"$receiver@uma.domain","senderUmaAddress":"$sender@uma.domain","sendingCurrencyCode":"USD","receivingCurrencyCode":"EUR","lockedCurrencySide":"SENDING","lockedCurrencyAmount":1000,"description":"Payment for invoice #1234"} # CreateQuoteRequest | 

    try:
        # Create a payment quote
        api_response = api_instance.create_quote(create_quote_request)
        print("The response of SendingPaymentsApi->create_quote:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingPaymentsApi->create_quote: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_quote_request** | [**CreateQuoteRequest**](CreateQuoteRequest.md)|  | 

### Return type

[**Quote**](Quote.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Quote created successfully. The response includes payment instructions that the client can use to execute the payment through their banking provider.  |  -  |
**400** | Bad request - Missing or invalid parameters |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable Entity - Additional counterparty information required, or the payment cannot be completed for another reason.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payment_status**
> GetPaymentStatus200Response get_payment_status(quote_id, reference=reference)

Check payment status for a quote

Check the status of a payment associated with a previously created quote.
This allows clients to verify if a payment they've initiated using the 
payment instructions has been received and processed.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.get_payment_status200_response import GetPaymentStatus200Response
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lightspark.com/umaaas/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.lightspark.com/umaaas/v1"
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
    api_instance = umaaas_api.SendingPaymentsApi(api_client)
    quote_id = 'quote_id_example' # str | ID of the quote to check payment status for
    reference = 'reference_example' # str | Payment reference code (optional, but helps with verification) (optional)

    try:
        # Check payment status for a quote
        api_response = api_instance.get_payment_status(quote_id, reference=reference)
        print("The response of SendingPaymentsApi->get_payment_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingPaymentsApi->get_payment_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quote_id** | **str**| ID of the quote to check payment status for | 
 **reference** | **str**| Payment reference code (optional, but helps with verification) | [optional] 

### Return type

[**GetPaymentStatus200Response**](GetPaymentStatus200Response.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment status retrieved successfully |  -  |
**401** | Unauthorized |  -  |
**404** | Quote not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_quote_by_id**
> Quote get_quote_by_id(quote_id)

Get quote by ID

Retrieve a quote by its ID. If the quote has been settled, it will include 
the transaction ID. This allows clients to track the full lifecycle of a payment
from quote creation to settlement.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.quote import Quote
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lightspark.com/umaaas/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.lightspark.com/umaaas/v1"
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
    api_instance = umaaas_api.SendingPaymentsApi(api_client)
    quote_id = 'quote_id_example' # str | ID of the quote to retrieve

    try:
        # Get quote by ID
        api_response = api_instance.get_quote_by_id(quote_id)
        print("The response of SendingPaymentsApi->get_quote_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingPaymentsApi->get_quote_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quote_id** | **str**| ID of the quote to retrieve | 

### Return type

[**Quote**](Quote.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote retrieved successfully |  -  |
**401** | Unauthorized |  -  |
**404** | Quote not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookup_uma**
> LookupUma200Response lookup_uma(receiver_uma_address, sending_uma_address=sending_uma_address, user_id=user_id)

Look up a UMA address for payment

Lookup a receiving UMA address to determine supported currencies and exchange rates.
This endpoint helps platforms determine what currencies they can send to a given UMA address.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.lookup_uma200_response import LookupUma200Response
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lightspark.com/umaaas/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.lightspark.com/umaaas/v1"
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
    api_instance = umaaas_api.SendingPaymentsApi(api_client)
    receiver_uma_address = 'receiver_uma_address_example' # str | UMA address of the intended recipient
    sending_uma_address = 'sending_uma_address_example' # str | UMA address of the sender (optional if userId is provided) (optional)
    user_id = 'user_id_example' # str | System ID of the sender (optional if sendingUmaAddress is provided) (optional)

    try:
        # Look up a UMA address for payment
        api_response = api_instance.lookup_uma(receiver_uma_address, sending_uma_address=sending_uma_address, user_id=user_id)
        print("The response of SendingPaymentsApi->lookup_uma:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingPaymentsApi->lookup_uma: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receiver_uma_address** | **str**| UMA address of the intended recipient | 
 **sending_uma_address** | **str**| UMA address of the sender (optional if userId is provided) | [optional] 
 **user_id** | **str**| System ID of the sender (optional if sendingUmaAddress is provided) | [optional] 

### Return type

[**LookupUma200Response**](LookupUma200Response.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful lookup |  -  |
**400** | Bad request - Missing or invalid parameters |  -  |
**401** | Unauthorized |  -  |
**404** | UMA address not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

