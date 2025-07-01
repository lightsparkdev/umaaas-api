package com.lightspark.uma.umaaas.lib

import models.webhooks.BaseWebhookEvent
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.asSharedFlow
import java.util.concurrent.ConcurrentLinkedQueue

data class WebhookEventData(
    val id: String,
    val type: String,
    val created: Long,
    val data: BaseWebhookEvent,
    val receivedAt: Long
)

sealed class SSEMessage {
    data class Connected(val timestamp: Long) : SSEMessage()
    data class Heartbeat(val timestamp: Long) : SSEMessage()
    data class WebhookEvent(val event: WebhookEventData) : SSEMessage()
}

object WebhookEventQueue {
    private val events = ConcurrentLinkedQueue<WebhookEventData>()
    private val maxEvents = 100
    
    // SharedFlow for broadcasting events to SSE clients
    private val _eventFlow = MutableSharedFlow<WebhookEventData>(replay = 0)
    val eventFlow: SharedFlow<WebhookEventData> = _eventFlow.asSharedFlow()
    
    fun addEvent(event: WebhookEventData) {
        // Add to queue
        events.offer(event)
        
        // Keep only last maxEvents
        while (events.size > maxEvents) {
            events.poll()
        }
        
        // Broadcast to SSE clients
        _eventFlow.tryEmit(event)
    }
    
    fun getLatestEvents(count: Int = 10): List<WebhookEventData> {
        val eventList = events.toList()
        return if (eventList.size <= count) {
            eventList.reversed()
        } else {
            eventList.takeLast(count).reversed()
        }
    }
    
    fun getLatestEvent(): WebhookEventData? {
        return events.lastOrNull()
    }
}