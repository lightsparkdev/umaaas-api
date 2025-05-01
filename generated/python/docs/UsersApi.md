# umaaas_api.UsersApi

All URIs are relative to *https://api.lightspark.com/umaaas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user**](UsersApi.md#create_user) | **POST** /users | Add a new user
[**delete_user_by_id**](UsersApi.md#delete_user_by_id) | **DELETE** /users/{userId} | Delete user by ID
[**get_bulk_user_import_job**](UsersApi.md#get_bulk_user_import_job) | **GET** /users/bulk/jobs/{jobId} | Get bulk import job status
[**get_user_by_id**](UsersApi.md#get_user_by_id) | **GET** /users/{userId} | Get user by ID
[**list_users**](UsersApi.md#list_users) | **GET** /users | List users
[**update_user_by_id**](UsersApi.md#update_user_by_id) | **PATCH** /users/{userId} | Update user by ID
[**upload_users_csv**](UsersApi.md#upload_users_csv) | **POST** /users/bulk/csv | Upload users via CSV file


# **create_user**
> ListUsers200ResponseDataInner create_user(list_users200_response_data_inner)

Add a new user

Register a new user in the system with UMA address and bank account information

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.list_users200_response_data_inner import ListUsers200ResponseDataInner
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
    api_instance = umaaas_api.UsersApi(api_client)
    list_users200_response_data_inner = {"umaAddress":"$jane.doe@uma.domain.com","platformUserId":"7b3c5a89d2f1e0","userType":"INDIVIDUAL","fullName":"Jane Doe","dateOfBirth":"1992-03-25","address":{"line1":"123 Pine Street","line2":"Unit 501","city":"Seattle","state":"WA","postalCode":"98101","country":"US"},"bankAccountInfo":{"accountType":"US_ACCOUNT","accountNumber":"12345678901","routingNumber":"123456789","accountCategory":"CHECKING","bankName":"Chase Bank","platformAccountId":"chase_primary_1234"}} # ListUsers200ResponseDataInner | 

    try:
        # Add a new user
        api_response = api_instance.create_user(list_users200_response_data_inner)
        print("The response of UsersApi->create_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->create_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_users200_response_data_inner** | [**ListUsers200ResponseDataInner**](ListUsers200ResponseDataInner.md)|  | 

### Return type

[**ListUsers200ResponseDataInner**](ListUsers200ResponseDataInner.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User created successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**409** | Conflict - User with the UMA address already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_by_id**
> ListUsers200ResponseDataInner delete_user_by_id(user_id)

Delete user by ID

Delete a user by their system-generated ID

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.list_users200_response_data_inner import ListUsers200ResponseDataInner
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
    api_instance = umaaas_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | System-generated unique user identifier

    try:
        # Delete user by ID
        api_response = api_instance.delete_user_by_id(user_id)
        print("The response of UsersApi->delete_user_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->delete_user_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| System-generated unique user identifier | 

### Return type

[**ListUsers200ResponseDataInner**](ListUsers200ResponseDataInner.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User deleted successfully |  -  |
**401** | Unauthorized |  -  |
**404** | User not found |  -  |
**410** | User deleted already |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_bulk_user_import_job**
> GetBulkUserImportJob200Response get_bulk_user_import_job(job_id)

Get bulk import job status

Retrieve the current status and results of a bulk user import job. This endpoint can be used
to track the progress of both CSV uploads.

The response includes:
- Overall job status
- Progress statistics
- Detailed error information for failed entries
- Completion timestamp when finished


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.get_bulk_user_import_job200_response import GetBulkUserImportJob200Response
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
    api_instance = umaaas_api.UsersApi(api_client)
    job_id = 'job_id_example' # str | ID of the bulk import job to retrieve

    try:
        # Get bulk import job status
        api_response = api_instance.get_bulk_user_import_job(job_id)
        print("The response of UsersApi->get_bulk_user_import_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_bulk_user_import_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **str**| ID of the bulk import job to retrieve | 

### Return type

[**GetBulkUserImportJob200Response**](GetBulkUserImportJob200Response.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job status retrieved successfully |  -  |
**401** | Unauthorized |  -  |
**404** | Job not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_by_id**
> ListUsers200ResponseDataInner get_user_by_id(user_id)

Get user by ID

Retrieve a user by their system-generated ID

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.list_users200_response_data_inner import ListUsers200ResponseDataInner
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
    api_instance = umaaas_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | System-generated unique user identifier

    try:
        # Get user by ID
        api_response = api_instance.get_user_by_id(user_id)
        print("The response of UsersApi->get_user_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| System-generated unique user identifier | 

### Return type

[**ListUsers200ResponseDataInner**](ListUsers200ResponseDataInner.md)

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
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_users**
> ListUsers200Response list_users(platform_user_id=platform_user_id, uma_address=uma_address, user_type=user_type, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before, limit=limit, cursor=cursor)

List users

Retrieve a list of users with optional filtering parameters. Returns all users that match
the specified filters. If no filters are provided, returns all users (paginated).


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.list_users200_response import ListUsers200Response
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
    api_instance = umaaas_api.UsersApi(api_client)
    platform_user_id = 'platform_user_id_example' # str | Filter by platform-specific user identifier (optional)
    uma_address = 'uma_address_example' # str | Filter by UMA address (optional)
    user_type = 'user_type_example' # str | Filter by user type (optional)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Filter users created after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Filter users created before this timestamp (inclusive) (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Filter users updated after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Filter users updated before this timestamp (inclusive) (optional)
    limit = 20 # int | Maximum number of results to return (default 20, max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (returned from previous request) (optional)

    try:
        # List users
        api_response = api_instance.list_users(platform_user_id=platform_user_id, uma_address=uma_address, user_type=user_type, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before, limit=limit, cursor=cursor)
        print("The response of UsersApi->list_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platform_user_id** | **str**| Filter by platform-specific user identifier | [optional] 
 **uma_address** | **str**| Filter by UMA address | [optional] 
 **user_type** | **str**| Filter by user type | [optional] 
 **created_after** | **datetime**| Filter users created after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Filter users created before this timestamp (inclusive) | [optional] 
 **updated_after** | **datetime**| Filter users updated after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Filter users updated before this timestamp (inclusive) | [optional] 
 **limit** | **int**| Maximum number of results to return (default 20, max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (returned from previous request) | [optional] 

### Return type

[**ListUsers200Response**](ListUsers200Response.md)

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

# **update_user_by_id**
> ListUsers200ResponseDataInner update_user_by_id(user_id, update_user_by_id_request)

Update user by ID

Update a user's metadata by their system-generated ID

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.list_users200_response_data_inner import ListUsers200ResponseDataInner
from umaaas_api.models.update_user_by_id_request import UpdateUserByIdRequest
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
    api_instance = umaaas_api.UsersApi(api_client)
    user_id = 'user_id_example' # str | System-generated unique user identifier
    update_user_by_id_request = {"userType":"INDIVIDUAL","fullName":"John Smith","dateOfBirth":"1985-06-15","address":{"line1":"456 Market St","city":"San Francisco","state":"CA","postalCode":"94103","country":"US"},"bankAccountInfo":{"accountType":"US_ACCOUNT","accountNumber":"11122233344","routingNumber":"111222333","accountCategory":"CHECKING","bankName":"Wells Fargo","platformAccountId":"wf_checking_9012"}} # UpdateUserByIdRequest | 

    try:
        # Update user by ID
        api_response = api_instance.update_user_by_id(user_id, update_user_by_id_request)
        print("The response of UsersApi->update_user_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->update_user_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| System-generated unique user identifier | 
 **update_user_by_id_request** | [**UpdateUserByIdRequest**](UpdateUserByIdRequest.md)|  | 

### Return type

[**ListUsers200ResponseDataInner**](ListUsers200ResponseDataInner.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User updated successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_users_csv**
> UploadUsersCsv202Response upload_users_csv(file, webhook_url=webhook_url)

Upload users via CSV file

Upload a CSV file containing user information for bulk creation. The CSV file should follow
a specific format with required and optional columns based on user type.

### CSV Format
The CSV file should have the following columns:

Required columns for all users:
- umaAddress: The user's UMA address (e.g., $john.doe@uma.domain.com)
- platformUserId: Your platform's unique identifier for the user
- userType: Either "INDIVIDUAL" or "BUSINESS"

Required columns for individual users:
- fullName: Individual's full name
- dateOfBirth: Date of birth in YYYY-MM-DD format
- addressLine1: Street address line 1
- city: City
- state: State/Province/Region
- postalCode: Postal/ZIP code
- country: Country code (ISO 3166-1 alpha-2)
- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)
- accountNumber: Bank account number
- bankName: Name of the bank

Required columns for business users:
- businessLegalName: Legal name of the business
- addressLine1: Street address line 1
- city: City
- state: State/Province/Region
- postalCode: Postal/ZIP code
- country: Country code (ISO 3166-1 alpha-2)
- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)
- accountNumber: Bank account number
- bankName: Name of the bank

Optional columns for all users:
- addressLine2: Street address line 2
- platformAccountId: Your platform's identifier for the bank account
- description: Optional description for the user

Optional columns for individual users:
- email: User's email address

Optional columns for business users:
- businessRegistrationNumber: Business registration number
- businessTaxId: Tax identification number

Additional required columns based on account type:

For US_ACCOUNT:
- routingNumber: ACH routing number (9 digits)
- accountCategory: Either "CHECKING" or "SAVINGS"

For CLABE:
- clabeNumber: 18-digit CLABE number

For PIX:
- pixKey: PIX key value
- pixKeyType: Type of PIX key (CPF, CNPJ, EMAIL, PHONE, RANDOM)

For IBAN:
- iban: International Bank Account Number
- swiftBic: SWIFT/BIC code (8 or 11 characters)

See the BankAccountInfo and UserInfo schemas for more details on the required and optional fields.

### Example CSV
```csv
umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId
$john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234
$acme@uma.domain.com,biz456,BUSINESS,Acme Corp,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678
```

The upload process is asynchronous and will return a job ID that can be used to track progress.
You can monitor the job status using the `/users/bulk/jobs/{jobId}` endpoint.


### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.upload_users_csv202_response import UploadUsersCsv202Response
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
    api_instance = umaaas_api.UsersApi(api_client)
    file = None # bytearray | CSV file containing user information
    webhook_url = 'webhook_url_example' # str | Optional webhook URL for job status updates. If not provided, the platform's default webhook URL will be used. (optional)

    try:
        # Upload users via CSV file
        api_response = api_instance.upload_users_csv(file, webhook_url=webhook_url)
        print("The response of UsersApi->upload_users_csv:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->upload_users_csv: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**| CSV file containing user information | 
 **webhook_url** | **str**| Optional webhook URL for job status updates. If not provided, the platform&#39;s default webhook URL will be used. | [optional] 

### Return type

[**UploadUsersCsv202Response**](UploadUsersCsv202Response.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | CSV upload accepted for processing |  -  |
**400** | Bad request - Invalid CSV format or content |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

