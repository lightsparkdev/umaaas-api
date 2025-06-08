
# ApiToken

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **kotlin.String** | System-generated unique identifier |  |
| **name** | **kotlin.String** | Name of the token |  |
| **permissions** | [**kotlin.collections.List&lt;Permission&gt;**](Permission.md) | A list of permissions granted to the token |  |
| **clientId** | **kotlin.String** | An opaque identifier that should be used as a client_id (or username)  in the HTTP Basic Authentication scheme when issuing http requests to UMAaaS. |  |
| **createdAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | Creation timestamp |  |
| **updatedAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | Last update timestamp |  |
| **clientSecret** | **kotlin.String** | The secret that should be used to authenticate against UMAaaS API. This secret is not stored and will never be available again after creation.  Platform must keep this secret secure as it grants access to the account. |  [optional] |



