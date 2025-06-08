# umaaas_api.WebhooksApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_test_webhook**](WebhooksApi.md#send_test_webhook) | **POST** /webhooks/test | Send a test webhook


# **send_test_webhook**
> TestWebhookResponse send_test_webhook()

Send a test webhook

Send a test webhook to the configured endpoint

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.test_webhook_response import TestWebhookResponse
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
    api_instance = umaaas_api.WebhooksApi(api_client)

    try:
        # Send a test webhook
        api_response = api_instance.send_test_webhook()
        print("The response of WebhooksApi->send_test_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->send_test_webhook: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TestWebhookResponse**](TestWebhookResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook delivered successfully |  -  |
**400** | Bad request - Webhook delivery failed |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

