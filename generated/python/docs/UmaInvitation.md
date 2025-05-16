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
**amount_to_send** | [**CurrencyAmount**](CurrencyAmount.md) | The amount to send to the invitee when the invitation is claimed. This is optional and if not provided, the invitee will not receive any amount. Note that the actual sending of the amount must be done by the inviter platform once the INVITATION_CLAIMED webhook is received. If the inviter platform either does not send the payment or the payment fails, the invitee will not receive this amount. This field is primarily used for display purposes on the claiming side of the invitation. This field is useful for \&quot;send-by-link\&quot; style user flows where an inviter can send a payment simply by sharing a link without knowing the receiver&#39;s UMA address. Note that these sends can only be sender-locked, meaning that the sender will not know ahead of time how much the receiver will receive in the receiving currency. | [optional] 

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


