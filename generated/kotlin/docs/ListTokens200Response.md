
# ListTokens200Response

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **&#x60;data&#x60;** | [**kotlin.collections.List&lt;ApiToken&gt;**](ApiToken.md) | List of tokens matching the filter criteria |  |
| **hasMore** | **kotlin.Boolean** | Indicates if more results are available beyond this page |  |
| **nextCursor** | **kotlin.String** | Cursor to retrieve the next page of results (only present if hasMore is true) |  [optional] |
| **totalCount** | **kotlin.Int** | Total number of tokens matching the criteria (excluding pagination) |  [optional] |



