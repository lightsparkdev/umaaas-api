
# BulkUserImportJob

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **jobId** | **kotlin.String** | Unique identifier for the bulk import job |  |
| **status** | [**inline**](#Status) | Current status of the job |  |
| **progress** | [**BulkUserImportJobProgress**](BulkUserImportJobProgress.md) |  |  |
| **errors** | [**kotlin.collections.List&lt;BulkUserImportJobErrorsInner&gt;**](BulkUserImportJobErrorsInner.md) | Detailed error information for failed entries |  [optional] |
| **completedAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | Timestamp when the job completed (only present for COMPLETED or FAILED status) |  [optional] |


<a id="Status"></a>
## Enum: status
| Name | Value |
| ---- | ----- |
| status | PENDING, PROCESSING, COMPLETED, FAILED |



