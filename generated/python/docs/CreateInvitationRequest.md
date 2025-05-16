# CreateInvitationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inviter_uma** | **str** | The UMA address of the user creating the invitation | 
**amount_to_send** | [**CreateInvitationRequestAmountToSend**](CreateInvitationRequestAmountToSend.md) |  | [optional] 
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


