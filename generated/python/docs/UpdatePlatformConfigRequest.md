# UpdatePlatformConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uma_domain** | **str** |  | [optional] 
**webhook_endpoint** | **str** |  | [optional] 
**supported_currencies** | [**List[PlatformCurrencyConfig]**](PlatformCurrencyConfig.md) |  | [optional] 

## Example

```python
from umaaas_api.models.update_platform_config_request import UpdatePlatformConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePlatformConfigRequest from a JSON string
update_platform_config_request_instance = UpdatePlatformConfigRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePlatformConfigRequest.to_json())

# convert the object into a dict
update_platform_config_request_dict = update_platform_config_request_instance.to_dict()
# create an instance of UpdatePlatformConfigRequest from a dict
update_platform_config_request_from_dict = UpdatePlatformConfigRequest.from_dict(update_platform_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


