import { NextRequest } from 'next/server';
import { webhookEventQueue, WebhookEventData } from '@/lib/webhook-events';

export async function GET(request: NextRequest) {
  console.log('SSE connection established');
  
  // Set up SSE headers
  const headers = new Headers({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no', // Disable nginx buffering
  });

  const encoder = new TextEncoder();
  let isAlive = true;

  // Create a readable stream
  const stream = new ReadableStream({
    start(controller) {
      console.log('SSE stream started');
      
      // Send initial connection message
      const sendMessage = (data: any) => {
        if (!isAlive) return;
        try {
          const message = `data: ${JSON.stringify(data)}\n\n`;
          controller.enqueue(encoder.encode(message));
        } catch (error) {
          console.error('Error sending SSE message:', error);
          isAlive = false;
        }
      };

      // Send connection confirmation
      sendMessage({ type: 'connected', timestamp: Date.now() });

      // Send latest events immediately
      const latestEvents = webhookEventQueue.getLatestEvents(10);
      console.log(`Sending ${latestEvents.length} latest webhook events`);
      latestEvents.forEach(event => sendMessage(event));

      // Set up listener for new events
      const listener = (event: WebhookEventData) => {
        console.log('Broadcasting webhook event via SSE:', event.type);
        sendMessage(event);
      };

      const removeListener = webhookEventQueue.addListener(listener);

      // Clean up when client disconnects
      const cleanup = () => {
        console.log('SSE connection cleanup');
        isAlive = false;
        removeListener();
        try {
          controller.close();
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      };

      // Handle client disconnect using request signal
      request.signal.addEventListener('abort', () => {
        console.log('SSE client disconnected');
        cleanup();
      });

      // Keep connection alive with periodic heartbeat
      const heartbeat = setInterval(() => {
        if (!isAlive) {
          clearInterval(heartbeat);
          return;
        }
        sendMessage({ type: 'heartbeat', timestamp: Date.now() });
      }, 15000); // Send heartbeat every 15 seconds

      // Store cleanup function for when stream ends
      return () => {
        clearInterval(heartbeat);
        cleanup();
      };
    },
    
    cancel() {
      console.log('SSE stream cancelled');
      isAlive = false;
    }
  });

  return new Response(stream, { headers });
}