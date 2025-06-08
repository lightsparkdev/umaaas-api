
# ListUsers200Response

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **&#x60;data&#x60;** | [**kotlin.collections.List&lt;User&gt;**](User.md) | List of users matching the filter criteria |  |
| **hasMore** | **kotlin.Boolean** | Indicates if more results are available beyond this page |  |
| **nextCursor** | **kotlin.String** | Cursor to retrieve the next page of results (only present if hasMore is true) |  [optional] |
| **totalCount** | **kotlin.Int** | Total number of users matching the criteria (excluding pagination) |  [optional] |



