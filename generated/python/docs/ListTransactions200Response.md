# ListTransactions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Transaction]**](Transaction.md) | List of transactions matching the criteria | 
**has_more** | **bool** | Indicates if more results are available beyond this page | 
**next_cursor** | **str** | Cursor to retrieve the next page of results (only present if hasMore is true) | [optional] 
**total_count** | **int** | Total number of transactions matching the criteria (excluding pagination) | [optional] 

## Example

```python
from umaaas_api.models.list_transactions200_response import ListTransactions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransactions200Response from a JSON string
list_transactions200_response_instance = ListTransactions200Response.from_json(json)
# print the JSON string representation of the object
print(ListTransactions200Response.to_json())

# convert the object into a dict
list_transactions200_response_dict = list_transactions200_response_instance.to_dict()
# create an instance of ListTransactions200Response from a dict
list_transactions200_response_from_dict = ListTransactions200Response.from_dict(list_transactions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


