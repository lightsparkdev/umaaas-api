# IncomingPaymentWebhook403Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **object** |  | [optional] 
**message** | **object** |  | [optional] 
**details** | **object** |  | [optional] 

## Example

```python
from umaaas_api.models.incoming_payment_webhook403_response import IncomingPaymentWebhook403Response

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhook403Response from a JSON string
incoming_payment_webhook403_response_instance = IncomingPaymentWebhook403Response.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhook403Response.to_json())

# convert the object into a dict
incoming_payment_webhook403_response_dict = incoming_payment_webhook403_response_instance.to_dict()
# create an instance of IncomingPaymentWebhook403Response from a dict
incoming_payment_webhook403_response_from_dict = IncomingPaymentWebhook403Response.from_dict(incoming_payment_webhook403_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


