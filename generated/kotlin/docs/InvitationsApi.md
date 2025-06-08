# InvitationsApi

All URIs are relative to *https://api.uma.money/umaaas/2025-05-15*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelInvitation**](InvitationsApi.md#cancelInvitation) | **POST** invitations/{invitationCode}/cancel | Cancel an UMA invitation |
| [**claimInvitation**](InvitationsApi.md#claimInvitation) | **POST** invitations/{invitationCode}/claim | Claim an UMA invitation |
| [**createInvitation**](InvitationsApi.md#createInvitation) | **POST** invitations | Create an UMA invitation from a given platform user. |
| [**getInvitation**](InvitationsApi.md#getInvitation) | **GET** invitations/{invitationCode} | Get a specific UMA invitation by code. |



Cancel an UMA invitation

Cancel a pending UMA invitation. Only the inviter or platform can cancel an invitation.  When an invitation is cancelled: 1. The invitation status changes from PENDING to CANCELLED 2. The invitation can no longer be claimed 3. The invitation URL will show as cancelled when accessed  Only pending invitations can be cancelled. Attempting to cancel an invitation that is already claimed, expired, or cancelled will result in an error. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(InvitationsApi::class.java)
val invitationCode : kotlin.String = invitationCode_example // kotlin.String | The code of the invitation to cancel

launch(Dispatchers.IO) {
    val result : UmaInvitation = webService.cancelInvitation(invitationCode)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **invitationCode** | **kotlin.String**| The code of the invitation to cancel | |

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


Claim an UMA invitation

Claim an UMA invitation by associating it with an invitee UMA address.  When an invitation is successfully claimed: 1. The invitation status changes from PENDING to CLAIMED 2. The invitee UMA address is associated with the invitation 3. An INVITATION_CLAIMED webhook is triggered to notify the platform that created the invitation  This endpoint allows users to accept invitations sent to them by other UMA users. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(InvitationsApi::class.java)
val invitationCode : kotlin.String = invitationCode_example // kotlin.String | The code of the invitation to claim
val claimInvitationRequest : ClaimInvitationRequest =  // ClaimInvitationRequest | 

launch(Dispatchers.IO) {
    val result : UmaInvitation = webService.claimInvitation(invitationCode, claimInvitationRequest)
}
```

### Parameters
| **invitationCode** | **kotlin.String**| The code of the invitation to claim | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **claimInvitationRequest** | [**ClaimInvitationRequest**](ClaimInvitationRequest.md)|  | |

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Create an UMA invitation from a given platform user.

Create an UMA invitation from a given platform user. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(InvitationsApi::class.java)
val createInvitationRequest : CreateInvitationRequest =  // CreateInvitationRequest | 

launch(Dispatchers.IO) {
    val result : UmaInvitation = webService.createInvitation(createInvitationRequest)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createInvitationRequest** | [**CreateInvitationRequest**](CreateInvitationRequest.md)|  | |

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Get a specific UMA invitation by code.

Get a specific UMA invitation by code. 

### Example
```kotlin
// Import classes:
//import com.lightspark.umaaas.*
//import com.lightspark.umaaas.infrastructure.*
//import com.lightspark.umaaas.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(InvitationsApi::class.java)
val invitationCode : kotlin.String = invitationCode_example // kotlin.String | The code of the invitation to get

launch(Dispatchers.IO) {
    val result : UmaInvitation = webService.getInvitation(invitationCode)
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **invitationCode** | **kotlin.String**| The code of the invitation to get | |

### Return type

[**UmaInvitation**](UmaInvitation.md)

### Authorization


Configure BasicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

