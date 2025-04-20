# umaaas_api.WebhooksApi

All URIs are relative to *https://api.lightspark.com/umaaas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_upload_webhook**](WebhooksApi.md#bulk_upload_webhook) | **POST** /bulk-upload | Bulk upload status webhook
[**incoming_payment_webhook**](WebhooksApi.md#incoming_payment_webhook) | **POST** /incoming-payment | Incoming payment webhook and approval mechanism
[**outgoing_payment_webhook**](WebhooksApi.md#outgoing_payment_webhook) | **POST** /outgoing-payment | Outgoing payment status webhook
[**test_webhook**](WebhooksApi.md#test_webhook) | **POST** /test-webhook | Test webhook for integration verification


# **bulk_upload_webhook**
> bulk_upload_webhook(bulk_upload_webhook_request)

Bulk upload status webhook

Webhook that is called when a bulk user upload job completes or fails.
This endpoint should be implemented by clients of the UMAaas API.

### Authentication
The webhook includes a signature in the `X-UMAaas-Signature` header that allows you to verify that the webhook was sent by UMAaas.
To verify the signature:
1. Get the webhook secret provided to you during integration
2. Create an HMAC-SHA256 hash of the entire request body (as a raw string) using the webhook secret as the key
3. Encode the hash in hexadecimal format
4. Compare this value to the signature in the `X-UMAaas-Signature` header

If the values match, the webhook is authentic. If not, it should be rejected.

This webhook is sent when a bulk upload job completes or fails, providing detailed information about the results.


### Example

* Api Key Authentication (WebhookSignature):

```python
import umaaas_api
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

# Configure API key authorization: WebhookSignature
configuration.api_key['WebhookSignature'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['WebhookSignature'] = 'Bearer'

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.WebhooksApi(api_client)
    bulk_upload_webhook_request = {"jobId":"job_123456789","status":"SUCCESS","timestamp":"2023-08-15T14:32:00Z","webhookId":"Webhook:019542f5-b3e7-1d02-0000-000000000008","type":"BULK_UPLOAD","progress":{"total":5000,"processed":5000,"successful":5000,"failed":0},"errors":[]} # BulkUploadWebhookRequest | 

    try:
        # Bulk upload status webhook
        api_instance.bulk_upload_webhook(bulk_upload_webhook_request)
    except Exception as e:
        print("Exception when calling WebhooksApi->bulk_upload_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_upload_webhook_request** | [**BulkUploadWebhookRequest**](BulkUploadWebhookRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[WebhookSignature](../README.md#WebhookSignature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook received successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized - Signature validation failed |  -  |
**409** | Conflict - Webhook has already been processed (duplicate webhookId) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **incoming_payment_webhook**
> incoming_payment_webhook(incoming_payment_webhook_request)

Incoming payment webhook and approval mechanism

Webhook that is called when an incoming payment is received by a user's UMA address.
This endpoint should be implemented by clients of the UMAaas API.

### Authentication
The webhook includes a signature in the `X-UMAaas-Signature` header that allows you to verify that the webhook was sent by UMAaas.
To verify the signature:
1. Get the webhook secret provided to you during integration
2. Create an HMAC-SHA256 hash of the entire request body (as a raw string) using the webhook secret as the key
3. Encode the hash in hexadecimal format
4. Compare this value to the signature in the `X-UMAaas-Signature` header

If the values match, the webhook is authentic. If not, it should be rejected.

### Payment Approval Flow
When a transaction has `status: "PENDING"`, this webhook serves as an approval mechanism:

1. The client should check the `counterpartyInformation` against their requirements
2. To APPROVE the payment, return a 200 OK response
3. To REJECT the payment, return a 403 Forbidden response with an Error object
4. To request more information, return a 422 Unprocessable Entity with specific missing fields

The UMAaas system will proceed or cancel the payment based on your response.

For transactions with other statuses (COMPLETED, FAILED, REFUNDED), this webhook is purely informational.


### Example

* Api Key Authentication (WebhookSignature):

```python
import umaaas_api
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

# Configure API key authorization: WebhookSignature
configuration.api_key['WebhookSignature'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['WebhookSignature'] = 'Bearer'

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.WebhooksApi(api_client)
    incoming_payment_webhook_request = {"transaction":{"transactionId":"Transaction:019542f5-b3e7-1d02-0000-000000000005","status":"PENDING","type":"INCOMING","senderUmaAddress":"$sender@external.domain","receiverUmaAddress":"$recipient@uma.domain","receivedAmount":{"amount":50000,"currency":{"code":"USD","name":"United States Dollar","symbol":"$","decimals":2}},"userId":"User:019542f5-b3e7-1d02-0000-000000000001","platformUserId":"18d3e5f7b4a9c2","counterpartyInformation":{"fullName":"John Sender","dateOfBirth":"1985-06-15"}},"timestamp":"2023-08-15T14:32:00Z","webhookId":"Webhook:019542f5-b3e7-1d02-0000-000000000007","type":"INCOMING_PAYMENT"} # IncomingPaymentWebhookRequest | 

    try:
        # Incoming payment webhook and approval mechanism
        api_instance.incoming_payment_webhook(incoming_payment_webhook_request)
    except Exception as e:
        print("Exception when calling WebhooksApi->incoming_payment_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incoming_payment_webhook_request** | [**IncomingPaymentWebhookRequest**](IncomingPaymentWebhookRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[WebhookSignature](../README.md#WebhookSignature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook received successfully.  For PENDING transactions, this indicates approval to proceed with the payment.  |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized - Signature validation failed |  -  |
**403** | Forbidden - Payment rejected by the client. Only applicable for PENDING transactions.  |  -  |
**409** | Conflict - Webhook has already been processed (duplicate webhookId) |  -  |
**422** | Unprocessable Entity - Additional counterparty information required. Only applicable for PENDING transactions.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **outgoing_payment_webhook**
> outgoing_payment_webhook(outgoing_payment_webhook_request)

Outgoing payment status webhook

Webhook that is called when an outgoing payment's status changes.
This endpoint should be implemented by clients of the UMAaas API.

### Authentication
The webhook includes a signature in the `X-UMAaas-Signature` header that allows you to verify that the webhook was sent by UMAaas.
To verify the signature:
1. Get the webhook secret provided to you during integration
2. Create an HMAC-SHA256 hash of the entire request body (as a raw string) using the webhook secret as the key
3. Encode the hash in hexadecimal format
4. Compare this value to the signature in the `X-UMAaas-Signature` header

If the values match, the webhook is authentic. If not, it should be rejected.

This webhook is informational only and is sent when an outgoing payment completes successfully or fails.


### Example

* Api Key Authentication (WebhookSignature):

```python
import umaaas_api
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

# Configure API key authorization: WebhookSignature
configuration.api_key['WebhookSignature'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['WebhookSignature'] = 'Bearer'

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.WebhooksApi(api_client)
    outgoing_payment_webhook_request = {"transaction":{"transactionId":"Transaction:019542f5-b3e7-1d02-0000-000000000005","status":"COMPLETED","type":"OUTGOING","senderUmaAddress":"$sender@uma.domain","receiverUmaAddress":"$recipient@external.domain","sentAmount":{"amount":10550,"currency":{"code":"USD","name":"United States Dollar","symbol":"$","decimals":2}},"receivedAmount":{"amount":9706,"currency":{"code":"EUR","name":"Euro","symbol":"€","decimals":2}},"userId":"User:019542f5-b3e7-1d02-0000-000000000001","platformUserId":"18d3e5f7b4a9c2","settlementTime":"2023-08-15T14:30:00Z","createdAt":"2023-08-15T14:25:18Z","description":"Payment for invoice #1234","exchangeRate":0.92,"quoteId":"Quote:019542f5-b3e7-1d02-0000-000000000006"},"timestamp":"2023-08-15T14:32:00Z","webhookId":"Webhook:019542f5-b3e7-1d02-0000-000000000007","type":"OUTGOING_PAYMENT"} # OutgoingPaymentWebhookRequest | 

    try:
        # Outgoing payment status webhook
        api_instance.outgoing_payment_webhook(outgoing_payment_webhook_request)
    except Exception as e:
        print("Exception when calling WebhooksApi->outgoing_payment_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outgoing_payment_webhook_request** | [**OutgoingPaymentWebhookRequest**](OutgoingPaymentWebhookRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[WebhookSignature](../README.md#WebhookSignature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook received successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized - Signature validation failed |  -  |
**409** | Conflict - Webhook has already been processed (duplicate webhookId) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_webhook**
> test_webhook(test_webhook_request)

Test webhook for integration verification

Webhook that is sent once to verify your webhook endpoint is correctly set up.
This is sent when you configure or update your platform settings with a webhook URL.

### Authentication
The webhook includes a signature in the `X-UMAaaS-Signature` header that allows you to verify that the webhook was sent by UMAaaS.
To verify the signature:
1. Get the webhook secret provided to you during integration
2. Create an HMAC-SHA256 hash of the entire request body (as a raw string) using the webhook secret as the key
3. Encode the hash in hexadecimal format
4. Compare this value to the signature in the `X-UMAaaS-Signature` header

If the values match, the webhook is authentic. If not, it should be rejected.

This webhook is purely for testing your endpoint integration and signature verification.


### Example

* Api Key Authentication (WebhookSignature):

```python
import umaaas_api
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

# Configure API key authorization: WebhookSignature
configuration.api_key['WebhookSignature'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['WebhookSignature'] = 'Bearer'

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.WebhooksApi(api_client)
    test_webhook_request = {"timestamp":"2023-08-15T14:32:00Z","webhookId":"Webhook:019542f5-b3e7-1d02-0000-000000000001","type":"TEST"} # TestWebhookRequest | 

    try:
        # Test webhook for integration verification
        api_instance.test_webhook(test_webhook_request)
    except Exception as e:
        print("Exception when calling WebhooksApi->test_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_webhook_request** | [**TestWebhookRequest**](TestWebhookRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[WebhookSignature](../README.md#WebhookSignature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook received successfully. This confirms your webhook endpoint is properly configured. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized - Signature validation failed |  -  |
**409** | Conflict - Webhook has already been processed (duplicate webhookId) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

