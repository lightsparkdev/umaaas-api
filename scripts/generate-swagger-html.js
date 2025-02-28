const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const swaggerDocsDir = path.join(__dirname, '..', 'swagger-docs');
if (!fs.existsSync(swaggerDocsDir)) {
  fs.mkdirSync(swaggerDocsDir, { recursive: true });
}

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UMAaas API Documentation</title>
  <link rel="stylesheet" href="swagger-ui/swagger-ui.css">
  <link rel="icon" type="image/png" href="swagger-ui/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="swagger-ui/favicon-16x16.png" sizes="16x16" />
  <style>
    html {
      box-sizing: border-box;
      overflow: -moz-scrollbars-vertical;
      overflow-y: scroll;
    }
    
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    
    body {
      margin: 0;
      background: #fafafa;
    }

    .swagger-ui .topbar {
      background-color: #2563EB;
    }

    .swagger-ui .info .title {
      color: #1E40AF;
    }

    /* Custom theme styles can be added here */
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  
  <script src="swagger-ui/swagger-ui-bundle.js"></script>
  <script src="swagger-ui/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function() {
      const ui = SwaggerUIBundle({
        url: "./openapi.yaml",
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
        docExpansion: 'list',
        defaultModelsExpandDepth: 1,
        defaultModelExpandDepth: 1
      });
      
      window.ui = ui;
    };
  </script>
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync(path.join(swaggerDocsDir, 'index.html'), htmlContent);
console.log('Swagger UI HTML file generated successfully!'); 