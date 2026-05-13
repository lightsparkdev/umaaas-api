// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/users',
    httpMethod: 'post',
    summary: 'Add a new user',
    description: 'Register a new user in the system with UMA address and bank account information',
    stainlessPath: '(resource) users > (method) create',
    qualified: 'client.users.create',
    params: [
      "{ platformUserId: string; umaAddress: string; userType: 'INDIVIDUAL' | 'BUSINESS'; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: 'INDIVIDUAL' | 'BUSINESS'; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; };",
    ],
    response:
      '{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }',
    perLanguage: {
      typescript: {
        method: 'client.users.create',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst user = await client.users.create({\n  bankAccountInfo: {\n    accountType: 'US_ACCOUNT',\n    bankName: 'Chase Bank',\n    platformAccountId: 'chase_primary_1234',\n  },\n  platformUserId: '7b3c5a89d2f1e0',\n  umaAddress: '$jane.doe@uma.domain.com',\n  userType: 'INDIVIDUAL',\n  address: {\n    line1: '123 Pine Street',\n    line2: 'Unit 501',\n    city: 'Seattle',\n    state: 'WA',\n    postalCode: '98101',\n    country: 'US',\n  },\n  birthDate: '1992-03-25',\n  fullName: 'Jane Doe',\n});\n\nconsole.log(user);",
      },
      kotlin: {
        method: 'users().create',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.BankAccountType\nimport com.lightspark.umaaas.models.users.IndividualUser\nimport com.lightspark.umaaas.models.users.UserBankAccountInfo\nimport com.lightspark.umaaas.models.users.UserCreateResponse\nimport com.lightspark.umaaas.models.users.UserType\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: IndividualUser = IndividualUser.builder()\n        .platformUserId("7b3c5a89d2f1e0")\n        .umaAddress("\\$jane.doe@uma.domain.com")\n        .userType(UserType.INDIVIDUAL)\n        .bankAccountInfo(UserBankAccountInfo.UserClabeAccountInfo.builder()\n            .bankName("Chase Bank")\n            .clabeNumber("123456789012345678")\n            .accountType(BankAccountType.US_ACCOUNT)\n            .build())\n        .build()\n    val user: UserCreateResponse = client.users().create(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/users \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "bankAccountInfo": {\n            "bankName": "BBVA Mexico",\n            "clabeNumber": "123456789012345678",\n            "accountType": "CLABE"\n          },\n          "platformUserId": "9f84e0c2a72c4fa",\n          "umaAddress": "$john.doe@uma.domain.com",\n          "userType": "INDIVIDUAL",\n          "birthDate": "1990-01-15",\n          "fullName": "John Michael Doe",\n          "nationality": "US"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/users',
    httpMethod: 'get',
    summary: 'List users',
    description:
      'Retrieve a list of users with optional filtering parameters. Returns all users that match\nthe specified filters. If no filters are provided, returns all users (paginated).\n',
    stainlessPath: '(resource) users > (method) list',
    qualified: 'client.users.list',
    params: [
      'createdAfter?: string;',
      'createdBefore?: string;',
      'cursor?: string;',
      'isIncludingDeleted?: boolean;',
      'limit?: number;',
      'platformUserId?: string;',
      'umaAddress?: string;',
      'updatedAfter?: string;',
      'updatedBefore?: string;',
      "userType?: 'INDIVIDUAL' | 'BUSINESS';",
    ],
    response:
      '{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }',
    markdown:
      "## list\n\n`client.users.list(createdAfter?: string, createdBefore?: string, cursor?: string, isIncludingDeleted?: boolean, limit?: number, platformUserId?: string, umaAddress?: string, updatedAfter?: string, updatedBefore?: string, userType?: 'INDIVIDUAL' | 'BUSINESS'): user | user`\n\n**get** `/users`\n\nRetrieve a list of users with optional filtering parameters. Returns all users that match\nthe specified filters. If no filters are provided, returns all users (paginated).\n\n\n### Parameters\n\n- `createdAfter?: string`\n  Filter users created after this timestamp (inclusive)\n\n- `createdBefore?: string`\n  Filter users created before this timestamp (inclusive)\n\n- `cursor?: string`\n  Cursor for pagination (returned from previous request)\n\n- `isIncludingDeleted?: boolean`\n  Whether to include deleted users in the results. Default is false.\n\n- `limit?: number`\n  Maximum number of results to return (default 20, max 100)\n\n- `platformUserId?: string`\n  Filter by platform-specific user identifier\n\n- `umaAddress?: string`\n  Filter by UMA address\n\n- `updatedAfter?: string`\n  Filter users updated after this timestamp (inclusive)\n\n- `updatedBefore?: string`\n  Filter users updated before this timestamp (inclusive)\n\n- `userType?: 'INDIVIDUAL' | 'BUSINESS'`\n  Filter by user type\n\n### Returns\n\n- `{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\n// Automatically fetches more pages as needed.\nfor await (const userListResponse of client.users.list()) {\n  console.log(userListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.list',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const userListResponse of client.users.list()) {\n  console.log(userListResponse);\n}",
      },
      kotlin: {
        method: 'users().list',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.UserListPage\nimport com.lightspark.umaaas.models.users.UserListParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val page: UserListPage = client.users().list()\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/users \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/users/{userId}',
    httpMethod: 'get',
    summary: 'Get user by ID',
    description: 'Retrieve a user by their system-generated ID',
    stainlessPath: '(resource) users > (method) retrieve',
    qualified: 'client.users.retrieve',
    params: ['userId: string;'],
    response:
      '{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }',
    markdown:
      "## retrieve\n\n`client.users.retrieve(userId: string): user | user`\n\n**get** `/users/{userId}`\n\nRetrieve a user by their system-generated ID\n\n### Parameters\n\n- `userId: string`\n\n### Returns\n\n- `{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst user = await client.users.retrieve('userId');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.retrieve',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst user = await client.users.retrieve('userId');\n\nconsole.log(user);",
      },
      kotlin: {
        method: 'users().retrieve',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.UserRetrieveParams\nimport com.lightspark.umaaas.models.users.UserRetrieveResponse\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val user: UserRetrieveResponse = client.users().retrieve("userId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/users/$USER_ID \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/users/{userId}',
    httpMethod: 'patch',
    summary: 'Update user by ID',
    description: "Update a user's metadata by their system-generated ID",
    stainlessPath: '(resource) users > (method) update',
    qualified: 'client.users.update',
    params: [
      'userId: string;',
      "body: { address?: { country: string; line1: string; postalCode: string; city?: string; line2?: string; state?: string; town?: string; }; bankAccountInfo?: { bankName: string; clabeNumber: string; accountHolderName?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { accountCategory: 'CHECKING' | 'SAVINGS'; accountNumber: string; routingNumber: string; accountHolderName?: string; bankName?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { pixKey: string; pixKeyType: 'CPF' | 'CNPJ' | 'EMAIL' | 'PHONE' | 'RANDOM'; accountHolderName?: string; bankName?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { bankName: string; iban: string; accountHolderName?: string; swiftBic?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { accountType: bank_account_type; platformAccountId?: string; } | { vpa: string; accountHolderName?: string; } & { accountType: bank_account_type; platformAccountId?: string; }; birthDate?: string; fullName?: string; nationality?: string; umaAddress?: string; } | { address?: { country: string; line1: string; postalCode: string; city?: string; line2?: string; state?: string; town?: string; }; bankAccountInfo?: { bankName: string; clabeNumber: string; accountHolderName?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { accountCategory: 'CHECKING' | 'SAVINGS'; accountNumber: string; routingNumber: string; accountHolderName?: string; bankName?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { pixKey: string; pixKeyType: 'CPF' | 'CNPJ' | 'EMAIL' | 'PHONE' | 'RANDOM'; accountHolderName?: string; bankName?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { bankName: string; iban: string; accountHolderName?: string; swiftBic?: string; } & { accountType: bank_account_type; platformAccountId?: string; } | { accountType: bank_account_type; platformAccountId?: string; } | { vpa: string; accountHolderName?: string; } & { accountType: bank_account_type; platformAccountId?: string; }; businessInfo?: { legalName?: string; registrationNumber?: string; taxId?: string; }; umaAddress?: string; };",
    ],
    response:
      '{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }',
    perLanguage: {
      typescript: {
        method: 'client.users.update',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst user = await client.users.update('userId', {\n  address: {\n    line1: '456 Market St',\n    city: 'San Francisco',\n    state: 'CA',\n    postalCode: '94103',\n    country: 'US',\n  },\n  bankAccountInfo: {\n    accountType: 'US_ACCOUNT',\n    bankName: 'Wells Fargo',\n    platformAccountId: 'wf_checking_9012',\n  },\n  birthDate: '1985-06-15',\n  fullName: 'John Smith',\n});\n\nconsole.log(user);",
      },
      kotlin: {
        method: 'users().update',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.UserUpdateParams\nimport com.lightspark.umaaas.models.users.UserUpdateResponse\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: UserUpdateParams = UserUpdateParams.builder()\n        .userId("userId")\n        .body(UserUpdateParams.Body.IndividualUpdate.builder().build())\n        .build()\n    val user: UserUpdateResponse = client.users().update(params)\n}',
      },
      http: {
        example:
          "curl https://api.uma.money/umaaas/2025-05-15/users/$USER_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -u \"$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/users/{userId}',
    httpMethod: 'delete',
    summary: 'Delete user by ID',
    description: 'Delete a user by their system-generated ID',
    stainlessPath: '(resource) users > (method) delete',
    qualified: 'client.users.delete',
    params: ['userId: string;'],
    response:
      '{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }',
    markdown:
      "## delete\n\n`client.users.delete(userId: string): user | user`\n\n**delete** `/users/{userId}`\n\nDelete a user by their system-generated ID\n\n### Parameters\n\n- `userId: string`\n\n### Returns\n\n- `{ platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; } | { platformUserId: string; umaAddress: string; userType: user_type; id?: string; createdAt?: string; isDeleted?: boolean; updatedAt?: string; }`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst user = await client.users.delete('userId');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.delete',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst user = await client.users.delete('userId');\n\nconsole.log(user);",
      },
      kotlin: {
        method: 'users().delete',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.UserDeleteParams\nimport com.lightspark.umaaas.models.users.UserDeleteResponse\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val user: UserDeleteResponse = client.users().delete("userId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/users/$USER_ID \\\n    -X DELETE \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/users/bulk/csv',
    httpMethod: 'post',
    summary: 'Upload users via CSV file',
    description:
      'Upload a CSV file containing user information for bulk creation. The CSV file should follow\na specific format with required and optional columns based on user type.\n\n### CSV Format\nThe CSV file should have the following columns:\n\nRequired columns for all users:\n- umaAddress: The user\'s UMA address (e.g., $john.doe@uma.domain.com)\n- platformUserId: Your platform\'s unique identifier for the user\n- userType: Either "INDIVIDUAL" or "BUSINESS"\n\nRequired columns for individual users:\n- fullName: Individual\'s full name\n- birthDate: Date of birth in YYYY-MM-DD format\n- addressLine1: Street address line 1\n- city: City\n- state: State/Province/Region\n- postalCode: Postal/ZIP code\n- country: Country code (ISO 3166-1 alpha-2)\n- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)\n- accountNumber: Bank account number\n- bankName: Name of the bank\n\nRequired columns for business users:\n- businessLegalName: Legal name of the business\n- addressLine1: Street address line 1\n- city: City\n- state: State/Province/Region\n- postalCode: Postal/ZIP code\n- country: Country code (ISO 3166-1 alpha-2)\n- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)\n- accountNumber: Bank account number\n- bankName: Name of the bank\n\nOptional columns for all users:\n- addressLine2: Street address line 2\n- platformAccountId: Your platform\'s identifier for the bank account\n- description: Optional description for the user\n\nOptional columns for individual users:\n- email: User\'s email address\n\nOptional columns for business users:\n- businessRegistrationNumber: Business registration number\n- businessTaxId: Tax identification number\n\nAdditional required columns based on account type:\n\nFor US_ACCOUNT:\n- routingNumber: ACH routing number (9 digits)\n- accountCategory: Either "CHECKING" or "SAVINGS"\n\nFor CLABE:\n- clabeNumber: 18-digit CLABE number\n\nFor PIX:\n- pixKey: PIX key value\n- pixKeyType: Type of PIX key (CPF, CNPJ, EMAIL, PHONE, RANDOM)\n\nFor IBAN:\n- iban: International Bank Account Number\n- swiftBic: SWIFT/BIC code (8 or 11 characters)\n\nSee the UserBankAccountInfo and UserInfo schemas for more details on the required and optional fields.\n\n### Example CSV\n```csv\numaAddress,platformUserId,userType,fullName,birthDate,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId,businessLegalName,routingNumber,accountCategory\njohn.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234,,222888888,SAVINGS\nacme@uma.domain.com,biz456,BUSINESS,,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678,Acme Corp,121212121,CHECKING\n```\n\nThe upload process is asynchronous and will return a job ID that can be used to track progress.\nYou can monitor the job status using the `/users/bulk/jobs/{jobId}` endpoint.\n',
    stainlessPath: '(resource) users.bulk > (method) upload',
    qualified: 'client.users.bulk.upload',
    params: ['file: string;'],
    response: "{ jobId: string; status: 'PENDING' | 'PROCESSING'; }",
    markdown:
      "## upload\n\n`client.users.bulk.upload(file: string): { jobId: string; status: 'PENDING' | 'PROCESSING'; }`\n\n**post** `/users/bulk/csv`\n\nUpload a CSV file containing user information for bulk creation. The CSV file should follow\na specific format with required and optional columns based on user type.\n\n### CSV Format\nThe CSV file should have the following columns:\n\nRequired columns for all users:\n- umaAddress: The user's UMA address (e.g., $john.doe@uma.domain.com)\n- platformUserId: Your platform's unique identifier for the user\n- userType: Either \"INDIVIDUAL\" or \"BUSINESS\"\n\nRequired columns for individual users:\n- fullName: Individual's full name\n- birthDate: Date of birth in YYYY-MM-DD format\n- addressLine1: Street address line 1\n- city: City\n- state: State/Province/Region\n- postalCode: Postal/ZIP code\n- country: Country code (ISO 3166-1 alpha-2)\n- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)\n- accountNumber: Bank account number\n- bankName: Name of the bank\n\nRequired columns for business users:\n- businessLegalName: Legal name of the business\n- addressLine1: Street address line 1\n- city: City\n- state: State/Province/Region\n- postalCode: Postal/ZIP code\n- country: Country code (ISO 3166-1 alpha-2)\n- accountType: Bank account type (CLABE, US_ACCOUNT, PIX, IBAN)\n- accountNumber: Bank account number\n- bankName: Name of the bank\n\nOptional columns for all users:\n- addressLine2: Street address line 2\n- platformAccountId: Your platform's identifier for the bank account\n- description: Optional description for the user\n\nOptional columns for individual users:\n- email: User's email address\n\nOptional columns for business users:\n- businessRegistrationNumber: Business registration number\n- businessTaxId: Tax identification number\n\nAdditional required columns based on account type:\n\nFor US_ACCOUNT:\n- routingNumber: ACH routing number (9 digits)\n- accountCategory: Either \"CHECKING\" or \"SAVINGS\"\n\nFor CLABE:\n- clabeNumber: 18-digit CLABE number\n\nFor PIX:\n- pixKey: PIX key value\n- pixKeyType: Type of PIX key (CPF, CNPJ, EMAIL, PHONE, RANDOM)\n\nFor IBAN:\n- iban: International Bank Account Number\n- swiftBic: SWIFT/BIC code (8 or 11 characters)\n\nSee the UserBankAccountInfo and UserInfo schemas for more details on the required and optional fields.\n\n### Example CSV\n```csv\numaAddress,platformUserId,userType,fullName,birthDate,addressLine1,city,state,postalCode,country,accountType,accountNumber,bankName,platformAccountId,businessLegalName,routingNumber,accountCategory\njohn.doe@uma.domain.com,user123,INDIVIDUAL,John Doe,1990-01-15,123 Main St,San Francisco,CA,94105,US,US_ACCOUNT,123456789,Chase Bank,chase_primary_1234,,222888888,SAVINGS\nacme@uma.domain.com,biz456,BUSINESS,,,400 Commerce Way,Austin,TX,78701,US,US_ACCOUNT,987654321,Bank of America,boa_business_5678,Acme Corp,121212121,CHECKING\n```\n\nThe upload process is asynchronous and will return a job ID that can be used to track progress.\nYou can monitor the job status using the `/users/bulk/jobs/{jobId}` endpoint.\n\n\n### Parameters\n\n- `file: string`\n  CSV file containing user information\n\n### Returns\n\n- `{ jobId: string; status: 'PENDING' | 'PROCESSING'; }`\n\n  - `jobId: string`\n  - `status: 'PENDING' | 'PROCESSING'`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst response = await client.users.bulk.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.bulk.upload',
        example:
          "import fs from 'fs';\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst response = await client.users.bulk.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(response.jobId);",
      },
      kotlin: {
        method: 'users().bulk().upload',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadParams\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadResponse\nimport java.io.ByteArrayInputStream\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: BulkUploadParams = BulkUploadParams.builder()\n        .file("Example data".byteInputStream())\n        .build()\n    val response: BulkUploadResponse = client.users().bulk().upload(params)\n}',
      },
      http: {
        example:
          "curl https://api.uma.money/umaaas/2025-05-15/users/bulk/csv \\\n    -H 'Content-Type: multipart/form-data' \\\n    -u \"$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET\" \\\n    -F 'file=@/path/to/file'",
      },
    },
  },
  {
    name: 'get_job_status',
    endpoint: '/users/bulk/jobs/{jobId}',
    httpMethod: 'get',
    summary: 'Get bulk import job status',
    description:
      'Retrieve the current status and results of a bulk user import job. This endpoint can be used\nto track the progress of both CSV uploads.\n\nThe response includes:\n- Overall job status\n- Progress statistics\n- Detailed error information for failed entries\n- Completion timestamp when finished\n',
    stainlessPath: '(resource) users.bulk > (method) get_job_status',
    qualified: 'client.users.bulk.getJobStatus',
    params: ['jobId: string;'],
    response:
      "{ jobId: string; progress: { failed: number; processed: number; successful: number; total: number; }; status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'; completedAt?: string; errors?: { correlationId: string; error: { code?: string; details?: object; message?: string; }; }[]; }",
    markdown:
      "## get_job_status\n\n`client.users.bulk.getJobStatus(jobId: string): { jobId: string; progress: object; status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'; completedAt?: string; errors?: object[]; }`\n\n**get** `/users/bulk/jobs/{jobId}`\n\nRetrieve the current status and results of a bulk user import job. This endpoint can be used\nto track the progress of both CSV uploads.\n\nThe response includes:\n- Overall job status\n- Progress statistics\n- Detailed error information for failed entries\n- Completion timestamp when finished\n\n\n### Parameters\n\n- `jobId: string`\n\n### Returns\n\n- `{ jobId: string; progress: { failed: number; processed: number; successful: number; total: number; }; status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'; completedAt?: string; errors?: { correlationId: string; error: { code?: string; details?: object; message?: string; }; }[]; }`\n\n  - `jobId: string`\n  - `progress: { failed: number; processed: number; successful: number; total: number; }`\n  - `status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'`\n  - `completedAt?: string`\n  - `errors?: { correlationId: string; error: { code?: string; details?: object; message?: string; }; }[]`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst response = await client.users.bulk.getJobStatus('jobId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.bulk.getJobStatus',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst response = await client.users.bulk.getJobStatus('jobId');\n\nconsole.log(response.jobId);",
      },
      kotlin: {
        method: 'users().bulk().getJobStatus',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.bulk.BulkGetJobStatusParams\nimport com.lightspark.umaaas.models.users.bulk.BulkGetJobStatusResponse\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val response: BulkGetJobStatusResponse = client.users().bulk().getJobStatus("jobId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/users/bulk/jobs/$JOB_ID \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/tokens',
    httpMethod: 'post',
    summary: 'Create a new API token',
    description: 'Create a new API token to access the UMAaaS APIs.',
    stainlessPath: '(resource) tokens > (method) create',
    qualified: 'client.tokens.create',
    params: ['name: string;', "permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[];"],
    response:
      "{ id: string; clientId: string; createdAt: string; name: string; permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]; updatedAt: string; clientSecret?: string; }",
    markdown:
      "## create\n\n`client.tokens.create(name: string, permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]): { id: string; clientId: string; createdAt: string; name: string; permissions: permission[]; updatedAt: string; clientSecret?: string; }`\n\n**post** `/tokens`\n\nCreate a new API token to access the UMAaaS APIs.\n\n### Parameters\n\n- `name: string`\n  Name of the token to help identify it\n\n- `permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]`\n  A list of permissions to grant to the token\n\n### Returns\n\n- `{ id: string; clientId: string; createdAt: string; name: string; permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]; updatedAt: string; clientSecret?: string; }`\n\n  - `id: string`\n  - `clientId: string`\n  - `createdAt: string`\n  - `name: string`\n  - `permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]`\n  - `updatedAt: string`\n  - `clientSecret?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst apiToken = await client.tokens.create({ name: 'Sandbox read-only', permissions: ['VIEW'] });\n\nconsole.log(apiToken);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tokens.create',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst apiToken = await client.tokens.create({ name: 'Sandbox read-only', permissions: ['VIEW'] });\n\nconsole.log(apiToken.id);",
      },
      kotlin: {
        method: 'tokens().create',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.tokens.ApiToken\nimport com.lightspark.umaaas.models.tokens.Permission\nimport com.lightspark.umaaas.models.tokens.TokenCreateParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: TokenCreateParams = TokenCreateParams.builder()\n        .name("Sandbox read-only")\n        .addPermission(Permission.VIEW)\n        .build()\n    val apiToken: ApiToken = client.tokens().create(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/tokens \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "name": "Sandbox read-only",\n          "permissions": [\n            "VIEW"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/tokens',
    httpMethod: 'get',
    summary: 'List tokens',
    description:
      'Retrieve a list of API tokens with optional filtering parameters. Returns all tokens that match\nthe specified filters. If no filters are provided, returns all tokens (paginated).\n',
    stainlessPath: '(resource) tokens > (method) list',
    qualified: 'client.tokens.list',
    params: [
      'createdAfter?: string;',
      'createdBefore?: string;',
      'cursor?: string;',
      'limit?: number;',
      'name?: string;',
      'updatedAfter?: string;',
      'updatedBefore?: string;',
    ],
    response:
      "{ id: string; clientId: string; createdAt: string; name: string; permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]; updatedAt: string; clientSecret?: string; }",
    markdown:
      "## list\n\n`client.tokens.list(createdAfter?: string, createdBefore?: string, cursor?: string, limit?: number, name?: string, updatedAfter?: string, updatedBefore?: string): { id: string; clientId: string; createdAt: string; name: string; permissions: permission[]; updatedAt: string; clientSecret?: string; }`\n\n**get** `/tokens`\n\nRetrieve a list of API tokens with optional filtering parameters. Returns all tokens that match\nthe specified filters. If no filters are provided, returns all tokens (paginated).\n\n\n### Parameters\n\n- `createdAfter?: string`\n  Filter users created after this timestamp (inclusive)\n\n- `createdBefore?: string`\n  Filter users created before this timestamp (inclusive)\n\n- `cursor?: string`\n  Cursor for pagination (returned from previous request)\n\n- `limit?: number`\n  Maximum number of results to return (default 20, max 100)\n\n- `name?: string`\n  Filter by name of the token\n\n- `updatedAfter?: string`\n  Filter users updated after this timestamp (inclusive)\n\n- `updatedBefore?: string`\n  Filter users updated before this timestamp (inclusive)\n\n### Returns\n\n- `{ id: string; clientId: string; createdAt: string; name: string; permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]; updatedAt: string; clientSecret?: string; }`\n\n  - `id: string`\n  - `clientId: string`\n  - `createdAt: string`\n  - `name: string`\n  - `permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]`\n  - `updatedAt: string`\n  - `clientSecret?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\n// Automatically fetches more pages as needed.\nfor await (const apiToken of client.tokens.list()) {\n  console.log(apiToken);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.tokens.list',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const apiToken of client.tokens.list()) {\n  console.log(apiToken.id);\n}",
      },
      kotlin: {
        method: 'tokens().list',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.tokens.TokenListPage\nimport com.lightspark.umaaas.models.tokens.TokenListParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val page: TokenListPage = client.tokens().list()\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/tokens \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/tokens/{tokenId}',
    httpMethod: 'get',
    summary: 'Get API token by ID',
    description: 'Retrieve an API token by their system-generated ID',
    stainlessPath: '(resource) tokens > (method) retrieve',
    qualified: 'client.tokens.retrieve',
    params: ['tokenId: string;'],
    response:
      "{ id: string; clientId: string; createdAt: string; name: string; permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]; updatedAt: string; clientSecret?: string; }",
    markdown:
      "## retrieve\n\n`client.tokens.retrieve(tokenId: string): { id: string; clientId: string; createdAt: string; name: string; permissions: permission[]; updatedAt: string; clientSecret?: string; }`\n\n**get** `/tokens/{tokenId}`\n\nRetrieve an API token by their system-generated ID\n\n### Parameters\n\n- `tokenId: string`\n\n### Returns\n\n- `{ id: string; clientId: string; createdAt: string; name: string; permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]; updatedAt: string; clientSecret?: string; }`\n\n  - `id: string`\n  - `clientId: string`\n  - `createdAt: string`\n  - `name: string`\n  - `permissions: 'VIEW' | 'TRANSACT' | 'MANAGE'[]`\n  - `updatedAt: string`\n  - `clientSecret?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst apiToken = await client.tokens.retrieve('tokenId');\n\nconsole.log(apiToken);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tokens.retrieve',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst apiToken = await client.tokens.retrieve('tokenId');\n\nconsole.log(apiToken.id);",
      },
      kotlin: {
        method: 'tokens().retrieve',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.tokens.ApiToken\nimport com.lightspark.umaaas.models.tokens.TokenRetrieveParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val apiToken: ApiToken = client.tokens().retrieve("tokenId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/tokens/$TOKEN_ID \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/tokens/{tokenId}',
    httpMethod: 'delete',
    summary: 'Delete API token by ID',
    description: 'Delete an API token by their system-generated ID',
    stainlessPath: '(resource) tokens > (method) delete',
    qualified: 'client.tokens.delete',
    params: ['tokenId: string;'],
    markdown:
      "## delete\n\n`client.tokens.delete(tokenId: string): void`\n\n**delete** `/tokens/{tokenId}`\n\nDelete an API token by their system-generated ID\n\n### Parameters\n\n- `tokenId: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nawait client.tokens.delete('tokenId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.tokens.delete',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nawait client.tokens.delete('tokenId');",
      },
      kotlin: {
        method: 'tokens().delete',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.tokens.TokenDeleteParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    client.tokens().delete("tokenId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/tokens/$TOKEN_ID \\\n    -X DELETE \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/config',
    httpMethod: 'get',
    summary: 'Get platform configuration',
    description: 'Retrieve the current platform configuration',
    stainlessPath: '(resource) config > (method) retrieve',
    qualified: 'client.config.retrieve',
    response:
      '{ id?: string; createdAt?: string; proxyUmaaasSubdomain?: string; supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: transaction_type[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: counterparty_field_definition[]; umaProviderRequiredCounterpartyUserFields?: user_info_field_name[]; umaProviderRequiredUserFields?: user_info_field_name[]; }[]; umaDomain?: string; updatedAt?: string; webhookEndpoint?: string; }',
    markdown:
      "## retrieve\n\n`client.config.retrieve(): { id?: string; createdAt?: string; proxyUmaaasSubdomain?: string; supportedCurrencies?: platform_currency_config[]; umaDomain?: string; updatedAt?: string; webhookEndpoint?: string; }`\n\n**get** `/config`\n\nRetrieve the current platform configuration\n\n### Returns\n\n- `{ id?: string; createdAt?: string; proxyUmaaasSubdomain?: string; supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: transaction_type[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: counterparty_field_definition[]; umaProviderRequiredCounterpartyUserFields?: user_info_field_name[]; umaProviderRequiredUserFields?: user_info_field_name[]; }[]; umaDomain?: string; updatedAt?: string; webhookEndpoint?: string; }`\n\n  - `id?: string`\n  - `createdAt?: string`\n  - `proxyUmaaasSubdomain?: string`\n  - `supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: 'INCOMING' | 'OUTGOING'[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: { mandatory: boolean; name: user_info_field_name; }[]; umaProviderRequiredCounterpartyUserFields?: string[]; umaProviderRequiredUserFields?: string[]; }[]`\n  - `umaDomain?: string`\n  - `updatedAt?: string`\n  - `webhookEndpoint?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst platformConfig = await client.config.retrieve();\n\nconsole.log(platformConfig);\n```",
    perLanguage: {
      typescript: {
        method: 'client.config.retrieve',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst platformConfig = await client.config.retrieve();\n\nconsole.log(platformConfig.id);",
      },
      kotlin: {
        method: 'config().retrieve',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.config.ConfigRetrieveParams\nimport com.lightspark.umaaas.models.config.PlatformConfig\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val platformConfig: PlatformConfig = client.config().retrieve()\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/config \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/config',
    httpMethod: 'patch',
    summary: 'Update platform configuration',
    description: 'Update the platform configuration settings',
    stainlessPath: '(resource) config > (method) update',
    qualified: 'client.config.update',
    params: [
      "supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: 'INCOMING' | 'OUTGOING'[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: { mandatory: boolean; name: user_info_field_name; }[]; umaProviderRequiredCounterpartyUserFields?: string[]; umaProviderRequiredUserFields?: string[]; }[];",
      'umaDomain?: string;',
      'webhookEndpoint?: string;',
    ],
    response:
      '{ id?: string; createdAt?: string; proxyUmaaasSubdomain?: string; supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: transaction_type[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: counterparty_field_definition[]; umaProviderRequiredCounterpartyUserFields?: user_info_field_name[]; umaProviderRequiredUserFields?: user_info_field_name[]; }[]; umaDomain?: string; updatedAt?: string; webhookEndpoint?: string; }',
    markdown:
      "## update\n\n`client.config.update(supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: transaction_type[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: counterparty_field_definition[]; umaProviderRequiredCounterpartyUserFields?: user_info_field_name[]; umaProviderRequiredUserFields?: user_info_field_name[]; }[], umaDomain?: string, webhookEndpoint?: string): { id?: string; createdAt?: string; proxyUmaaasSubdomain?: string; supportedCurrencies?: platform_currency_config[]; umaDomain?: string; updatedAt?: string; webhookEndpoint?: string; }`\n\n**patch** `/config`\n\nUpdate the platform configuration settings\n\n### Parameters\n\n- `supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: 'INCOMING' | 'OUTGOING'[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: { mandatory: boolean; name: user_info_field_name; }[]; umaProviderRequiredCounterpartyUserFields?: string[]; umaProviderRequiredUserFields?: string[]; }[]`\n\n- `umaDomain?: string`\n\n- `webhookEndpoint?: string`\n\n### Returns\n\n- `{ id?: string; createdAt?: string; proxyUmaaasSubdomain?: string; supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: transaction_type[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: counterparty_field_definition[]; umaProviderRequiredCounterpartyUserFields?: user_info_field_name[]; umaProviderRequiredUserFields?: user_info_field_name[]; }[]; umaDomain?: string; updatedAt?: string; webhookEndpoint?: string; }`\n\n  - `id?: string`\n  - `createdAt?: string`\n  - `proxyUmaaasSubdomain?: string`\n  - `supportedCurrencies?: { currencyCode: string; enabledTransactionTypes: 'INCOMING' | 'OUTGOING'[]; maxAmount: number; minAmount: number; requiredCounterpartyFields: { mandatory: boolean; name: user_info_field_name; }[]; umaProviderRequiredCounterpartyUserFields?: string[]; umaProviderRequiredUserFields?: string[]; }[]`\n  - `umaDomain?: string`\n  - `updatedAt?: string`\n  - `webhookEndpoint?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst platformConfig = await client.config.update();\n\nconsole.log(platformConfig);\n```",
    perLanguage: {
      typescript: {
        method: 'client.config.update',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst platformConfig = await client.config.update({\n  supportedCurrencies: [\n    {\n      currencyCode: 'USD',\n      minAmount: 100,\n      maxAmount: 1000000,\n      enabledTransactionTypes: ['OUTGOING', 'INCOMING'],\n      requiredCounterpartyFields: [\n        { name: 'FULL_NAME', mandatory: true },\n        { name: 'NATIONALITY', mandatory: true },\n        { name: 'BIRTH_DATE', mandatory: true },\n      ],\n    },\n  ],\n  umaDomain: 'mycompany.com',\n  webhookEndpoint: 'https://api.mycompany.com/webhooks/uma',\n});\n\nconsole.log(platformConfig.id);",
      },
      kotlin: {
        method: 'config().update',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.config.ConfigUpdateParams\nimport com.lightspark.umaaas.models.config.PlatformConfig\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val platformConfig: PlatformConfig = client.config().update()\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/config \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "supportedCurrencies": [\n            {\n              "currencyCode": "USD",\n              "enabledTransactionTypes": [\n                "OUTGOING",\n                "INCOMING"\n              ],\n              "maxAmount": 1000000,\n              "minAmount": 100,\n              "requiredCounterpartyFields": [\n                {\n                  "mandatory": true,\n                  "name": "FULL_NAME"\n                },\n                {\n                  "mandatory": true,\n                  "name": "NATIONALITY"\n                },\n                {\n                  "mandatory": true,\n                  "name": "BIRTH_DATE"\n                }\n              ]\n            }\n          ],\n          "umaDomain": "mycompany.com",\n          "webhookEndpoint": "https://api.mycompany.com/webhooks/uma"\n        }\'',
      },
    },
  },
  {
    name: 'send_test',
    endpoint: '/webhooks/test',
    httpMethod: 'post',
    summary: 'Send a test webhook',
    description: 'Send a test webhook to the configured endpoint',
    stainlessPath: '(resource) webhooks > (method) send_test',
    qualified: 'client.webhooks.sendTest',
    response: '{ response_status: number; response_body?: string; url?: string; }',
    markdown:
      "## send_test\n\n`client.webhooks.sendTest(): { response_status: number; response_body?: string; url?: string; }`\n\n**post** `/webhooks/test`\n\nSend a test webhook to the configured endpoint\n\n### Returns\n\n- `{ response_status: number; response_body?: string; url?: string; }`\n\n  - `response_status: number`\n  - `response_body?: string`\n  - `url?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst response = await client.webhooks.sendTest();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.sendTest',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst response = await client.webhooks.sendTest();\n\nconsole.log(response.response_status);",
      },
      kotlin: {
        method: 'webhooks().sendTest',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.webhooks.WebhookSendTestParams\nimport com.lightspark.umaaas.models.webhooks.WebhookSendTestResponse\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val response: WebhookSendTestResponse = client.webhooks().sendTest()\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/webhooks/test \\\n    -X POST \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/transactions/{transactionId}',
    httpMethod: 'get',
    summary: 'Get transaction by ID',
    description: 'Retrieve detailed information about a specific transaction',
    stainlessPath: '(resource) transactions > (method) retrieve',
    qualified: 'client.transactions.retrieve',
    params: ['transactionId: string;'],
    response:
      "{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }",
    markdown:
      "## retrieve\n\n`client.transactions.retrieve(transactionId: string): { id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: transaction_status; type: transaction_type; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n**get** `/transactions/{transactionId}`\n\nRetrieve detailed information about a specific transaction\n\n### Parameters\n\n- `transactionId: string`\n\n### Returns\n\n- `{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n  - `id: string`\n  - `platformUserId: string`\n  - `receiverUmaAddress: string`\n  - `senderUmaAddress: string`\n  - `status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'`\n  - `type: 'INCOMING' | 'OUTGOING'`\n  - `userId: string`\n  - `counterpartyInformation?: object`\n  - `createdAt?: string`\n  - `description?: string`\n  - `settledAt?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst transaction = await client.transactions.retrieve('transactionId');\n\nconsole.log(transaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.transactions.retrieve',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst transaction = await client.transactions.retrieve('transactionId');\n\nconsole.log(transaction.id);",
      },
      kotlin: {
        method: 'transactions().retrieve',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.transactions.Transaction\nimport com.lightspark.umaaas.models.transactions.TransactionRetrieveParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val transaction: Transaction = client.transactions().retrieve("transactionId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/transactions/$TRANSACTION_ID \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/transactions',
    httpMethod: 'get',
    summary: 'List transactions',
    description:
      'Retrieve a paginated list of transactions with optional filtering.\nThe transactions can be filtered by user ID, platform user ID, UMA address, \ndate range, status, and transaction type.\n',
    stainlessPath: '(resource) transactions > (method) list',
    qualified: 'client.transactions.list',
    params: [
      'cursor?: string;',
      'endDate?: string;',
      'limit?: number;',
      'platformUserId?: string;',
      'receiverUmaAddress?: string;',
      'reference?: string;',
      'senderUmaAddress?: string;',
      "sortOrder?: 'asc' | 'desc';",
      'startDate?: string;',
      "status?: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED';",
      "type?: 'INCOMING' | 'OUTGOING';",
      'umaAddress?: string;',
      'userId?: string;',
    ],
    response:
      "{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }",
    markdown:
      "## list\n\n`client.transactions.list(cursor?: string, endDate?: string, limit?: number, platformUserId?: string, receiverUmaAddress?: string, reference?: string, senderUmaAddress?: string, sortOrder?: 'asc' | 'desc', startDate?: string, status?: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED', type?: 'INCOMING' | 'OUTGOING', umaAddress?: string, userId?: string): { id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: transaction_status; type: transaction_type; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n**get** `/transactions`\n\nRetrieve a paginated list of transactions with optional filtering.\nThe transactions can be filtered by user ID, platform user ID, UMA address, \ndate range, status, and transaction type.\n\n\n### Parameters\n\n- `cursor?: string`\n  Cursor for pagination (returned from previous request)\n\n- `endDate?: string`\n  Filter by end date (inclusive) in ISO 8601 format\n\n- `limit?: number`\n  Maximum number of results to return (default 20, max 100)\n\n- `platformUserId?: string`\n  Filter by platform-specific user ID\n\n- `receiverUmaAddress?: string`\n  Filter by receiver UMA address\n\n- `reference?: string`\n  Filter by reference\n\n- `senderUmaAddress?: string`\n  Filter by sender UMA address\n\n- `sortOrder?: 'asc' | 'desc'`\n  Order to sort results in\n\n- `startDate?: string`\n  Filter by start date (inclusive) in ISO 8601 format\n\n- `status?: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'`\n  Filter by transaction status\n\n- `type?: 'INCOMING' | 'OUTGOING'`\n  Filter by transaction type\n\n- `umaAddress?: string`\n  Filter by UMA address (either sender or receiver)\n\n- `userId?: string`\n  Filter by system user ID\n\n### Returns\n\n- `{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n  - `id: string`\n  - `platformUserId: string`\n  - `receiverUmaAddress: string`\n  - `senderUmaAddress: string`\n  - `status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'`\n  - `type: 'INCOMING' | 'OUTGOING'`\n  - `userId: string`\n  - `counterpartyInformation?: object`\n  - `createdAt?: string`\n  - `description?: string`\n  - `settledAt?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\n// Automatically fetches more pages as needed.\nfor await (const transaction of client.transactions.list()) {\n  console.log(transaction);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.transactions.list',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const transaction of client.transactions.list()) {\n  console.log(transaction.id);\n}",
      },
      kotlin: {
        method: 'transactions().list',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.transactions.TransactionListPage\nimport com.lightspark.umaaas.models.transactions.TransactionListParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val page: TransactionListPage = client.transactions().list()\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/transactions \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/transactions/{transactionId}/approve',
    httpMethod: 'post',
    summary: 'Approve a pending incoming payment',
    description:
      'Approve a pending incoming payment that was previously acknowledged with a 202 response.\nThis endpoint allows platforms to asynchronously approve payments after async processing.\n',
    stainlessPath: '(resource) transactions > (method) approve',
    qualified: 'client.transactions.approve',
    params: ['transactionId: string;', 'receiverUserInfo?: object;'],
    response:
      "{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }",
    markdown:
      "## approve\n\n`client.transactions.approve(transactionId: string, receiverUserInfo?: object): object`\n\n**post** `/transactions/{transactionId}/approve`\n\nApprove a pending incoming payment that was previously acknowledged with a 202 response.\nThis endpoint allows platforms to asynchronously approve payments after async processing.\n\n\n### Parameters\n\n- `transactionId: string`\n\n- `receiverUserInfo?: object`\n  Information about the recipient, provided by the platform if requested in the original webhook via `requestedReceiverUserInfoFields`.\n\n### Returns\n\n- `{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst incomingTransaction = await client.transactions.approve('transactionId');\n\nconsole.log(incomingTransaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.transactions.approve',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst incomingTransaction = await client.transactions.approve('transactionId');\n\nconsole.log(incomingTransaction);",
      },
      kotlin: {
        method: 'transactions().approve',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.transactions.IncomingTransaction\nimport com.lightspark.umaaas.models.transactions.TransactionApproveParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val incomingTransaction: IncomingTransaction = client.transactions().approve("transactionId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/transactions/$TRANSACTION_ID/approve \\\n    -X POST \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/transactions/{transactionId}/reject',
    httpMethod: 'post',
    summary: 'Reject a pending incoming payment',
    description:
      'Reject a pending incoming payment that was previously acknowledged with a 202 response.\nThis endpoint allows platforms to asynchronously reject payments after additional processing.\n',
    stainlessPath: '(resource) transactions > (method) reject',
    qualified: 'client.transactions.reject',
    params: ['transactionId: string;', 'reason?: string;'],
    response:
      "{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }",
    markdown:
      "## reject\n\n`client.transactions.reject(transactionId: string, reason?: string): object`\n\n**post** `/transactions/{transactionId}/reject`\n\nReject a pending incoming payment that was previously acknowledged with a 202 response.\nThis endpoint allows platforms to asynchronously reject payments after additional processing.\n\n\n### Parameters\n\n- `transactionId: string`\n\n- `reason?: string`\n  Optional reason for rejecting the payment. This is just for debugging purposes or can be used for a platform's own purposes.\n\n### Returns\n\n- `{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst incomingTransaction = await client.transactions.reject('transactionId');\n\nconsole.log(incomingTransaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.transactions.reject',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst incomingTransaction = await client.transactions.reject('transactionId');\n\nconsole.log(incomingTransaction);",
      },
      kotlin: {
        method: 'transactions().reject',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.transactions.IncomingTransaction\nimport com.lightspark.umaaas.models.transactions.TransactionRejectParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val incomingTransaction: IncomingTransaction = client.transactions().reject("transactionId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/transactions/$TRANSACTION_ID/reject \\\n    -X POST \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'lookup',
    endpoint: '/receiver/{receiverUmaAddress}',
    httpMethod: 'get',
    summary: 'Look up a UMA address for payment',
    description:
      'Lookup a receiving UMA address to determine supported currencies and exchange rates.\nThis endpoint helps platforms determine what currencies they can send to a given UMA address.\n',
    stainlessPath: '(resource) receiver > (method) lookup',
    qualified: 'client.receiver.lookup',
    params: ['receiverUmaAddress: string;', 'senderUmaAddress?: string;', 'userId?: string;'],
    response:
      "{ kycStatus: 'UNKNOWN' | 'NOT_VERIFIED' | 'PENDING' | 'VERIFIED'; lookupId: string; receiverUmaAddress: string; supportedCurrencies: { currency: object; estimatedExchangeRate: number; max: number; min: number; }[]; bankAccountNameMatchingStatus?: 'UNKNOWN' | 'NOT_MATCHED' | 'MATCHED'; requiredPayerDataFields?: { mandatory: boolean; name: user_info_field_name; }[]; }",
    markdown:
      "## lookup\n\n`client.receiver.lookup(receiverUmaAddress: string, senderUmaAddress?: string, userId?: string): { kycStatus: 'UNKNOWN' | 'NOT_VERIFIED' | 'PENDING' | 'VERIFIED'; lookupId: string; receiverUmaAddress: string; supportedCurrencies: object[]; bankAccountNameMatchingStatus?: 'UNKNOWN' | 'NOT_MATCHED' | 'MATCHED'; requiredPayerDataFields?: counterparty_field_definition[]; }`\n\n**get** `/receiver/{receiverUmaAddress}`\n\nLookup a receiving UMA address to determine supported currencies and exchange rates.\nThis endpoint helps platforms determine what currencies they can send to a given UMA address.\n\n\n### Parameters\n\n- `receiverUmaAddress: string`\n\n- `senderUmaAddress?: string`\n  UMA address of the sender (optional if userId is provided)\n\n- `userId?: string`\n  System ID of the sender (optional if senderUmaAddress is provided)\n\n### Returns\n\n- `{ kycStatus: 'UNKNOWN' | 'NOT_VERIFIED' | 'PENDING' | 'VERIFIED'; lookupId: string; receiverUmaAddress: string; supportedCurrencies: { currency: object; estimatedExchangeRate: number; max: number; min: number; }[]; bankAccountNameMatchingStatus?: 'UNKNOWN' | 'NOT_MATCHED' | 'MATCHED'; requiredPayerDataFields?: { mandatory: boolean; name: user_info_field_name; }[]; }`\n\n  - `kycStatus: 'UNKNOWN' | 'NOT_VERIFIED' | 'PENDING' | 'VERIFIED'`\n  - `lookupId: string`\n  - `receiverUmaAddress: string`\n  - `supportedCurrencies: { currency: { code?: string; decimals?: number; name?: string; symbol?: string; }; estimatedExchangeRate: number; max: number; min: number; }[]`\n  - `bankAccountNameMatchingStatus?: 'UNKNOWN' | 'NOT_MATCHED' | 'MATCHED'`\n  - `requiredPayerDataFields?: { mandatory: boolean; name: string; }[]`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst response = await client.receiver.lookup('receiverUmaAddress');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.receiver.lookup',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst response = await client.receiver.lookup('receiverUmaAddress');\n\nconsole.log(response.kycStatus);",
      },
      kotlin: {
        method: 'receiver().lookup',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.receiver.ReceiverLookupParams\nimport com.lightspark.umaaas.models.receiver.ReceiverLookupResponse\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val response: ReceiverLookupResponse = client.receiver().lookup("receiverUmaAddress")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/receiver/$RECEIVER_UMA_ADDRESS \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/quotes',
    httpMethod: 'post',
    summary: 'Create a payment quote',
    description:
      'Generate a quote for a payment from one UMA address to another.\nThe quote locks in exchange rates and fees for a set period of time and provides\npayment instructions that can be used to execute the payment.\n\nDepending on the `lockedCurrencySide` parameter, either the sending amount or \nreceiving amount will be locked.\n\nThe returned quote includes payment instructions with the banking details\nneeded to execute the payment and fulfill the quote. These instructions\nmust be followed precisely, including any reference codes provided.\n',
    stainlessPath: '(resource) quotes > (method) create',
    qualified: 'client.quotes.create',
    params: [
      'lockedCurrencyAmount: number;',
      "lockedCurrencySide: 'SENDING' | 'RECEIVING';",
      'lookupId: string;',
      'receivingCurrencyCode: string;',
      'sendingCurrencyCode: string;',
      'description?: string;',
      'senderUserInfo?: object;',
    ],
    response:
      "{ exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: { bankAccountInfo: payment_clabe_account_info | payment_us_account_info | payment_pix_account_info | payment_iban_account_info | payment_fbo_account_info | payment_upi_account_info; reference: string; instructionsNotes?: string; }; quoteId: string; receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }",
    markdown:
      "## create\n\n`client.quotes.create(lockedCurrencyAmount: number, lockedCurrencySide: 'SENDING' | 'RECEIVING', lookupId: string, receivingCurrencyCode: string, sendingCurrencyCode: string, description?: string, senderUserInfo?: object): { exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: payment_instructions; quoteId: string; receivingCurrency: currency; sendingCurrency: currency; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: outgoing_rate_details; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }`\n\n**post** `/quotes`\n\nGenerate a quote for a payment from one UMA address to another.\nThe quote locks in exchange rates and fees for a set period of time and provides\npayment instructions that can be used to execute the payment.\n\nDepending on the `lockedCurrencySide` parameter, either the sending amount or \nreceiving amount will be locked.\n\nThe returned quote includes payment instructions with the banking details\nneeded to execute the payment and fulfill the quote. These instructions\nmust be followed precisely, including any reference codes provided.\n\n\n### Parameters\n\n- `lockedCurrencyAmount: number`\n  The amount to send/receive in the smallest unit of the locked currency (eg. cents). See `lockedCurrencySide` for more information.\n\n- `lockedCurrencySide: 'SENDING' | 'RECEIVING'`\n  The side of the quote which should be locked and specified in the `lockedCurrencyAmount`. For example, if I want to send exactly $5 MXN from my wallet, I would set this to \"sending\", and the `lockedCurrencyAmount` to 500 (in cents). If I want the receiver to receive exactly $10 USD, I would set this to \"receiving\" and the `lockedCurrencyAmount` to 10000 (in cents).\n\n- `lookupId: string`\n  Unique identifier for the prior receiver uma address lookup request.\n\n- `receivingCurrencyCode: string`\n  Currency code for the receiving amount\n\n- `sendingCurrencyCode: string`\n  Currency code for the sending amount\n\n- `description?: string`\n  Optional description/memo for the payment\n\n- `senderUserInfo?: object`\n  Key-value pairs of information about the sender which was requested by the counterparty (recipient) institution.\nAny fields specified in `requiredPayerDataFields` from the response of the `/receiver/{receiverUmaAddress}` (lookupUma) endpoint\nMUST be provided here if they were requested. If the counterparty (recipient) institution did not request any information,\nthis field can be omitted.\n\n\n### Returns\n\n- `{ exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: { bankAccountInfo: payment_clabe_account_info | payment_us_account_info | payment_pix_account_info | payment_iban_account_info | payment_fbo_account_info | payment_upi_account_info; reference: string; instructionsNotes?: string; }; quoteId: string; receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }`\n\n  - `exchangeRate: number`\n  - `expiresAt: string`\n  - `feesIncluded: number`\n  - `paymentInstructions: { bankAccountInfo: object & object | object & object | object & object | object & object | object | object & object; reference: string; instructionsNotes?: string; }`\n  - `quoteId: string`\n  - `receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }`\n  - `sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }`\n  - `totalReceivingAmount: number`\n  - `totalSendingAmount: number`\n  - `transactionId: string`\n  - `counterpartyInformation?: object`\n  - `originalQuoteId?: string`\n  - `rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }`\n  - `status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst quote = await client.quotes.create({\n  lockedCurrencyAmount: 1000,\n  lockedCurrencySide: 'SENDING',\n  lookupId: 'LookupRequest:019542f5-b3e7-1d02-0000-000000000009',\n  receivingCurrencyCode: 'EUR',\n  sendingCurrencyCode: 'USD',\n});\n\nconsole.log(quote);\n```",
    perLanguage: {
      typescript: {
        method: 'client.quotes.create',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.create({\n  lockedCurrencyAmount: 1000,\n  lockedCurrencySide: 'SENDING',\n  lookupId: 'LookupRequest:019542f5-b3e7-1d02-0000-000000000009',\n  receivingCurrencyCode: 'EUR',\n  sendingCurrencyCode: 'USD',\n  description: 'Payment for invoice #1234',\n});\n\nconsole.log(quote.exchangeRate);",
      },
      kotlin: {
        method: 'quotes().create',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.quotes.Quote\nimport com.lightspark.umaaas.models.quotes.QuoteCreateParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: QuoteCreateParams = QuoteCreateParams.builder()\n        .lockedCurrencyAmount(1000L)\n        .lockedCurrencySide(QuoteCreateParams.LockedCurrencySide.SENDING)\n        .lookupId("LookupRequest:019542f5-b3e7-1d02-0000-000000000009")\n        .receivingCurrencyCode("EUR")\n        .sendingCurrencyCode("USD")\n        .build()\n    val quote: Quote = client.quotes().create(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/quotes \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "lockedCurrencyAmount": 1000,\n          "lockedCurrencySide": "SENDING",\n          "lookupId": "LookupRequest:019542f5-b3e7-1d02-0000-000000000009",\n          "receivingCurrencyCode": "EUR",\n          "sendingCurrencyCode": "USD",\n          "description": "Payment for invoice #1234",\n          "senderUserInfo": {\n            "FULL_NAME": "bar",\n            "NATIONALITY": "bar"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/quotes/{quoteId}',
    httpMethod: 'get',
    summary: 'Get quote by ID',
    description:
      'Retrieve a quote by its ID. If the quote has been settled, it will include \nthe transaction ID. This allows clients to track the full lifecycle of a payment\nfrom quote creation to settlement.\n',
    stainlessPath: '(resource) quotes > (method) retrieve',
    qualified: 'client.quotes.retrieve',
    params: ['quoteId: string;'],
    response:
      "{ exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: { bankAccountInfo: payment_clabe_account_info | payment_us_account_info | payment_pix_account_info | payment_iban_account_info | payment_fbo_account_info | payment_upi_account_info; reference: string; instructionsNotes?: string; }; quoteId: string; receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }",
    markdown:
      "## retrieve\n\n`client.quotes.retrieve(quoteId: string): { exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: payment_instructions; quoteId: string; receivingCurrency: currency; sendingCurrency: currency; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: outgoing_rate_details; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }`\n\n**get** `/quotes/{quoteId}`\n\nRetrieve a quote by its ID. If the quote has been settled, it will include \nthe transaction ID. This allows clients to track the full lifecycle of a payment\nfrom quote creation to settlement.\n\n\n### Parameters\n\n- `quoteId: string`\n\n### Returns\n\n- `{ exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: { bankAccountInfo: payment_clabe_account_info | payment_us_account_info | payment_pix_account_info | payment_iban_account_info | payment_fbo_account_info | payment_upi_account_info; reference: string; instructionsNotes?: string; }; quoteId: string; receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }`\n\n  - `exchangeRate: number`\n  - `expiresAt: string`\n  - `feesIncluded: number`\n  - `paymentInstructions: { bankAccountInfo: object & object | object & object | object & object | object & object | object | object & object; reference: string; instructionsNotes?: string; }`\n  - `quoteId: string`\n  - `receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }`\n  - `sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }`\n  - `totalReceivingAmount: number`\n  - `totalSendingAmount: number`\n  - `transactionId: string`\n  - `counterpartyInformation?: object`\n  - `originalQuoteId?: string`\n  - `rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }`\n  - `status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst quote = await client.quotes.retrieve('quoteId');\n\nconsole.log(quote);\n```",
    perLanguage: {
      typescript: {
        method: 'client.quotes.retrieve',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.retrieve('quoteId');\n\nconsole.log(quote.exchangeRate);",
      },
      kotlin: {
        method: 'quotes().retrieve',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.quotes.Quote\nimport com.lightspark.umaaas.models.quotes.QuoteRetrieveParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val quote: Quote = client.quotes().retrieve("quoteId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/quotes/$QUOTE_ID \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'retry',
    endpoint: '/quotes/{quoteId}/retry',
    httpMethod: 'post',
    summary: 'Retry an incomplete payment',
    description:
      "In the case where a customer is debited but the Lightning payment fails to complete, integrators can retry the payment using this endpoint.  \n\nPayments retried with this endpoint will debit from the sender and deliver to the recipient the same amount as the original quote.\nAs UMA as a service does not persist customer PII, retries need to start with a lookup request to retrieve the original quote's recipient counter party data requirements then pass that sender information in the request body.\nBefore calling this endpoint, you should reach out to the UMA as a service team to investigate the underlying issue.  As part of resolution, they'll update the transaction to the appropriate state.  The quote / transaction to retry must be in a `FAILED` or `REFUNDED` state.\n",
    stainlessPath: '(resource) quotes > (method) retry',
    qualified: 'client.quotes.retry',
    params: ['quoteId: string;', 'lookupId: string;', 'senderUserInfo?: object;'],
    response:
      "{ exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: { bankAccountInfo: payment_clabe_account_info | payment_us_account_info | payment_pix_account_info | payment_iban_account_info | payment_fbo_account_info | payment_upi_account_info; reference: string; instructionsNotes?: string; }; quoteId: string; receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }",
    markdown:
      "## retry\n\n`client.quotes.retry(quoteId: string, lookupId: string, senderUserInfo?: object): { exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: payment_instructions; quoteId: string; receivingCurrency: currency; sendingCurrency: currency; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: outgoing_rate_details; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }`\n\n**post** `/quotes/{quoteId}/retry`\n\nIn the case where a customer is debited but the Lightning payment fails to complete, integrators can retry the payment using this endpoint.  \n\nPayments retried with this endpoint will debit from the sender and deliver to the recipient the same amount as the original quote.\nAs UMA as a service does not persist customer PII, retries need to start with a lookup request to retrieve the original quote's recipient counter party data requirements then pass that sender information in the request body.\nBefore calling this endpoint, you should reach out to the UMA as a service team to investigate the underlying issue.  As part of resolution, they'll update the transaction to the appropriate state.  The quote / transaction to retry must be in a `FAILED` or `REFUNDED` state.\n\n\n### Parameters\n\n- `quoteId: string`\n\n- `lookupId: string`\n  Unique identifier for the prior receiver uma address lookup request.\n\n- `senderUserInfo?: object`\n  Key-value pairs of information about the sender which was requested by the counterparty (recipient) institution.\nAny fields specified in `requiredPayerDataFields` from the response of the `/receiver/{receiverUmaAddress}` (lookupUma) endpoint\nMUST be provided here if they were requested. If the counterparty (recipient) institution did not request any information,\nthis field can be omitted.\n\n\n### Returns\n\n- `{ exchangeRate: number; expiresAt: string; feesIncluded: number; paymentInstructions: { bankAccountInfo: payment_clabe_account_info | payment_us_account_info | payment_pix_account_info | payment_iban_account_info | payment_fbo_account_info | payment_upi_account_info; reference: string; instructionsNotes?: string; }; quoteId: string; receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }; totalReceivingAmount: number; totalSendingAmount: number; transactionId: string; counterpartyInformation?: object; originalQuoteId?: string; rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }; status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'; }`\n\n  - `exchangeRate: number`\n  - `expiresAt: string`\n  - `feesIncluded: number`\n  - `paymentInstructions: { bankAccountInfo: object & object | object & object | object & object | object & object | object | object & object; reference: string; instructionsNotes?: string; }`\n  - `quoteId: string`\n  - `receivingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }`\n  - `sendingCurrency: { code?: string; decimals?: number; name?: string; symbol?: string; }`\n  - `totalReceivingAmount: number`\n  - `totalSendingAmount: number`\n  - `transactionId: string`\n  - `counterpartyInformation?: object`\n  - `originalQuoteId?: string`\n  - `rateDetails?: { counterpartyFixedFee: number; counterpartyMultiplier: number; umaaasFixedFee: number; umaaasMultiplier: number; umaaasVariableFeeAmount: number; umaaasVariableFeeRate: number; }`\n  - `status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED'`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst quote = await client.quotes.retry('quoteId', { lookupId: 'Lookup:019542f5-b3e7-1d02-0000-000000000009' });\n\nconsole.log(quote);\n```",
    perLanguage: {
      typescript: {
        method: 'client.quotes.retry',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.retry('quoteId', {\n  lookupId: 'Lookup:019542f5-b3e7-1d02-0000-000000000009',\n});\n\nconsole.log(quote.exchangeRate);",
      },
      kotlin: {
        method: 'quotes().retry',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.quotes.Quote\nimport com.lightspark.umaaas.models.quotes.QuoteRetryParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: QuoteRetryParams = QuoteRetryParams.builder()\n        .quoteId("quoteId")\n        .lookupId("Lookup:019542f5-b3e7-1d02-0000-000000000009")\n        .build()\n    val quote: Quote = client.quotes().retry(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/quotes/$QUOTE_ID/retry \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "lookupId": "Lookup:019542f5-b3e7-1d02-0000-000000000009",\n          "senderUserInfo": {\n            "FULL_NAME": "bar",\n            "NATIONALITY": "bar"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/invitations',
    httpMethod: 'post',
    summary: 'Create an UMA invitation from a given platform user.',
    description: 'Create an UMA invitation from a given platform user.\n',
    stainlessPath: '(resource) invitations > (method) create',
    qualified: 'client.invitations.create',
    params: ['inviterUma: string;', 'amountToSend?: number;', 'expiresAt?: string;', 'firstName?: string;'],
    response:
      "{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }",
    markdown:
      "## create\n\n`client.invitations.create(inviterUma: string, amountToSend?: number, expiresAt?: string, firstName?: string): { code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: currency_amount; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n**post** `/invitations`\n\nCreate an UMA invitation from a given platform user.\n\n\n### Parameters\n\n- `inviterUma: string`\n  The UMA address of the user creating the invitation\n\n- `amountToSend?: number`\n  An amount to send (in the smallest unit of the user's currency) to the invitee when the invitation is claimed.\nThis is optional and if not provided, the invitee will not receive any amount. Note that the actual sending of\nthe amount must be done by the inviter platform once the INVITATION_CLAIMED webhook is received. If the inviter\nplatform either does not send the payment or the payment fails, the invitee will not receive this amount. This\nfield is primarily used for display purposes on the claiming side of the invitation.\n\n\n- `expiresAt?: string`\n  When the invitation expires (if at all)\n\n- `firstName?: string`\n  First name of the inviter to show as part of the invite\n\n### Returns\n\n- `{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n  - `code: string`\n  - `createdAt: string`\n  - `inviterUma: string`\n  - `status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'`\n  - `url: string`\n  - `amountToSend?: { amount: number; currency: { code?: string; decimals?: number; name?: string; symbol?: string; }; }`\n  - `claimedAt?: string`\n  - `expiresAt?: string`\n  - `firstName?: string`\n  - `inviteeCountryCode?: string`\n  - `inviteeUma?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst umaInvitation = await client.invitations.create({ inviterUma: '$inviter@uma.domain' });\n\nconsole.log(umaInvitation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invitations.create',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst umaInvitation = await client.invitations.create({ inviterUma: '$inviter@uma.domain' });\n\nconsole.log(umaInvitation.code);",
      },
      kotlin: {
        method: 'invitations().create',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.invitations.InvitationCreateParams\nimport com.lightspark.umaaas.models.invitations.UmaInvitation\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: InvitationCreateParams = InvitationCreateParams.builder()\n        .inviterUma("\\$inviter@uma.domain")\n        .build()\n    val umaInvitation: UmaInvitation = client.invitations().create(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/invitations \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "inviterUma": "$inviter@uma.domain",\n          "amountToSend": 12550,\n          "expiresAt": "2023-09-01T14:30:00Z",\n          "firstName": "Alice"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/invitations/{invitationCode}',
    httpMethod: 'get',
    summary: 'Get a specific UMA invitation by code.',
    description: 'Get a specific UMA invitation by code.\n',
    stainlessPath: '(resource) invitations > (method) retrieve',
    qualified: 'client.invitations.retrieve',
    params: ['invitationCode: string;'],
    response:
      "{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }",
    markdown:
      "## retrieve\n\n`client.invitations.retrieve(invitationCode: string): { code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: currency_amount; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n**get** `/invitations/{invitationCode}`\n\nGet a specific UMA invitation by code.\n\n\n### Parameters\n\n- `invitationCode: string`\n\n### Returns\n\n- `{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n  - `code: string`\n  - `createdAt: string`\n  - `inviterUma: string`\n  - `status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'`\n  - `url: string`\n  - `amountToSend?: { amount: number; currency: { code?: string; decimals?: number; name?: string; symbol?: string; }; }`\n  - `claimedAt?: string`\n  - `expiresAt?: string`\n  - `firstName?: string`\n  - `inviteeCountryCode?: string`\n  - `inviteeUma?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst umaInvitation = await client.invitations.retrieve('invitationCode');\n\nconsole.log(umaInvitation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invitations.retrieve',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst umaInvitation = await client.invitations.retrieve('invitationCode');\n\nconsole.log(umaInvitation.code);",
      },
      kotlin: {
        method: 'invitations().retrieve',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.invitations.InvitationRetrieveParams\nimport com.lightspark.umaaas.models.invitations.UmaInvitation\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val umaInvitation: UmaInvitation = client.invitations().retrieve("invitationCode")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/invitations/$INVITATION_CODE \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'claim',
    endpoint: '/invitations/{invitationCode}/claim',
    httpMethod: 'post',
    summary: 'Claim an UMA invitation',
    description:
      'Claim an UMA invitation by associating it with an invitee UMA address.\n\nWhen an invitation is successfully claimed:\n1. The invitation status changes from PENDING to CLAIMED\n2. The invitee UMA address is associated with the invitation\n3. An INVITATION_CLAIMED webhook is triggered to notify the platform that created the invitation\n\nThis endpoint allows users to accept invitations sent to them by other UMA users.\n',
    stainlessPath: '(resource) invitations > (method) claim',
    qualified: 'client.invitations.claim',
    params: ['invitationCode: string;', 'inviteeUma: string;'],
    response:
      "{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }",
    markdown:
      "## claim\n\n`client.invitations.claim(invitationCode: string, inviteeUma: string): { code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: currency_amount; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n**post** `/invitations/{invitationCode}/claim`\n\nClaim an UMA invitation by associating it with an invitee UMA address.\n\nWhen an invitation is successfully claimed:\n1. The invitation status changes from PENDING to CLAIMED\n2. The invitee UMA address is associated with the invitation\n3. An INVITATION_CLAIMED webhook is triggered to notify the platform that created the invitation\n\nThis endpoint allows users to accept invitations sent to them by other UMA users.\n\n\n### Parameters\n\n- `invitationCode: string`\n\n- `inviteeUma: string`\n  The UMA address of the user claiming the invitation\n\n### Returns\n\n- `{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n  - `code: string`\n  - `createdAt: string`\n  - `inviterUma: string`\n  - `status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'`\n  - `url: string`\n  - `amountToSend?: { amount: number; currency: { code?: string; decimals?: number; name?: string; symbol?: string; }; }`\n  - `claimedAt?: string`\n  - `expiresAt?: string`\n  - `firstName?: string`\n  - `inviteeCountryCode?: string`\n  - `inviteeUma?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst umaInvitation = await client.invitations.claim('invitationCode', { inviteeUma: '$invitee@uma.domain' });\n\nconsole.log(umaInvitation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invitations.claim',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst umaInvitation = await client.invitations.claim('invitationCode', {\n  inviteeUma: '$invitee@uma.domain',\n});\n\nconsole.log(umaInvitation.code);",
      },
      kotlin: {
        method: 'invitations().claim',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.invitations.InvitationClaimParams\nimport com.lightspark.umaaas.models.invitations.UmaInvitation\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: InvitationClaimParams = InvitationClaimParams.builder()\n        .invitationCode("invitationCode")\n        .inviteeUma("\\$invitee@uma.domain")\n        .build()\n    val umaInvitation: UmaInvitation = client.invitations().claim(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/invitations/$INVITATION_CODE/claim \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "inviteeUma": "$invitee@uma.domain"\n        }\'',
      },
    },
  },
  {
    name: 'cancel',
    endpoint: '/invitations/{invitationCode}/cancel',
    httpMethod: 'post',
    summary: 'Cancel an UMA invitation',
    description:
      'Cancel a pending UMA invitation. Only the inviter or platform can cancel an invitation.\n\nWhen an invitation is cancelled:\n1. The invitation status changes from PENDING to CANCELLED\n2. The invitation can no longer be claimed\n3. The invitation URL will show as cancelled when accessed\n\nOnly pending invitations can be cancelled. Attempting to cancel an invitation\nthat is already claimed, expired, or cancelled will result in an error.\n',
    stainlessPath: '(resource) invitations > (method) cancel',
    qualified: 'client.invitations.cancel',
    params: ['invitationCode: string;'],
    response:
      "{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }",
    markdown:
      "## cancel\n\n`client.invitations.cancel(invitationCode: string): { code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: currency_amount; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n**post** `/invitations/{invitationCode}/cancel`\n\nCancel a pending UMA invitation. Only the inviter or platform can cancel an invitation.\n\nWhen an invitation is cancelled:\n1. The invitation status changes from PENDING to CANCELLED\n2. The invitation can no longer be claimed\n3. The invitation URL will show as cancelled when accessed\n\nOnly pending invitations can be cancelled. Attempting to cancel an invitation\nthat is already claimed, expired, or cancelled will result in an error.\n\n\n### Parameters\n\n- `invitationCode: string`\n\n### Returns\n\n- `{ code: string; createdAt: string; inviterUma: string; status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'; url: string; amountToSend?: { amount: number; currency: currency; }; claimedAt?: string; expiresAt?: string; firstName?: string; inviteeCountryCode?: string; inviteeUma?: string; }`\n\n  - `code: string`\n  - `createdAt: string`\n  - `inviterUma: string`\n  - `status: 'PENDING' | 'CLAIMED' | 'EXPIRED' | 'CANCELLED'`\n  - `url: string`\n  - `amountToSend?: { amount: number; currency: { code?: string; decimals?: number; name?: string; symbol?: string; }; }`\n  - `claimedAt?: string`\n  - `expiresAt?: string`\n  - `firstName?: string`\n  - `inviteeCountryCode?: string`\n  - `inviteeUma?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst umaInvitation = await client.invitations.cancel('invitationCode');\n\nconsole.log(umaInvitation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invitations.cancel',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst umaInvitation = await client.invitations.cancel('invitationCode');\n\nconsole.log(umaInvitation.code);",
      },
      kotlin: {
        method: 'invitations().cancel',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.invitations.InvitationCancelParams\nimport com.lightspark.umaaas.models.invitations.UmaInvitation\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val umaInvitation: UmaInvitation = client.invitations().cancel("invitationCode")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/invitations/$INVITATION_CODE/cancel \\\n    -X POST \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'send_funds',
    endpoint: '/sandbox/send',
    httpMethod: 'post',
    summary: 'Simulate sending funds',
    description:
      'Simulate sending funds to the bank account as instructed in the quote. \nThis endpoint is only for the sandbox environment and will fail for production platforms/keys.\n',
    stainlessPath: '(resource) sandbox > (method) send_funds',
    qualified: 'client.sandbox.sendFunds',
    params: ['currencyAmount: number;', 'currencyCode: string;', 'reference: string;'],
    response:
      "{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }",
    markdown:
      "## send_funds\n\n`client.sandbox.sendFunds(currencyAmount: number, currencyCode: string, reference: string): object`\n\n**post** `/sandbox/send`\n\nSimulate sending funds to the bank account as instructed in the quote. \nThis endpoint is only for the sandbox environment and will fail for production platforms/keys.\n\n\n### Parameters\n\n- `currencyAmount: number`\n  The amount to send in the smallest unit of the currency (eg. cents)\n\n- `currencyCode: string`\n  Currency code for the funds to be sent\n\n- `reference: string`\n  The unique reference code that was in the payment instructions\n\n### Returns\n\n- `{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst outgoingTransaction = await client.sandbox.sendFunds({\n  currencyAmount: 1000,\n  currencyCode: 'USD',\n  reference: 'UMA-Q12345-REF',\n});\n\nconsole.log(outgoingTransaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.sandbox.sendFunds',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst outgoingTransaction = await client.sandbox.sendFunds({\n  currencyAmount: 1000,\n  currencyCode: 'USD',\n  reference: 'UMA-Q12345-REF',\n});\n\nconsole.log(outgoingTransaction);",
      },
      kotlin: {
        method: 'sandbox().sendFunds',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.sandbox.SandboxSendFundsParams\nimport com.lightspark.umaaas.models.transactions.OutgoingTransaction\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: SandboxSendFundsParams = SandboxSendFundsParams.builder()\n        .currencyAmount(1000L)\n        .currencyCode("USD")\n        .reference("UMA-Q12345-REF")\n        .build()\n    val outgoingTransaction: OutgoingTransaction = client.sandbox().sendFunds(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/sandbox/send \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "currencyAmount": 1000,\n          "currencyCode": "USD",\n          "reference": "UMA-Q12345-REF"\n        }\'',
      },
    },
  },
  {
    name: 'receive_payment',
    endpoint: '/sandbox/receive',
    httpMethod: 'post',
    summary: 'Simulate payment send to test receiving a payment',
    description:
      'Simulate sending payment from an sandbox uma address to a platform user to test payment receive.\nThis endpoint is only for the sandbox environment and will fail for production platforms/keys.\n',
    stainlessPath: '(resource) sandbox > (method) receive_payment',
    qualified: 'client.sandbox.receivePayment',
    params: [
      'receivingCurrencyAmount: number;',
      'receivingCurrencyCode: string;',
      'senderUmaAddress: string;',
      'receiverUmaAddress?: string;',
      'userId?: string;',
    ],
    response:
      "{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }",
    markdown:
      "## receive_payment\n\n`client.sandbox.receivePayment(receivingCurrencyAmount: number, receivingCurrencyCode: string, senderUmaAddress: string, receiverUmaAddress?: string, userId?: string): object`\n\n**post** `/sandbox/receive`\n\nSimulate sending payment from an sandbox uma address to a platform user to test payment receive.\nThis endpoint is only for the sandbox environment and will fail for production platforms/keys.\n\n\n### Parameters\n\n- `receivingCurrencyAmount: number`\n  The amount to be received in the smallest unit of the currency (eg. cents)\n\n- `receivingCurrencyCode: string`\n  The currency code for the receiving amount\n\n- `senderUmaAddress: string`\n  UMA address of the sender from the sandbox\n\n- `receiverUmaAddress?: string`\n  UMA address of the receiver (optional if userId is provided)\n\n- `userId?: string`\n  System ID of the receiver (optional if receiverUmaAddress is provided)\n\n### Returns\n\n- `{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst incomingTransaction = await client.sandbox.receivePayment({\n  receivingCurrencyAmount: 1000,\n  receivingCurrencyCode: 'USD',\n  senderUmaAddress: '$success.usd@sandbox.umaaas.uma.money',\n});\n\nconsole.log(incomingTransaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.sandbox.receivePayment',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst incomingTransaction = await client.sandbox.receivePayment({\n  receivingCurrencyAmount: 1000,\n  receivingCurrencyCode: 'USD',\n  senderUmaAddress: '$success.usd@sandbox.umaaas.uma.money',\n});\n\nconsole.log(incomingTransaction);",
      },
      kotlin: {
        method: 'sandbox().receivePayment',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.sandbox.SandboxReceivePaymentParams\nimport com.lightspark.umaaas.models.transactions.IncomingTransaction\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val params: SandboxReceivePaymentParams = SandboxReceivePaymentParams.builder()\n        .receivingCurrencyAmount(1000L)\n        .receivingCurrencyCode("USD")\n        .senderUmaAddress("\\$success.usd@sandbox.umaaas.uma.money")\n        .build()\n    val incomingTransaction: IncomingTransaction = client.sandbox().receivePayment(params)\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/sandbox/receive \\\n    -H \'Content-Type: application/json\' \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET" \\\n    -d \'{\n          "receivingCurrencyAmount": 1000,\n          "receivingCurrencyCode": "USD",\n          "senderUmaAddress": "$success.usd@sandbox.umaaas.uma.money",\n          "receiverUmaAddress": "$receiver@uma.domain",\n          "userId": "User:019542f5-b3e7-1d02-0000-000000000001"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/uma-providers',
    httpMethod: 'get',
    summary: 'This endpoint provides a list of counterparties that are available.',
    description:
      'This endpoint provides a list of counterparties that are available.\n\nThe response includes basic information about each provider, such as its UMA address, name, and supported currencies.\nThis can be used to determine which providers are available for sending or receiving payments.\n',
    stainlessPath: '(resource) uma_providers > (method) list',
    qualified: 'client.umaProviders.list',
    params: [
      'countryCode?: string;',
      'currencyCode?: string;',
      'cursor?: string;',
      'hasBlockedProviders?: boolean;',
      'limit?: number;',
      "sortOrder?: 'asc' | 'desc';",
    ],
    response:
      '{ allowListStatus?: boolean; domain?: string; lei?: string; logoUrl?: string; name?: string; supportedCurrencies?: { code?: string; decimals?: number; name?: string; symbol?: string; }[]; supportedRegions?: string[]; }',
    markdown:
      "## list\n\n`client.umaProviders.list(countryCode?: string, currencyCode?: string, cursor?: string, hasBlockedProviders?: boolean, limit?: number, sortOrder?: 'asc' | 'desc'): { allowListStatus?: boolean; domain?: string; lei?: string; logoUrl?: string; name?: string; supportedCurrencies?: currency[]; supportedRegions?: string[]; }`\n\n**get** `/uma-providers`\n\nThis endpoint provides a list of counterparties that are available.\n\nThe response includes basic information about each provider, such as its UMA address, name, and supported currencies.\nThis can be used to determine which providers are available for sending or receiving payments.\n\n\n### Parameters\n\n- `countryCode?: string`\n  The alpha-2 representation of a country, as defined by the ISO 3166-1 standard.\n\n- `currencyCode?: string`\n  The ISO 4217 currency code to filter providers by supported currency.\n\n- `cursor?: string`\n  Cursor for pagination (returned from previous request)\n\n- `hasBlockedProviders?: boolean`\n  Whether to include providers which are not on your allowlist in the response. By default the response will include blocked providers.\n\n- `limit?: number`\n  Maximum number of results to return (default 20, max 100)\n\n- `sortOrder?: 'asc' | 'desc'`\n  Order to sort results in\n\n### Returns\n\n- `{ allowListStatus?: boolean; domain?: string; lei?: string; logoUrl?: string; name?: string; supportedCurrencies?: { code?: string; decimals?: number; name?: string; symbol?: string; }[]; supportedRegions?: string[]; }`\n\n  - `allowListStatus?: boolean`\n  - `domain?: string`\n  - `lei?: string`\n  - `logoUrl?: string`\n  - `name?: string`\n  - `supportedCurrencies?: { code?: string; decimals?: number; name?: string; symbol?: string; }[]`\n  - `supportedRegions?: string[]`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\n// Automatically fetches more pages as needed.\nfor await (const umaProvider of client.umaProviders.list()) {\n  console.log(umaProvider);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.umaProviders.list',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const umaProvider of client.umaProviders.list()) {\n  console.log(umaProvider.allowListStatus);\n}",
      },
      kotlin: {
        method: 'umaProviders().list',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.umaproviders.UmaProviderListPage\nimport com.lightspark.umaaas.models.umaproviders.UmaProviderListParams\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val page: UmaProviderListPage = client.umaProviders().list()\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/uma-providers \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
  {
    name: 'confirm_payment',
    endpoint: '/fbo/confirm/{quoteId}',
    httpMethod: 'post',
    summary: 'Trigger payment from a FBO account',
    description:
      'This endpoint should only be used for when your account is configured for FBO payments.  It triggers funding a quote from your FBO account to initiate payment.\n',
    stainlessPath: '(resource) fbo > (method) confirm_payment',
    qualified: 'client.fbo.confirmPayment',
    params: ['quoteId: string;'],
    response:
      "{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }",
    markdown:
      "## confirm_payment\n\n`client.fbo.confirmPayment(quoteId: string): { id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: transaction_status; type: transaction_type; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n**post** `/fbo/confirm/{quoteId}`\n\nThis endpoint should only be used for when your account is configured for FBO payments.  It triggers funding a quote from your FBO account to initiate payment.\n\n\n### Parameters\n\n- `quoteId: string`\n\n### Returns\n\n- `{ id: string; platformUserId: string; receiverUmaAddress: string; senderUmaAddress: string; status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'; type: 'INCOMING' | 'OUTGOING'; userId: string; counterpartyInformation?: object; createdAt?: string; description?: string; settledAt?: string; }`\n\n  - `id: string`\n  - `platformUserId: string`\n  - `receiverUmaAddress: string`\n  - `senderUmaAddress: string`\n  - `status: 'CREATED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'REJECTED' | 'FAILED' | 'REFUNDED' | 'EXPIRED'`\n  - `type: 'INCOMING' | 'OUTGOING'`\n  - `userId: string`\n  - `counterpartyInformation?: object`\n  - `createdAt?: string`\n  - `description?: string`\n  - `settledAt?: string`\n\n### Example\n\n```typescript\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas();\n\nconst transaction = await client.fbo.confirmPayment('quoteId');\n\nconsole.log(transaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.fbo.confirmPayment',
        example:
          "import Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst transaction = await client.fbo.confirmPayment('quoteId');\n\nconsole.log(transaction.id);",
      },
      kotlin: {
        method: 'fbo().confirmPayment',
        example:
          'package com.lightspark.umaaas.example\n\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.fbo.FboConfirmPaymentParams\nimport com.lightspark.umaaas.models.transactions.Transaction\n\nfun main() {\n    val client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\n    val transaction: Transaction = client.fbo().confirmPayment("quoteId")\n}',
      },
      http: {
        example:
          'curl https://api.uma.money/umaaas/2025-05-15/fbo/confirm/$QUOTE_ID \\\n    -X POST \\\n    -u "$UMAAAS_CLIENT_ID:UMAAAS_CLIENT_SECRET"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'kotlin',
    content:
      '# Umaaas Kotlin API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.lightspark.umaaas/umaaas-kotlin)](https://central.sonatype.com/artifact/com.lightspark.umaaas/umaaas-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.lightspark.umaaas/umaaas-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.lightspark.umaaas/umaaas-kotlin/0.0.1)\n<!-- x-release-please-end -->\n\nThe Umaaas Kotlin SDK provides convenient access to the [Umaaas REST API](https://lightsparkdev.github.io/umaaas-api/)   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Umaaas MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=umaaas_mcp&config=eyJuYW1lIjoidW1hYWFzX21jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3VtYWFhcy5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LXVtYWFhcy1jbGllbnQtaWQiOiJNeSBVc2VybmFtZSIsIngtdW1hYWFzLWNsaWVudC1zZWNyZXQiOiJNeSBQYXNzd29yZCJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22umaaas_mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fumaaas.stlmcp.com%22%2C%22headers%22%3A%7B%22x-umaaas-client-id%22%3A%22My%20Username%22%2C%22x-umaaas-client-secret%22%3A%22My%20Password%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [lightsparkdev.github.io](https://lightsparkdev.github.io/umaaas-api/). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.lightspark.umaaas/umaaas-kotlin/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.lightspark.umaaas:umaaas-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.lightspark.umaaas</groupId>\n  <artifactId>umaaas-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.BankAccountType\nimport com.lightspark.umaaas.models.users.BusinessUser\nimport com.lightspark.umaaas.models.users.IndividualUser\nimport com.lightspark.umaaas.models.users.UserBankAccountInfo\nimport com.lightspark.umaaas.models.users.UserCreateResponse\nimport com.lightspark.umaaas.models.users.UserType\n\n// Configures using the `umaaas.clientId`, `umaaas.clientSecret` and `umaaas.baseUrl` system properties\n// Or configures using the `UMAAAS_CLIENT_ID`, `UMAAAS_CLIENT_SECRET` and `UMAAAS_BASE_URL` environment variables\nval client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\nval params: IndividualUser = IndividualUser.builder()\n    .platformUserId("7b3c5a89d2f1e0")\n    .umaAddress("\\$jane.doe@uma.domain.com")\n    .userType(UserType.INDIVIDUAL)\n    .bankAccountInfo(UserBankAccountInfo.UserClabeAccountInfo.builder()\n        .bankName("Chase Bank")\n        .clabeNumber("123456789012345678")\n        .accountType(BankAccountType.US_ACCOUNT)\n        .build())\n    .build()\nval user: UserCreateResponse = client.users().create(params)\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\n\n// Configures using the `umaaas.clientId`, `umaaas.clientSecret` and `umaaas.baseUrl` system properties\n// Or configures using the `UMAAAS_CLIENT_ID`, `UMAAAS_CLIENT_SECRET` and `UMAAAS_BASE_URL` environment variables\nval client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .username("My Username")\n    .password("My Password")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    // Configures using the `umaaas.clientId`, `umaaas.clientSecret` and `umaaas.baseUrl` system properties\n    // Or configures using the `UMAAAS_CLIENT_ID`, `UMAAAS_CLIENT_SECRET` and `UMAAAS_BASE_URL` environment variables\n    .fromEnv()\n    .username("My Username")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter     | System property       | Environment variable   | Required | Default value                               |\n| ---------- | --------------------- | ---------------------- | -------- | ------------------------------------------- |\n| `username` | `umaaas.clientId`     | `UMAAAS_CLIENT_ID`     | true     | -                                           |\n| `password` | `umaaas.clientSecret` | `UMAAAS_CLIENT_SECRET` | true     | -                                           |\n| `baseUrl`  | `umaaas.baseUrl`      | `UMAAAS_BASE_URL`      | true     | `"https://api.uma.money/umaaas/2025-05-15"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\n\nval clientWithOptions: UmaaasClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Umaaas API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.users().create(...)` should be called with an instance of `UserCreateParams`, and it     will return an instance of `UserCreateResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.models.users.BankAccountType\nimport com.lightspark.umaaas.models.users.IndividualUser\nimport com.lightspark.umaaas.models.users.UserBankAccountInfo\nimport com.lightspark.umaaas.models.users.UserCreateResponse\nimport com.lightspark.umaaas.models.users.UserType\n\n// Configures using the `umaaas.clientId`, `umaaas.clientSecret` and `umaaas.baseUrl` system properties\n// Or configures using the `UMAAAS_CLIENT_ID`, `UMAAAS_CLIENT_SECRET` and `UMAAAS_BASE_URL` environment variables\nval client: UmaaasClient = UmaaasOkHttpClient.fromEnv()\n\nval params: IndividualUser = IndividualUser.builder()\n    .platformUserId("7b3c5a89d2f1e0")\n    .umaAddress("\\$jane.doe@uma.domain.com")\n    .userType(UserType.INDIVIDUAL)\n    .bankAccountInfo(UserBankAccountInfo.UserClabeAccountInfo.builder()\n        .bankName("Chase Bank")\n        .clabeNumber("123456789012345678")\n        .accountType(BankAccountType.US_ACCOUNT)\n        .build())\n    .build()\nval user: UserCreateResponse = client.async().users().create(params)\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClientAsync\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClientAsync\nimport com.lightspark.umaaas.models.users.BankAccountType\nimport com.lightspark.umaaas.models.users.IndividualUser\nimport com.lightspark.umaaas.models.users.UserBankAccountInfo\nimport com.lightspark.umaaas.models.users.UserCreateResponse\nimport com.lightspark.umaaas.models.users.UserType\n\n// Configures using the `umaaas.clientId`, `umaaas.clientSecret` and `umaaas.baseUrl` system properties\n// Or configures using the `UMAAAS_CLIENT_ID`, `UMAAAS_CLIENT_SECRET` and `UMAAAS_BASE_URL` environment variables\nval client: UmaaasClientAsync = UmaaasOkHttpClientAsync.fromEnv()\n\nval params: IndividualUser = IndividualUser.builder()\n    .platformUserId("7b3c5a89d2f1e0")\n    .umaAddress("\\$jane.doe@uma.domain.com")\n    .userType(UserType.INDIVIDUAL)\n    .bankAccountInfo(UserBankAccountInfo.UserClabeAccountInfo.builder()\n        .bankName("Chase Bank")\n        .clabeNumber("123456789012345678")\n        .accountType(BankAccountType.US_ACCOUNT)\n        .build())\n    .build()\nval user: UserCreateResponse = client.users().create(params)\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```kotlin\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadParams\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadResponse\nimport java.nio.file.Paths\n\nval params: BulkUploadParams = BulkUploadParams.builder()\n    .file(Paths.get("/path/to/file"))\n    .build()\nval response: BulkUploadResponse = client.users().bulk().upload(params)\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```kotlin\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadParams\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadResponse\nimport java.net.URL\n\nval params: BulkUploadParams = BulkUploadParams.builder()\n    .file(URL("https://example.com//path/to/file").openStream())\n    .build()\nval response: BulkUploadResponse = client.users().bulk().upload(params)\n```\n\nOr a `ByteArray`:\n\n```kotlin\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadParams\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadResponse\n\nval params: BulkUploadParams = BulkUploadParams.builder()\n    .file("content".toByteArray())\n    .build()\nval response: BulkUploadResponse = client.users().bulk().upload(params)\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/core/Values.kt):\n\n```kotlin\nimport com.lightspark.umaaas.core.MultipartField\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadParams\nimport com.lightspark.umaaas.models.users.bulk.BulkUploadResponse\nimport java.io.InputStream\nimport java.net.URL\n\nval params: BulkUploadParams = BulkUploadParams.builder()\n    .file(MultipartField.builder<InputStream>()\n        .value(URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build()\nval response: BulkUploadResponse = client.users().bulk().upload(params)\n```\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.lightspark.umaaas.core.http.Headers\nimport com.lightspark.umaaas.core.http.HttpResponseFor\nimport com.lightspark.umaaas.models.users.BankAccountType\nimport com.lightspark.umaaas.models.users.IndividualUser\nimport com.lightspark.umaaas.models.users.UserBankAccountInfo\nimport com.lightspark.umaaas.models.users.UserCreateResponse\nimport com.lightspark.umaaas.models.users.UserType\n\nval params: IndividualUser = IndividualUser.builder()\n    .platformUserId("7b3c5a89d2f1e0")\n    .umaAddress("\\$jane.doe@uma.domain.com")\n    .userType(UserType.INDIVIDUAL)\n    .bankAccountInfo(UserBankAccountInfo.UserClabeAccountInfo.builder()\n        .bankName("Chase Bank")\n        .clabeNumber("123456789012345678")\n        .accountType(BankAccountType.US_ACCOUNT)\n        .build())\n    .build()\nval user: HttpResponseFor<UserCreateResponse> = client.users().withRawResponse().create(params)\n\nval statusCode: Int = user.statusCode()\nval headers: Headers = user.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.lightspark.umaaas.models.users.UserCreateResponse\n\nval parsedUser: UserCreateResponse = user.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`UmaaasServiceException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UmaaasServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UnexpectedStatusCodeException.kt) |\n\n- [`UmaaasIoException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UmaaasIoException.kt): I/O networking errors.\n\n- [`UmaaasRetryableException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UmaaasRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`UmaaasInvalidDataException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UmaaasInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`UmaaasException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UmaaasException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns a [`Sequence`](https://kotlinlang.org/docs/sequences.html)\n\n```kotlin\nimport com.lightspark.umaaas.models.users.UserListPage\n\nval page: UserListPage = client.users().list()\npage.autoPager()\n    .take(50)\n    .forEach { user -> println(user) }\n```\n\nWhen using the asynchronous client, the method returns a [`Flow`](https://kotlinlang.org/docs/flow.html):\n\n```kotlin\nimport com.lightspark.umaaas.models.users.UserListPageAsync\n\nval page: UserListPageAsync = client.async().users().list()\npage.autoPager()\n    .take(50)\n    .forEach { user -> println(user) }\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```kotlin\nimport com.lightspark.umaaas.models.users.UserListPage\nimport com.lightspark.umaaas.models.users.UserListResponse\n\nval page: UserListPage = client.users().list()\nwhile (true) {\n    for (user in page.items()) {\n        println(user)\n    }\n\n    if (!page.hasNextPage()) {\n        break\n    }\n\n    page = page.nextPage()\n}\n```\n\n## Logging\n\nEnable logging by setting the `UMAAAS_LOG` environment variable to   `info`:\n\n```sh\nexport UMAAAS_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport UMAAAS_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.core.LogLevel\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build()\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `umaaas-kotlin-core` is published with a     [configuration file](umaaas-kotlin-core/src/main/resources/META-INF/proguard/umaaas-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`UmaaasOkHttpClient`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClient.kt) or     [`UmaaasOkHttpClientAsync`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.lightspark.umaaas.models.users.UserCreateResponse\n\nval user: UserCreateResponse = client.users().create(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport java.time.Duration\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport com.lightspark.umaaas.core.http.ProxyAuthenticator\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\nimport java.time.Duration\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `umaaas-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`UmaaasClient`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClient.kt), [`UmaaasClientAsync`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientAsync.kt),             [`UmaaasClientImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientImpl.kt), and [`UmaaasClientAsyncImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `umaaas-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`UmaaasOkHttpClient`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClient.kt) and [`UmaaasOkHttpClientAsync`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClientAsync.kt), which             provide a way to construct [`UmaaasClientImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientImpl.kt) and             [`UmaaasClientAsyncImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientAsyncImpl.kt), respectively, using OkHttp\n- `umaaas-kotlin`\n  - Depends on and exposes the APIs of both `umaaas-kotlin-core` and `umaaas-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`umaaas-kotlin` dependency](#installation) with `umaaas-kotlin-core`\n2. Copy `umaaas-kotlin-client-okhttp`\'s [`OkHttpClient`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`UmaaasClientImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientImpl.kt) or [`UmaaasClientAsyncImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientAsyncImpl.kt), similarly to        [`UmaaasOkHttpClient`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClient.kt) or [`UmaaasOkHttpClientAsync`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`umaaas-kotlin` dependency](#installation) with `umaaas-kotlin-core`\n2. Write a class that implements the [`HttpClient`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/core/http/HttpClient.kt) interface\n3. Construct [`UmaaasClientImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientImpl.kt) or [`UmaaasClientAsyncImpl`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/client/UmaaasClientAsyncImpl.kt), similarly to        [`UmaaasOkHttpClient`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClient.kt) or [`UmaaasOkHttpClientAsync`](umaaas-kotlin-client-okhttp/src/main/kotlin/com/lightspark/umaaas/client/okhttp/UmaaasOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.lightspark.umaaas.core.JsonValue\nimport com.lightspark.umaaas.models.users.UserCreateParams\n\nval params: UserCreateParams = UserCreateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.lightspark.umaaas.core.JsonValue\nimport com.lightspark.umaaas.models.users.UserCreateParams\n\nval params: UserCreateParams = UserCreateParams.builder()\n    .body(JsonValue.from(42))\n    .build()\n```\n\nThe most straightforward way to create a [`JsonValue`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.lightspark.umaaas.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/core/Values.kt):\n\n```kotlin\nimport com.lightspark.umaaas.core.JsonMissing\nimport com.lightspark.umaaas.models.users.UserCreateParams\nimport com.lightspark.umaaas.models.users.UserRetrieveParams\n\nval params: UserCreateParams = UserRetrieveParams.builder()\n    .userId(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.lightspark.umaaas.core.JsonBoolean\nimport com.lightspark.umaaas.core.JsonNull\nimport com.lightspark.umaaas.core.JsonNumber\nimport com.lightspark.umaaas.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.users().bulk().getJobStatus(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.lightspark.umaaas.core.JsonField\n\nval field: JsonField<Any> = client.users().bulk().getJobStatus(params)._field()\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = field.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = field.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`UmaaasInvalidDataException`](umaaas-kotlin-core/src/main/kotlin/com/lightspark/umaaas/errors/UmaaasInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.lightspark.umaaas.models.users.bulk.BulkGetJobStatusResponse\n\nval response: BulkGetJobStatusResponse = client.users().bulk().getJobStatus(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.lightspark.umaaas.models.users.UserCreateResponse\n\nval user: UserCreateResponse = client.users().create(\n  params, RequestOptions.builder().responseValidation(true).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.lightspark.umaaas.client.UmaaasClient\nimport com.lightspark.umaaas.client.okhttp.UmaaasOkHttpClient\n\nval client: UmaaasClient = UmaaasOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/lightsparkdev/umaaas-kotlin-sdk/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'typescript',
    content:
      "# Umaaas TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/umaaas.svg?label=npm%20(stable))](https://npmjs.org/package/umaaas) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/umaaas)\n\nThis library provides convenient access to the Umaaas REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [lightsparkdev.github.io](https://lightsparkdev.github.io/umaaas-api/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Umaaas MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=umaaas_mcp&config=eyJuYW1lIjoidW1hYWFzX21jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3VtYWFhcy5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LXVtYWFhcy1jbGllbnQtaWQiOiJNeSBVc2VybmFtZSIsIngtdW1hYWFzLWNsaWVudC1zZWNyZXQiOiJNeSBQYXNzd29yZCJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22umaaas_mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fumaaas.stlmcp.com%22%2C%22headers%22%3A%7B%22x-umaaas-client-id%22%3A%22My%20Username%22%2C%22x-umaaas-client-secret%22%3A%22My%20Password%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:stainless-sdks/umaaas-typescript.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install umaaas`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst user = await client.users.create({\n  bankAccountInfo: {\n    bankName: 'BBVA Mexico',\n    clabeNumber: '123456789012345678',\n    accountType: 'CLABE',\n  },\n  platformUserId: '9f84e0c2a72c4fa',\n  umaAddress: '$john.doe@uma.domain.com',\n  userType: 'INDIVIDUAL',\n});\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  username: process.env['UMAAAS_CLIENT_ID'], // This is the default and can be omitted\n  password: process.env['UMAAAS_CLIENT_SECRET'], // This is the default and can be omitted\n});\n\nconst params: Umaaas.UserCreateParams = {\n  bankAccountInfo: {\n    bankName: 'BBVA Mexico',\n    clabeNumber: '123456789012345678',\n    accountType: 'CLABE',\n  },\n  platformUserId: '9f84e0c2a72c4fa',\n  umaAddress: '$john.doe@uma.domain.com',\n  userType: 'INDIVIDUAL',\n};\nconst user: Umaaas.UserCreateResponse = await client.users.create(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport Umaaas, { toFile } from 'umaaas';\n\nconst client = new Umaaas();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.users.bulk.upload({ file: fs.createReadStream('/path/to/file') });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.users.bulk.upload({ file: new File(['my bytes'], 'file') });\n\n// You can also pass a `fetch` `Response`:\nawait client.users.bulk.upload({ file: await fetch('https://somesite/file') });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.users.bulk.upload({ file: await toFile(Buffer.from('my bytes'), 'file') });\nawait client.users.bulk.upload({ file: await toFile(new Uint8Array([0, 1, 2]), 'file') });\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst user = await client.users\n  .create({\n    bankAccountInfo: {\n      bankName: 'BBVA Mexico',\n      clabeNumber: '123456789012345678',\n      accountType: 'CLABE',\n    },\n    platformUserId: '9f84e0c2a72c4fa',\n    umaAddress: '$john.doe@uma.domain.com',\n    userType: 'INDIVIDUAL',\n  })\n  .catch(async (err) => {\n    if (err instanceof Umaaas.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Umaaas({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.users.create({\n  bankAccountInfo: {\n  bankName: 'BBVA Mexico',\n  clabeNumber: '123456789012345678',\n  accountType: 'CLABE',\n},\n  platformUserId: '9f84e0c2a72c4fa',\n  umaAddress: '$john.doe@uma.domain.com',\n  userType: 'INDIVIDUAL',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Umaaas({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.users.create({\n  bankAccountInfo: {\n  bankName: 'BBVA Mexico',\n  clabeNumber: '123456789012345678',\n  accountType: 'CLABE',\n},\n  platformUserId: '9f84e0c2a72c4fa',\n  umaAddress: '$john.doe@uma.domain.com',\n  userType: 'INDIVIDUAL',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Umaaas API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllUserListResponses(params) {\n  const allUserListResponses = [];\n  // Automatically fetches more pages as needed.\n  for await (const userListResponse of client.users.list()) {\n    allUserListResponses.push(userListResponse);\n  }\n  return allUserListResponses;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.users.list();\nfor (const userListResponse of page.data) {\n  console.log(userListResponse);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Umaaas();\n\nconst response = await client.users\n  .create({\n    bankAccountInfo: {\n      bankName: 'BBVA Mexico',\n      clabeNumber: '123456789012345678',\n      accountType: 'CLABE',\n    },\n    platformUserId: '9f84e0c2a72c4fa',\n    umaAddress: '$john.doe@uma.domain.com',\n    userType: 'INDIVIDUAL',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: user, response: raw } = await client.users\n  .create({\n    bankAccountInfo: {\n      bankName: 'BBVA Mexico',\n      clabeNumber: '123456789012345678',\n      accountType: 'CLABE',\n    },\n    platformUserId: '9f84e0c2a72c4fa',\n    umaAddress: '$john.doe@uma.domain.com',\n    userType: 'INDIVIDUAL',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(user);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `UMAAAS_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Umaaas from 'umaaas';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Umaaas({\n  logger: logger.child({ name: 'Umaaas' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.users.create({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Umaaas from 'umaaas';\nimport fetch from 'my-fetch';\n\nconst client = new Umaaas({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Umaaas from 'umaaas';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Umaaas({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Umaaas from 'umaaas';\n\nconst client = new Umaaas({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Umaaas from 'npm:umaaas';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Umaaas({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/umaaas-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
