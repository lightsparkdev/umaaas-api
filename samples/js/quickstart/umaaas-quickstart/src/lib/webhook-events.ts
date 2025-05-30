// In-memory webhook event queue
interface WebhookEventData {
  id: string;
  type: string;
  created: number;
  data: unknown;
  receivedAt: number;
}

class WebhookEventQueue {
  private events: WebhookEventData[] = [];
  private listeners: Set<(event: WebhookEventData) => void> = new Set();
  private maxEvents = 100; // Keep last 100 events

  addEvent(event: WebhookEventData) {
    // Add to queue
    this.events.push(event);
    
    // Keep only last maxEvents
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }
    
    // Notify all listeners
    this.listeners.forEach(listener => {
      try {
        listener(event);
      } catch (error) {
        console.error('Error notifying webhook listener:', error);
      }
    });
  }

  getLatestEvents(count = 10): WebhookEventData[] {
    return this.events.slice(-count).reverse(); // Most recent first
  }

  getLatestEvent(): WebhookEventData | null {
    return this.events.length > 0 ? this.events[this.events.length - 1] : null;
  }

  addListener(listener: (event: WebhookEventData) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  removeListener(listener: (event: WebhookEventData) => void) {
    this.listeners.delete(listener);
  }
}

// Global singleton instance
export const webhookEventQueue = new WebhookEventQueue();
export type { WebhookEventData };