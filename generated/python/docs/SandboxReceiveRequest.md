# SandboxReceiveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender_uma_address** | **str** | UMA address of the sender from the sandbox | 
**receiver_uma_address** | **str** | UMA address of the receiver (optional if userId is provided) | [optional] 
**user_id** | **str** | System ID of the receiver (optional if receiverUmaAddress is provided) | [optional] 
**receiving_currency_code** | **str** | The currency code for the receiving amount | 
**receiving_currency_amount** | **int** | The amount to be received in the smallest unit of the currency (eg. cents) | 

## Example

```python
from umaaas_api.models.sandbox_receive_request import SandboxReceiveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxReceiveRequest from a JSON string
sandbox_receive_request_instance = SandboxReceiveRequest.from_json(json)
# print the JSON string representation of the object
print(SandboxReceiveRequest.to_json())

# convert the object into a dict
sandbox_receive_request_dict = sandbox_receive_request_instance.to_dict()
# create an instance of SandboxReceiveRequest from a dict
sandbox_receive_request_from_dict = SandboxReceiveRequest.from_dict(sandbox_receive_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


