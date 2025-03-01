# UMAaaS API Documentation

This directory contains the documentation for the UMA as a Service (UMAaaS) API, built using [Docusaurus](https://docusaurus.io/) and [Redocusaurus](https://redocusaurus.vercel.app/) for the OpenAPI specification.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Install dependencies:

```bash
npm install
```

### Local Development

To start the development server:

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

To build the documentation for production:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

To serve the built documentation locally:

```bash
npm run serve
```

## Documentation Structure

- `docs/`: Contains the Markdown documentation files
  - `guides/`: Contains guides for using the UMAaaS API
- `static/`: Contains static files
  - `api/`: Contains the OpenAPI specification
  - `img/`: Contains images used in the documentation
- `src/`: Contains React components and custom CSS
- `docusaurus.config.ts`: Docusaurus configuration file
- `sidebars.ts`: Sidebar configuration file

## OpenAPI Specification

The OpenAPI specification is located at `static/api/openapi.yaml`. This file is used by Redocusaurus to generate the API reference documentation.

## Contributing

To contribute to the documentation:

1. Make your changes to the Markdown files in the `docs/` directory or to the OpenAPI specification in `static/api/openapi.yaml`.
2. Test your changes locally using `npm start`.
3. Submit a pull request with your changes.

## License

This documentation is licensed under the [MIT License](LICENSE).
