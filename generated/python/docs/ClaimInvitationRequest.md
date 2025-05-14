# ClaimInvitationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitee_uma** | **str** | The UMA address of the user claiming the invitation | 

## Example

```python
from umaaas_api.models.claim_invitation_request import ClaimInvitationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimInvitationRequest from a JSON string
claim_invitation_request_instance = ClaimInvitationRequest.from_json(json)
# print the JSON string representation of the object
print(ClaimInvitationRequest.to_json())

# convert the object into a dict
claim_invitation_request_dict = claim_invitation_request_instance.to_dict()
# create an instance of ClaimInvitationRequest from a dict
claim_invitation_request_from_dict = ClaimInvitationRequest.from_dict(claim_invitation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


