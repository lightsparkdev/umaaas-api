# InvitationClaimedWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation** | [**UmaInvitation**](UmaInvitation.md) |  | 
**timestamp** | **datetime** | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) | 
**webhook_id** | **str** | Unique identifier for this webhook delivery (can be used for idempotency) | 
**type** | **str** | Type of webhook event | 

## Example

```python
from umaaas_api.models.invitation_claimed_webhook import InvitationClaimedWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationClaimedWebhook from a JSON string
invitation_claimed_webhook_instance = InvitationClaimedWebhook.from_json(json)
# print the JSON string representation of the object
print(InvitationClaimedWebhook.to_json())

# convert the object into a dict
invitation_claimed_webhook_dict = invitation_claimed_webhook_instance.to_dict()
# create an instance of InvitationClaimedWebhook from a dict
invitation_claimed_webhook_from_dict = InvitationClaimedWebhook.from_dict(invitation_claimed_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


