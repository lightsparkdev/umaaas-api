package com.lightspark.uma.umaaas.lib

import models.webhooks.BaseWebhookEvent
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.asSharedFlow

object WebhookStream {
    // SharedFlow for broadcasting events to SSE clients
    private val _eventFlow = MutableSharedFlow<BaseWebhookEvent>(replay = 1)
    val eventFlow: SharedFlow<BaseWebhookEvent> = _eventFlow.asSharedFlow()
    
    fun addEvent(event: BaseWebhookEvent) {
        println("WebhookStream.addEvent called with event type: ${event.type()}")
        println("Number of subscribers: ${_eventFlow.subscriptionCount.value}")
        
        // Broadcast to SSE clients
        val result = _eventFlow.tryEmit(event)
        println("tryEmit result: $result")
    }
}
