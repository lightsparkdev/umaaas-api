# UMA as a Service (UMAaas) API

UMA as a Service is an API that facilitates global payments to and from UMA addresses, which are human-readable addresses in an email format.

## Overview

The UMAaas API provides endpoints for:

1. User Management - Adding and updating users with their UMA addresses and bank account information
2. Platform Configuration - Managing platform-specific settings such as UMA domain and required counterparty fields

## Authentication

All API requests must include HTTP Basic Authentication using the `Authorization` header. The credentials should be provided in the format `<api token id>:<api client secret>` and then Base64 encoded.

Example:

```http
Authorization: Basic <base64-encoded-credentials>
```

Where `<base64-encoded-credentials>` is the Base64 encoding of `<api token id>:<api client secret>`.

Contact UMAaas support to obtain your API token ID and client secret.

## API Documentation

The API is documented using the OpenAPI 3.0 specification. The full schema is available in the `openapi.yaml` file in this repository.

### Documentation Formats

We provide the API documentation in multiple formats:

1. **ReDoc** - Clean, responsive, three-panel documentation
2. **Swagger UI** - Interactive documentation with a "Try it out" feature

### Building Documentation

To generate the documentation, you'll need Node.js (v14 or later) installed.

```bash
# Install dependencies
npm install

# Build all documentation formats
npm run build

# Or use make
make install
make build
```

This will generate documentation in the following locations:

- ReDoc: `docs/index.html`
- Swagger UI: `swagger-docs/index.html`

### Serving Documentation Locally

You can serve the documentation locally for development purposes using several methods:

```bash
# Serve ReDoc documentation (preferred method)
npm run serve:redoc

# Serve Swagger UI documentation
npm run serve:swagger
```

#### Or use make

make serve-redoc
make serve-swagger

```

### Linting the OpenAPI Schema

We use Redocly to lint the OpenAPI schema:

```bash
npm run lint
# Or: make lint
```

## Key Endpoints

- **User Management**
  - `POST /users` - Add a new user
  - `PATCH /users/{userId}` - Update a user by ID
  - `PATCH /users/by-platform-id/{platformUserId}` - Update a user by platform ID
  - `GET /users/{userId}` - Get a user by ID
  - `GET /users/by-platform-id/{platformUserId}` - Get a user by platform ID

- **Platform Configuration**
  - `GET /config` - Get platform configuration
  - `PUT /config` - Update platform configuration

## User Types

The API supports both individual and business users, with different required information for each:

### Individual Users

Required information:

- UMA address
- Platform user ID
- Full name
- Date of birth
- Physical address
- Bank account information

### Business Users

Required information:

- UMA address
- Platform user ID
- Business information (legal name required)
- Physical address
- Bank account information

Additional optional business information:

- Registration number
- Tax ID

When creating or updating users, the `userType` field must be specified as either `INDIVIDUAL` or `BUSINESS`, and the appropriate properties for that user type must be provided.

## Bank Account Information

The API supports various bank account formats based on country:

- Mexico: CLABE
- United States: Account and routing number
- Brazil: PIX address
- International: IBAN

## Development

### Requirements

- Node.js v14 or later
- npm v6 or later

### Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Build documentation: `npm run build`

## Support

For any questions or issues, please contact UMAaas support at <support@lightspark.com>.
