<!-- Generator: Widdershins v4.0.1 -->

<h1 id="uma-as-a-service-umaaas-api">UMA as a Service (UMAaas) API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for managing global payments to and from UMA addresses. 
This service facilitates cross-currency financial transactions using simple human-readable UMA addresses.

Base URLs:

* <a href="https://api.lightspark.com/umaas/v1">https://api.lightspark.com/umaas/v1</a>

Email: <a href="mailto:support@lightspark.com">Lightspark Support</a> 
License: <a href="https://lightspark.com/terms">Proprietary</a>

# Authentication

- HTTP Authentication, scheme: basic API token authentication using format `<api token id>:<api client secret>`

* API Key (WebhookSignature)
    - Parameter Name: **X-UMAaas-Signature**, in: header. HMAC-SHA256 signature of the webhook payload, which can be used to verify that the webhook was sent by UMAaas.

The signature is created by:
1. Taking the entire webhook request body as a string
2. Creating an HMAC-SHA256 hash of the request body using the webhook secret as the key
3. Encoding the hash in hexadecimal format
4. Compare this value to the signature in the `X-UMAaas-Signature` header

If the values match, the webhook is authentic. If not, it should be rejected.

<h1 id="uma-as-a-service-umaaas-api-platform-configuration">Platform Configuration</h1>

Platform configuration endpoints for managing global settings. You can also configure these settings in the UMAaas dashboard.

## getPlatformConfig

<a id="opIdgetPlatformConfig"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaas/v1/config',
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

r = requests.get('https://api.lightspark.com/umaas/v1/config', headers = headers)

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
  "requiredCounterpartyFields": [
    {
      "name": "FULL_NAME",
      "mandatory": true
    },
    {
      "name": "DATE_OF_BIRTH",
      "mandatory": true
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
  "requiredCounterpartyFields": [
    {
      "name": "FULL_NAME",
      "mandatory": true
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaas/v1/config',
{
  method: 'PUT',
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

r = requests.put('https://api.lightspark.com/umaas/v1/config', headers = headers)

print(r.json())

```

`PUT /config`

*Update platform configuration*

Update the platform configuration settings

> Body parameter

```json
{
  "umaDomain": "mycompany.com",
  "webhookEndpoint": "https://api.mycompany.com/webhooks/uma",
  "requiredCounterpartyFields": [
    {
      "name": "FULL_NAME",
      "mandatory": true
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
|» requiredCounterpartyFields|body|[[CounterpartyFieldDefinition](#schemacounterpartyfielddefinition)]|false|none|
|»» name|body|string|false|Name of the counterparty field|
|»» mandatory|body|boolean|false|Whether the field is mandatory|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»» name|FULL_NAME|
|»» name|ADDRESS|
|»» name|DATE_OF_BIRTH|
|»» name|TAX_ID|
|»» name|REGISTRATION_NUMBER|
|»» name|ACCOUNT_NUMBER|

> Example responses

> 200 Response

```json
{
  "id": "PlatformConfig:019542f5-b3e7-1d02-0000-000000000003",
  "umaDomain": "platform.uma.domain",
  "webhookEndpoint": "https://api.mycompany.com/webhooks/uma",
  "requiredCounterpartyFields": [
    {
      "name": "FULL_NAME",
      "mandatory": true
    },
    {
      "name": "DATE_OF_BIRTH",
      "mandatory": true
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
    "bankName": "Chase Bank"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaas/v1/users',
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

r = requests.post('https://api.lightspark.com/umaas/v1/users', headers = headers)

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
    "bankName": "Chase Bank"
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
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe"
  }
}
```

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|User created successfully|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict - User with the UMA address or platform user ID already exists|[Error](#schemaerror)|

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

fetch('https://api.lightspark.com/umaas/v1/users/{userId}',
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

r = requests.get('https://api.lightspark.com/umaas/v1/users/{userId}', headers = headers)

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
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe"
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
    "bankName": "Wells Fargo"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaas/v1/users/{userId}',
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

r = requests.patch('https://api.lightspark.com/umaas/v1/users/{userId}', headers = headers)

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
    "bankName": "Wells Fargo"
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
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe"
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## getUserByPlatformId

<a id="opIdgetUserByPlatformId"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaas/v1/users/by-platform-id/{platformUserId}',
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

r = requests.get('https://api.lightspark.com/umaas/v1/users/by-platform-id/{platformUserId}', headers = headers)

print(r.json())

```

`GET /users/by-platform-id/{platformUserId}`

*Get user by platform user ID*

Retrieve a user by their platform-specific ID

<h3 id="getuserbyplatformid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|platformUserId|path|string|true|Platform-specific user identifier|

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
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe"
  }
}
```

<h3 id="getuserbyplatformid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<h3 id="getuserbyplatformid-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## updateUserByPlatformId

<a id="opIdupdateUserByPlatformId"></a>

> Code samples

```javascript
const inputBody = '{
  "userType": "INDIVIDUAL",
  "fullName": "Jane Smith",
  "address": {
    "line1": "789 Broadway",
    "city": "New York",
    "state": "NY",
    "postalCode": "10003",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "44455566677",
    "routingNumber": "444555666",
    "accountCategory": "CHECKING",
    "bankName": "CitiBank"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.lightspark.com/umaas/v1/users/by-platform-id/{platformUserId}',
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

r = requests.patch('https://api.lightspark.com/umaas/v1/users/by-platform-id/{platformUserId}', headers = headers)

print(r.json())

```

`PATCH /users/by-platform-id/{platformUserId}`

*Update user by platform user ID*

Update a user's metadata by their platform-specific ID

> Body parameter

```json
{
  "userType": "INDIVIDUAL",
  "fullName": "Jane Smith",
  "address": {
    "line1": "789 Broadway",
    "city": "New York",
    "state": "NY",
    "postalCode": "10003",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "44455566677",
    "routingNumber": "444555666",
    "accountCategory": "CHECKING",
    "bankName": "CitiBank"
  }
}
```

<h3 id="updateuserbyplatformid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|
|platformUserId|path|string|true|Platform-specific user identifier|

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
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe"
  }
}
```

<h3 id="updateuserbyplatformid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|User updated successfully|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|[Error](#schemaerror)|

<h3 id="updateuserbyplatformid-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|userType|INDIVIDUAL|
|userType|BUSINESS|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|

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

fetch('https://api.lightspark.com/umaas/v1/transactions/{transactionId}',
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

r = requests.get('https://api.lightspark.com/umaas/v1/transactions/{transactionId}', headers = headers)

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
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "PENDING",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settlementTime": "2023-08-15T14:30:00Z",
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
|status|PENDING|
|status|COMPLETED|
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

fetch('https://api.lightspark.com/umaas/v1/transactions',
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

r = requests.get('https://api.lightspark.com/umaas/v1/transactions', headers = headers)

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
|sortBy|query|string|false|Field to sort results by|
|sortOrder|query|string|false|Order to sort results in|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|PENDING|
|status|COMPLETED|
|status|FAILED|
|status|REFUNDED|
|type|INCOMING|
|type|OUTGOING|
|sortBy|createdAt|
|sortBy|settlementTime|
|sortBy|receivedAmount|
|sortBy|sentAmount|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
      "status": "PENDING",
      "type": "INCOMING",
      "senderUmaAddress": "$sender@external.domain",
      "receiverUmaAddress": "$recipient@uma.domain",
      "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
      "platformUserId": "18d3e5f7b4a9c2",
      "settlementTime": "2023-08-15T14:30:00Z",
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
|»»»» transactionId|string|true|none|Unique identifier for the transaction|
|»»»» status|[TransactionStatus](#schematransactionstatus)|true|none|Status of a payment transaction|
|»»»» type|[TransactionType](#schematransactiontype)|true|none|Type of transaction (incoming payment or outgoing payment)|
|»»»» senderUmaAddress|string|true|none|UMA address of the payment sender|
|»»»» receiverUmaAddress|string|true|none|UMA address of the payment recipient|
|»»»» userId|string|true|none|System ID of the user (sender for outgoing, recipient for incoming)|
|»»»» platformUserId|string|true|none|Platform-specific ID of the user (sender for outgoing, recipient for incoming)|
|»»»» settlementTime|string(date-time)|false|none|When the payment was or will be settled|
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
|status|PENDING|
|status|COMPLETED|
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

fetch('https://api.lightspark.com/umaas/v1/receiver/{receiverUmaAddress}',
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

r = requests.get('https://api.lightspark.com/umaas/v1/receiver/{receiverUmaAddress}', headers = headers)

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
|sendingUmaAddress|query|string|false|UMA address of the sender (mutually exclusive with userId and platformUserId)|
|userId|query|string|false|System ID of the sender (mutually exclusive with sendingUmaAddress and platformUserId)|
|platformUserId|query|string|false|Platform ID of the sender (mutually exclusive with sendingUmaAddress and userId)|

> Example responses

> 200 Response

```json
{
  "receivingUmaAddress": "$receiver@uma.domain",
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
  ]
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
|» receivingUmaAddress|string|true|none|The UMA address that was looked up|
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
|»» name|string|false|none|Name of the counterparty field|
|»» mandatory|boolean|false|none|Whether the field is mandatory|

#### Enumerated Values

|Property|Value|
|---|---|
|name|FULL_NAME|
|name|ADDRESS|
|name|DATE_OF_BIRTH|
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
  "receiverUmaAddress": "$receiver@uma.domain",
  "senderUmaAddress": "$sender@uma.domain",
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

fetch('https://api.lightspark.com/umaas/v1/quotes',
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

r = requests.post('https://api.lightspark.com/umaas/v1/quotes', headers = headers)

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
  "receiverUmaAddress": "$receiver@uma.domain",
  "senderUmaAddress": "$sender@uma.domain",
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
|» receiverUmaAddress|body|string|true|UMA address of the recipient|
|» senderUmaAddress|body|string|false|UMA address of the sender (optional if userId or platformUserId is provided)|
|» userId|body|string|false|System ID of the sender (optional if senderUmaAddress or platformUserId is provided)|
|» platformUserId|body|string|false|Platform ID of the sender (optional if senderUmaAddress or userId is provided)|
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
      "accountType": "US_ACCOUNT",
      "accountHolderName": "John Doe",
      "clabeNumber": "123456789012345678",
      "bankName": "BBVA Mexico"
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

fetch('https://api.lightspark.com/umaas/v1/quotes/{quoteId}',
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

r = requests.get('https://api.lightspark.com/umaas/v1/quotes/{quoteId}', headers = headers)

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
      "accountType": "US_ACCOUNT",
      "accountHolderName": "John Doe",
      "clabeNumber": "123456789012345678",
      "bankName": "BBVA Mexico"
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

fetch('https://api.lightspark.com/umaas/v1/payments/status/{quoteId}',
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

r = requests.get('https://api.lightspark.com/umaas/v1/payments/status/{quoteId}', headers = headers)

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
    "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
    "status": "PENDING",
    "type": "INCOMING",
    "senderUmaAddress": "$sender@external.domain",
    "receiverUmaAddress": "$recipient@uma.domain",
    "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
    "platformUserId": "18d3e5f7b4a9c2",
    "settlementTime": "2023-08-15T14:30:00Z",
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
|»»» transactionId|string|true|none|Unique identifier for the transaction|
|»»» status|[TransactionStatus](#schematransactionstatus)|true|none|Status of a payment transaction|
|»»» type|[TransactionType](#schematransactiontype)|true|none|Type of transaction (incoming payment or outgoing payment)|
|»»» senderUmaAddress|string|true|none|UMA address of the payment sender|
|»»» receiverUmaAddress|string|true|none|UMA address of the payment recipient|
|»»» userId|string|true|none|System ID of the user (sender for outgoing, recipient for incoming)|
|»»» platformUserId|string|true|none|Platform-specific ID of the user (sender for outgoing, recipient for incoming)|
|»»» settlementTime|string(date-time)|false|none|When the payment was or will be settled|
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
|status|PENDING|
|status|COMPLETED|
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
|line1|string|false|none|Street address line 1|
|line2|string|false|none|Street address line 2|
|city|string|false|none|City|
|state|string|false|none|State/Province/Region|
|postalCode|string|false|none|Postal/ZIP code|
|country|string|false|none|Country code (ISO 3166-1 alpha-2)|

<h2 id="tocS_BankAccountInfo">BankAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountinfo"></a>
<a id="schema_BankAccountInfo"></a>
<a id="tocSbankaccountinfo"></a>
<a id="tocsbankaccountinfo"></a>

```json
{
  "accountType": "US_ACCOUNT",
  "accountHolderName": "John Doe"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string|true|none|Type of bank account information|
|accountHolderName|string|false|none|Name of the account holder|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|CLABE|
|accountType|US_ACCOUNT|
|accountType|PIX|
|accountType|IBAN|

<h2 id="tocS_ClabeAccountInfo">ClabeAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclabeaccountinfo"></a>
<a id="schema_ClabeAccountInfo"></a>
<a id="tocSclabeaccountinfo"></a>
<a id="tocsclabeaccountinfo"></a>

```json
{
  "accountType": "US_ACCOUNT",
  "accountHolderName": "John Doe",
  "clabeNumber": "123456789012345678",
  "bankName": "BBVA Mexico"
}

```

### Properties

allOf - discriminator: BankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankAccountInfo](#schemabankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» clabeNumber|string|true|none|18-digit CLABE number (Mexican banking standard)|
|» bankName|string|true|none|Name of the bank|

<h2 id="tocS_UsAccountInfo">UsAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemausaccountinfo"></a>
<a id="schema_UsAccountInfo"></a>
<a id="tocSusaccountinfo"></a>
<a id="tocsusaccountinfo"></a>

```json
{
  "accountType": "US_ACCOUNT",
  "accountHolderName": "John Doe",
  "accountNumber": "123456789",
  "routingNumber": "987654321",
  "accountCategory": "CHECKING",
  "bankName": "Chase Bank"
}

```

### Properties

allOf - discriminator: BankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankAccountInfo](#schemabankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» accountNumber|string|true|none|US bank account number|
|» routingNumber|string|true|none|ACH routing number (9 digits)|
|» accountCategory|string|false|none|Type of account (checking or savings)|
|» bankName|string|false|none|Name of the bank|

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
  "accountType": "US_ACCOUNT",
  "accountHolderName": "John Doe",
  "pixKey": "55119876543210",
  "pixKeyType": "PHONE",
  "bankName": "Nubank"
}

```

### Properties

allOf - discriminator: BankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankAccountInfo](#schemabankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» pixKey|string|true|none|PIX key for Brazilian instant payments|
|» pixKeyType|string|true|none|Type of PIX key being used|
|» bankName|string|false|none|Name of the bank|

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
  "accountType": "US_ACCOUNT",
  "accountHolderName": "John Doe",
  "iban": "DE89370400440532013000",
  "swiftBic": "DEUTDEFF",
  "bankName": "Deutsche Bank"
}

```

### Properties

allOf - discriminator: BankAccountInfo.accountType

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BankAccountInfo](#schemabankaccountinfo)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» iban|string|true|none|International Bank Account Number|
|» swiftBic|string|false|none|SWIFT/BIC code (8 or 11 characters)|
|» bankName|string|true|none|Name of the bank|

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
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe",
    "clabeNumber": "123456789012345678",
    "bankName": "BBVA Mexico"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reference|string|true|none|Unique reference code that must be included with the payment to properly credit it|
|instructionsNotes|string|false|none|Additional human-readable instructions for making the payment|
|bankAccountInfo|any|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[ClabeAccountInfo](#schemaclabeaccountinfo)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[UsAccountInfo](#schemausaccountinfo)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[PixAccountInfo](#schemapixaccountinfo)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[IbanAccountInfo](#schemaibanaccountinfo)|false|none|none|

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
  "updatedAt": "2023-07-21T17:32:28Z"
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
  "fullName": "John Michael Doe",
  "dateOfBirth": "1990-01-15",
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe"
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
|» address|[Address](#schemaaddress)|true|none|none|
|» bankAccountInfo|[BankAccountInfo](#schemabankaccountinfo)|true|none|none|

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
  "address": {
    "line1": "123 Main Street",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountHolderName": "John Doe"
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
|» bankAccountInfo|[BankAccountInfo](#schemabankaccountinfo)|true|none|none|
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
|name|string|false|none|Name of the counterparty field|
|mandatory|boolean|false|none|Whether the field is mandatory|

#### Enumerated Values

|Property|Value|
|---|---|
|name|FULL_NAME|
|name|ADDRESS|
|name|DATE_OF_BIRTH|
|name|TAX_ID|
|name|REGISTRATION_NUMBER|
|name|ACCOUNT_NUMBER|

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
  "requiredCounterpartyFields": [
    {
      "name": "FULL_NAME",
      "mandatory": true
    },
    {
      "name": "DATE_OF_BIRTH",
      "mandatory": true
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
|requiredCounterpartyFields|[[CounterpartyFieldDefinition](#schemacounterpartyfielddefinition)]|false|none|List of counterparty fields and their requirements|
|createdAt|string(date-time)|false|read-only|Creation timestamp|
|updatedAt|string(date-time)|false|read-only|Last update timestamp|

<h2 id="tocS_TransactionStatus">TransactionStatus</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatus"></a>
<a id="schema_TransactionStatus"></a>
<a id="tocStransactionstatus"></a>
<a id="tocstransactionstatus"></a>

```json
"PENDING"

```

Status of a payment transaction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Status of a payment transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PENDING|
|*anonymous*|COMPLETED|
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
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "PENDING",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settlementTime": "2023-08-15T14:30:00Z",
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
|transactionId|string|true|none|Unique identifier for the transaction|
|status|[TransactionStatus](#schematransactionstatus)|true|none|Status of a payment transaction|
|type|[TransactionType](#schematransactiontype)|true|none|Type of transaction (incoming payment or outgoing payment)|
|senderUmaAddress|string|true|none|UMA address of the payment sender|
|receiverUmaAddress|string|true|none|UMA address of the payment recipient|
|userId|string|true|none|System ID of the user (sender for outgoing, recipient for incoming)|
|platformUserId|string|true|none|Platform-specific ID of the user (sender for outgoing, recipient for incoming)|
|settlementTime|string(date-time)|false|none|When the payment was or will be settled|
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
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "PENDING",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settlementTime": "2023-08-15T14:30:00Z",
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
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000004",
  "status": "PENDING",
  "type": "INCOMING",
  "senderUmaAddress": "$sender@external.domain",
  "receiverUmaAddress": "$recipient@uma.domain",
  "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
  "platformUserId": "18d3e5f7b4a9c2",
  "settlementTime": "2023-08-15T14:30:00Z",
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
      "accountType": "US_ACCOUNT",
      "accountHolderName": "John Doe",
      "clabeNumber": "123456789012345678",
      "bankName": "BBVA Mexico"
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

