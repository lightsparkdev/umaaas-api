# umaaas_api.APITokensApi

All URIs are relative to *https://api.lightspark.com/umaaas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_token**](APITokensApi.md#create_token) | **POST** /tokens | Create a new API token
[**delete_token_by_id**](APITokensApi.md#delete_token_by_id) | **DELETE** /tokens/{tokenId} | Delete API token by ID
[**get_token_by_id**](APITokensApi.md#get_token_by_id) | **GET** /tokens/{tokenId} | Get API token by ID
[**list_tokens**](APITokensApi.md#list_tokens) | **GET** /tokens | List tokens


# **create_token**
> ApiToken create_token(token_create)

Create a new API token

Create a new API token to access the UMAaaS APIs.

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.api_token import ApiToken
from umaaas_api.models.token_create import TokenCreate
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
    api_instance = umaaas_api.APITokensApi(api_client)
    token_create = umaaas_api.TokenCreate() # TokenCreate | 

    try:
        # Create a new API token
        api_response = api_instance.create_token(token_create)
        print("The response of APITokensApi->create_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APITokensApi->create_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_create** | [**TokenCreate**](TokenCreate.md)|  | 

### Return type

[**ApiToken**](ApiToken.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | API token created successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_token_by_id**
> delete_token_by_id(token_id)

Delete API token by ID

Delete an API token by their system-generated ID

### Example

* Basic Authentication (BasicAuth):

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

# Configure HTTP basic authorization: BasicAuth
configuration = umaaas_api.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with umaaas_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = umaaas_api.APITokensApi(api_client)
    token_id = 'token_id_example' # str | System-generated unique token identifier

    try:
        # Delete API token by ID
        api_instance.delete_token_by_id(token_id)
    except Exception as e:
        print("Exception when calling APITokensApi->delete_token_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **str**| System-generated unique token identifier | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | API token deleted successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Token not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_token_by_id**
> ApiToken get_token_by_id(token_id)

Get API token by ID

Retrieve an API token by their system-generated ID

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.api_token import ApiToken
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
    api_instance = umaaas_api.APITokensApi(api_client)
    token_id = 'token_id_example' # str | System-generated unique token identifier

    try:
        # Get API token by ID
        api_response = api_instance.get_token_by_id(token_id)
        print("The response of APITokensApi->get_token_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APITokensApi->get_token_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **str**| System-generated unique token identifier | 

### Return type

[**ApiToken**](ApiToken.md)

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
**404** | Token not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tokens**
> ListTokens200Response list_tokens(name=name, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before, limit=limit, cursor=cursor)

List tokens

Retrieve a list of API tokens with optional filtering parameters. Returns all tokens that match
the specified filters. If no filters are provided, returns all tokens (paginated).


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.list_tokens200_response import ListTokens200Response
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
    api_instance = umaaas_api.APITokensApi(api_client)
    name = 'name_example' # str | Filter by name of the token (optional)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Filter users created after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Filter users created before this timestamp (inclusive) (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Filter users updated after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Filter users updated before this timestamp (inclusive) (optional)
    limit = 20 # int | Maximum number of results to return (default 20, max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (returned from previous request) (optional)

    try:
        # List tokens
        api_response = api_instance.list_tokens(name=name, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before, limit=limit, cursor=cursor)
        print("The response of APITokensApi->list_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APITokensApi->list_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Filter by name of the token | [optional] 
 **created_after** | **datetime**| Filter users created after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Filter users created before this timestamp (inclusive) | [optional] 
 **updated_after** | **datetime**| Filter users updated after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Filter users updated before this timestamp (inclusive) | [optional] 
 **limit** | **int**| Maximum number of results to return (default 20, max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (returned from previous request) | [optional] 

### Return type

[**ListTokens200Response**](ListTokens200Response.md)

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

