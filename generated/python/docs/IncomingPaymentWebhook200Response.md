# IncomingPaymentWebhook200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_pii_provided** | **Dict[str, object]** | PII for the recipient, provided by the platform if requested in the webhook via &#x60;requiredRecipientPiiFields&#x60; and the payment is approved. | [optional] 

## Example

```python
from umaaas_api.models.incoming_payment_webhook200_response import IncomingPaymentWebhook200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhook200Response from a JSON string
incoming_payment_webhook200_response_instance = IncomingPaymentWebhook200Response.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhook200Response.to_json())

# convert the object into a dict
incoming_payment_webhook200_response_dict = incoming_payment_webhook200_response_instance.to_dict()
# create an instance of IncomingPaymentWebhook200Response from a dict
incoming_payment_webhook200_response_from_dict = IncomingPaymentWebhook200Response.from_dict(incoming_payment_webhook200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


