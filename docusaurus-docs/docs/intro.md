---
sidebar_position: 1
slug: /
---

# Introduction to UMA as a Service

Welcome to the UMA as a Service (UMAaS) documentation. UMA as a Service is an API that facilitates global payments to and from UMA addresses, which are human-readable addresses that can send to and from any currency.

## Overview

The UMAaas API provides endpoints for:

1. Platform Configuration - Managing platform-specific settings such as UMA domain and required counterparty fields
2. User Management - Adding and updating users with their UMA addresses and bank account information
3. Sending Payments - Creating and executing payments to UMA addresses
4. Receiving Payments - Receiving payments from UMA addresses and approving or rejecting them
5. Fetching Transactions - Fetching transactions by ID or by quote ID

## Getting Started

To start integrating UMA as a Service, follow these steps:

1. [Set up your platform configuration](/docs/platform-configuration)
2. [Configure your users](/docs/configuring-users)
3. [Send payments](/docs/sending-payments)
4. [Receive payments](/docs/receiving-payments)
5. [Handle webhooks](/docs/webhook-verification)

## Authentication

All API requests must include HTTP Basic Authentication using the `Authorization` header. The credentials should be provided in the format `<api token id>:<api client secret>` and then Base64 encoded.

Example:

```http
Authorization: Basic <base64-encoded-credentials>
```

Where `<base64-encoded-credentials>` is the Base64 encoding of `<api token id>:<api client secret>`.

You can generate a new API token and client secret at any time in the UMAaas dashboard.

## API Reference

For detailed information about the API endpoints, request and response formats, and available operations, refer to the [API Reference](/api) section.

## Support

If you need assistance with UMA as a Service, please contact our support team at [support@lightspark.com](mailto:support@lightspark.com) or visit our support portal at [https://support.lightspark.com](https://support.lightspark.com).

## About This Documentation

This documentation is organized into the following sections:

- **Guides**: Step-by-step instructions for implementing UMA as a Service features
- **API Reference**: Detailed documentation of API endpoints and schemas

We continuously improve our documentation. If you have any suggestions or find any issues, please let us know through our [GitHub repository](https://github.com/lightspark/umaaas-api).
