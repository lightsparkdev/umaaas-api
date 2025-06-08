# umaaas_api.SandboxApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sandbox_receive**](SandboxApi.md#sandbox_receive) | **POST** /sandbox/receive | Simulate payment send to test receiving a payment
[**sandbox_send**](SandboxApi.md#sandbox_send) | **POST** /sandbox/send | Simulate sending funds


# **sandbox_receive**
> IncomingTransaction sandbox_receive(sandbox_receive_request)

Simulate payment send to test receiving a payment

Simulate sending payment from an sandbox uma address to a platform user to test payment receive.
This endpoint is only for the sandbox environment and will fail for production platforms/keys.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.incoming_transaction import IncomingTransaction
from umaaas_api.models.sandbox_receive_request import SandboxReceiveRequest
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.uma.money/umaaas/2025-05-15
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.uma.money/umaaas/2025-05-15"
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
    api_instance = umaaas_api.SandboxApi(api_client)
    sandbox_receive_request = umaaas_api.SandboxReceiveRequest() # SandboxReceiveRequest | 

    try:
        # Simulate payment send to test receiving a payment
        api_response = api_instance.sandbox_receive(sandbox_receive_request)
        print("The response of SandboxApi->sandbox_receive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->sandbox_receive: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandbox_receive_request** | [**SandboxReceiveRequest**](SandboxReceiveRequest.md)|  | 

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
**200** | Payment triggered successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden - request was made with a production platform token |  -  |
**404** | Sender or receiver not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sandbox_send**
> OutgoingTransaction sandbox_send(sandbox_send_request)

Simulate sending funds

Simulate sending funds to the bank account as instructed in the quote. 
This endpoint is only for the sandbox environment and will fail for production platforms/keys.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.outgoing_transaction import OutgoingTransaction
from umaaas_api.models.sandbox_send_request import SandboxSendRequest
from umaaas_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.uma.money/umaaas/2025-05-15
# See configuration.py for a list of all supported configuration parameters.
configuration = umaaas_api.Configuration(
    host = "https://api.uma.money/umaaas/2025-05-15"
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
    api_instance = umaaas_api.SandboxApi(api_client)
    sandbox_send_request = umaaas_api.SandboxSendRequest() # SandboxSendRequest | 

    try:
        # Simulate sending funds
        api_response = api_instance.sandbox_send(sandbox_send_request)
        print("The response of SandboxApi->sandbox_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->sandbox_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandbox_send_request** | [**SandboxSendRequest**](SandboxSendRequest.md)|  | 

### Return type

[**OutgoingTransaction**](OutgoingTransaction.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Funds received successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden - request was made with a production platform token |  -  |
**404** | Reference not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

