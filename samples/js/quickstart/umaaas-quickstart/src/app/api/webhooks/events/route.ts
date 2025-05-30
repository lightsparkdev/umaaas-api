import { NextRequest } from 'next/server';
import { webhookEventQueue, WebhookEventData } from '@/lib/webhook-events';

export async function GET(request: NextRequest) {
  // Set up SSE headers
  const headers = new Headers({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Cache-Control',
  });

  // Create a readable stream
  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection message
      const encoder = new TextEncoder();
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: 'connected', timestamp: Date.now() })}\n\n`)
      );

      // Send latest events immediately
      const latestEvents = webhookEventQueue.getLatestEvents(10);
      if (latestEvents.length > 0) {
        latestEvents.forEach(event => {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
          );
        });
      }

      // Set up listener for new events
      const listener = (event: WebhookEventData) => {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
          );
        } catch (error) {
          console.error('Error sending SSE event:', error);
        }
      };

      const removeListener = webhookEventQueue.addListener(listener);

      // Clean up when client disconnects
      const cleanup = () => {
        removeListener();
        try {
          controller.close();
        } catch (error) {
          // Controller might already be closed
        }
      };

      // Handle client disconnect
      request.signal.addEventListener('abort', cleanup);

      // Keep connection alive with periodic heartbeat
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'heartbeat', timestamp: Date.now() })}\n\n`)
          );
        } catch (error) {
          clearInterval(heartbeat);
          cleanup();
        }
      }, 30000); // Send heartbeat every 30 seconds

      // Store cleanup function for when stream ends
      return () => {
        clearInterval(heartbeat);
        cleanup();
      };
    },
  });

  return new Response(stream, { headers });
}