# OutgoingRateDetails

Details about the rate and fees for an outgoing transaction or quote.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counterparty_multiplier** | **float** | The underlying multiplier from mSATs to the receiving currency as returned by the counterparty institution. | [optional] 
**counterparty_fixed_fee** | **int** | The fixed fee charged by the counterparty institution to execute the quote in the smallest unit of the receiving currency (eg. cents). | [optional] 
**umaaas_multiplier** | **float** | The underlying multiplier from the sending currency to mSATS, including variable fees. | [optional] 
**umaaas_fixed_fee** | **int** | The fixed fee charged by the UMAaaS product to execute the quote in the smallest unit of the sending currency (eg. cents). | [optional] 
**umaaas_variable_fee_rate** | **float** | The variable fee rate charged by the UMAaaS product to execute the quote as a percentage of the sending currency amount. | [optional] 
**umaaas_variable_fee_amount** | **float** | The variable fee amount charged by the UMAaaS product to execute the quote in the smallest unit of the sending currency (eg. cents). This is the sending amount times umaaasVariableFeeRate. | [optional] 

## Example

```python
from umaaas_api.models.outgoing_rate_details import OutgoingRateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OutgoingRateDetails from a JSON string
outgoing_rate_details_instance = OutgoingRateDetails.from_json(json)
# print the JSON string representation of the object
print(OutgoingRateDetails.to_json())

# convert the object into a dict
outgoing_rate_details_dict = outgoing_rate_details_instance.to_dict()
# create an instance of OutgoingRateDetails from a dict
outgoing_rate_details_from_dict = OutgoingRateDetails.from_dict(outgoing_rate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


