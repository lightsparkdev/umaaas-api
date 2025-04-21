# PlatformConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique identifier | [optional] [readonly] 
**uma_domain** | **str** | UMA domain for this platform | [optional] 
**webhook_endpoint** | **str** | URL where webhook notifications will be sent | [optional] 
**supported_currencies** | [**List[PlatformCurrencyConfig]**](PlatformCurrencyConfig.md) | List of currencies supported by the platform | [optional] 
**created_at** | **datetime** | Creation timestamp | [optional] [readonly] 
**updated_at** | **datetime** | Last update timestamp | [optional] [readonly] 

## Example

```python
from umaaas_api.models.platform_config import PlatformConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformConfig from a JSON string
platform_config_instance = PlatformConfig.from_json(json)
# print the JSON string representation of the object
print(PlatformConfig.to_json())

# convert the object into a dict
platform_config_dict = platform_config_instance.to_dict()
# create an instance of PlatformConfig from a dict
platform_config_from_dict = PlatformConfig.from_dict(platform_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


