# IncomingPaymentWebhookUnprocessableResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message | [optional] 
**details** | **object** | Additional error details | [optional] 
**required_fields** | **List[str]** | List of fields that are required by the platform, but are not present in the counterparty information. | [optional] 

## Example

```python
from umaaas_api.models.incoming_payment_webhook_unprocessable_response import IncomingPaymentWebhookUnprocessableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhookUnprocessableResponse from a JSON string
incoming_payment_webhook_unprocessable_response_instance = IncomingPaymentWebhookUnprocessableResponse.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhookUnprocessableResponse.to_json())

# convert the object into a dict
incoming_payment_webhook_unprocessable_response_dict = incoming_payment_webhook_unprocessable_response_instance.to_dict()
# create an instance of IncomingPaymentWebhookUnprocessableResponse from a dict
incoming_payment_webhook_unprocessable_response_from_dict = IncomingPaymentWebhookUnprocessableResponse.from_dict(incoming_payment_webhook_unprocessable_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


