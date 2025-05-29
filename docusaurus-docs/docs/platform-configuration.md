---
sidebar_position: 1
---

# Platform Configuration

This guide provides comprehensive information about configuring your platform settings in the UMA as a Service API, including setting up your UMA domain, webhook endpoints, and required counterparty fields.

NOTE: All of this configuration can be managed in the UMAaaS dashboard in addition to using the API endpoints.

## Retrieve Current Configuration

You can retrieve your current platform configuration to see what settings are already in place:

```http
GET /config
```

Response example:

```json
{
  "id": "PlatformConfig:019542f5-b3e7-1d02-0000-000000000003",
  "umaDomain": "example.com",
  "webhookEndpoint": "https://api.example.com/webhooks/uma",
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
      ],
      "umaProviderRequiredUserFields": [
        "NATIONALITY",
        "FULL_NAME"
      ]
    }
  ],
  "createdAt": "2023-06-15T12:30:45Z",
  "updatedAt": "2023-07-01T10:00:00Z"
}
```

If this is your first time configuring the platform, some default values may be returned which were set up when you first created your account.

## Update Platform Configuration

To update your platform configuration, use the PATCH endpoint:

```http
PATCH /config
```

Request body:

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
        },
        {
          "name": "ADDRESS",
          "mandatory": false
        }
      ]
    }
  ]
}
```

Response:

```json
{
  "id": "PlatformConfig:019542f5-b3e7-1d02-0000-000000000003",
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
        },
        {
          "name": "ADDRESS",
          "mandatory": false
        }
      ],
      "umaProviderRequiredUserFields": [
        "NATIONALITY",
        "FULL_NAME"
      ]
    }
  ],
  "createdAt": "2023-06-15T12:30:45Z",
  "updatedAt": "2023-06-15T12:30:45Z"
}
```

Note: The `webhookSecret` is not returned in the response. It can only be retrieved from the UMAaaS dashboard. Store this securely as it's used to verify the authenticity of webhooks (see the [Webhook Verification Guide](/docs/webhooks)).

## Configuration Parameters

### UMA Domain

The `umaDomain` parameter defines the domain part of all UMA addresses for your users. For example, if you set `umaDomain` to `mycompany.com`, your users' UMA addresses will follow the format `$username@mycompany.com`.

Requirements for a valid UMA domain:

- Must be a valid domain name format
- Should be a domain that you control
- Must proxy incoming requests to the UMAaaS API as follows:
  - `https://<umaDomain>/.well-known/lnurlp/*` -> `https://<proxyUmaaasSubdomain>.uma.money/.well-known/lnurlp/*`
  - `https://<umaDomain>/.well-known/lnurlpubkey` -> `https://<proxyUmaaasSubdomain>.uma.money/.well-known/lnurlpubkey`
  - `https://<umaDomain>/.well-known/uma-configuration` -> `https://<proxyUmaaasSubdomain>.uma.money/.well-known/uma-configuration`

### Webhook Endpoint

The `webhookEndpoint` parameter specifies the URL where UMAaaS will send webhook notifications about payment events. Your webhook endpoint must:

- Be publicly accessible over HTTPS
- Respond with appropriate HTTP status codes
- Handle webhook verification (see [Webhook Verification Guide](/docs/webhooks))
- Process webhook payloads within a reasonable time (recommended: under 5 seconds)

### Supported Currencies

The `supportedCurrencies` array allows you to define settings for each currency your platform will support. Each object in this array can contain:

- `currencyCode`: (String, required) The ISO 4217 currency code (e.g., "USD").
- `minAmount`: (Integer, required) Minimum transaction amount in the smallest unit of the currency.
- `maxAmount`: (Integer, required) Maximum transaction amount in the smallest unit of the currency.
- `requiredCounterpartyFields`: (Array, required) Defines PII your platform requires about *external counterparties* for transactions in this currency.
- `umaProviderRequiredUserFields`: (Array, read-only) Lists PII field names (from `UserInfoFieldName`) that the UMA provider mandates for *your own users* to transact in this currency. This impacts user creation/updates.

### Required Counterparty Fields

Within each currency defined in `supportedCurrencies`, the `requiredCounterpartyFields` parameter allows you to specify what information your platform needs to collect from *external counterparties* (senders or receivers) involved in transactions with your users for that specific currency.

Available counterparty fields (to be specified with a `name` and `mandatory` flag):

| Field Name (type `UserInfoFieldName`) | Description |
|---------------------------------------|-------------|
| `FULL_NAME` | Full legal name of the individual or business |
| `DATE_OF_BIRTH` | Date of birth in YYYY-MM-DD format (for individuals) |
| `NATIONALITY` | Nationality of the individual |
| `ADDRESS` | Physical address including country, city, etc. |
| `PHONE_NUMBER` | Contact phone number including country code |
| `EMAIL` | Email address |
| `BUSINESS_NAME` | Legal business name (for business entities) |
| `TAX_ID` | Tax identification number |

Each field in `requiredCounterpartyFields` is an object containing:

- `name`: The `UserInfoFieldName` representing the PII you require.
- `mandatory`: A boolean (true/false) indicating if this field is strictly required by your platform for transactions in this currency.

This information will be provided to your platform via webhooks for pending payments, allowing you to screen the counterparty based on your compliance rules before approving the payment.

### UMA Provider Required User Fields

Also within each currency defined in `supportedCurrencies`, you will find the `umaProviderRequiredUserFields` array. This is a **read-only** list of `UserInfoFieldName` strings.

This list specifies which PII fields are mandated by the underlying UMA provider for *your own registered users* if they intend to send or receive payments in that particular currency. For example, to allow a user to transact in "USD", the UMA provider might require that the user has a `NATIONALITY` on record.

These fields must be supplied when creating or updating a user via the `POST /users` or `PATCH /users/{userId}` endpoints if that user is expected to use the specified currency. Refer to the [Configuring Users](/docs/configuring-users) guide for more details on how this impacts user setup.

## Verify Configuration

After updating your configuration, it's recommended to verify that the changes were saved correctly:

```http
GET /config
```

The response should reflect your updated settings.

## Testing Your Webhook Endpoint

Once your webhook endpoint is configured, UMAaaS will send a test webhook notification to verify that your endpoint is correctly set up. You should implement your webhook handler to properly respond to this test event.

Example test webhook payload:

```json
{
  "test": true,
  "timestamp": "2023-08-15T14:32:00Z",
  "webhookId": "Webhook:019542f5-b3e7-1d02-0000-000000000001",
  "type": "TEST"
}
```

Your webhook handler should:

1. Verify the webhook signature (see [Webhook Verification Guide](/docs/webhooks))
2. Identify the webhook as a test event
3. Respond with a 200 OK status
