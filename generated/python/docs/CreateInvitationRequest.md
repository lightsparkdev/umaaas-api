# CreateInvitationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inviter_uma** | **str** | The UMA address of the user creating the invitation | 
**amount_to_send** | **int** | An amount to send (in the smallest unit of the user&#39;s currency) to the invitee when the invitation is claimed. This is optional and if not provided, the invitee will not receive any amount. Note that the actual sending of the amount must be done by the inviter platform once the INVITATION_CLAIMED webhook is received. If the inviter platform either does not send the payment or the payment fails, the invitee will not receive this amount. This field is primarily used for display purposes on the claiming side of the invitation.  | [optional] 
**expires_at** | **datetime** | When the invitation expires (if at all) | [optional] 

## Example

```python
from umaaas_api.models.create_invitation_request import CreateInvitationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInvitationRequest from a JSON string
create_invitation_request_instance = CreateInvitationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInvitationRequest.to_json())

# convert the object into a dict
create_invitation_request_dict = create_invitation_request_instance.to_dict()
# create an instance of CreateInvitationRequest from a dict
create_invitation_request_from_dict = CreateInvitationRequest.from_dict(create_invitation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


