<!-- Generator: Widdershins v4.0.1 -->

<h1 id="uma-as-a-service-umaaas-api">UMA as a Service (UMAaaS) API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for managing global payments to and from UMA addresses. 
This service facilitates cross-currency financial transactions using simple human-readable UMA addresses.

Base URLs:

* <a href="https://api.lightspark.com/umaaas/v1">https://api.lightspark.com/umaaas/v1</a>

Email: <a href="mailto:support@lightspark.com">Lightspark Support</a> 
License: <a href="https://lightspark.com/terms">Proprietary</a>

# Authentication

- HTTP Authentication, scheme: basic API token authentication using format `<api token id>:<api client secret>`

* API Key (WebhookSignature)
    - Parameter Name: **X-UMAaas-Signature**, in: header. Secp256r1 (P-256) asymmetric signature of the webhook payload, which can be used to verify that the webhook was sent by UMAaas.

To verify the signature:
1. Get the UMAaas public key provided to you during integration
2. Decode the base64 signature from the header
3. Create a SHA-256 hash of the request body
4. Verify the signature using the public key and the hash

If the signature verification succeeds, the webhook is authentic. If not, it should be rejected.

<h1 id="uma-as-a-service-umaaas-api-platform-configuration">Platform Configuration</h1>

Platform configuration endpoints for managing global settings. You can also configure these settings in the UMAaas dashboard.

## getPlatformConfig

<a id="opIdgetPlatformConfig"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/config',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/config', headers = headers)

print(r.json())

```

`GET /config`

*Get platform configuration*

Retrieve the current platform configuration

> Example responses

> 200 Response

```json
{
  "id": "PlatformConfig:019542f5-b3e7-1d02-0000-000000000003",
  "umaDomain": "platform.uma.domain",
  "webhookEndpoint": "https://api.mycompany.com/webhooks/uma",
  "supportedCurrencies": [
    {
      "currencyCode": "USD",
      "minAmount": 100,
      "maxAmount": 1000000,
      "requiredCounterpartyFields": [
        {
          "name": "FULL_NAME",
          "mandatory": true
        },
        {
          "name": "DATE_OF_BIRTH",
          "mandatory": true
        }
      ]
    }
  ],
  "createdAt": "2023-06-15T12:30:45Z",
  "updatedAt": "2023-06-15T12:30:45Z"
}
```

<h3 id="getplatformconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[PlatformConfig](#schemaplatformconfig)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## updatePlatformConfig

<a id="opIdupdatePlatformConfig"></a>

> Code samples

```javascript
const inputBody = '{
  "umaDomain": "mycompany.com",
  "webhookEndpoint": "https://api.mycompany.com/webhooks/uma",
  "supportedCurrencies": [
    {
      "currencyCode": "USD",
      "minAmount": 100,
      "maxAmount": 1000000,
      "requiredCounterpartyFields": [
        {
          "name": "FULL_NAME",
          "mandatory": true
        },
        {
          "name": "DATE_OF_BIRTH",
          "mandatory": true
        }
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/config',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.patch('https://api.lightspark.com/umaaas/v1/config', headers = headers)

print(r.json())

```

`PATCH /config`

*Update platform configuration*

Update the platform configuration settings

> Body parameter

```json
{
  "umaDomain": "mycompany.com",
  "webhookEndpoint": "https://api.mycompany.com/webhooks/uma",
  "supportedCurrencies": [
    {
      "currencyCode": "USD",
      "minAmount": 100,
      "maxAmount": 1000000,
      "requiredCounterpartyFields": [
        {
          "name": "FULL_NAME",
          "mandatory": true
        },
        {
          "name": "DATE_OF_BIRTH",
          "mandatory": true
        }
      ]
    }
  ]
}
```

<h3 id="updateplatformconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» umaDomain|body|string|false|none|
|» webhookEndpoint|body|string|false|none|
|» supportedCurrencies|body|[[PlatformCurrencyConfig](#schemaplatformcurrencyconfig)]|false|none|
|»» currencyCode|body|string|true|Three-letter currency code (ISO 4217)|
|»» minAmount|body|integer(int64)|true|Minimum amount that can be sent in the smallest unit of this currency|
|»» maxAmount|body|integer(int64)|true|Maximum amount that can be sent in the smallest unit of this currency|
|»» requiredCounterpartyFields|body|[[CounterpartyFieldDefinition](#schemacounterpartyfielddefinition)]|true|List of counterparty fields and their requirements|
|»»» name|body|string|true|Name of the counterparty field|
|»»» mandatory|body|boolean|true|Whether the field is mandatory|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»»» name|FULL_NAME|
|»»» name|DATE_OF_BIRTH|
|»»» name|NATIONALITY|
|»»» name|PHONE_NUMBER|
|»»» name|EMAIL|
|»»» name|ADDRESS|
|»»» name|TAX_ID|
|»»» name|REGISTRATION_NUMBER|
|»»» name|ACCOUNT_NUMBER|

> Example responses

> 200 Response

```json
{
  "id": "PlatformConfig:019542f5-b3e7-1d02-0000-000000000003",
  "umaDomain": "platform.uma.domain",
  "webhookEndpoint": "https://api.mycompany.com/webhooks/uma",
  "supportedCurrencies": [
    {
      "currencyCode": "USD",
      "minAmount": 100,
      "maxAmount": 1000000,
      "requiredCounterpartyFields": [
        {
          "name": "FULL_NAME",
          "mandatory": true
        },
        {
          "name": "DATE_OF_BIRTH",
          "mandatory": true
        }
      ]
    }
  ],
  "createdAt": "2023-06-15T12:30:45Z",
  "updatedAt": "2023-06-15T12:30:45Z"
}
```

<h3 id="updateplatformconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Configuration updated successfully|[PlatformConfig](#schemaplatformconfig)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="uma-as-a-service-umaaas-api-users">Users</h1>

User management endpoints for creating and updating user information

## createUser

<a id="opIdcreateUser"></a>

> Code samples

```javascript
const inputBody = '{
  "umaAddress": "$jane.doe@uma.domain.com",
  "platformUserId": "7b3c5a89d2f1e0",
  "userType": "INDIVIDUAL",
  "fullName": "Jane Doe",
  "dateOfBirth": "1992-03-25",
  "address": {
    "line1": "123 Pine Street",
    "line2": "Unit 501",
    "city": "Seattle",
    "state": "WA",
    "postalCode": "98101",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "12345678901",
    "routingNumber": "123456789",
    "accountCategory": "CHECKING",
    "bankName": "Chase Bank",
    "platformAccountId": "chase_primary_1234"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/users', headers = headers)

print(r.json())

```

`POST /users`

*Add a new user*

Register a new user in the system with UMA address and bank account information

> Body parameter

```json
{
  "umaAddress": "$jane.doe@uma.domain.com",
  "platformUserId": "7b3c5a89d2f1e0",
  "userType": "INDIVIDUAL",
  "fullName": "Jane Doe",
  "dateOfBirth": "1992-03-25",
  "address": {
    "line1": "123 Pine Street",
    "line2": "Unit 501",
    "city": "Seattle",
    "state": "WA",
    "postalCode": "98101",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "12345678901",
    "routingNumber": "123456789",
    "accountCategory": "CHECKING",
    "bankName": "Chase Bank",
    "platformAccountId": "chase_primary_1234"
  }
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|

> Example responses

> 201 Response

```json
{
  "id": "User:019542f5-b3e7-1d02-0000-000000000001",
  "umaAddress": "$john.doe@uma.domain.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z",
  "isDeleted": false,
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "nationality": "US",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "platformAccountId": "acc_123456789"
  }
}
```

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|User created successfully|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict - User with the UMA address already exists|[Error](#schemaerror)|

<h3 id="createuser-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|
|accountType|FBO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## listUsers

<a id="opIdlistUsers"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/users',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/users', headers = headers)

print(r.json())

```

`GET /users`

*List users*

Retrieve a list of users with optional filtering parameters. Returns all users that match
the specified filters. If no filters are provided, returns all users (paginated).

<h3 id="listusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|platformUserId|query|string|false|Filter by platform-specific user identifier|
|umaAddress|query|string|false|Filter by UMA address|
|userType|query|string|false|Filter by user type|
|createdAfter|query|string(date-time)|false|Filter users created after this timestamp (inclusive)|
|createdBefore|query|string(date-time)|false|Filter users created before this timestamp (inclusive)|
|updatedAfter|query|string(date-time)|false|Filter users updated after this timestamp (inclusive)|
|updatedBefore|query|string(date-time)|false|Filter users updated before this timestamp (inclusive)|
|limit|query|integer|false|Maximum number of results to return (default 20, max 100)|
|cursor|query|string|false|Cursor for pagination (returned from previous request)|
|isIncludingDeleted|query|boolean|false|Whether to include deleted users in the results. Default is false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "User:019542f5-b3e7-1d02-0000-000000000001",
      "umaAddress": "$john.doe@uma.domain.com",
      "platformUserId": "9f84e0c2a72c4fa",
      "userType": "INDIVIDUAL",
      "createdAt": "2023-07-21T17:32:28Z",
      "updatedAt": "2023-07-21T17:32:28Z",
      "isDeleted": false,
      "fullName": "John Michael Doe",
      "dateOfBirth": "1990-01-15",
      "nationality": "US",
      "address": {
        "line1": "123 Main Street",
        "line2": "Apt 4B",
        "city": "San Francisco",
        "state": "CA",
        "postalCode": "94105",
        "country": "US"
      },
      "bankAccountInfo": {
        "accountType": "CLABE",
        "platformAccountId": "acc_123456789"
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "string",
  "totalCount": 0
}
```

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Invalid parameters|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<h3 id="listusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[oneOf]|true|none|List of users matching the filter criteria|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|any|false|none|none|

*allOf - discriminator: userType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[User](#schemauser)|false|none|none|
|»»»» id|string|false|read-only|System-generated unique identifier|
|»»»» umaAddress|string|true|none|full UMA address|
|»»»» platformUserId|string|true|none|Platform-specific user identifier|
|»»»» userType|string|true|none|Whether the user is an individual or a business entity|
|»»»» createdAt|string(date-time)|false|read-only|Creation timestamp|
|»»»» updatedAt|string(date-time)|false|read-only|Last update timestamp|
|»»»» isDeleted|boolean|false|read-only|Whether the user is marked as deleted|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|none|
|»»»» fullName|string|true|none|Individual's full name|
|»»»» dateOfBirth|string(date)|true|none|Date of birth in ISO 8601 format (YYYY-MM-DD)|
|»»»» nationality|string|false|none|Country code (ISO 3166-1 alpha-2)|
|»»»» address|[Address](#schemaaddress)|true|none|none|
|»»»»» line1|string|true|none|Street address line 1|
|»»»»» line2|string|false|none|Street address line 2|
|»»»»» city|string|false|none|City|
|»»»»» state|string|false|none|State/Province/Region|
|»»»»» postalCode|string|true|none|Postal/ZIP code|
|»»»»» country|string|true|none|Country code (ISO 3166-1 alpha-2)|
|»»»» bankAccountInfo|[UserBankAccountInfo](#schemauserbankaccountinfo)|true|none|none|
|»»»»» accountType|[BankAccountType](#schemabankaccounttype)|true|none|Type of bank account information|
|»»»»» platformAccountId|string|false|none|Platform-specific identifier for this bank account. This optional field allows platforms<br>to link bank accounts to their internal account systems. The value can be any string<br>that helps identify the account in your system (e.g. database IDs, custom references, etc.).<br><br>This field is particularly useful when:<br>- Tracking multiple bank accounts for the same user<br>- Linking accounts to internal accounting systems<br>- Maintaining consistency between UMAaS and your platform's account records|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|any|false|none|none|

*allOf - discriminator: userType*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[User](#schemauser)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|none|
|»»»» address|[Address](#schemaaddress)|true|none|none|
|»»»» bankAccountInfo|[UserBankAccountInfo](#schemauserbankaccountinfo)|true|none|none|
|»»»» businessInfo|object|true|none|Additional information required for business entities|
|»»»»» legalName|string|true|none|Legal name of the business|
|»»»»» registrationNumber|string|false|none|Business registration number|
|»»»»» taxId|string|false|none|Tax identification number|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hasMore|boolean|true|none|Indicates if more results are available beyond this page|
|» nextCursor|string|false|none|Cursor to retrieve the next page of results (only present if hasMore is true)|
|» totalCount|integer|false|none|Total number of users matching the criteria (excluding pagination)|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|
|accountType|FBO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## getUserById

<a id="opIdgetUserById"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/users/{userId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/users/{userId}', headers = headers)

print(r.json())

```

`GET /users/{userId}`

*Get user by ID*

Retrieve a user by their system-generated ID

<h3 id="getuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|System-generated unique user identifier|

> Example responses

> 200 Response

```json
{
  "id": "User:019542f5-b3e7-1d02-0000-000000000001",
  "umaAddress": "$john.doe@uma.domain.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z",
  "isDeleted": false,
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "nationality": "US",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "platformAccountId": "acc_123456789"
  }
}
```

<h3 id="getuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<h3 id="getuserbyid-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|
|accountType|FBO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## updateUserById

<a id="opIdupdateUserById"></a>

> Code samples

```javascript
const inputBody = '{
  "userType": "INDIVIDUAL",
  "fullName": "John Smith",
  "dateOfBirth": "1985-06-15",
  "address": {
    "line1": "456 Market St",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94103",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "11122233344",
    "routingNumber": "111222333",
    "accountCategory": "CHECKING",
    "bankName": "Wells Fargo",
    "platformAccountId": "wf_checking_9012"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/users/{userId}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.patch('https://api.lightspark.com/umaaas/v1/users/{userId}', headers = headers)

print(r.json())

```

`PATCH /users/{userId}`

*Update user by ID*

Update a user's metadata by their system-generated ID

> Body parameter

```json
{
  "userType": "INDIVIDUAL",
  "fullName": "John Smith",
  "dateOfBirth": "1985-06-15",
  "address": {
    "line1": "456 Market St",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94103",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "11122233344",
    "routingNumber": "111222333",
    "accountCategory": "CHECKING",
    "bankName": "Wells Fargo",
    "platformAccountId": "wf_checking_9012"
  }
}
```

<h3 id="updateuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|
|userId|path|string|true|System-generated unique user identifier|

> Example responses

> 200 Response

```json
{
  "id": "User:019542f5-b3e7-1d02-0000-000000000001",
  "umaAddress": "$john.doe@uma.domain.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z",
  "isDeleted": false,
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "nationality": "US",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "platformAccountId": "acc_123456789"
  }
}
```

<h3 id="updateuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|User updated successfully|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<h3 id="updateuserbyid-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|
|accountType|FBO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## deleteUserById

<a id="opIddeleteUserById"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/users/{userId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.lightspark.com/umaaas/v1/users/{userId}', headers = headers)

print(r.json())

```

`DELETE /users/{userId}`

*Delete user by ID*

Delete a user by their system-generated ID

<h3 id="deleteuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|System-generated unique user identifier|

> Example responses

> 200 Response

```json
{
  "id": "User:019542f5-b3e7-1d02-0000-000000000001",
  "umaAddress": "$john.doe@uma.domain.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z",
  "isDeleted": false,
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "nationality": "US",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "platformAccountId": "acc_123456789"
  }
}
```

<h3 id="deleteuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|User deleted successfully|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|User deleted already|[Error](#schemaerror)|

<h3 id="deleteuserbyid-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|
|accountType|FBO|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## uploadUsersCsv

<a id="opIduploadUsersCsv"></a>

> Code samples

```javascript
const inputBody = '{
  "file": "string",
  "webhookUrl": "http://example.com"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/users/bulk/csv',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/users/bulk/csv', headers = headers)

print(r.json())

```

`POST /users/bulk/csv`

*Upload users via CSV file*

Upload a CSV file containing user information for bulk creation. The CSV file should follow
a specific format with required and optional columns based on user type.

### CSV Format
The CSV file should have the following columns:

Required columns for all users:
- umaAddress: The user's UMA address (e.g., $john.doe@uma.domain.com)
- platformUserId: Your platform's unique identifier for the user
- userType: Either "INDIVIDUAL" or "BUSINESS"

Required columns for individual users:
- fullName: Individual's full name
- dateOfBirth: Date of birth in YYYY-MM-DD format
- addressLine1: Street address line 1
- city: City
- state: State/Province/Region
- postalCode: Postal/ZIP code
- country: Country code (ISO 3166-1 alpha-2)
- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)
- accountNumber: Bank account number
- bankName: Name of the bank

Required columns for business users:
- businessLegalName: Legal name of the business
- addressLine1: Street address line 1
- city: City
- state: State/Province/Region
- postalCode: Postal/ZIP code
- country: Country code (ISO 3166-1 alpha-2)
- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)
- accountNumber: Bank account number
- bankName: Name of the bank

Optional columns for all users:
- addressLine2: Street address line 2
- platformAccountId: Your platform's identifier for the bank account
- description: Optional description for the user

Optional columns for individual users:
- email: User's email address

Optional columns for business users:
- businessRegistrationNumber: Business registration number
- businessTaxId: Tax identification number

Additional required columns based on account type:

For US_ACCOUNT:
- routingNumber: ACH routing number (9 digits)
- accountCategory: Either "CHECKING" or "SAVINGS"

For CLABE:
- clabeNumber: 18-digit CLABE number

For PIX:
- pixKey: PIX key value
- pixKeyType: Type of PIX key (CPF, CNPJ, EMAIL, PHONE, RANDOM)

For IBAN:
- iban: International Bank Account Number
- swiftBic: SWIFT/BIC code (8 or 11 characters)

See the UserBankAccountInfo and UserInfo schemas for more details on the required and optional fields.

### Example CSV
```csv
umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId
$john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234
$acme@uma.domain.com,biz456,BUSINESS,Acme Corp,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678
```

The upload process is asynchronous and will return a job ID that can be used to track progress.
You can monitor the job status using the `/users/bulk/jobs/{jobId}` endpoint.

> Body parameter

```yaml
file: string
webhookUrl: http://example.com

```

<h3 id="uploaduserscsv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|CSV file containing user information|
|» webhookUrl|body|string(uri)|false|Optional webhook URL for job status updates. If not provided, the platform's default webhook URL will be used.|

> Example responses

> 202 Response

```json
{
  "jobId": "string",
  "status": "PENDING",
  "validationSummary": {
    "totalRows": 0,
    "validRows": 0,
    "invalidRows": 0,
    "errors": [
      {
        "row": 0,
        "errors": [
          "string"
        ]
      }
    ]
  }
}
```

<h3 id="uploaduserscsv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|CSV upload accepted for processing|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Invalid CSV format or content|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<h3 id="uploaduserscsv-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» jobId|string|true|none|Unique identifier for the bulk import job|
|» status|string|true|none|none|
|» validationSummary|object|false|none|Summary of CSV validation results|
|»» totalRows|integer|false|none|Total number of rows in the CSV file|
|»» validRows|integer|false|none|Number of rows that passed initial validation|
|»» invalidRows|integer|false|none|Number of rows that failed validation|
|»» errors|[object]|false|none|none|
|»»» row|integer|false|none|Row number in the CSV file (1-based)|
|»»» errors|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|PROCESSING|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## getBulkUserImportJob

<a id="opIdgetBulkUserImportJob"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/users/bulk/jobs/{jobId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/users/bulk/jobs/{jobId}', headers = headers)

print(r.json())

```

`GET /users/bulk/jobs/{jobId}`

*Get bulk import job status*

Retrieve the current status and results of a bulk user import job. This endpoint can be used
to track the progress of both CSV uploads.

The response includes:
- Overall job status
- Progress statistics
- Detailed error information for failed entries
- Completion timestamp when finished

<h3 id="getbulkuserimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|ID of the bulk import job to retrieve|

> Example responses

> 200 Response

```json
{
  "jobId": "job_123456789",
  "status": "PROCESSING",
  "progress": {
    "total": 5000,
    "processed": 2500,
    "successful": 2450,
    "failed": 50
  },
  "errors": [
    {
      "correlationId": "biz456",
      "error": {
        "code": "string",
        "message": "string",
        "details": {}
      }
    }
  ],
  "completedAt": "2023-08-15T14:32:00Z"
}
```

<h3 id="getbulkuserimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Job status retrieved successfully|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Job not found|[Error](#schemaerror)|

<h3 id="getbulkuserimportjob-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» jobId|string|true|none|Unique identifier for the bulk import job|
|» status|string|true|none|Current status of the job|
|» progress|object|true|none|none|
|»» total|integer|true|none|Total number of users to process|
|»» processed|integer|true|none|Number of users processed so far|
|»» successful|integer|true|none|Number of users successfully created|
|»» failed|integer|true|none|Number of users that failed to create|
|» errors|[object]|false|none|Detailed error information for failed entries|
|»» correlationId|string|true|none|Platform user ID or row number for the failed entry|
|»» error|[Error](#schemaerror)|true|none|none|
|»»» code|string|false|none|Error code|
|»»» message|string|false|none|Error message|
|»»» details|object|false|none|Additional error details|
|» completedAt|string(date-time)|false|none|Timestamp when the job completed (only present for COMPLETED or FAILED status)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|PROCESSING|
|status|COMPLETED|
|status|FAILED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="uma-as-a-service-umaaas-api-transactions">Transactions</h1>

Endpoints for retrieving transaction information

## getTransactionById

<a id="opIdgetTransactionById"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/transactions/{transactionId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/transactions/{transactionId}', headers = headers)

print(r.json())

```

`GET /transactions/{transactionId}`

*Get transaction by ID*

Retrieve detailed information about a specific transaction

<h3 id="gettransactionbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|Unique identifier of the transaction|

> Example responses

> 200 Response

```json
{
  "id": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "CREATED",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settledAt": "2023-08-15T14:30:00Z",
  "createdAt": "2023-08-15T14:25:18Z",
  "description": "Payment for invoice #1234",
  "counterpartyInformation": {
    "fullName": "John Sender",
    "country": "DE"
  },
  "receivedAmount": {
    "amount": 12550,
    "currency": {
      "code": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "decimals": 2
    }
  }
}
```

<h3 id="gettransactionbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|[Error](#schemaerror)|

<h3 id="gettransactionbyid-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|PENDING|
|status|PROCESSING|
|status|COMPLETED|
|status|REJECTED|
|status|FAILED|
|status|REFUNDED|
|type|INCOMING|
|type|OUTGOING|
|type|INCOMING|
|type|OUTGOING|
|type|INCOMING|
|type|OUTGOING|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## listTransactions

<a id="opIdlistTransactions"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/transactions', headers = headers)

print(r.json())

```

`GET /transactions`

*List transactions*

Retrieve a paginated list of transactions with optional filtering.
The transactions can be filtered by user ID, platform user ID, UMA address, 
date range, status, and transaction type.

<h3 id="listtransactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|Filter by system user ID|
|platformUserId|query|string|false|Filter by platform-specific user ID|
|umaAddress|query|string|false|Filter by UMA address (either sender or receiver)|
|senderUmaAddress|query|string|false|Filter by sender UMA address|
|receiverUmaAddress|query|string|false|Filter by receiver UMA address|
|status|query|[TransactionStatus](#schematransactionstatus)|false|Filter by transaction status|
|type|query|[TransactionType](#schematransactiontype)|false|Filter by transaction type|
|startDate|query|string(date-time)|false|Filter by start date (inclusive) in ISO 8601 format|
|endDate|query|string(date-time)|false|Filter by end date (inclusive) in ISO 8601 format|
|limit|query|integer|false|Maximum number of results to return (default 20, max 100)|
|cursor|query|string|false|Cursor for pagination (returned from previous request)|
|sortOrder|query|string|false|Order to sort results in|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|CREATED|
|status|PENDING|
|status|PROCESSING|
|status|COMPLETED|
|status|REJECTED|
|status|FAILED|
|status|REFUNDED|
|type|INCOMING|
|type|OUTGOING|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
      "status": "CREATED",
      "type": "INCOMING",
      "senderUmaAddress": "$sender@external.domain",
      "receiverUmaAddress": "$recipient@uma.domain",
      "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
      "platformUserId": "18d3e5f7b4a9c2",
      "settledAt": "2023-08-15T14:30:00Z",
      "createdAt": "2023-08-15T14:25:18Z",
      "description": "Payment for invoice #1234",
      "counterpartyInformation": {
        "fullName": "John Sender",
        "country": "DE"
      },
      "receivedAmount": {
        "amount": 12550,
        "currency": {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$",
          "decimals": 2
        }
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "string",
  "totalCount": 0
}
```

<h3 id="listtransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Invalid parameters|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<h3 id="listtransactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[oneOf]|true|none|List of transactions matching the criteria|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|any|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[Transaction](#schematransaction)|false|none|none|
|»»»» id|string|true|none|Unique identifier for the transaction|
|»»»» status|[TransactionStatus](#schematransactionstatus)|true|none|Status of a payment transaction|
|»»»» type|[TransactionType](#schematransactiontype)|true|none|Type of transaction (incoming payment or outgoing payment)|
|»»»» senderUmaAddress|string|true|none|UMA address of the payment sender|
|»»»» receiverUmaAddress|string|true|none|UMA address of the payment recipient|
|»»»» userId|string|true|none|System ID of the user (sender for outgoing, recipient for incoming)|
|»»»» platformUserId|string|true|none|Platform-specific ID of the user (sender for outgoing, recipient for incoming)|
|»»»» settledAt|string(date-time)|false|none|When the payment was or will be settled|
|»»»» createdAt|string(date-time)|false|none|When the transaction was created|
|»»»» description|string|false|none|Optional memo or description for the payment|
|»»»» counterpartyInformation|object|false|none|Additional information about the counterparty, if available|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|none|
|»»»» type|[TransactionType](#schematransactiontype)|false|none|Type of transaction (incoming payment or outgoing payment)|
|»»»» receivedAmount|[CurrencyAmount](#schemacurrencyamount)|true|none|none|
|»»»»» amount|integer(int64)|true|none|Amount in the smallest unit of the currency (e.g., cents for USD/EUR, satoshis for BTC)|
|»»»»» currency|[Currency](#schemacurrency)|true|none|none|
|»»»»»» code|string|false|none|Three-letter currency code (ISO 4217) for fiat currencies. Some cryptocurrencies may use their own ticker symbols (e.g. "SAT" for satoshis, "USDC" for USDCoin, etc.)|
|»»»»»» name|string|false|none|Full name of the currency|
|»»»»»» symbol|string|false|none|Symbol of the currency|
|»»»»»» decimals|integer|false|none|Number of decimal places for the currency|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|any|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[Transaction](#schematransaction)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|none|
|»»»» type|[TransactionType](#schematransactiontype)|false|none|Type of transaction (incoming payment or outgoing payment)|
|»»»» sentAmount|[CurrencyAmount](#schemacurrencyamount)|true|none|none|
|»»»» receivedAmount|[CurrencyAmount](#schemacurrencyamount)|false|none|none|
|»»»» exchangeRate|number|false|none|Number of sending currency units per receiving currency unit.|
|»»»» fees|integer(int64)|false|none|The fees associated with the quote in the smallest unit of the sending currency (eg. cents).|
|»»»» quoteId|string|false|none|The ID of the quote that was used to trigger this payment|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hasMore|boolean|true|none|Indicates if more results are available beyond this page|
|» nextCursor|string|false|none|Cursor to retrieve the next page of results (only present if hasMore is true)|
|» totalCount|integer|false|none|Total number of transactions matching the criteria (excluding pagination)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|PENDING|
|status|PROCESSING|
|status|COMPLETED|
|status|REJECTED|
|status|FAILED|
|status|REFUNDED|
|type|INCOMING|
|type|OUTGOING|
|type|INCOMING|
|type|OUTGOING|
|type|INCOMING|
|type|OUTGOING|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="uma-as-a-service-umaaas-api-sending-payments">Sending Payments</h1>

Endpoints for creating and managing payment quotes and executing payments

## lookupUma

<a id="opIdlookupUma"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/receiver/{receiverUmaAddress}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/receiver/{receiverUmaAddress}', headers = headers)

print(r.json())

```

`GET /receiver/{receiverUmaAddress}`

*Look up a UMA address for payment*

Lookup a receiving UMA address to determine supported currencies and exchange rates.
This endpoint helps platforms determine what currencies they can send to a given UMA address.

<h3 id="lookupuma-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|receiverUmaAddress|path|string|true|UMA address of the intended recipient|
|senderUmaAddress|query|string|false|UMA address of the sender (optional if userId is provided)|
|userId|query|string|false|System ID of the sender (optional if senderUmaAddress is provided)|

> Example responses

> 200 Response

```json
{
  "receiverUmaAddress": "$receiver@uma.domain",
  "supportedCurrencies": [
    {
      "currency": {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$",
        "decimals": 2
      },
      "estimatedExchangeRate": 1.08,
      "min": 1,
      "max": 1000000
    }
  ],
  "requiredPayerDataFields": [
    {
      "name": "FULL_NAME",
      "mandatory": true
    }
  ],
  "lookupId": "Lookup:019542f5-b3e7-1d02-0000-000000000009"
}
```

<h3 id="lookupuma-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful lookup|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Missing or invalid parameters|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|UMA address not found|[Error](#schemaerror)|

<h3 id="lookupuma-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» receiverUmaAddress|string|true|none|The UMA address that was looked up|
|» supportedCurrencies|[[CurrencyPreference](#schemacurrencypreference)]|true|none|List of currencies supported by the receiving UMA address|
|»» currency|[Currency](#schemacurrency)|true|none|none|
|»»» code|string|false|none|Three-letter currency code (ISO 4217) for fiat currencies. Some cryptocurrencies may use their own ticker symbols (e.g. "SAT" for satoshis, "USDC" for USDCoin, etc.)|
|»»» name|string|false|none|Full name of the currency|
|»»» symbol|string|false|none|Symbol of the currency|
|»»» decimals|integer|false|none|Number of decimal places for the currency|
|»» estimatedExchangeRate|number|true|none|An estimated exchange rate from the sender's currency to this currency. This is not a locked rate and is subject to change when calling the quotes endpoint.|
|»» min|integer(int64)|true|none|The minimum amount that can be received in this currency.|
|»» max|integer(int64)|true|none|The maximum amount that can be received in this currency.|
|» requiredPayerDataFields|[[CounterpartyFieldDefinition](#schemacounterpartyfielddefinition)]|false|none|Fields required by the receiving institution about the payer before payment can be completed|
|»» name|string|true|none|Name of the counterparty field|
|»» mandatory|boolean|true|none|Whether the field is mandatory|
|» lookupId|string|true|none|Unique identifier for the lookup. Needed in the subsequent create quote request.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|FULL_NAME|
|name|DATE_OF_BIRTH|
|name|NATIONALITY|
|name|PHONE_NUMBER|
|name|EMAIL|
|name|ADDRESS|
|name|TAX_ID|
|name|REGISTRATION_NUMBER|
|name|ACCOUNT_NUMBER|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## createQuote

<a id="opIdcreateQuote"></a>

> Code samples

```javascript
const inputBody = '{
  "lookupId": "LookupRequest:019542f5-b3e7-1d02-0000-000000000009",
  "sendingCurrencyCode": "USD",
  "receivingCurrencyCode": "EUR",
  "lockedCurrencySide": "SENDING",
  "lockedCurrencyAmount": 1000,
  "description": "Payment for invoice #1234"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/quotes',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/quotes', headers = headers)

print(r.json())

```

`POST /quotes`

*Create a payment quote*

Generate a quote for a payment from one UMA address to another.
The quote locks in exchange rates and fees for a set period of time and provides
payment instructions that can be used to execute the payment.

Depending on the `lockedCurrencySide` parameter, either the sending amount or 
receiving amount will be locked.

The returned quote includes payment instructions with the banking details
needed to execute the payment and fulfill the quote. These instructions
must be followed precisely, including any reference codes provided.

> Body parameter

```json
{
  "lookupId": "LookupRequest:019542f5-b3e7-1d02-0000-000000000009",
  "sendingCurrencyCode": "USD",
  "receivingCurrencyCode": "EUR",
  "lockedCurrencySide": "SENDING",
  "lockedCurrencyAmount": 1000,
  "description": "Payment for invoice #1234"
}
```

<h3 id="createquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» lookupId|body|string|true|Unique identifier for the prior receiver uma address lookup request.|
|» sendingCurrencyCode|body|string|true|Currency code for the sending amount|
|» receivingCurrencyCode|body|string|true|Currency code for the receiving amount|
|» lockedCurrencySide|body|[QuoteLockSide](#schemaquotelockside)|true|The side of the quote which should be locked and specified in the `lockedCurrencyAmount`. For example, if I want to send exactly $5 MXN from my wallet, I would set this to "sending", and the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to receive exactly $10 USD, I would set this to "receiving" and the `lockedCurrencyAmount` to 10000 (in cents).|
|» lockedCurrencyAmount|body|integer(int64)|true|The amount to send/receive in the smallest unit of the locked currency (eg. cents). See `lockedCurrencySide` for more information.|
|» description|body|string|false|Optional description/memo for the payment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lockedCurrencySide|SENDING|
|» lockedCurrencySide|RECEIVING|

> Example responses

> 201 Response

```json
{
  "quoteId": "Quote:019542f5-b3e7-1d02-0000-000000000006",
  "sendingCurrency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  },
  "receivingCurrency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  },
  "totalSendingAmount": 123010,
  "totalReceivingAmount": 1000,
  "exchangeRate": 0,
  "expiresAt": "2023-09-01T14:30:00Z",
  "feesIncluded": 10,
  "counterpartyInformation": {
    "fullName": "Jane Receiver",
    "country": "FR"
  },
  "paymentInstructions": {
    "reference": "UMA-Q12345-REF",
    "instructionsNotes": "Please ensure the reference code is included in the payment memo/description field",
    "bankAccountInfo": {
      "accountType": "CLABE"
    }
  },
  "status": "PENDING",
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000005"
}
```

<h3 id="createquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Quote created successfully. The response includes payment instructions
that the client can use to execute the payment through their banking provider.|[Quote](#schemaquote)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Missing or invalid parameters|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity - Additional counterparty information required,
or the payment cannot be completed for another reason.|Inline|

<h3 id="createquote-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## getQuoteById

<a id="opIdgetQuoteById"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/quotes/{quoteId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/quotes/{quoteId}', headers = headers)

print(r.json())

```

`GET /quotes/{quoteId}`

*Get quote by ID*

Retrieve a quote by its ID. If the quote has been settled, it will include 
the transaction ID. This allows clients to track the full lifecycle of a payment
from quote creation to settlement.

<h3 id="getquotebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|ID of the quote to retrieve|

> Example responses

> 200 Response

```json
{
  "quoteId": "Quote:019542f5-b3e7-1d02-0000-000000000006",
  "sendingCurrency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  },
  "receivingCurrency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  },
  "totalSendingAmount": 123010,
  "totalReceivingAmount": 1000,
  "exchangeRate": 0,
  "expiresAt": "2023-09-01T14:30:00Z",
  "feesIncluded": 10,
  "counterpartyInformation": {
    "fullName": "Jane Receiver",
    "country": "FR"
  },
  "paymentInstructions": {
    "reference": "UMA-Q12345-REF",
    "instructionsNotes": "Please ensure the reference code is included in the payment memo/description field",
    "bankAccountInfo": {
      "accountType": "CLABE"
    }
  },
  "status": "PENDING",
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000005"
}
```

<h3 id="getquotebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Quote retrieved successfully|[Quote](#schemaquote)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Quote not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## getPaymentStatus

<a id="opIdgetPaymentStatus"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/payments/status/{quoteId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/payments/status/{quoteId}', headers = headers)

print(r.json())

```

`GET /payments/status/{quoteId}`

*Check payment status for a quote*

Check the status of a payment associated with a previously created quote.
This allows clients to verify if a payment they've initiated using the 
payment instructions has been received and processed.

<h3 id="getpaymentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|ID of the quote to check payment status for|
|reference|query|string|false|Payment reference code (optional, but helps with verification)|

> Example responses

> 200 Response

```json
{
  "quoteId": "Quote:019542f5-b3e7-1d02-0000-000000000006",
  "status": "RECEIVED",
  "statusMessage": "Payment received and being processed",
  "transaction": {
    "id": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
    "status": "CREATED",
    "type": "INCOMING",
    "senderUmaAddress": "$sender@external.domain",
    "receiverUmaAddress": "$recipient@uma.domain",
    "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
    "platformUserId": "18d3e5f7b4a9c2",
    "settledAt": "2023-08-15T14:30:00Z",
    "createdAt": "2023-08-15T14:25:18Z",
    "description": "Payment for invoice #1234",
    "counterpartyInformation": {
      "fullName": "John Sender",
      "country": "DE"
    },
    "sentAmount": {
      "amount": 12550,
      "currency": {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$",
        "decimals": 2
      }
    },
    "receivedAmount": {
      "amount": 12550,
      "currency": {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$",
        "decimals": 2
      }
    },
    "exchangeRate": 1.08,
    "fees": 10,
    "quoteId": "Quote:019542f5-b3e7-1d02-0000-000000000006"
  }
}
```

<h3 id="getpaymentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Payment status retrieved successfully|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Quote not found|[Error](#schemaerror)|

<h3 id="getpaymentstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» quoteId|string|true|none|ID of the quote|
|» status|string|true|none|Current status of the payment|
|» statusMessage|string|false|none|Human-readable description of the current status|
|» transaction|any|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[Transaction](#schematransaction)|false|none|none|
|»»» id|string|true|none|Unique identifier for the transaction|
|»»» status|[TransactionStatus](#schematransactionstatus)|true|none|Status of a payment transaction|
|»»» type|[TransactionType](#schematransactiontype)|true|none|Type of transaction (incoming payment or outgoing payment)|
|»»» senderUmaAddress|string|true|none|UMA address of the payment sender|
|»»» receiverUmaAddress|string|true|none|UMA address of the payment recipient|
|»»» userId|string|true|none|System ID of the user (sender for outgoing, recipient for incoming)|
|»»» platformUserId|string|true|none|Platform-specific ID of the user (sender for outgoing, recipient for incoming)|
|»»» settledAt|string(date-time)|false|none|When the payment was or will be settled|
|»»» createdAt|string(date-time)|false|none|When the transaction was created|
|»»» description|string|false|none|Optional memo or description for the payment|
|»»» counterpartyInformation|object|false|none|Additional information about the counterparty, if available|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|object|false|none|none|
|»»» type|[TransactionType](#schematransactiontype)|false|none|Type of transaction (incoming payment or outgoing payment)|
|»»» sentAmount|[CurrencyAmount](#schemacurrencyamount)|true|none|none|
|»»»» amount|integer(int64)|true|none|Amount in the smallest unit of the currency (e.g., cents for USD/EUR, satoshis for BTC)|
|»»»» currency|[Currency](#schemacurrency)|true|none|none|
|»»»»» code|string|false|none|Three-letter currency code (ISO 4217) for fiat currencies. Some cryptocurrencies may use their own ticker symbols (e.g. "SAT" for satoshis, "USDC" for USDCoin, etc.)|
|»»»»» name|string|false|none|Full name of the currency|
|»»»»» symbol|string|false|none|Symbol of the currency|
|»»»»» decimals|integer|false|none|Number of decimal places for the currency|
|»»» receivedAmount|[CurrencyAmount](#schemacurrencyamount)|false|none|none|
|»»» exchangeRate|number|false|none|Number of sending currency units per receiving currency unit.|
|»»» fees|integer(int64)|false|none|The fees associated with the quote in the smallest unit of the sending currency (eg. cents).|
|»»» quoteId|string|false|none|The ID of the quote that was used to trigger this payment|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|RECEIVED|
|status|PROCESSING|
|status|COMPLETED|
|status|FAILED|
|status|EXPIRED|
|status|CREATED|
|status|PENDING|
|status|PROCESSING|
|status|COMPLETED|
|status|REJECTED|
|status|FAILED|
|status|REFUNDED|
|type|INCOMING|
|type|OUTGOING|
|type|INCOMING|
|type|OUTGOING|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="uma-as-a-service-umaaas-api-webhooks">Webhooks</h1>

Webhook endpoints and configuration for receiving notifications

## sendTestWebhook

<a id="opIdsendTestWebhook"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/webhooks/test',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/webhooks/test', headers = headers)

print(r.json())

```

`POST /webhooks/test`

*Send a test webhook*

Send a test webhook to the configured endpoint

> Example responses

> 200 Response

```json
{
  "url": "https://api.mycompany.com/webhooks/uma",
  "response_status": 200,
  "response_body": "string"
}
```

<h3 id="sendtestwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Webhook delivered successfully|[TestWebhookResponse](#schematestwebhookresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Webhook delivery failed|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="uma-as-a-service-umaaas-api-invitations">Invitations</h1>

Endpoints for creating, claiming and managing UMA invitations

## createInvitation

<a id="opIdcreateInvitation"></a>

> Code samples

```javascript
const inputBody = '{
  "inviterUma": "$inviter@uma.domain",
  "expiresAt": "2023-09-01T14:30:00Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/invitations',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/invitations', headers = headers)

print(r.json())

```

`POST /invitations`

*Create an UMA invitation from a given platform user.*

Create an UMA invitation from a given platform user.

> Body parameter

```json
{
  "inviterUma": "$inviter@uma.domain",
  "expiresAt": "2023-09-01T14:30:00Z"
}
```

<h3 id="createinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» inviterUma|body|string|true|The UMA address of the user creating the invitation|
|» expiresAt|body|string(date-time)|false|When the invitation expires (if at all)|

> Example responses

> 201 Response

```json
{
  "code": "019542f5",
  "createdAt": "2023-09-01T14:30:00Z",
  "claimedAt": "2023-09-01T14:30:00Z",
  "url": "https://uma.me/i/019542f5",
  "expiresAt": "2023-09-01T14:30:00Z",
  "inviterUma": "$inviter@uma.domain",
  "inviteeUma": "$invitee@uma.domain",
  "status": "PENDING"
}
```

<h3 id="createinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Invitation created successfully|[UmaInvitation](#schemaumainvitation)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## getInvitation

<a id="opIdgetInvitation"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/invitations/{invitationCode}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/invitations/{invitationCode}', headers = headers)

print(r.json())

```

`GET /invitations/{invitationCode}`

*Get a specific UMA invitation by code.*

Get a specific UMA invitation by code.

<h3 id="getinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationCode|path|string|true|The code of the invitation to get|

> Example responses

> 200 Response

```json
{
  "code": "019542f5",
  "createdAt": "2023-09-01T14:30:00Z",
  "claimedAt": "2023-09-01T14:30:00Z",
  "url": "https://uma.me/i/019542f5",
  "expiresAt": "2023-09-01T14:30:00Z",
  "inviterUma": "$inviter@uma.domain",
  "inviteeUma": "$invitee@uma.domain",
  "status": "PENDING"
}
```

<h3 id="getinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Invitation retrieved successfully|[UmaInvitation](#schemaumainvitation)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Invitation not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## claimInvitation

<a id="opIdclaimInvitation"></a>

> Code samples

```javascript
const inputBody = '{
  "inviteeUma": "$invitee@uma.domain"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/invitations/{invitationCode}/claim',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/invitations/{invitationCode}/claim', headers = headers)

print(r.json())

```

`POST /invitations/{invitationCode}/claim`

*Claim an UMA invitation*

Claim an UMA invitation by associating it with an invitee UMA address.

When an invitation is successfully claimed:
1. The invitation status changes from PENDING to CLAIMED
2. The invitee UMA address is associated with the invitation
3. An INVITATION_CLAIMED webhook is triggered to notify the platform that created the invitation

This endpoint allows users to accept invitations sent to them by other UMA users.

> Body parameter

```json
{
  "inviteeUma": "$invitee@uma.domain"
}
```

<h3 id="claiminvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationCode|path|string|true|The code of the invitation to claim|
|body|body|object|true|none|
|» inviteeUma|body|string|true|The UMA address of the user claiming the invitation|

> Example responses

> 200 Response

```json
{
  "code": "019542f5",
  "createdAt": "2023-09-01T14:30:00Z",
  "claimedAt": "2023-09-01T14:30:00Z",
  "url": "https://uma.me/i/019542f5",
  "expiresAt": "2023-09-01T14:30:00Z",
  "inviterUma": "$inviter@uma.domain",
  "inviteeUma": "$invitee@uma.domain",
  "status": "PENDING"
}
```

<h3 id="claiminvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Invitation claimed successfully|[UmaInvitation](#schemaumainvitation)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Invitation not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## cancelInvitation

<a id="opIdcancelInvitation"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/invitations/{invitationCode}/cancel',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/invitations/{invitationCode}/cancel', headers = headers)

print(r.json())

```

`POST /invitations/{invitationCode}/cancel`

*Cancel an UMA invitation*

Cancel a pending UMA invitation. Only the inviter or platform can cancel an invitation.

When an invitation is cancelled:
1. The invitation status changes from PENDING to CANCELLED
2. The invitation can no longer be claimed
3. The invitation URL will show as cancelled when accessed

Only pending invitations can be cancelled. Attempting to cancel an invitation
that is already claimed, expired, or cancelled will result in an error.

<h3 id="cancelinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationCode|path|string|true|The code of the invitation to cancel|

> Example responses

> 200 Response

```json
{
  "code": "019542f5",
  "createdAt": "2023-09-01T14:30:00Z",
  "claimedAt": "2023-09-01T14:30:00Z",
  "url": "https://uma.me/i/019542f5",
  "expiresAt": "2023-09-01T14:30:00Z",
  "inviterUma": "$inviter@uma.domain",
  "inviteeUma": "$invitee@uma.domain",
  "status": "PENDING"
}
```

<h3 id="cancelinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Invitation cancelled successfully|[UmaInvitation](#schemaumainvitation)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Invitation cannot be cancelled (already claimed, expired, or cancelled)|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden - Only the platform which created the invitation can cancel it|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Invitation not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="uma-as-a-service-umaaas-api-api-tokens">API Tokens</h1>

## createToken

<a id="opIdcreateToken"></a>

> Code samples

```javascript
const inputBody = '{
  "name": "Sandbox read-only",
  "permissions": [
    "VIEW"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/tokens',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/tokens', headers = headers)

print(r.json())

```

`POST /tokens`

*Create a new API token*

Create a new API token to access the UMAaaS APIs.

> Body parameter

```json
{
  "name": "Sandbox read-only",
  "permissions": [
    "VIEW"
  ]
}
```

<h3 id="createtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Name of the token to help identify it|
|» permissions|body|[[Permission](#schemapermission)]|true|A list of permissions to grant to the token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|VIEW|
|» permissions|TRANSACT|
|» permissions|MANAGE|

> Example responses

> 201 Response

```json
{
  "id": "Token:019542f5-b3e7-1d02-0000-000000000001",
  "name": "Sandbox read-only token",
  "permissions": [
    "VIEW"
  ],
  "clientId": "01947d2284054f890000e63bca4810df",
  "clientSecret": "ed0ad25881e234cc28fb2dec0a4fe64e4172",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z"
}
```

<h3 id="createtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|API token created successfully|[ApiToken](#schemaapitoken)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## listTokens

<a id="opIdlistTokens"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/tokens',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/tokens', headers = headers)

print(r.json())

```

`GET /tokens`

*List tokens*

Retrieve a list of API tokens with optional filtering parameters. Returns all tokens that match
the specified filters. If no filters are provided, returns all tokens (paginated).

<h3 id="listtokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Filter by name of the token|
|createdAfter|query|string(date-time)|false|Filter users created after this timestamp (inclusive)|
|createdBefore|query|string(date-time)|false|Filter users created before this timestamp (inclusive)|
|updatedAfter|query|string(date-time)|false|Filter users updated after this timestamp (inclusive)|
|updatedBefore|query|string(date-time)|false|Filter users updated before this timestamp (inclusive)|
|limit|query|integer|false|Maximum number of results to return (default 20, max 100)|
|cursor|query|string|false|Cursor for pagination (returned from previous request)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "Token:019542f5-b3e7-1d02-0000-000000000001",
      "name": "Sandbox read-only token",
      "permissions": [
        "VIEW"
      ],
      "clientId": "01947d2284054f890000e63bca4810df",
      "clientSecret": "ed0ad25881e234cc28fb2dec0a4fe64e4172",
      "createdAt": "2023-07-21T17:32:28Z",
      "updatedAt": "2023-07-21T17:32:28Z"
    }
  ],
  "hasMore": true,
  "nextCursor": "string",
  "totalCount": 0
}
```

<h3 id="listtokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request - Invalid parameters|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|

<h3 id="listtokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[[ApiToken](#schemaapitoken)]|true|none|List of tokens matching the filter criteria|
|»» id|string|true|none|System-generated unique identifier|
|»» name|string|true|none|Name of the token|
|»» permissions|[[Permission](#schemapermission)]|true|none|A list of permissions granted to the token|
|»» clientId|string|true|none|An opaque identifier that should be used as a client_id (or username)  in the HTTP Basic Authentication scheme when issuing http requests to UMAaaS.|
|»» clientSecret|string|false|none|The secret that should be used to authenticate against UMAaaS API. This secret is not stored and will never be available again after creation.  Platform must keep this secret secure as it grants access to the account.|
|»» createdAt|string(date-time)|true|none|Creation timestamp|
|»» updatedAt|string(date-time)|true|none|Last update timestamp|
|» hasMore|boolean|true|none|Indicates if more results are available beyond this page|
|» nextCursor|string|false|none|Cursor to retrieve the next page of results (only present if hasMore is true)|
|» totalCount|integer|false|none|Total number of tokens matching the criteria (excluding pagination)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## getTokenById

<a id="opIdgetTokenById"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/tokens/{tokenId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.lightspark.com/umaaas/v1/tokens/{tokenId}', headers = headers)

print(r.json())

```

`GET /tokens/{tokenId}`

*Get API token by ID*

Retrieve an API token by their system-generated ID

<h3 id="gettokenbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|System-generated unique token identifier|

> Example responses

> 200 Response

```json
{
  "id": "Token:019542f5-b3e7-1d02-0000-000000000001",
  "name": "Sandbox read-only token",
  "permissions": [
    "VIEW"
  ],
  "clientId": "01947d2284054f890000e63bca4810df",
  "clientSecret": "ed0ad25881e234cc28fb2dec0a4fe64e4172",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z"
}
```

<h3 id="gettokenbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiToken](#schemaapitoken)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Token not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## deleteTokenById

<a id="opIddeleteTokenById"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/tokens/{tokenId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.lightspark.com/umaaas/v1/tokens/{tokenId}', headers = headers)

print(r.json())

```

`DELETE /tokens/{tokenId}`

*Delete API token by ID*

Delete an API token by their system-generated ID

<h3 id="deletetokenbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|System-generated unique token identifier|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "details": {}
}
```

<h3 id="deletetokenbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|API token deleted successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Token not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="uma-as-a-service-umaaas-api-sandbox">Sandbox</h1>

## testSend

<a id="opIdtestSend"></a>

> Code samples

```javascript
const inputBody = '{
  "reference": "UMA-Q12345-REF",
  "currencyCode": "USD",
  "currencyAmount": 1000
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/sandbox/send',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/sandbox/send', headers = headers)

print(r.json())

```

`POST /sandbox/send`

*Simulate sending funds*

Simulate sending funds to the bank account as instructed in the quote. 
This endpoint is only for the sandbox environment and will fail for production platforms/keys.

> Body parameter

```json
{
  "reference": "UMA-Q12345-REF",
  "currencyCode": "USD",
  "currencyAmount": 1000
}
```

<h3 id="testsend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» reference|body|string|true|The unique reference code that was in the payment instructions|
|» currencyCode|body|string|true|Currency code for the funds to be sent|
|» currencyAmount|body|integer(int64)|true|The amount to send in the smallest unit of the currency (eg. cents)|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "details": {}
}
```

<h3 id="testsend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Funds received successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden - request was made with a production platform token|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Reference not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## testReceive

<a id="opIdtestReceive"></a>

> Code samples

```javascript
const inputBody = '{
  "senderUmaAddress": "$success.usd@sandbox.uma.money",
  "receiverUmaAddress": "$receiver@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "receivingCurrencyCode": "USD",
  "receivingCurrencyAmount": 1000
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaaas/v1/sandbox/receive',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.lightspark.com/umaaas/v1/sandbox/receive', headers = headers)

print(r.json())

```

`POST /sandbox/receive`

*Simulate payment send to test receiving a payment*

Simulate sending payment from an sandbox uma address to a platform user to test payment receive.
This endpoint is only for the sandbox environment and will fail for production platforms/keys.

> Body parameter

```json
{
  "senderUmaAddress": "$success.usd@sandbox.uma.money",
  "receiverUmaAddress": "$receiver@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "receivingCurrencyCode": "USD",
  "receivingCurrencyAmount": 1000
}
```

<h3 id="testreceive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» senderUmaAddress|body|string|true|UMA address of the sender from the sandbox|
|» receiverUmaAddress|body|string|false|UMA address of the receiver (optional if userId is provided)|
|» userId|body|string|false|System ID of the receiver (optional if receiverUmaAddress is provided)|
|» receivingCurrencyCode|body|string|true|The currency code for the receiving amount|
|» receivingCurrencyAmount|body|integer(int64)|true|The amount to be received in the smallest unit of the currency (eg. cents)|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "message": "string",
  "details": {}
}
```

<h3 id="testreceive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Payment triggered successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden - request was made with a production platform token|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Sender or receiver not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "message": "string",
  "details": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Error code|
|message|string|false|none|Error message|
|details|object|false|none|Additional error details|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "line1": "123 Main Street",
  "line2": "Apt 4B",
  "city": "San Francisco",
  "state": "CA",
  "postalCode": "94105",
  "country": "US"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line1|string|true|none|Street address line 1|
|line2|string|false|none|Street address line 2|
|city|string|false|none|City|
|state|string|false|none|State/Province/Region|
|postalCode|string|true|none|Postal/ZIP code|
|country|string|true|none|Country code (ISO 3166-1 alpha-2)|

<h2 id="tocS_ClabeAccountInfo">ClabeAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclabeaccountinfo"></a>
<a id="schema_ClabeAccountInfo"></a>
<a id="tocSclabeaccountinfo"></a>
<a id="tocsclabeaccountinfo"></a>

```json
{
  "clabeNumber": "123456789012345678",
  "bankName": "BBVA Mexico",
  "accountHolderName": "John Doe"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clabeNumber|string|true|none|18-digit CLABE number (Mexican banking standard)|
|bankName|string|true|none|Name of the bank|
|accountHolderName|string|false|none|Name of the account holder|

<h2 id="tocS_UsAccountInfo">UsAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemausaccountinfo"></a>
<a id="schema_UsAccountInfo"></a>
<a id="tocSusaccountinfo"></a>
<a id="tocsusaccountinfo"></a>

```json
{
  "accountNumber": "123456789",
  "routingNumber": "987654321",
  "accountCategory": "CHECKING",
  "bankName": "Chase Bank",
  "accountHolderName": "John Doe"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|US bank account number|
|routingNumber|string|true|none|ACH routing number (9 digits)|
|accountCategory|string|true|none|Type of account (checking or savings)|
|bankName|string|false|none|Name of the bank|
|accountHolderName|string|false|none|Name of the account holder|

#### Enumerated Values

|Property|Value|
|---|---|
|accountCategory|CHECKING|
|accountCategory|SAVINGS|

<h2 id="tocS_PixAccountInfo">PixAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemapixaccountinfo"></a>
<a id="schema_PixAccountInfo"></a>
<a id="tocSpixaccountinfo"></a>
<a id="tocspixaccountinfo"></a>

```json
{
  "pixKey": "55119876543210",
  "pixKeyType": "PHONE",
  "bankName": "Nubank",
  "accountHolderName": "John Doe"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pixKey|string|true|none|PIX key for Brazilian instant payments|
|pixKeyType|string|true|none|Type of PIX key being used|
|bankName|string|false|none|Name of the bank|
|accountHolderName|string|false|none|Name of the account holder|

#### Enumerated Values

|Property|Value|
|---|---|
|pixKeyType|CPF|
|pixKeyType|CNPJ|
|pixKeyType|EMAIL|
|pixKeyType|PHONE|
|pixKeyType|RANDOM|

<h2 id="tocS_IbanAccountInfo">IbanAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountinfo"></a>
<a id="schema_IbanAccountInfo"></a>
<a id="tocSibanaccountinfo"></a>
<a id="tocsibanaccountinfo"></a>

```json
{
  "iban": "DE89370400440532013000",
  "swiftBic": "DEUTDEFF",
  "bankName": "Deutsche Bank",
  "accountHolderName": "John Doe"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iban|string|true|none|International Bank Account Number|
|swiftBic|string|false|none|SWIFT/BIC code (8 or 11 characters)|
|bankName|string|true|none|Name of the bank|
|accountHolderName|string|false|none|Name of the account holder|

<h2 id="tocS_BankAccountType">BankAccountType</h2>
<!-- backwards compatibility -->
<a id="schemabankaccounttype"></a>
<a id="schema_BankAccountType"></a>
<a id="tocSbankaccounttype"></a>
<a id="tocsbankaccounttype"></a>

```json
"CLABE"

```

Type of bank account information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Type of bank account information|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|CLABE|
|*anonymous*|US_ACCOUNT|
|*anonymous*|PIX|
|*anonymous*|IBAN|
|*anonymous*|FBO|

<h2 id="tocS_UserBankAccountInfo">UserBankAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserbankaccountinfo"></a>
<a id="schema_UserBankAccountInfo"></a>
<a id="tocSuserbankaccountinfo"></a>
<a id="tocsuserbankaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "platformAccountId": "acc_123456789"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|[BankAccountType](#schemabankaccounttype)|true|none|Type of bank account information|
|platformAccountId|string|false|none|Platform-specific identifier for this bank account. This optional field allows platforms<br>to link bank accounts to their internal account systems. The value can be any string<br>that helps identify the account in your system (e.g. database IDs, custom references, etc.).<br><br>This field is particularly useful when:<br>- Tracking multiple bank accounts for the same user<br>- Linking accounts to internal accounting systems<br>- Maintaining consistency between UMAaS and your platform's account records|

<h2 id="tocS_UserClabeAccountInfo">UserClabeAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserclabeaccountinfo"></a>
<a id="schema_UserClabeAccountInfo"></a>
<a id="tocSuserclabeaccountinfo"></a>
<a id="tocsuserclabeaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "platformAccountId": "acc_123456789",
  "clabeNumber": "123456789012345678",
  "bankName": "BBVA Mexico",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: UserBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[UserBankAccountInfo](#schemauserbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ClabeAccountInfo](#schemaclabeaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_UserUsAccountInfo">UserUsAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserusaccountinfo"></a>
<a id="schema_UserUsAccountInfo"></a>
<a id="tocSuserusaccountinfo"></a>
<a id="tocsuserusaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "platformAccountId": "acc_123456789",
  "accountNumber": "123456789",
  "routingNumber": "987654321",
  "accountCategory": "CHECKING",
  "bankName": "Chase Bank",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: UserBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[UserBankAccountInfo](#schemauserbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[UsAccountInfo](#schemausaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_UserPixAccountInfo">UserPixAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserpixaccountinfo"></a>
<a id="schema_UserPixAccountInfo"></a>
<a id="tocSuserpixaccountinfo"></a>
<a id="tocsuserpixaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "platformAccountId": "acc_123456789",
  "pixKey": "55119876543210",
  "pixKeyType": "PHONE",
  "bankName": "Nubank",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: UserBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[UserBankAccountInfo](#schemauserbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PixAccountInfo](#schemapixaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_UserIbanAccountInfo">UserIbanAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemauseribanaccountinfo"></a>
<a id="schema_UserIbanAccountInfo"></a>
<a id="tocSuseribanaccountinfo"></a>
<a id="tocsuseribanaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "platformAccountId": "acc_123456789",
  "iban": "DE89370400440532013000",
  "swiftBic": "DEUTDEFF",
  "bankName": "Deutsche Bank",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: UserBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[UserBankAccountInfo](#schemauserbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[IbanAccountInfo](#schemaibanaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_UserFboAccountInfo">UserFboAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserfboaccountinfo"></a>
<a id="schema_UserFboAccountInfo"></a>
<a id="tocSuserfboaccountinfo"></a>
<a id="tocsuserfboaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "platformAccountId": "acc_123456789",
  "currencyCode": "USD"
}

```

### Properties

allOf - discriminator: UserBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[UserBankAccountInfo](#schemauserbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» currencyCode|string|true|none|Three-letter currency code (ISO 4217)|

<h2 id="tocS_PaymentInstructions">PaymentInstructions</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstructions"></a>
<a id="schema_PaymentInstructions"></a>
<a id="tocSpaymentinstructions"></a>
<a id="tocspaymentinstructions"></a>

```json
{
  "reference": "UMA-Q12345-REF",
  "instructionsNotes": "Please ensure the reference code is included in the payment memo/description field",
  "bankAccountInfo": {
    "accountType": "CLABE"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reference|string|true|none|Unique reference code that must be included with the payment to properly credit it|
|instructionsNotes|string|false|none|Additional human-readable instructions for making the payment|
|bankAccountInfo|[PaymentBankAccountInfo](#schemapaymentbankaccountinfo)|true|none|none|

<h2 id="tocS_PaymentBankAccountInfo">PaymentBankAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentbankaccountinfo"></a>
<a id="schema_PaymentBankAccountInfo"></a>
<a id="tocSpaymentbankaccountinfo"></a>
<a id="tocspaymentbankaccountinfo"></a>

```json
{
  "accountType": "CLABE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|[BankAccountType](#schemabankaccounttype)|true|none|Type of bank account information|

<h2 id="tocS_PaymentClabeAccountInfo">PaymentClabeAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentclabeaccountinfo"></a>
<a id="schema_PaymentClabeAccountInfo"></a>
<a id="tocSpaymentclabeaccountinfo"></a>
<a id="tocspaymentclabeaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "clabeNumber": "123456789012345678",
  "bankName": "BBVA Mexico",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: PaymentBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaymentBankAccountInfo](#schemapaymentbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[ClabeAccountInfo](#schemaclabeaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_PaymentUsAccountInfo">PaymentUsAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentusaccountinfo"></a>
<a id="schema_PaymentUsAccountInfo"></a>
<a id="tocSpaymentusaccountinfo"></a>
<a id="tocspaymentusaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "accountNumber": "123456789",
  "routingNumber": "987654321",
  "accountCategory": "CHECKING",
  "bankName": "Chase Bank",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: PaymentBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaymentBankAccountInfo](#schemapaymentbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[UsAccountInfo](#schemausaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_PaymentPixAccountInfo">PaymentPixAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentpixaccountinfo"></a>
<a id="schema_PaymentPixAccountInfo"></a>
<a id="tocSpaymentpixaccountinfo"></a>
<a id="tocspaymentpixaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "pixKey": "55119876543210",
  "pixKeyType": "PHONE",
  "bankName": "Nubank",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: PaymentBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaymentBankAccountInfo](#schemapaymentbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PixAccountInfo](#schemapixaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_PaymentIbanAccountInfo">PaymentIbanAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentibanaccountinfo"></a>
<a id="schema_PaymentIbanAccountInfo"></a>
<a id="tocSpaymentibanaccountinfo"></a>
<a id="tocspaymentibanaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "iban": "DE89370400440532013000",
  "swiftBic": "DEUTDEFF",
  "bankName": "Deutsche Bank",
  "accountHolderName": "John Doe"
}

```

### Properties

allOf - discriminator: PaymentBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaymentBankAccountInfo](#schemapaymentbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[IbanAccountInfo](#schemaibanaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|

<h2 id="tocS_PaymentFboAccountInfo">PaymentFboAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentfboaccountinfo"></a>
<a id="schema_PaymentFboAccountInfo"></a>
<a id="tocSpaymentfboaccountinfo"></a>
<a id="tocspaymentfboaccountinfo"></a>

```json
{
  "accountType": "CLABE",
  "paymentUrl": "https://api.umaaas.uma.money/confirm",
  "paymentMethod": "POST"
}

```

### Properties

allOf - discriminator: PaymentBankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[PaymentBankAccountInfo](#schemapaymentbankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» paymentUrl|string(uri)|true|none|The url to make request to in order to confirm payment|
|» paymentMethod|string|true|none|The HTTP method to use for confirming the payment|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentMethod|POST|
|paymentMethod|GET|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "User:019542f5-b3e7-1d02-0000-000000000001",
  "umaAddress": "$john.doe@uma.domain.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z",
  "isDeleted": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|System-generated unique identifier|
|umaAddress|string|true|none|full UMA address|
|platformUserId|string|true|none|Platform-specific user identifier|
|userType|string|true|none|Whether the user is an individual or a business entity|
|createdAt|string(date-time)|false|read-only|Creation timestamp|
|updatedAt|string(date-time)|false|read-only|Last update timestamp|
|isDeleted|boolean|false|read-only|Whether the user is marked as deleted|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|

<h2 id="tocS_IndividualUser">IndividualUser</h2>
<!-- backwards compatibility -->
<a id="schemaindividualuser"></a>
<a id="schema_IndividualUser"></a>
<a id="tocSindividualuser"></a>
<a id="tocsindividualuser"></a>

```json
{
  "id": "User:019542f5-b3e7-1d02-0000-000000000001",
  "umaAddress": "$john.doe@uma.domain.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z",
  "isDeleted": false,
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "nationality": "US",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "platformAccountId": "acc_123456789"
  }
}

```

### Properties

allOf - discriminator: User.userType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[User](#schemauser)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» fullName|string|true|none|Individual's full name|
|» dateOfBirth|string(date)|true|none|Date of birth in ISO 8601 format (YYYY-MM-DD)|
|» nationality|string|false|none|Country code (ISO 3166-1 alpha-2)|
|» address|[Address](#schemaaddress)|true|none|none|
|» bankAccountInfo|[UserBankAccountInfo](#schemauserbankaccountinfo)|true|none|none|

<h2 id="tocS_BusinessUser">BusinessUser</h2>
<!-- backwards compatibility -->
<a id="schemabusinessuser"></a>
<a id="schema_BusinessUser"></a>
<a id="tocSbusinessuser"></a>
<a id="tocsbusinessuser"></a>

```json
{
  "id": "User:019542f5-b3e7-1d02-0000-000000000001",
  "umaAddress": "$john.doe@uma.domain.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z",
  "isDeleted": false,
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "platformAccountId": "acc_123456789"
  },
  "businessInfo": {
    "legalName": "Acme Corporation, Inc.",
    "registrationNumber": "BRN-123456789",
    "taxId": "EIN-987654321"
  }
}

```

### Properties

allOf - discriminator: User.userType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[User](#schemauser)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» address|[Address](#schemaaddress)|true|none|none|
|» bankAccountInfo|[UserBankAccountInfo](#schemauserbankaccountinfo)|true|none|none|
|» businessInfo|object|true|none|Additional information required for business entities|
|»» legalName|string|true|none|Legal name of the business|
|»» registrationNumber|string|false|none|Business registration number|
|»» taxId|string|false|none|Tax identification number|

<h2 id="tocS_CounterpartyFieldDefinition">CounterpartyFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyfielddefinition"></a>
<a id="schema_CounterpartyFieldDefinition"></a>
<a id="tocScounterpartyfielddefinition"></a>
<a id="tocscounterpartyfielddefinition"></a>

```json
{
  "name": "FULL_NAME",
  "mandatory": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the counterparty field|
|mandatory|boolean|true|none|Whether the field is mandatory|

#### Enumerated Values

|Property|Value|
|---|---|
|name|FULL_NAME|
|name|DATE_OF_BIRTH|
|name|NATIONALITY|
|name|PHONE_NUMBER|
|name|EMAIL|
|name|ADDRESS|
|name|TAX_ID|
|name|REGISTRATION_NUMBER|
|name|ACCOUNT_NUMBER|

<h2 id="tocS_PlatformCurrencyConfig">PlatformCurrencyConfig</h2>
<!-- backwards compatibility -->
<a id="schemaplatformcurrencyconfig"></a>
<a id="schema_PlatformCurrencyConfig"></a>
<a id="tocSplatformcurrencyconfig"></a>
<a id="tocsplatformcurrencyconfig"></a>

```json
{
  "currencyCode": "USD",
  "minAmount": 100,
  "maxAmount": 1000000,
  "requiredCounterpartyFields": [
    {
      "name": "FULL_NAME",
      "mandatory": true
    },
    {
      "name": "DATE_OF_BIRTH",
      "mandatory": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|Three-letter currency code (ISO 4217)|
|minAmount|integer(int64)|true|none|Minimum amount that can be sent in the smallest unit of this currency|
|maxAmount|integer(int64)|true|none|Maximum amount that can be sent in the smallest unit of this currency|
|requiredCounterpartyFields|[[CounterpartyFieldDefinition](#schemacounterpartyfielddefinition)]|true|none|List of counterparty fields and their requirements|

<h2 id="tocS_PlatformConfig">PlatformConfig</h2>
<!-- backwards compatibility -->
<a id="schemaplatformconfig"></a>
<a id="schema_PlatformConfig"></a>
<a id="tocSplatformconfig"></a>
<a id="tocsplatformconfig"></a>

```json
{
  "id": "PlatformConfig:019542f5-b3e7-1d02-0000-000000000003",
  "umaDomain": "platform.uma.domain",
  "webhookEndpoint": "https://api.mycompany.com/webhooks/uma",
  "supportedCurrencies": [
    {
      "currencyCode": "USD",
      "minAmount": 100,
      "maxAmount": 1000000,
      "requiredCounterpartyFields": [
        {
          "name": "FULL_NAME",
          "mandatory": true
        },
        {
          "name": "DATE_OF_BIRTH",
          "mandatory": true
        }
      ]
    }
  ],
  "createdAt": "2023-06-15T12:30:45Z",
  "updatedAt": "2023-06-15T12:30:45Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|System-generated unique identifier|
|umaDomain|string|false|none|UMA domain for this platform|
|webhookEndpoint|string|false|none|URL where webhook notifications will be sent|
|supportedCurrencies|[[PlatformCurrencyConfig](#schemaplatformcurrencyconfig)]|false|none|List of currencies supported by the platform|
|createdAt|string(date-time)|false|read-only|Creation timestamp|
|updatedAt|string(date-time)|false|read-only|Last update timestamp|

<h2 id="tocS_TransactionStatus">TransactionStatus</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatus"></a>
<a id="schema_TransactionStatus"></a>
<a id="tocStransactionstatus"></a>
<a id="tocstransactionstatus"></a>

```json
"CREATED"

```

Status of a payment transaction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Status of a payment transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|CREATED|
|*anonymous*|PENDING|
|*anonymous*|PROCESSING|
|*anonymous*|COMPLETED|
|*anonymous*|REJECTED|
|*anonymous*|FAILED|
|*anonymous*|REFUNDED|

<h2 id="tocS_TransactionType">TransactionType</h2>
<!-- backwards compatibility -->
<a id="schematransactiontype"></a>
<a id="schema_TransactionType"></a>
<a id="tocStransactiontype"></a>
<a id="tocstransactiontype"></a>

```json
"INCOMING"

```

Type of transaction (incoming payment or outgoing payment)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Type of transaction (incoming payment or outgoing payment)|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|INCOMING|
|*anonymous*|OUTGOING|

<h2 id="tocS_WebhookType">WebhookType</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktype"></a>
<a id="schema_WebhookType"></a>
<a id="tocSwebhooktype"></a>
<a id="tocswebhooktype"></a>

```json
"INCOMING_PAYMENT"

```

Type of webhook event, used by the receiver to identify which webhook is being received

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Type of webhook event, used by the receiver to identify which webhook is being received|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|INCOMING_PAYMENT|
|*anonymous*|OUTGOING_PAYMENT|
|*anonymous*|TEST|
|*anonymous*|BULK_UPLOAD|
|*anonymous*|INVITATION_CLAIMED|

<h2 id="tocS_TestWebhookResponse">TestWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schematestwebhookresponse"></a>
<a id="schema_TestWebhookResponse"></a>
<a id="tocStestwebhookresponse"></a>
<a id="tocstestwebhookresponse"></a>

```json
{
  "url": "https://api.mycompany.com/webhooks/uma",
  "response_status": 200,
  "response_body": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|none|URL where the webhook was sent|
|response_status|integer|true|none|The HTTP status code returned by the webhook endpoint|
|response_body|string|false|none|The raw body content returned by the webhook endpoint in response to the request|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "code": "USD",
  "name": "United States Dollar",
  "symbol": "$",
  "decimals": 2
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Three-letter currency code (ISO 4217) for fiat currencies. Some cryptocurrencies may use their own ticker symbols (e.g. "SAT" for satoshis, "USDC" for USDCoin, etc.)|
|name|string|false|none|Full name of the currency|
|symbol|string|false|none|Symbol of the currency|
|decimals|integer|false|none|Number of decimal places for the currency|

<h2 id="tocS_CurrencyAmount">CurrencyAmount</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyamount"></a>
<a id="schema_CurrencyAmount"></a>
<a id="tocScurrencyamount"></a>
<a id="tocscurrencyamount"></a>

```json
{
  "amount": 12550,
  "currency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|Amount in the smallest unit of the currency (e.g., cents for USD/EUR, satoshis for BTC)|
|currency|[Currency](#schemacurrency)|true|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "id": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "CREATED",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settledAt": "2023-08-15T14:30:00Z",
  "createdAt": "2023-08-15T14:25:18Z",
  "description": "Payment for invoice #1234",
  "counterpartyInformation": {
    "fullName": "John Sender",
    "country": "DE"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the transaction|
|status|[TransactionStatus](#schematransactionstatus)|true|none|Status of a payment transaction|
|type|[TransactionType](#schematransactiontype)|true|none|Type of transaction (incoming payment or outgoing payment)|
|senderUmaAddress|string|true|none|UMA address of the payment sender|
|receiverUmaAddress|string|true|none|UMA address of the payment recipient|
|userId|string|true|none|System ID of the user (sender for outgoing, recipient for incoming)|
|platformUserId|string|true|none|Platform-specific ID of the user (sender for outgoing, recipient for incoming)|
|settledAt|string(date-time)|false|none|When the payment was or will be settled|
|createdAt|string(date-time)|false|none|When the transaction was created|
|description|string|false|none|Optional memo or description for the payment|
|counterpartyInformation|object|false|none|Additional information about the counterparty, if available|

<h2 id="tocS_IncomingTransaction">IncomingTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaincomingtransaction"></a>
<a id="schema_IncomingTransaction"></a>
<a id="tocSincomingtransaction"></a>
<a id="tocsincomingtransaction"></a>

```json
{
  "id": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "CREATED",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settledAt": "2023-08-15T14:30:00Z",
  "createdAt": "2023-08-15T14:25:18Z",
  "description": "Payment for invoice #1234",
  "counterpartyInformation": {
    "fullName": "John Sender",
    "country": "DE"
  },
  "receivedAmount": {
    "amount": 12550,
    "currency": {
      "code": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "decimals": 2
    }
  }
}

```

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Transaction](#schematransaction)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» type|[TransactionType](#schematransactiontype)|false|none|Always "INCOMING" for incoming transactions|
|» receivedAmount|[CurrencyAmount](#schemacurrencyamount)|true|none|Amount received in the recipient's currency|

<h2 id="tocS_OutgoingTransaction">OutgoingTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaoutgoingtransaction"></a>
<a id="schema_OutgoingTransaction"></a>
<a id="tocSoutgoingtransaction"></a>
<a id="tocsoutgoingtransaction"></a>

```json
{
  "id": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "CREATED",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settledAt": "2023-08-15T14:30:00Z",
  "createdAt": "2023-08-15T14:25:18Z",
  "description": "Payment for invoice #1234",
  "counterpartyInformation": {
    "fullName": "John Sender",
    "country": "DE"
  },
  "sentAmount": {
    "amount": 12550,
    "currency": {
      "code": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "decimals": 2
    }
  },
  "receivedAmount": {
    "amount": 12550,
    "currency": {
      "code": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "decimals": 2
    }
  },
  "exchangeRate": 1.08,
  "fees": 10,
  "quoteId": "Quote:019542f5-b3e7-1d02-0000-000000000006"
}

```

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Transaction](#schematransaction)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» type|[TransactionType](#schematransactiontype)|false|none|Always "OUTGOING" for outgoing transactions|
|» sentAmount|[CurrencyAmount](#schemacurrencyamount)|true|none|Amount sent in the sender's currency|
|» receivedAmount|[CurrencyAmount](#schemacurrencyamount)|false|none|Amount to be received by recipient in the recipient's currency|
|» exchangeRate|number|false|none|Number of sending currency units per receiving currency unit.|
|» fees|integer(int64)|false|none|The fees associated with the quote in the smallest unit of the sending currency (eg. cents).|
|» quoteId|string|false|none|The ID of the quote that was used to trigger this payment|

<h2 id="tocS_CurrencyPreference">CurrencyPreference</h2>
<!-- backwards compatibility -->
<a id="schemacurrencypreference"></a>
<a id="schema_CurrencyPreference"></a>
<a id="tocScurrencypreference"></a>
<a id="tocscurrencypreference"></a>

```json
{
  "currency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  },
  "estimatedExchangeRate": 1.08,
  "min": 1,
  "max": 1000000
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[Currency](#schemacurrency)|true|none|none|
|estimatedExchangeRate|number|true|none|An estimated exchange rate from the sender's currency to this currency. This is not a locked rate and is subject to change when calling the quotes endpoint.|
|min|integer(int64)|true|none|The minimum amount that can be received in this currency.|
|max|integer(int64)|true|none|The maximum amount that can be received in this currency.|

<h2 id="tocS_QuoteLockSide">QuoteLockSide</h2>
<!-- backwards compatibility -->
<a id="schemaquotelockside"></a>
<a id="schema_QuoteLockSide"></a>
<a id="tocSquotelockside"></a>
<a id="tocsquotelockside"></a>

```json
"SENDING"

```

The side of the quote which should be locked and specified in the `lockedCurrencyAmount`. For example, if I want to send exactly $5 MXN from my wallet, I would set this to "sending", and the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to receive exactly $10 USD, I would set this to "receiving" and the `lockedCurrencyAmount` to 10000 (in cents).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The side of the quote which should be locked and specified in the `lockedCurrencyAmount`. For example, if I want to send exactly $5 MXN from my wallet, I would set this to "sending", and the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to receive exactly $10 USD, I would set this to "receiving" and the `lockedCurrencyAmount` to 10000 (in cents).|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|SENDING|
|*anonymous*|RECEIVING|

<h2 id="tocS_Quote">Quote</h2>
<!-- backwards compatibility -->
<a id="schemaquote"></a>
<a id="schema_Quote"></a>
<a id="tocSquote"></a>
<a id="tocsquote"></a>

```json
{
  "quoteId": "Quote:019542f5-b3e7-1d02-0000-000000000006",
  "sendingCurrency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  },
  "receivingCurrency": {
    "code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "decimals": 2
  },
  "totalSendingAmount": 123010,
  "totalReceivingAmount": 1000,
  "exchangeRate": 0,
  "expiresAt": "2023-09-01T14:30:00Z",
  "feesIncluded": 10,
  "counterpartyInformation": {
    "fullName": "Jane Receiver",
    "country": "FR"
  },
  "paymentInstructions": {
    "reference": "UMA-Q12345-REF",
    "instructionsNotes": "Please ensure the reference code is included in the payment memo/description field",
    "bankAccountInfo": {
      "accountType": "CLABE"
    }
  },
  "status": "PENDING",
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000005"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quoteId|string|true|none|Unique identifier for this quote|
|sendingCurrency|[Currency](#schemacurrency)|true|none|none|
|receivingCurrency|[Currency](#schemacurrency)|true|none|none|
|totalSendingAmount|integer(int64)|true|none|The total amount that will be sent in the smallest unit of the sending currency (eg. cents).|
|totalReceivingAmount|integer(int64)|true|none|The total amount that will be received in the smallest unit of the receiving currency (eg. cents).|
|exchangeRate|number|true|none|Number of sending currency units per receiving currency unit.|
|expiresAt|string(date-time)|true|none|When this quote expires (typically 1-5 minutes after creation)|
|feesIncluded|integer(int64)|true|none|The fees associated with the quote in the smallest unit of the sending currency (eg. cents).|
|counterpartyInformation|object|false|none|Information about the recipient, as required by the platform in their configuration.|
|paymentInstructions|[PaymentInstructions](#schemapaymentinstructions)|true|none|none|
|status|string|false|none|Current status of the quote|
|transactionId|string|false|none|The ID of the transaction created from this quote. Only present if the quote has started processing.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|PROCESSING|
|status|COMPLETED|
|status|FAILED|
|status|EXPIRED|

<h2 id="tocS_UmaInvitation">UmaInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaumainvitation"></a>
<a id="schema_UmaInvitation"></a>
<a id="tocSumainvitation"></a>
<a id="tocsumainvitation"></a>

```json
{
  "code": "019542f5",
  "createdAt": "2023-09-01T14:30:00Z",
  "claimedAt": "2023-09-01T14:30:00Z",
  "url": "https://uma.me/i/019542f5",
  "expiresAt": "2023-09-01T14:30:00Z",
  "inviterUma": "$inviter@uma.domain",
  "inviteeUma": "$invitee@uma.domain",
  "status": "PENDING"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The unique code of the invitation|
|createdAt|string(date-time)|true|none|When the invitation was created|
|claimedAt|string(date-time)|false|none|When the invitation was claimed if it has been claimed|
|url|string|true|none|The URL where this invitation can be claimed.|
|expiresAt|string(date-time)|false|none|When the invitation expires (if at all)|
|inviterUma|string|true|none|The UMA address of the inviter|
|inviteeUma|string|false|none|The UMA address of the invitee|
|status|string|true|none|The status of the invitation|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|CLAIMED|
|status|EXPIRED|
|status|CANCELLED|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"VIEW"

```

Permission of an API token that determines what actions the token can perform: VIEW: Can view all data, including platform config, users and transactions TRANSACT: Can send payments MANAGE: Can manage platform config, api tokens and users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Permission of an API token that determines what actions the token can perform: VIEW: Can view all data, including platform config, users and transactions TRANSACT: Can send payments MANAGE: Can manage platform config, api tokens and users|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|VIEW|
|*anonymous*|TRANSACT|
|*anonymous*|MANAGE|

<h2 id="tocS_ApiToken">ApiToken</h2>
<!-- backwards compatibility -->
<a id="schemaapitoken"></a>
<a id="schema_ApiToken"></a>
<a id="tocSapitoken"></a>
<a id="tocsapitoken"></a>

```json
{
  "id": "Token:019542f5-b3e7-1d02-0000-000000000001",
  "name": "Sandbox read-only token",
  "permissions": [
    "VIEW"
  ],
  "clientId": "01947d2284054f890000e63bca4810df",
  "clientSecret": "ed0ad25881e234cc28fb2dec0a4fe64e4172",
  "createdAt": "2023-07-21T17:32:28Z",
  "updatedAt": "2023-07-21T17:32:28Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|System-generated unique identifier|
|name|string|true|none|Name of the token|
|permissions|[[Permission](#schemapermission)]|true|none|A list of permissions granted to the token|
|clientId|string|true|none|An opaque identifier that should be used as a client_id (or username)  in the HTTP Basic Authentication scheme when issuing http requests to UMAaaS.|
|clientSecret|string|false|none|The secret that should be used to authenticate against UMAaaS API. This secret is not stored and will never be available again after creation.  Platform must keep this secret secure as it grants access to the account.|
|createdAt|string(date-time)|true|none|Creation timestamp|
|updatedAt|string(date-time)|true|none|Last update timestamp|

