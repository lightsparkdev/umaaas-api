# TestReceiveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender_uma_address** | **str** | UMA address of the sender from the sandbox | 
**receiver_uma_address** | **str** | UMA address of the receiver (optional if userId is provided) | [optional] 
**user_id** | **str** | System ID of the receiver (optional if receiverUmaAddress is provided) | [optional] 
**receiving_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount to be received by recipient in the recipient&#39;s currency | 

## Example

```python
from umaaas_api.models.test_receive_request import TestReceiveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestReceiveRequest from a JSON string
test_receive_request_instance = TestReceiveRequest.from_json(json)
# print the JSON string representation of the object
print(TestReceiveRequest.to_json())

# convert the object into a dict
test_receive_request_dict = test_receive_request_instance.to_dict()
# create an instance of TestReceiveRequest from a dict
test_receive_request_from_dict = TestReceiveRequest.from_dict(test_receive_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


