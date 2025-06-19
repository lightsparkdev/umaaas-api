# UMA As A Service Quickstart

UMA As A Service enables businesses to send and receive UMA payments globally with out interacting with crypto.
This quickstart provides an example of utilizing the UMA as a service SDK to send and receive UMA
payments.

## Prerequisites

- Java 18 or higher
- Node.js 18+ and npm (for frontend compilation)
- API credentials from Lightspark (contact your Lightspark representative)

## Getting Started

### 1. Environment Configuration

Create a `.env` file in the backend directory using the provided template:

```bash
cp .env.example .env
```

Edit the `.env` file and configure your credentials:

```bash
# UMAaaS API Configuration
UMAAAS_API_TOKEN_ID=your_api_token_id_here
UMAAAS_CLIENT_SECRET=your_client_secret_here
UMAAAS_FORWARD_DOMAIN=https://example.uma.money

# Webhook Configuration
WEBHOOK_PUBLIC_KEY=your_webhook_public_key_here

# Frontend Environment Variables (copied automatically during build)
VITE_UMAAAS_UMA_DOMAIN=your.uma.domain.com
VITE_PUBLIC_CURRENCY=USD
VITE_PUBLIC_CURRENCY_DECIMALS=2
```

**Getting API Credentials**: Contact your Lightspark representative to obtain your API token ID, client secret, and webhook public key.

### 2. Start the Application

Run the server using Gradle:

```bash
./gradlew run
```

This single command will:
- Install frontend dependencies (`npm install`)
- Copy environment variables from backend to frontend
- Build the React frontend (`npm run build`)
- Compile the Kotlin backend
- Start the server on http://localhost:8080

If the server starts successfully, you'll see:

```
2024-12-04 14:32:45.584 [main] INFO  Application - Application started in 0.303 seconds.
2024-12-04 14:32:45.682 [main] INFO  Application - Responding at http://0.0.0.0:8080
```

### 3. Access the Application

Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to access the full-stack application.

## Application Architecture

### Overview

The quickstart follows a full-stack architecture where the React frontend communicates with a Kotlin backend, which then interfaces with the UMAaaS API:

```
React Frontend → Kotlin Backend → UMAaaS API
     ↓               ↓
Static Files    Request Parsing
JSON Requests   Parameter Building
```

### Frontend-Backend Communication

The frontend sends mock JSON requests the backend. The backend explicitly parses these JSON requests and populates the appropriate UMAaaS client library request builders. 

Example flow for creating a payment quote:
1. Frontend sends JSON: `{"lookupId": "...", "lockedCurrencyAmount": 1000, ...}`
2. Backend parses JSON and builds: `QuoteCreateParams.builder().lookupId(...).lockedCurrencyAmount(...)`
3. Backend calls UMAaaS API: `UmaaasClient.client.quotes().create(params)`

### Real-time Features
The backend forwards any webhooks received to the front end to simplify understanding the flow

- **Server-Sent Events (SSE)**: Real-time webhook event streaming to the frontend
- **Webhook Processing**: Secure signature verification and event parsing

## API Routes & Examples

The backend provides several route handlers that demonstrate different UMAaaS API integrations:

### 🏦 Users (`Users.kt`)
- **GET** `/api/user` - List users with query filtering
- **POST** `/api/user` - Create new users with platform integration

**Example**: Demonstrates explicit parsing of user data including platform IDs, UMA addresses, and user types.

### 💰 Payments (`Payments.kt`)
- **GET** `/api/payments/lookup` - Look up receiving UMA addresses
- **POST** `/api/payments/quote` - Create payment quotes

**Example**: Shows how to:
- Build quote creation parameters with locked currency amounts and sides
- Handle currency conversion (Frontend) and payment flow initiation

```kotlin
// Example from Payments.kt - Quote Creation
val quoteCreateParams = QuoteCreateParams.builder()
    .lookupId(json.get("lookupId").asText())
    .lockedCurrencyAmount(json.get("lockedCurrencyAmount")?.asLong() ?: 0L)
    .lockedCurrencySide(/* parsed from JSON */)
    .receivingCurrencyCode(json.get("receivingCurrencyCode")?.asText() ?: "")
    .sendingCurrencyCode(json.get("sendingCurrencyCode")?.asText() ?: "")
    .build()
```

### 🧪 Sandbox (`Sandbox.kt`)
- **POST** `/api/sandbox/send` - Simulate sending funds (sandbox only)
- **POST** `/api/sandbox/receive` - Simulate receiving payments

**Example**: Demonstrates sandbox testing with explicit parameter building for currency amounts, references, and account information.

### 🔗 Webhooks (`Webhooks.kt`)
- **POST** `/webhooks` - Secure webhook endpoint with signature verification

**Example**: Shows secure webhook processing including:
- HMAC signature verification
- On demand user information sharing

## Available Gradle Tasks

| Task                          | Description                                                          |
| -------------------------------|---------------------------------------------------------------------- |
| `./gradlew test`              | Run the tests                                                        |
| `./gradlew build`             | Build everything                                                     |
| `./gradlew run`               | **Start the full application** (recommended)                        |
| `./gradlew copyEnvToFrontend` | Copy environment variables from backend to frontend                  |
| `./gradlew buildFrontend`     | Build the React frontend only                                       |
| `buildFatJar`                 | Build an executable JAR of the server with all dependencies included |
| `buildImage`                  | Build the docker image to use with the fat JAR                       |
| `publishImageToLocalRegistry` | Publish the docker image locally                                     |
| `runDocker`                   | Run using the local docker image                                     |

For additional support or questions about UMAaaS integration, contact your Lightspark representative.
