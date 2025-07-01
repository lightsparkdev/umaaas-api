import { useState, useEffect } from 'react';
import { WebhookEventData } from '../types/payment.types';

export function useWebhookEvents() {
  const [webhookEvents, setWebhookEvents] = useState<WebhookEventData[]>([]);
  const [isConnectedToWebhooks, setIsConnectedToWebhooks] = useState(false);

  // Set up Server-Sent Events connection for webhooks
  useEffect(() => {
    const eventSource = new EventSource('/api/sse');
    
    eventSource.onopen = () => {
      console.log('Connected to webhook events');
      setIsConnectedToWebhooks(true);
    };
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === 'connected' || data.type === 'heartbeat' || !data.type) {
          return; // Ignore connection and heartbeat messages
        }
        
        // Add new webhook event to the beginning of the array
        setWebhookEvents(prev => [data, ...prev.slice(0, 9)]); // Keep only latest 10
      } catch (error) {
        console.error('Error parsing webhook event:', error);
      }
    };
    
    eventSource.onerror = (error) => {
      console.error('SSE connection error:', error);
      setIsConnectedToWebhooks(false);
    };
    
    return () => {
      eventSource.close();
      setIsConnectedToWebhooks(false);
    };
  }, []);

  return {
    webhookEvents,
    isConnectedToWebhooks,
  };
}
