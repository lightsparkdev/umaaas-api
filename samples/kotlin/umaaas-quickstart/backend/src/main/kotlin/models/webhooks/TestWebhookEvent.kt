package models.webhooks

import ExcludeMissing
import JsonField
import JsonValue
import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.checkRequired
import java.util.Collections

class TestWebhookEvent
private constructor(
    private val timestamp: JsonField<String>,
    private val webhookId: JsonField<String>,
    private val type: JsonField<BaseWebhookEvent.WebhookType>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) : BaseWebhookEvent() {

    @JsonCreator
    private constructor(
        @JsonProperty("timestamp") @ExcludeMissing timestamp: JsonField<String> = JsonMissing.of(),
        @JsonProperty("webhookId") @ExcludeMissing webhookId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("type") @ExcludeMissing type: JsonField<BaseWebhookEvent.WebhookType> = JsonField.of(BaseWebhookEvent.WebhookType.TEST),
    ) : this(
        timestamp,
        webhookId,
        type,
        mutableMapOf(),
    )

    override fun timestamp(): String = timestamp.getRequired("timestamp")

    override fun webhookId(): String = webhookId.getRequired("webhookId")

    override fun type(): BaseWebhookEvent.WebhookType = type.getRequired("type")

    @JsonProperty("timestamp") @ExcludeMissing fun _timestamp(): JsonField<String> = timestamp

    @JsonProperty("webhookId") @ExcludeMissing fun _webhookId(): JsonField<String> = webhookId

    @JsonProperty("type") @ExcludeMissing fun _type(): JsonField<BaseWebhookEvent.WebhookType> = type

    @JsonAnySetter
    private fun putAdditionalProperty(key: String, value: JsonValue) {
        additionalProperties.put(key, value)
    }

    @JsonAnyGetter
    @ExcludeMissing
    fun _additionalProperties(): Map<String, JsonValue> =
        Collections.unmodifiableMap(additionalProperties)

    fun toBuilder() = Builder().from(this)

    companion object {
        fun builder() = Builder()
    }

    class Builder internal constructor() {

        private var timestamp: JsonField<String>? = null
        private var webhookId: JsonField<String>? = null
        private var type: JsonField<BaseWebhookEvent.WebhookType> = JsonField.of(BaseWebhookEvent.WebhookType.TEST)
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(event: TestWebhookEvent) = apply {
            timestamp = event.timestamp
            webhookId = event.webhookId
            type = event.type
            additionalProperties = event.additionalProperties.toMutableMap()
        }

        fun timestamp(timestamp: String) = timestamp(JsonField.of(timestamp))

        fun timestamp(timestamp: JsonField<String>) = apply { this.timestamp = timestamp }

        fun webhookId(webhookId: String) = webhookId(JsonField.of(webhookId))

        fun webhookId(webhookId: JsonField<String>) = apply { this.webhookId = webhookId }

        fun type(type: BaseWebhookEvent.WebhookType) = type(JsonField.of(type))

        fun type(type: JsonField<BaseWebhookEvent.WebhookType>) = apply { this.type = type }

        fun putAdditionalProperty(key: String, value: JsonValue) = apply {
            additionalProperties.put(key, value)
        }

        fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
            this.additionalProperties.putAll(additionalProperties)
        }

        fun build(): TestWebhookEvent =
            TestWebhookEvent(
                checkRequired("timestamp", timestamp),
                checkRequired("webhookId", webhookId),
                type,
                additionalProperties,
            )
    }
}
