# Configuring Users

This guide provides comprehensive information about user configuration in the UMA as a Service API, including user types, registration processes, management, and bank account information.

## User Types

The UMAaS API supports both individual and business users, with different required information for each user type:

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

You can retrieve user information using either the UMAaS-assigned user ID or your platform's user ID:

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

### Mexico: CLABE

```json
{
  "accountType": "CLABE",
  "accountNumber": "123456789012345678",
  "bankName": "Banco de México"
}
```

### United States: ACH (Account and Routing Number)

```json
{
  "accountType": "US_ACCOUNT",
  "accountNumber": "123456789",
  "routingNumber": "987654321",
  "bankName": "Chase Bank"
}
```

### Brazil: PIX

```json
{
  "accountType": "PIX",
  "pixKey": "12345678901",
  "pixKeyType": "CPF"
}
```

PIX key types can be one of: `CPF`, `CNPJ`, `PHONE`, `EMAIL`, or `RANDOM`.

### International: IBAN

```json
{
  "accountType": "IBAN",
  "iban": "DE89370400440532013000",
  "bankName": "Deutsche Bank"
}
```

## Data Validation

The UMAaS API performs validation on all user data. Common validation rules include:

- All required fields must be present based on user type
- Date of birth must be in YYYY-MM-DD format and represent a valid date
- Names must not contain special characters or excessive spaces
- Bank account information must follow country-specific formats
- Addresses must include all required fields including country code

If validation fails, the API will return a 400 Bad Request response with detailed error information.

## Best Practices

1. **Identity Verification**: Implement proper KYC/KYB identity verification before creating users in the UMAaS system
2. **Data Security**: Store and transmit user data securely, following data protection regulations
3. **Regular Updates**: Keep user information up to date, especially banking details
4. **Error Handling**: Implement proper error handling to manage validation failures gracefully
5. **Idempotent Operations**: Use your platformUserId consistently to avoid duplicate user creation
