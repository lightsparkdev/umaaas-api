# umaaas_api.AvailableUMAProvidersApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_available_uma_providers**](AvailableUMAProvidersApi.md#get_available_uma_providers) | **GET** /uma-providers | This endpoint provides a list of counterparties that are available.


# **get_available_uma_providers**
> GetAvailableUmaProviders200Response get_available_uma_providers(country_code=country_code, currency_code=currency_code, has_blocked_providers=has_blocked_providers, limit=limit, cursor=cursor, sort_order=sort_order)

This endpoint provides a list of counterparties that are available.

This endpoint provides a list of counterparties that are available.

The response includes basic information about each provider, such as its UMA address, name, and supported currencies.
This can be used to determine which providers are available for sending or receiving payments.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.get_available_uma_providers200_response import GetAvailableUmaProviders200Response
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
    api_instance = umaaas_api.AvailableUMAProvidersApi(api_client)
    country_code = 'US' # str | The alpha-2 representation of a country, as defined by the ISO 3166-1 standard. (optional)
    currency_code = 'USD' # str | The ISO 4217 currency code to filter providers by supported currency. (optional)
    has_blocked_providers = True # bool | Whether to include providers which are not on your allowlist in the response. By default the response will include blocked providers. (optional)
    limit = 20 # int | Maximum number of results to return (default 20, max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (returned from previous request) (optional)
    sort_order = desc # str | Order to sort results in (optional) (default to desc)

    try:
        # This endpoint provides a list of counterparties that are available.
        api_response = api_instance.get_available_uma_providers(country_code=country_code, currency_code=currency_code, has_blocked_providers=has_blocked_providers, limit=limit, cursor=cursor, sort_order=sort_order)
        print("The response of AvailableUMAProvidersApi->get_available_uma_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailableUMAProvidersApi->get_available_uma_providers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| The alpha-2 representation of a country, as defined by the ISO 3166-1 standard. | [optional] 
 **currency_code** | **str**| The ISO 4217 currency code to filter providers by supported currency. | [optional] 
 **has_blocked_providers** | **bool**| Whether to include providers which are not on your allowlist in the response. By default the response will include blocked providers. | [optional] 
 **limit** | **int**| Maximum number of results to return (default 20, max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (returned from previous request) | [optional] 
 **sort_order** | **str**| Order to sort results in | [optional] [default to desc]

### Return type

[**GetAvailableUmaProviders200Response**](GetAvailableUmaProviders200Response.md)

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

