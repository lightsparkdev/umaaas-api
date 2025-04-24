# TestSendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | **str** | The unique reference code that was in the payment instructions | 
**currency_code** | **str** | Currency code for the funds to be sent | 
**currency_amount** | **int** | The amount to send in the smallest unit of the currency (eg. cents) | 

## Example

```python
from umaaas_api.models.test_send_request import TestSendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestSendRequest from a JSON string
test_send_request_instance = TestSendRequest.from_json(json)
# print the JSON string representation of the object
print(TestSendRequest.to_json())

# convert the object into a dict
test_send_request_dict = test_send_request_instance.to_dict()
# create an instance of TestSendRequest from a dict
test_send_request_from_dict = TestSendRequest.from_dict(test_send_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


