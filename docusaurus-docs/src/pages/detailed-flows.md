# Detailed Payment Flows

This page contains a very detailed diagram of the payment process including UMA messaging and internal UMAaaS flows betwen the grid switch and sparkcore.

## Receiving Payments

```mermaid
sequenceDiagram
    participant Sender as External Sender
    participant UMAaaS as UMAaaS API (Sparkcore)
    participant GridSwitch as Grid Switch
    participant Client as Your Platform
    participant Bank as Banking Provider
    
    Note over Sender, UMAaaS. GridSwitch: Payment initiated by sender
    Sender->>UMAaaS: Lnurlp request for UMA address
    Note over UMAaaS: Resolves the UMA address to a registered user
    UMAaaS->>GridSwitch: Fetch currencies with BTC rate estimates
    GridSwitch-->>UMAaaS: BTC rate estimates for currency preferences
    UMAaaS->>Sender: Lnurlp response with currencies and requested payer fields
    Sender->>UMAaaS: Payreq request with payer information and amount
    UMAaaS->>GridSwitch: Create BTC->Currency exchange quote
    GridSwitch-->>UMAaaS: BTC->Currency locked quote
    UMAaaS->>GridSwitch: Create Lightning Invoice corresponding to quote
    GridSwitch-->>UMAaaS: Lightning Invoice
    UMAaaS->>Client: Webhook: INCOMING_PAYMENT (PENDING)
    
    alt Payment approved
        Client-->>UMAaaS: HTTP 200 OK with payee and bank account info to pay out
        UMAaaS-->>Sender: Payreq response with payee info and a Lightning Invoice
        Note over Sender: Sender pays Lightning Invoice
        UMAaaS->>GridSwitch: Execute quote
        GridSwitch-->>UMAaaS: Quote executed
        UMAaaS->>GridSwitch: Trigger payment to user's bank account
        GridSwitch-->>UMAaaS: Payment completed
        UMAaaS->>Client: Webhook: INCOMING_PAYMENT (COMPLETED)
        Client-->>UMAaaS: HTTP 200 OK (acknowledge completion)
    else Payment rejected
        Client-->>UMAaaS: HTTP 400 Bad Request with rejection reason
        UMAaaS->>Sender: Failed payreq response.
    end
```

## Sending Payments

TODO: Add diagram for sending payments