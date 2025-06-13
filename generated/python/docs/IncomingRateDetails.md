# IncomingRateDetails

Details about the rate and fees for an incoming transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**umaaas_multiplier** | **float** | The underlying multiplier from the mSATS to the receiving currency, including variable fees. | [optional] 
**umaaas_fixed_fee** | **int** | The fixed fee charged by the UMAaaS product to execute the quote in the smallest unit of the receiving currency (eg. cents). | [optional] 
**umaaas_variable_fee_rate** | **float** | The variable fee rate charged by the UMAaaS product to execute the quote as a percentage of the receiving currency amount. | [optional] 
**umaaas_variable_fee_amount** | **float** | The variable fee amount charged by the UMAaaS product to execute the quote in the smallest unit of the receiving currency (eg. cents). This is the receiving amount times umaaasVariableFeeRate. | [optional] 

## Example

```python
from umaaas_api.models.incoming_rate_details import IncomingRateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingRateDetails from a JSON string
incoming_rate_details_instance = IncomingRateDetails.from_json(json)
# print the JSON string representation of the object
print(IncomingRateDetails.to_json())

# convert the object into a dict
incoming_rate_details_dict = incoming_rate_details_instance.to_dict()
# create an instance of IncomingRateDetails from a dict
incoming_rate_details_from_dict = IncomingRateDetails.from_dict(incoming_rate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


