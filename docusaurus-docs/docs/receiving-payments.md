---
sidebar_position: 4
---

# Receiving Payments

This guide outlines the process for platforms to receive payments from UMA addresses.

## Process Overview

The following sequence diagram illustrates the interaction between your platform and the UMAaaS API when receiving payments:

```mermaid
sequenceDiagram
    participant Sender as External Sender
    participant UMAaaS as UMAaaS API
    participant Client as Your Platform
    participant Bank as Banking Provider
    
    Note over Client, UMAaaS: One-time setup
    Client->>UMAaaS: PUT /config (set domain, webhook URL)
    UMAaaS-->>Client: Configuration saved
    Client->>UMAaaS: POST /users (register users with bank info)
    UMAaaS-->>Client: User registered
    
    Note over Sender, UMAaaS: Payment initiated by sender
    Sender->>UMAaaS: Initiates payment to UMA address
    UMAaaS->>Client: Webhook: INCOMING_PAYMENT (PENDING)
    
    alt Payment approved
        Client-->>UMAaaS: HTTP 200 OK (approve payment, provide PII if requested)
        UMAaaS->>Bank: Execute payment to user's bank account
        UMAaaS->>Client: Webhook: INCOMING_PAYMENT (COMPLETED)
        Client-->>UMAaaS: HTTP 200 OK (acknowledge completion)
    else Payment rejected
        Client-->>UMAaaS: HTTP 400 Bad Request with rejection reason
        UMAaaS->>Sender: Payment rejected notification
    end
```

The process consists of five main steps:

1. **Platform configuration** (one-time setup) to set your UMA domain and required counterparty fields
2. **Register users** with their bank account information so they can receive payments
3. **Set up webhook endpoints** to receive notifications about incoming payments
4. **Receive and approve/reject incoming payments** via webhooks
5. **Receive completion notification** when the payment completes

## Step 1: Platform configuration (one-time setup)

Configure your platform settings (if you haven't already in the onboarding process). See the [Platform Configuration](/docs/platform-configuration) guide for more details.

## Step 2: Register users with bank account information

First, register your users in the system so they can receive payments via UMA. You can optionally include a `platformAccountId` in the bank account information to link accounts with your internal systems.

```http
POST /users
```

Request body:

```json
{
  "umaAddress": "$john.receiver@thegoodbank.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "fullName": "John Receiver",
  "dateOfBirth": "1985-06-15",
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
    "accountNumber": "123456789",
    "routingNumber": "987654321",
    "accountCategory": "CHECKING",
    "bankName": "Chase Bank",
    "platformAccountId": "chase_primary_1234"
  }
}
```

See the [Configuring Users](/docs/configuring-users) guide for more details.

## Step 3: Webhook setup (one-time setup)

Configure your webhook endpoints to receive notifications about incoming payments. You'll need to implement the webhook endpoints on your server. Remember to validate webhook signatures to ensure they are authentic. See the [Webhook Verification](/docs/webhooks) guide for more details.

## Step 4: Receive and approve incoming payments

When someone initiates a payment to one of your users' UMA addresses, you'll receive a webhook call with a pending transaction:

```json
{
  "transaction": {
    "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000005",
    "status": "PENDING",
    "type": "INCOMING",
    "senderUmaAddress": "$mary.sender@thelessgoodbank.com",
    "receiverUmaAddress": "$john.receiver@thegoodbank.com",
    "receivedAmount": {
      "amount": 50000,
      "currency": {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$",
        "decimals": 2
      }
    },
    "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
    "platformUserId": "9f84e0c2a72c4fa",
    "description": "Payment for services",
    "counterpartyInformation": {
      "FULL_NAME": "Mary Sender",
      "DATE_OF_BIRTH": "1985-06-15"
    },
    "reconciliationInstructions": {
      "reference": "REF-123456789"
    },
    "requestedReceiverUserInfoFields": [
      { "name": "NATIONALITY", "mandatory": true },
      { "name": "FULL_NAME", "mandatory": true }
    ]
  },
  "timestamp": "2023-08-15T14:32:00Z",
  "webhookId": "Webhook:019542f5-b3e7-1d02-0000-000000000007",
  "type": "INCOMING_PAYMENT"
}
```

The `counterpartyInformation` object contains PII about the *sender*, provided by their VASP. The `requestedReceiverUserInfoFields` array, if present, lists information fields that the sender's VASP (or governing regulations) require about your user (the *recipient*). UMAaaS does not have this information and is requesting it from your platform to proceed with the payment. Each item in this array is an object specifying the `name` of the field (from `UserInfoFieldName`) and whether it's `mandatory`.

To approve the payment, your platform must respond with a `200 OK` status.

- If the `requestedReceiverUserInfoFields` array was present in the webhook request and contained mandatory fields, your `200 OK` response **must** include a JSON body containing a `receiverUserInfo` object. This object should contain the key-value pairs for the information fields that were requested.
- If `requestedReceiverUserInfoFields` was not present, was empty, or contained only non-mandatory fields for which you have no information, your `200 OK` response can have an empty body.

Example `200 OK` response body when information was requested and provided:

```json
{
  "receiverUserInfo": {
    "NATIONALITY": "US",
    "FULL_NAME": "John Receiver"
  }
}
```

To reject the payment, respond with a 400 Bad Request status and a JSON body with the following fields:

```json
{
  "code": "payment_rejected",
  "message": "Payment rejected due to compliance policy",
  "details": {
    "reason": "failed_counterparty_check",
    "rejectionReason": "User is in a restricted jurisdiction"
  }
}
```

## Step 5: Receive completion notification

When the payment completes, your webhook endpoint will receive another notification:

```json
{
  "transaction": {
    "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000005",
    "status": "COMPLETED",
    "type": "INCOMING",
    "senderUmaAddress": "$mary.sender@thelessgoodbank.com",
    "receiverUmaAddress": "$john.receiver@thegoodbank.com",
    "receivedAmount": {
      "amount": 50000,
      "currency": {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$",
        "decimals": 2
      }
    },
    "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
    "platformUserId": "9f84e0c2a72c4fa",
    "settlementTime": "2023-08-15T14:30:00Z",
    "createdAt": "2023-08-15T14:25:18Z",
    "description": "Payment for services",
    "counterpartyInformation": {
      "FULL_NAME": "Mary Sender",
      "DATE_OF_BIRTH": "1985-06-15"
    },
    "reconciliationInstructions": {
      "reference": "REF-123456789"
    }
  },
  "timestamp": "2023-08-15T14:32:00Z",
  "webhookId": "Webhook:019542f5-b3e7-1d02-0000-000000000007",
  "type": "INCOMING_PAYMENT"
}
```

## Detailed UMA flow

This section is not necessary knowledge for platforms, but it describes the flow at a more detailed level including UMA protocol messages for those who are curious.

```mermaid
sequenceDiagram
    participant Sender as External Sender
    participant UMAaaS as UMAaaS API
    participant Client as Your Platform
    participant Bank as Banking Provider
    
    Note over Sender, UMAaaS: Payment initiated by sender
    Sender->>UMAaaS: Lnurlp request for UMA address
    Note over UMAaaS: Resolves the UMA address to a registered user
    UMAaaS->>Sender: Lnurlp response with currencies and requested payer fields
    Sender->>UMAaaS: Payreq request with payer information and amount
    UMAaaS->>Client: Webhook: INCOMING_PAYMENT (PENDING)
    
    alt Payment approved
        Client-->>UMAaaS: HTTP 200 OK (approve payment, provide recipient PII if requested)
        UMAaaS-->>Sender: Payreq response with payee info and a Lightning Invoice
        Note over Sender: Sender pays Lightning Invoice
        UMAaaS->>Bank: Execute payment to user's bank account
        UMAaaS->>Client: Webhook: INCOMING_PAYMENT (COMPLETED)
        Client-->>UMAaaS: HTTP 200 OK (acknowledge completion)
    else Payment rejected
        Client-->>UMAaaS: HTTP 400 Bad Request with rejection reason
        UMAaaS->>Sender: Failed payreq response.
    end
```

