# Webhook Verification Guide

All webhooks sent by the UMAaS API include a signature in the `X-UMAaS-Signature` header, which allows you to verify the authenticity of the webhook. This is critical for security, as it ensures that only legitimate webhooks from UMAaS are processed by your system.

## Signature Verification Process

1. **Obtain your webhook secret**
   - This is provided to you during the integration process
   - Keep this secret secure and never expose it publicly

2. **Verify incoming webhooks**
   - Extract the signature from the `X-UMAaS-Signature` header
   - Create an HMAC-SHA256 hash of the entire request body using your webhook secret as the key
   - Encode the hash in hexadecimal format
   - Compare this calculated value with the signature from the header
   - Only process the webhook if the signatures match

## Verification Examples

### Node.js Example

```javascript
const crypto = require('crypto');
const express = require('express');
const app = express();

// Your webhook secret provided during integration
const WEBHOOK_SECRET = 'your_webhook_secret';

app.use(express.json({
  verify: (req, res, buf) => {
    // Store the raw body for signature verification
    req.rawBody = buf;
  }
}));

app.post('/webhooks/uma', (req, res) => {
  const signature = req.header('X-UMAaS-Signature');
  
  if (!signature) {
    return res.status(401).json({ error: 'Signature missing' });
  }
  
  // Calculate the expected signature
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
  const calculatedSignature = hmac.update(req.rawBody).digest('hex');
  
  // Compare signatures using a timing-safe comparison to prevent timing attacks
  const isValid = crypto.timingSafeEqual(
    Buffer.from(calculatedSignature, 'hex'),
    Buffer.from(signature, 'hex')
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
});

app.listen(3000, () => {
  console.log('Webhook server listening on port 3000');
});
```

### Python Example

```python
import hmac
import hashlib
from flask import Flask, request, jsonify

app = Flask(__name__)

# Your webhook secret provided during integration
WEBHOOK_SECRET = 'your_webhook_secret'

@app.route('/webhooks/uma', methods=['POST'])
def handle_webhook():
    # Get signature from header
    signature = request.headers.get('X-UMAaS-Signature')
    if not signature:
        return jsonify({'error': 'Signature missing'}), 401
    
    # Calculate the expected signature
    request_body = request.get_data()
    calculated_signature = hmac.new(
        WEBHOOK_SECRET.encode('utf-8'),
        request_body,
        hashlib.sha256
    ).hexdigest()
    
    # Compare signatures
    if not hmac.compare_digest(calculated_signature, signature):
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

if __name__ == '__main__':
    app.run(port=3000)
```

## Security Considerations

- **Always verify signatures**: Never process webhooks without verifying their signatures.
- **Use HTTPS**: Ensure your webhook endpoint uses HTTPS to prevent man-in-the-middle attacks.
- **Implement idempotency**: Use the `webhookId` field to prevent processing duplicate webhooks.
- **Timeout handling**: Implement proper timeout handling and respond to webhooks promptly.
