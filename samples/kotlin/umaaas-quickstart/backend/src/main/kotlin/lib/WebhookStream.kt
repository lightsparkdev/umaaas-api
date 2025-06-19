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
        // Broadcast to SSE clients
        _eventFlow.tryEmit(event)
    }
}
