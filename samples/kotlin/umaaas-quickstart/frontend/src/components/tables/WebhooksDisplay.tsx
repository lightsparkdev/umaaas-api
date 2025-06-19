'use client';

import { useWebhookEvents } from '../../hooks/useWebhookEvents';

export default function WebhooksDisplay() {
  const { webhookEvents, isConnectedToWebhooks } = useWebhookEvents();

  const truncateText = (text: string, maxLength: number = 30) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Latest Webhooks</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isConnectedToWebhooks ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">
              {isConnectedToWebhooks ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
      </div>

      {webhookEvents.length > 0 ? (
        <div className="space-y-4">
          {webhookEvents.map((event, index) => (
            <div key={`${event.id}-${index}`} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-medium text-blue-600">{event.type}</span>
                  <span className="ml-2 text-sm text-gray-500">ID: {truncateText(event.webhookId, 20)}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(event.timestamp).toLocaleString()}
                </div>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <pre className="text-sm overflow-auto max-h-40">
                  {JSON.stringify(event, null, 2)}
                </pre>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          {isConnectedToWebhooks 
            ? 'No webhooks received yet. Webhooks will appear here in real-time.' 
            : 'Connecting to webhook events...'}
        </div>
      )}
    </div>
  );
}
