---
sidebar_position: 2
---

# Configuring Users

This guide provides comprehensive information about user configuration in the UMA as a Service API, including user types, registration processes, management, and bank account information.

## User Types

The UMAaaS API supports both individual and business users. While the API schema itself makes most Personally Identifiable Information (PII) optional at the initial user creation, specific fields may become mandatory based on the currencies the user will transact with and the requirements of the underlying UMA provider.

Your platform's configuration (retrieved via `GET /config`) includes a `supportedCurrencies` array. Each currency object within this array has a `umaProviderRequiredUserFields` list. If a user is intended to use a specific currency, any fields listed in `umaProviderRequiredUserFields` for that currency **must** be provided when creating or updating the user.

The base required information for all users is only:

- UMA address (e.g., `$john.doe@mycompany.com`)
- Platform user ID (your internal user identifier)
- User Type (`INDIVIDUAL` or `BUSINESS`)
- Bank account information (see below for supported formats)

### Individual Users

In some cases, only the above fields are required at user creation! Beyond those base requirements, additional fields commonly associated with individual users include:

- Full name
- Date of birth (YYYY-MM-DD format)
- Physical address (including country, state, city, postalCode)

**Note:** Check the `umaProviderRequiredUserFields` for each relevant currency in your platform's configuration to determine which of these fields are strictly mandatory at user creation/update time for that user to transact in those currencies.

### Business Users

Beyond the base requirements, additional fields commonly associated with business users include:

- Business information:
  - Legal name (this is often required, check `umaProviderRequiredUserFields`)
  - Registration number (optional, unless specified by `umaProviderRequiredUserFields`)
  - Tax ID (optional, unless specified by `umaProviderRequiredUserFields`)
- Physical address (including country, state, city, postalCode)

**Note:** Check the `umaProviderRequiredUserFields` for each relevant currency in your platform's configuration to determine which of these fields are strictly mandatory at user creation/update time for that user to transact in those currencies.

When creating or updating users, the `userType` field must be specified as either `INDIVIDUAL` or `BUSINESS`.

:::tip
There can be multiple users with the same platformUserId, but different uma addresses. This is useful if you want to track multiple uma addresses and/or bank accounts for the same user in your platform.
:::

## User Registration Process

### Creating a New User

To register a new user in the system, use the `POST /users` endpoint:

```http
POST /users
```

The API allows creating a user with minimal PII. However, to enable transactions for the user in specific currencies, you must include any PII fields mandated by the `umaProviderRequiredUserFields` for those currencies (found in your platform's configuration via `GET /config`).

Here is an example of a user creation request body where no additional PII fields are required in the `umaProviderRequiredUserFields` for the currency the user will transact in (though `bankAccountInfo` is always required):

```json
{
  "umaAddress": "$john.sender@mycompany.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "bankAccountInfo": {
    "accountType": "US_ACCOUNT",
    "accountNumber": "123450000",
    "routingNumber": "000123456",
    "accountCategory": "CHECKING",
    "bankName": "Example Bank"
  }
}
```

Simple! In this case, all that's needed is to map an UMA address to an identifier in your platform and provide their bank details to help route inbound payments to them.

The examples below show a more comprehensive set of data. Not all fields are strictly required by the API for user creation itself, but become necessary based on currency and UMA provider requirements.

Example request body for an individual user (ensure all `umaProviderRequiredUserFields` for intended currencies are included):

```json
{
  "umaAddress": "$john.sender@mycompany.com",
  "platformUserId": "9f84e0c2a72c4fa",
  "userType": "INDIVIDUAL",
  "fullName": "John Sender",
  "dateOfBirth": "1985-06-15",
  "address": {
    "line1": "Paseo de la Reforma 222",
    "line2": "Piso 15",
    "city": "Ciudad de México",
    "state": "Ciudad de México",
    "postalCode": "06600",
    "country": "MX"
  },
  "bankAccountInfo": {
    "accountType": "CLABE",
    "clabeNumber": "123456789012345678",
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
    "accountType": "US_ACCOUNT",
    "accountNumber": "123456789",
    "routingNumber": "987654321",
    "accountCategory": "CHECKING",
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

or list users with a filter:

```http
GET /users?umaAddress={umaAddress}&platformUserId={platformUserId}&userType={userType}&createdAfter={createdAfter}&createdBefore={createdBefore}&cursor={cursor}&limit={limit}
```

Note that this example shows all available filters. You can use any combination of them.

### Updating User Information

To update user information:

```http
PATCH /users/{userId}
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

The API supports various bank account formats based on country and funding type. There are two types of funding
mechanisms supported by UMAaaS: an omnibus FBO (for benefit of) account owned by the platform, or direct user-owned accounts. You must provide the correct format based on the user's region and bank account type.

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

- Tracking multiple bank accounts and uma addresses for the same user
- Linking accounts to internal accounting systems
- Maintaining consistency between UMAaaS and your platform's account records
- Facilitating account reconciliation and reporting

### FBO Accounts

FBO accounts are used when the platform has a single omnibus account that is used to fund all users. Account details
must be provided manually at the platform level. For each user, during you should simply provide:

```json
"bankAccountInfo": {
  "accountType": "FBO",
  "currencyCode": "USD" // or any other currency code supported by UMAaaS
}
```

:::tip
Please contact us to set up FBO account for a specific currency.
:::

### Mexico: CLABE

```json
{
  "accountType": "CLABE",
  "clabeNumber": "123456789012345678",
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
  "accountCategory": "CHECKING",
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

### India: UPI (Unified Payments Interface)

```json
{
  "accountType": "UPI",
  "vpa": "someuser@okbank",
  "platformAccountId": "upi_primary_1234"
}
```

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
umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId,businessLegalName,routingNumber,accountCategory
john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234,,222888888,SAVINGS
cme@uma.domain.com,biz456,BUSINESS,,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678,Acme Corp,121212121,CHECKING
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

### CSV Format

The CSV file should have the following columns:

Required columns for all users:

- umaAddress: The user's UMA address (e.g., `$john.doe@uma.domain.com`)
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
- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN, UPI)
- accountNumber: Bank account number
- bankName: Name of the bank

Required columns for business users:

- businessLegalName: Legal name of the business
- addressLine1: Street address line 1
- city: City
- state: State/Province/Region
- postalCode: Postal/ZIP code
- country: Country code (ISO 3166-1 alpha-2)
- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN, UPI)
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

For UPI:

- vpa: Virtual Payment Address for UPI payments

For IBAN:

- iban: International Bank Account Number
- swiftBic: SWIFT/BIC code (8 or 11 characters)

### Example CSV

```csv
umaAddress,platformUserId,userType,fullName,dateOfBirth,addressLine1,city,state,postalCode,country,accountType,accountNumber,routingNumber,accountCategory,bankName,platformAccountId
$john.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,987654321,CHECKING,Chase Bank,chase_primary_1234
$acme@uma.domain.com,biz456,BUSINESS,Acme Corp,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,123456789,CHECKING,Bank of America,boa_business_5678,businessLegalName,Acme Corporation
```
