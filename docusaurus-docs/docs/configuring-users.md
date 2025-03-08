---
sidebar_position: 2
---

# Configuring Users

This guide provides comprehensive information about user configuration in the UMA as a Service API, including user types, registration processes, management, and bank account information.

## User Types

The UMAaaS API supports both individual and business users, with different required information for each user type:

### Individual Users

Required information for individual users:

- UMA address (e.g., `$john.doe@mycompany.com`)
- Platform user ID (your internal user identifier)
- Full name
- Date of birth (YYYY-MM-DD format)
- Physical address (including country, state, city, postal code)
- Bank account information (see below for supported formats)

### Business Users

Required information for business users:

- UMA address (e.g., `$acme.corp@mycompany.com`)
- Platform user ID (your internal business identifier)
- Business information:
  - Legal name (required)
  - Registration number (optional)
  - Tax ID (optional)
- Physical address (including country, state, city, postal code)
- Bank account information (see below for supported formats)

When creating or updating users, the `userType` field must be specified as either `INDIVIDUAL` or `BUSINESS`, and the appropriate properties for that user type must be provided.

## User Registration Process

### Creating a New User

To register a new user in the system, use the `POST /users` endpoint:

```http
POST /users
```

Example request body for an individual user:

```json
{
  "umaAddress": "$john.sender@mycompany.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "fullName": "John Sender",
  "dateOfBirth": "1985-06-15",
  "address": {
    "line1": "123 Pine Street",
    "line2": "Unit 501",
    "city": "Mexico City",
    "state": "Mexico City",
    "postalCode": "01000",
    "country": "MX"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "accountNumber": "123456789012345678",
    "bankName": "Banco de México"
  }
}
```

Example request body for a business user:

```json
{
  "umaAddress": "$acme.corp@mycompany.com",
  "platformUserId": "b87d2e4a9c13f5b",
  "userType": "BUSINESS",
  "businessInfo": {
    "legalName": "Acme Corporation",
    "registrationNumber": "789012345",
    "taxId": "123-45-6789"
  },
  "address": {
    "line1": "456 Oak Avenue",
    "line2": "Floor 12",
    "city": "New York",
    "state": "NY",
    "postalCode": "10001",
    "country": "US"
  },
  "bankAccountInfo": {
    "accountType": "ACH",
    "accountNumber": "123456789",
    "routingNumber": "987654321",
    "bankName": "Chase Bank"
  }
}
```

### UMA Address Format

UMA addresses follow the format `$username@domain`. For your platform:

1. The `domain` part will be your configured UMA domain (set in platform configuration)
2. The `username` part can be chosen by you or your users, following these rules:
   - Must start with a $ symbol. This is to differentiate from email addresses and clearly identify an uma address.
   - The `username` portion is limited to a-z0-9-_.+
   - Addresses are case-insensitive, but by convention are written only with lowercase letters
   - Like email addresses, the maximum number of characters for the `username` portion of the address is 64 characters (including the $).

The UMAaas API will validate these requirements and will throw an error if they are not met.

## User Management

### Retrieving User Information

You can retrieve user information using either the UMAaaS-assigned user ID or your platform's user ID:

```http
GET /users/{userId}
```

or

```http
GET /users/by-platform-id/{platformUserId}
```

### Updating User Information

To update user information, use one of the following endpoints:

```http
PATCH /users/{userId}
```

or

```http
PATCH /users/by-platform-id/{platformUserId}
```

Example request body for updating a user's bank account information:

```json
{
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "123456789",
    "routingNumber": "987654321",
    "bankName": "Chase Bank"
  }
}
```

## Bank Account Information

The API supports various bank account formats based on country. You must provide the correct format based on the user's location:

### Optional Platform Account ID

All bank account types support an optional `platformAccountId` field that allows you to link bank accounts to your internal systems. This field can be any string that helps identify the account in your platform (e.g., database IDs, custom references, etc.).

Example with platform account ID:

```json
{
  "accountType": "US_ACCOUNT",
  "accountNumber": "123456789",
  "routingNumber": "987654321",
  "bankName": "Chase Bank",
  "platformAccountId": "chase_primary_1234"
}
```

Common use cases for `platformAccountId`:

- Tracking multiple bank accounts for the same user
- Linking accounts to internal accounting systems
- Maintaining consistency between UMAaS and your platform's account records
- Facilitating account reconciliation and reporting

### Mexico: CLABE

```json
{
  "accountType": "CLABE",
  "accountNumber": "123456789012345678",
  "bankName": "Banco de México",
  "platformAccountId": "banco_mx_primary_5678"
}
```

### United States: ACH (Account and Routing Number)

```json
{
  "accountType": "US_ACCOUNT",
  "accountNumber": "123456789",
  "routingNumber": "987654321",
  "bankName": "Chase Bank",
  "platformAccountId": "chase_checking_1234"
}
```

### Brazil: PIX

```json
{
  "accountType": "PIX",
  "pixKey": "12345678901",
  "pixKeyType": "CPF",
  "platformAccountId": "pix_main_9012"
}
```

PIX key types can be one of: `CPF`, `CNPJ`, `PHONE`, `EMAIL`, or `RANDOM`.

### International: IBAN

```json
{
  "accountType": "IBAN",
  "iban": "DE89370400440532013000",
  "bankName": "Deutsche Bank",
  "platformAccountId": "deutsche_primary_3456"
}
```

## Data Validation

The UMAaaS API performs validation on all user data. Common validation rules include:

- All required fields must be present based on user type
- Date of birth must be in YYYY-MM-DD format and represent a valid date
- Names must not contain special characters or excessive spaces
- Bank account information must follow country-specific formats
- Addresses must include all required fields including country code

If validation fails, the API will return a 400 Bad Request response with detailed error information.

## Best Practices

1. **Identity Verification**: Implement proper KYC/KYB identity verification before creating users in the UMAaaS system
2. **Data Security**: Store and transmit user data securely, following data protection regulations
3. **Regular Updates**: Keep user information up to date, especially banking details
4. **Error Handling**: Implement proper error handling to manage validation failures gracefully
5. **Idempotent Operations**: Use your platformUserId consistently to avoid duplicate user creation

## Bulk User Import Operations

For scenarios where you need to add many users to the system at once, the API provides a CSV file upload endpoint.

### CSV File Upload

For large-scale user imports, you can upload a CSV file containing user information:

```http
POST /users/bulk/csv
```

The CSV file should follow a specific format with required and optional columns based on user type. Here's an example:

```csv
umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId
$john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234
$acme@uma.domain.com,biz456,BUSINESS,Acme Corp,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678
```

:::tip CSV Upload Best Practices

1. Use a spreadsheet application to prepare your CSV file
2. Validate data before upload (e.g., date formats, required fields)
3. Include a header row with column names
4. Use UTF-8 encoding for special characters
5. Keep file size under 100MB for optimal processing
:::

You can track the job status through:

1. Webhook notifications (if configured)
2. Status polling endpoint:

```http
GET /users/bulk/jobs/{jobId}
```

Example job status response:

```json
{
  "jobId": "job_123456789",
  "status": "PROCESSING",
  "progress": {
    "total": 5000,
    "processed": 2500,
    "successful": 2499,
    "failed": 1
  },
  "errors": [
    {
      "platformUserId": "biz456",
      "error": {
        "code": "validation_error",
        "message": "Invalid bank account number"
      }
    }
  ]
}
```

:::tip Best Practices for Bulk Operations

1. Use platform user IDs to track individual users in the bulk operation
2. Implement proper error handling for partial successes
3. Consider breaking very large datasets into multiple smaller jobs
4. Use webhooks for real-time status updates on asynchronous jobs
5. For CSV uploads, validate your data before submission
:::
