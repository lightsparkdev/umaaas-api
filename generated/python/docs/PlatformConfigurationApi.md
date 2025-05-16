# umaaas_api.PlatformConfigurationApi

All URIs are relative to *https://api.lightspark.com/umaaas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_platform_config**](PlatformConfigurationApi.md#get_platform_config) | **GET** /config | Get platform configuration
[**update_platform_config**](PlatformConfigurationApi.md#update_platform_config) | **PATCH** /config | Update platform configuration


# **get_platform_config**
> PlatformConfig get_platform_config()

Get platform configuration

Retrieve the current platform configuration

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.platform_config import PlatformConfig
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
    api_instance = umaaas_api.PlatformConfigurationApi(api_client)

    try:
        # Get platform configuration
        api_response = api_instance.get_platform_config()
        print("The response of PlatformConfigurationApi->get_platform_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformConfigurationApi->get_platform_config: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PlatformConfig**](PlatformConfig.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_platform_config**
> PlatformConfig update_platform_config(update_platform_config_request)

Update platform configuration

Update the platform configuration settings

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.platform_config import PlatformConfig
from umaaas_api.models.update_platform_config_request import UpdatePlatformConfigRequest
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
    api_instance = umaaas_api.PlatformConfigurationApi(api_client)
    update_platform_config_request = {"umaDomain":"mycompany.com","webhookEndpoint":"https://api.mycompany.com/webhooks/uma","supportedCurrencies":[{"currencyCode":"USD","minAmount":100,"maxAmount":1000000,"requiredCounterpartyFields":[{"name":"FULL_NAME","mandatory":true},{"name":"NATIONALITY","mandatory":true},{"name":"DATE_OF_BIRTH","mandatory":true}]}]} # UpdatePlatformConfigRequest | 

    try:
        # Update platform configuration
        api_response = api_instance.update_platform_config(update_platform_config_request)
        print("The response of PlatformConfigurationApi->update_platform_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformConfigurationApi->update_platform_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_platform_config_request** | [**UpdatePlatformConfigRequest**](UpdatePlatformConfigRequest.md)|  | 

### Return type

[**PlatformConfig**](PlatformConfig.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Configuration updated successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

