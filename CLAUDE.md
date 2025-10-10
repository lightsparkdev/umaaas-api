# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **UMA as a Service (UMAaas) API** repository, which contains the OpenAPI 3.1 specification and documentation for the **Lightspark Grid API**. This is a **documentation and schema repository**, not application code. It facilitates global payments to and from UMA addresses with support for multiple currencies and payment flows.

The repository has recently been renamed from "UMA as a Service" to "Money Grid" or simply "Grid". You may see references to both names throughout the codebase during this transition.

## Key Commands

### Building and Linting

```bash
# Install all dependencies (root + docusaurus)
npm install
make install

# Build OpenAPI schema (bundles split YAML files into single openapi.yaml)
npm run build:openapi
make build-openapi

# Build documentation (OpenAPI + Docusaurus)
npm run build:openapi && cd docusaurus-docs && npm run build
make build

# Lint OpenAPI schema and markdown docs
npm run lint
make lint

# Lint only OpenAPI
npm run lint:openapi
make lint-openapi

# Lint only markdown
npm run lint:markdown
make lint-markdown
```

### Serving Documentation Locally

```bash
# Serve Docusaurus docs at http://localhost:3000
cd docusaurus-docs && npm run start
make serve-docs

# Serve Mintlify docs (requires: npm i -g mint)
cd mintlify && mint dev
make mint
```

## Architecture

### OpenAPI Schema Structure

The OpenAPI specification uses **Redocly's split-file approach**:

- **`openapi/openapi.yaml`** - Main entry point with metadata, tags, servers, and references
- **`openapi/paths/`** - API endpoint definitions organized by resource
- **`openapi/components/schemas/`** - Reusable schema components organized by domain
- **`openapi/webhooks/`** - Webhook event definitions
- **`openapi.yaml`** (root) - **Generated/bundled file** created by `npm run build:openapi`

**Important**: Always edit files in the `openapi/` directory, never the root `openapi.yaml` directly.

### Schema Organization

Schemas are organized by domain:

- `common/` - Shared schemas (Currency, Money, Address, etc.)
- `customers/` - Customer/user related schemas
- `external_accounts/` - Bank account schemas
- `quotes/` - Quote and payment instruction schemas
- `transactions/` - Transaction and transfer schemas
- `webhooks/` - Webhook payload schemas
- `errors/` - Error response schemas

### Documentation Structure

- **`docusaurus-docs/`** - Main documentation site (React-based)
  - `docs/` - Markdown guides (platform configuration, sending/receiving payments, webhooks, etc.)
  - Build output: `docusaurus-docs/build`
  - Published to: <https://lightspark.github.io/umaaas-api/>

- **`mintlify/`** - Alternative Mintlify documentation format
  - Contains its own CLAUDE.md with Mintlify-specific guidelines
  - MDX files with YAML frontmatter

### Key Concepts

**API Flows:**

1. **Outgoing Payments** - Platform sends payments to UMA addresses
   - GET receiver info → POST quote → Execute payment → Poll status or receive webhook
2. **Incoming Payments** - Platform receives payments from UMA addresses
   - Webhook arrives → Approve/reject (sync or async within 5s) → Completion webhook

**Authentication:**

- HTTP Basic Auth using `<api token id>:<api client secret>` (Base64 encoded)

**Webhooks:**

- `INCOMING_PAYMENT` - Incoming payment events (PENDING, COMPLETED, FAILED)
- `OUTGOING_PAYMENT` - Outgoing payment events (status updates)
- `BULK_UPLOAD` - Bulk customer upload job status
- `INVITATION_CLAIMED` - UMA invitation claimed events
- `KYC_STATUS` - KYC status changes

**Key Entities:**

- **Customers** (formerly "users") - End users with UMA addresses
- **Internal Accounts** - Platform-managed accounts
- **External Accounts** - Bank accounts for settlements
- **Quotes** - Locked-in exchange rates and payment instructions
- **Transactions** - Completed or pending transfers

## Naming Conventions

Recent changes (in progress):

- "Users" → "Customers" (endpoints, schemas, documentation)
- "UMA as a Service" / "UMAaaS" → "Money Grid" / "Grid"
- Webhook signature header: `X-UMAaaS-Signature` → `X-Grid-Signature`

## Development Workflow

1. **Making OpenAPI Changes:**
   - Edit files in `openapi/paths/` or `openapi/components/schemas/`
   - Run `npm run lint:openapi` to validate changes
   - Run `npm run build:openapi` to generate the bundled `openapi.yaml`
   - The build also copies `openapi.yaml` to `mintlify/openapi.yaml`

2. **Making Documentation Changes:**
   - Edit markdown files in `docusaurus-docs/docs/`
   - Run `npm run lint:markdown` to validate
   - Use `make serve-docs` to preview changes locally
   - Run `make build` to build for production

3. **Pre-commit:**
   - Linting is enforced via npm scripts
   - Always run `npm run lint` before committing

## Important Notes

- This is a **schema and documentation repository** - there is no runtime application code
- The API is versioned (current: `2025-10-13`) in the server URL
- Redocly CLI is used for bundling/linting: `npm i -g @redocly/cli@latest`
- The main branch is `main`
- License: Apache-2.0 (Lightspark Group)
