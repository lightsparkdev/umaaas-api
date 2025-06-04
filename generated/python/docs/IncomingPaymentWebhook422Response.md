# IncomingPaymentWebhook422Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message | [optional] 
**details** | **object** | Additional error details | [optional] 
**required_fields** | **List[str]** | List of fields that are required by the platform, but are not present in the counterparty information. | [optional] 

## Example

```python
from umaaas_api.models.incoming_payment_webhook422_response import IncomingPaymentWebhook422Response

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhook422Response from a JSON string
incoming_payment_webhook422_response_instance = IncomingPaymentWebhook422Response.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhook422Response.to_json())

# convert the object into a dict
incoming_payment_webhook422_response_dict = incoming_payment_webhook422_response_instance.to_dict()
# create an instance of IncomingPaymentWebhook422Response from a dict
incoming_payment_webhook422_response_from_dict = IncomingPaymentWebhook422Response.from_dict(incoming_payment_webhook422_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


