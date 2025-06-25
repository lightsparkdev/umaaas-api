# Sending Payments - alternative JIT flow

This guide outlines the process for platforms to send payments to UMA addresses, but with an alternative just in time (JIT) user information flow.

## Process Overview

The following sequence diagram illustrates the interaction between your platform and the UMAaaS API when sending payments:

```mermaid
sequenceDiagram
    participant Bank as Bank
    participant Client as Platform
    participant UMAaaS as UMAaaS API
    participant Counterparty as UMA Counterparty
    
    Client->>UMAaaS: GET /receiver/{umaAddress}
    UMAaaS->>Counterparty: LNURLP Request
    Counterparty-->>UMAaaS: LNURLP Response
    UMAaaS-->>Client: Supported currencies and payer information requirements
    Note over Client: User selects currency and amount
    Client->>UMAaaS: POST /quotes with required payer information
    UMAaaS->>Counterparty: Payreq request with payer information and amount
    Counterparty-->>UMAaaS: Payreq response with lightning invoice
    UMAaaS-->>Client: Quote with payment instructions and payee information
    Note over Client: Execute payment using instructions
    Client->>Bank: Initiate bank transfer with reference
    Bank-->>UMAaaS: Bank transer completed
    Note over UMAaaS: Convert to BTC
    UMAaaS->>Counterparty: Pay Lightning Invoice
    Note over Counterparty: Receive Lightning Invoice, Convert to receiving currency, Send to payee.
    
    opt Payment Status Polling
        loop Until completed or failed
            Client->>UMAaaS: GET /quotes/{quoteId}
            UMAaaS-->>Client: Quote with current status
        end
    end
    
    UMAaaS->>Client: Webhook: OUTGOING_PAYMENT (status update)
    Client-->>UMAaaS: HTTP 200 OK (acknowledge webhook)
```

The process consists of five main steps:

1. **Look up the recipient's UMA address** to validate it and retrieve supported currencies
2. **Create a payment quote** to lock in exchange rates and get payment instructions
3. **Execute the payment** through your banking provider using the instructions
4. **Track the payment status** by polling or waiting for a webhook
5. **Receive completion notification** when the payment completes or fails

## Step 1: Look up recipient UMA address

First, check if a UMA address is valid and retrieve supported currencies and exchange rates.

```http
GET /receiver/$recipient@example.com?platformUserId=9f84e0c2a72c4fa
```

Response:

```json
{
  "receivingUmaAddress": "$recipient@example.com",
  "supportedCurrencies": [
    {
      "currency": {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$",
        "decimals": 2
      },
      "estimatedExchangeRate": 1.0,
      "min": 100,
      "max": 10000000
    },
    {
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€",
        "decimals": 2
      },
      "estimatedExchangeRate": 0.92,
      "min": 100,
      "max": 9000000
    }
  ],
  "requiredPayerDataFields": [
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

## Step 2: Create a payment quote

Generate a quote for the payment with locked exchange rates and fees.

```http
POST /quotes
```

Request body:

```json
{
  "receiverUmaAddress": "$recipient@example.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "sendingCurrencyCode": "USD",
  "receivingCurrencyCode": "EUR",
  "lockedCurrencySide": "SENDING",
  "lockedCurrencyAmount": 10000,
  "description": "Invoice #1234 payment",
  "payerInformation": {
    "FULL_NAME": "John Doe",
    "DATE_OF_BIRTH": "1990-01-01"
  }
}
```

Response:

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
    "code": "EUR",
    "name": "Euro",
    "symbol": "€",
    "decimals": 2
  },
  "totalSendingAmount": 10100,
  "totalReceivingAmount": 9200,
  "exchangeRate": 0.92,
  "expiresAt": "2023-09-01T14:30:00Z",
  "feesIncluded": 100,
  "counterpartyInformation": {
    "FULL_NAME": "Jane Doe",
    "DATE_OF_BIRTH": "1992-03-25"
  },
  "paymentInstructions": {
    "reference": "UMA-Q12345-REF",
    "bankAccountInfo": {
      "accountType": "CLABE",
      "accountNumber": "987654321012345678",
      "bankName": "Banco de México"
    }
  }
}
```

## Step 3: Execute the payment

Use the `paymentInstructions` from the quote to execute a payment through your banking provider. Be sure to include the provided reference code if applicable.

## Step 4: Track payment status

You can track the status of your payment by polling the payment status endpoint or waiting for the webhook notification. To poll the payment status, use the following endpoint:

```http
GET /quotes/Quote:019542f5-b3e7-1d02-0000-000000000006
```

Response:

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
    "code": "EUR",
    "name": "Euro",
    "symbol": "€",
    "decimals": 2
  },
  "totalSendingAmount": 10100,
  "totalReceivingAmount": 9200,
  "exchangeRate": 0.92,
  "expiresAt": "2023-09-01T14:30:00Z",
  "feesIncluded": 100,
  "counterpartyInformation": {
    "FULL_NAME": "Jane Doe",
    "DATE_OF_BIRTH": "1992-03-25"
  },
  "paymentInstructions": {
    "reference": "UMA-Q12345-REF",
    "bankAccountInfo": {
      "accountType": "CLABE",
      "accountNumber": "987654321012345678",
      "bankName": "Banco de México"
    }
  },
  "status": "COMPLETED",
  "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000005"
}
```

## Step 5: Receive webhook notification

When the payment status changes (to completed or failed), your platform will receive a webhook notification at your configured webhook endpoint:

```json
{
  "transaction": {
    "transactionId": "Transaction:019542f5-b3e7-1d02-0000-000000000005",
    "status": "COMPLETED",
    "type": "OUTGOING",
    "senderUmaAddress": "$sender@uma.domain",
    "receiverUmaAddress": "$recipient@external.domain",
    "sentAmount": {
      "amount": 10550,
      "currency": {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$",
        "decimals": 2
      }
    },
    "receivedAmount": {
      "amount": 9706,
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€",
        "decimals": 2
      }
    },
    "userId": "User:019542f5-b3e7-1d02-0000-000000000001",
    "platformUserId": "9f84e0c2a72c4fa",
    "settlementTime": "2023-08-15T14:30:00Z",
    "createdAt": "2023-08-15T14:25:18Z",
    "description": "Payment for invoice #1234",
    "exchangeRate": 0.92,
    "quoteId": "Quote:019542f5-b3e7-1d02-0000-000000000006",
    "paymentInstructions": {
      "reference": "UMA-Q12345-REF",
      "bankAccountInfo": {
        "accountType": "US_ACCOUNT",
        "accountNumber": "987654321",
        "routingNumber": "123456789",
        "accountCategory": "CHECKING",
        "bankName": "Chase Bank"
      }
    }
  },
  "timestamp": "2023-08-15T14:32:00Z",
  "webhookId": "Webhook:019542f5-b3e7-1d02-0000-000000000007",
  "type": "OUTGOING_PAYMENT"
}
```
