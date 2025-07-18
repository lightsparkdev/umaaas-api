---
sidebar_position: 5
---

# Webhooks Guide

All webhooks sent by the UMAaaS API include a signature in the `X-UMAaaS-Signature` header, which allows you to verify the authenticity of the webhook. This is critical for security, as it ensures that only legitimate webhooks from UMAaaS are processed by your system.

## Signature Verification Process

1. **Obtain your UMAaaS public key**
   - This is provided to you during the integration process. Reach out to us at [support@lightspark.com](mailto:support@lightspark.com) or over Slack to get the public key.
   - The key is in PEM format and can be used with standard cryptographic libraries

2. **Verify incoming webhooks**
   - Extract the signature from the `X-UMAaaS-Signature` header
   - Decode the base64 signature
   - Create a SHA-256 hash of the entire request body
   - Verify the signature using the UMAaaS webhook public key and the hash
   - Only process the webhook if the signature verification succeeds

## Verification Examples

### Node.js Example

```javascript
const crypto = require('crypto');
const express = require('express');
const app = express();

// Your UMAaaS public key provided during integration
const UMAaaS_WEBHOOK_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE...
-----END PUBLIC KEY-----`;

app.post('/webhooks/uma', (req, res) => {
  const signatureHeader = req.header('X-UMAaaS-Signature');
  
  if (!signatureHeader) {
    return res.status(401).json({ error: 'Signature missing' });
  }
  
  try {
    let signature: Buffer;
    try {
      // Parse the signature as JSON. It's in the format {"v": "1", "s": "base64_signature"}
      const signatureObj = JSON.parse(signatureHeader);
      if (signatureObj.v && signatureObj.s) {
        // The signature is in the 's' field
        signature = Buffer.from(signatureObj.s, "base64");
      } else {
        throw new Error("Invalid JSON signature format");
      }
    } catch {
      // If JSON parsing fails, treat as direct base64
      signature = Buffer.from(signatureHeader, "base64");
    }
    
    // Create verifier with the public key and correct algorithm
    const verifier = crypto.createVerify("SHA256");
    const payload = await request.text();
    verifier.update(payload);
    verifier.end();

    // Verify the signature using the webhook public key
    const isValid = verifier.verify(
      {
        key: UMAaaS_WEBHOOK_PUBLIC_KEY,
        format: "pem",
        type: "spki",
      },
      signature,
    );
    
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid signature' });
    }
    
    // Webhook is verified, process it based on type
    const webhookData = req.body;
    
    if (webhookData.type === 'INCOMING_PAYMENT') {
      // Process incoming payment webhook
      // ...
    } else if (webhookData.type === 'OUTGOING_PAYMENT') {
      // Process outgoing payment webhook
      // ...
    }
    
    // Acknowledge receipt of the webhook
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Signature verification error:', error);
    return res.status(401).json({ error: 'Signature verification failed' });
  }
});

app.listen(3000, () => {
  console.log('Webhook server listening on port 3000');
});
```

### Python Example

```python
from cryptography.hazmat.primitives import serialization, hashes
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives.asymmetric.utils import decode_dss_signature
from flask import Flask, request, jsonify
import base64

app = Flask(__name__)

# Your UMAaaS public key provided during integration
UMAaaS_PUBLIC_KEY = """-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE...
-----END PUBLIC KEY-----"""

# Load the public key
public_key = serialization.load_pem_public_key(
    UMAaaS_PUBLIC_KEY.encode('utf-8')
)

@app.route('/webhooks/uma', methods=['POST'])
def handle_webhook():
    # Get signature from header
    signature = request.headers.get('X-UMAaaS-Signature')
    if not signature:
        return jsonify({'error': 'Signature missing'}), 401
    
    try:
        # Get the raw request body
        request_body = request.get_data()
        
        # Create a SHA-256 hash of the request body
        hash_obj = hashes.Hash(hashes.SHA256())
        hash_obj.update(request_body)
        digest = hash_obj.finalize()
        
        # Decode the base64 signature
        signature_bytes = base64.b64decode(signature)
        
        # Verify the signature
        try:
            public_key.verify(
                signature_bytes,
                request_body,
                ec.ECDSA(hashes.SHA256())
            )
        except Exception as e:
            return jsonify({'error': 'Invalid signature'}), 401
        
        # Webhook is verified, process it based on type
        webhook_data = request.json
        
        if webhook_data['type'] == 'INCOMING_PAYMENT':
            # Process incoming payment webhook
            # ...
            pass
        elif webhook_data['type'] == 'OUTGOING_PAYMENT':
            # Process outgoing payment webhook
            # ...
            pass
        
        # Acknowledge receipt of the webhook
        return jsonify({'received': True}), 200
    except Exception as e:
        print(f'Signature verification error: {e}')
        return jsonify({'error': 'Signature verification failed'}), 401

if __name__ == '__main__':
    app.run(port=3000)
```

## Testing

To test your webhook implementation, you can trigger a test webhook from the UMAaaS dashboard. This will send a test webhook to the endpoint you provided during the integration process. The test webhook will also be sent automatically when you update your platform configuration with a new webhook URL.

An example of the test webhook payload is shown below:

```json
{
  "test": true,
  "timestamp": "2023-08-15T14:32:00Z",
  "webhookId": "Webhook:019542f5-b3e7-1d02-0000-000000000007",
  "type": "TEST"
}
```

You should verify the signature of the webhook using the UMAaaS public key and the process outlined in the [Signature Verification Process](#signature-verification-process) section and then reply with a 200 OK response to acknowledge receipt of the webhook.

## Security Considerations

- **Always verify signatures**: Never process webhooks without verifying their signatures.
- **Use HTTPS**: Ensure your webhook endpoint uses HTTPS to prevent man-in-the-middle attacks.
- **Implement idempotency**: Use the `webhookId` field to prevent processing duplicate webhooks.
- **Timeout handling**: Implement proper timeout handling and respond to webhooks promptly.

## Retry Policy

UMAaaS will retry webhooks with the following policy based on the webhook type:

| Webhook Type | Retry Policy | Notes |
|-------------|-------------|-------|
| TEST | No retries | Used for testing webhook configuration |
| OUTGOING_PAYMENT | Retry with exponential backoff up to 7 days with maximum interval of 30 mins | No retry on 409 (duplicate webhooks) |
| INCOMING_PAYMENT | Retry with exponential backoff up to 7 days with maximum interval of 30 mins | No retry on: 409 (duplicate webhook) or PENDING status since it is served as an approval mechanism in-flow |
| BULK_UPLOAD | Retry with exponential backoff up to 7 days with maximum interval of 30 mins | No retry on 409 (duplicate webhooks) |
| INVITATION_CLAIMED | Retry with exponential backoff up to 7 days with maximum interval of 30 mins | No retry on 409 (duplicate webhooks) |
