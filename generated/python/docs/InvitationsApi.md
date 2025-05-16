# umaaas_api.InvitationsApi

All URIs are relative to *https://api.lightspark.com/umaaas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_invitation**](InvitationsApi.md#cancel_invitation) | **POST** /invitations/{invitationCode}/cancel | Cancel an UMA invitation
[**claim_invitation**](InvitationsApi.md#claim_invitation) | **POST** /invitations/{invitationCode}/claim | Claim an UMA invitation
[**create_invitation**](InvitationsApi.md#create_invitation) | **POST** /invitations | Create an UMA invitation from a given platform user.
[**get_invitation**](InvitationsApi.md#get_invitation) | **GET** /invitations/{invitationCode} | Get a specific UMA invitation by code.


# **cancel_invitation**
> UmaInvitation cancel_invitation(invitation_code)

Cancel an UMA invitation

Cancel a pending UMA invitation. Only the inviter or platform can cancel an invitation.  When an invitation is cancelled: 1. The invitation status changes from PENDING to CANCELLED 2. The invitation can no longer be claimed 3. The invitation URL will show as cancelled when accessed  Only pending invitations can be cancelled. Attempting to cancel an invitation that is already claimed, expired, or cancelled will result in an error. 

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.uma_invitation import UmaInvitation
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
    api_instance = umaaas_api.InvitationsApi(api_client)
    invitation_code = 'invitation_code_example' # str | The code of the invitation to cancel

    try:
        # Cancel an UMA invitation
        api_response = api_instance.cancel_invitation(invitation_code)
        print("The response of InvitationsApi->cancel_invitation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->cancel_invitation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_code** | **str**| The code of the invitation to cancel | 

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invitation cancelled successfully |  -  |
**400** | Bad request - Invitation cannot be cancelled (already claimed, expired, or cancelled) |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden - Only the platform which created the invitation can cancel it |  -  |
**404** | Invitation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **claim_invitation**
> UmaInvitation claim_invitation(invitation_code, claim_invitation_request)

Claim an UMA invitation

Claim an UMA invitation by associating it with an invitee UMA address.  When an invitation is successfully claimed: 1. The invitation status changes from PENDING to CLAIMED 2. The invitee UMA address is associated with the invitation 3. An INVITATION_CLAIMED webhook is triggered to notify the platform that created the invitation  This endpoint allows users to accept invitations sent to them by other UMA users. 

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.claim_invitation_request import ClaimInvitationRequest
from umaaas_api.models.uma_invitation import UmaInvitation
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
    api_instance = umaaas_api.InvitationsApi(api_client)
    invitation_code = 'invitation_code_example' # str | The code of the invitation to claim
    claim_invitation_request = umaaas_api.ClaimInvitationRequest() # ClaimInvitationRequest | 

    try:
        # Claim an UMA invitation
        api_response = api_instance.claim_invitation(invitation_code, claim_invitation_request)
        print("The response of InvitationsApi->claim_invitation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->claim_invitation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_code** | **str**| The code of the invitation to claim | 
 **claim_invitation_request** | [**ClaimInvitationRequest**](ClaimInvitationRequest.md)|  | 

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invitation claimed successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Invitation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_invitation**
> UmaInvitation create_invitation(create_invitation_request)

Create an UMA invitation from a given platform user.

Create an UMA invitation from a given platform user. 

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.create_invitation_request import CreateInvitationRequest
from umaaas_api.models.uma_invitation import UmaInvitation
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
    api_instance = umaaas_api.InvitationsApi(api_client)
    create_invitation_request = umaaas_api.CreateInvitationRequest() # CreateInvitationRequest | 

    try:
        # Create an UMA invitation from a given platform user.
        api_response = api_instance.create_invitation(create_invitation_request)
        print("The response of InvitationsApi->create_invitation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->create_invitation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_invitation_request** | [**CreateInvitationRequest**](CreateInvitationRequest.md)|  | 

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Invitation created successfully |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_invitation**
> UmaInvitation get_invitation(invitation_code)

Get a specific UMA invitation by code.

Get a specific UMA invitation by code. 

### Example

* Basic Authentication (BasicAuth):

```python
import umaaas_api
from umaaas_api.models.uma_invitation import UmaInvitation
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
    api_instance = umaaas_api.InvitationsApi(api_client)
    invitation_code = 'invitation_code_example' # str | The code of the invitation to get

    try:
        # Get a specific UMA invitation by code.
        api_response = api_instance.get_invitation(invitation_code)
        print("The response of InvitationsApi->get_invitation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationsApi->get_invitation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_code** | **str**| The code of the invitation to get | 

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invitation retrieved successfully |  -  |
**401** | Unauthorized |  -  |
**404** | Invitation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

