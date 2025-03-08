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

```mermaid
sequenceDiagram
    participant Bank as Banking Provider
    participant Client as Your Platform
    participant UMAaaS as UMAaaS API (Sparkcore)
    participant GridSwitch as Grid Switch
    participant Counterparty as External Receiver
    
    Client->>UMAaaS: GET /receiver/{umaAddress}
    UMAaaS->>Counterparty: LNURLP Request
    Counterparty-->>UMAaaS: LNURLP Response
    UMAaaS->>GridSwitch: Get BTC rate estimates for sending currency
    UMAaaS-->>Client: Supported currencies and payer information requirements
    Note over Client: User selects currency and amount
    Client->>UMAaaS: POST /quotes with amount to send
    alt Sender-locked amount
        UMAaaS->>GridSwitch: Create Currency->BTC onramp quote for sending amount
        GridSwitch-->>UMAaaS: BTC onramp quote with payment instructions
        UMAaaS->>Counterparty: Payreq request with payer information and invoice amount
        Counterparty-->>UMAaaS: Payreq response with lightning invoice
    else Receiver-locked amount
        UMAaaS->>Counterparty: Payreq request with payer information and receiving amount
        Counterparty-->>UMAaaS: Payreq response with lightning invoice
        UMAaaS->>GridSwitch: Create Currency->BTC onramp quote to cover invoice
        GridSwitch-->>UMAaaS: BTC onramp quote with payment instructions
    end
    Note over UMAaaS: Combines onramp and offramp quotes
    UMAaaS-->>Client: Quote with payment instructions and payee information
    Note over Client: Execute payment using instructions
    Client->>Bank: Initiate bank transfer with reference
    Bank-->>GridSwitch: Bank transer completed
    GridSwitch-->>UMAaaS: Bank transer completed
    Note over UMAaaS: Convert to BTC
    UMAaaS->>GridSwitch: Pay Lightning Invoice
    GridSwitch->>Counterparty: Lightning Payment
    GridSwitch-->>UMAaaS: Lightning Payment completed
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
