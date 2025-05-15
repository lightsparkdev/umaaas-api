# UmaInvitation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The unique code of the invitation | 
**created_at** | **datetime** | When the invitation was created | 
**claimed_at** | **datetime** | When the invitation was claimed if it has been claimed | [optional] 
**url** | **str** | The URL where this invitation can be claimed. | 
**expires_at** | **datetime** | When the invitation expires (if at all) | [optional] 
**inviter_uma** | **str** | The UMA address of the inviter | 
**invitee_uma** | **str** | The UMA address of the invitee | [optional] 
**status** | **str** | The status of the invitation | 

## Example

```python
from umaaas_api.models.uma_invitation import UmaInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of UmaInvitation from a JSON string
uma_invitation_instance = UmaInvitation.from_json(json)
# print the JSON string representation of the object
print(UmaInvitation.to_json())

# convert the object into a dict
uma_invitation_dict = uma_invitation_instance.to_dict()
# create an instance of UmaInvitation from a dict
uma_invitation_from_dict = UmaInvitation.from_dict(uma_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


