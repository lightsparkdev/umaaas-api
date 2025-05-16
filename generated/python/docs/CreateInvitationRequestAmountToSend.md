# CreateInvitationRequestAmountToSend

An amount to send to the invitee when the invitation is claimed. This is optional and if not provided, the invitee will not receive any amount. Note that the actual sending of the amount must be done by the inviter platform once the INVITATION_CLAIMED webhook is received. If the inviter platform either does not send the payment or the payment fails, the invitee will not receive this amount. This field is primarily used for display purposes on the claiming side of the invitation. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Amount in the smallest unit of the currency (e.g., cents for USD/EUR, satoshis for BTC) | [optional] 
**currency_code** | **str** | Three-letter currency code (ISO 4217) for fiat currencies. Some cryptocurrencies may use their own ticker symbols (e.g. \&quot;SAT\&quot; for satoshis, \&quot;USDC\&quot; for USDCoin, etc.) | [optional] 

## Example

```python
from umaaas_api.models.create_invitation_request_amount_to_send import CreateInvitationRequestAmountToSend

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInvitationRequestAmountToSend from a JSON string
create_invitation_request_amount_to_send_instance = CreateInvitationRequestAmountToSend.from_json(json)
# print the JSON string representation of the object
print(CreateInvitationRequestAmountToSend.to_json())

# convert the object into a dict
create_invitation_request_amount_to_send_dict = create_invitation_request_amount_to_send_instance.to_dict()
# create an instance of CreateInvitationRequestAmountToSend from a dict
create_invitation_request_amount_to_send_from_dict = CreateInvitationRequestAmountToSend.from_dict(create_invitation_request_amount_to_send_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


