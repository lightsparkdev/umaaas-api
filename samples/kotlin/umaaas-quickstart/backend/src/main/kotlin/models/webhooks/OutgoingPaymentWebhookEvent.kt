package models.webhooks

import ExcludeMissing
import JsonField
import JsonValue
import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.models.transactions.OutgoingTransaction
import java.util.Collections

class OutgoingPaymentWebhookEvent
private constructor(
    private val timestamp: JsonField<String>,
    private val webhookId: JsonField<String>,
    private val type: JsonField<WebhookType>,
    private val transaction: JsonField<OutgoingTransaction>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) : BaseWebhookEvent() {

    @JsonCreator
    private constructor(
        @JsonProperty("timestamp") @ExcludeMissing timestamp: JsonField<String> = JsonMissing.of(),
        @JsonProperty("webhookId") @ExcludeMissing webhookId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("type") @ExcludeMissing type: JsonField<WebhookType> = JsonField.of(BaseWebhookEvent.WebhookType.OUTGOING_PAYMENT),
        @JsonProperty("transaction") @ExcludeMissing transaction: JsonField<OutgoingTransaction> = JsonMissing.of(),
    ) : this(
        timestamp,
        webhookId,
        type,
        transaction,
        mutableMapOf(),
    )

    override fun timestamp(): String = timestamp.getRequired("timestamp")

    override fun webhookId(): String = webhookId.getRequired("webhookId")

    override fun type(): WebhookType = type.getRequired("type")

    fun transaction(): OutgoingTransaction = transaction.getRequired("transaction")

    @JsonProperty("timestamp") @ExcludeMissing fun _timestamp(): JsonField<String> = timestamp

    @JsonProperty("webhookId") @ExcludeMissing fun _webhookId(): JsonField<String> = webhookId

    @JsonProperty("type") @ExcludeMissing fun _type(): JsonField<WebhookType> = type

    @JsonProperty("transaction") @ExcludeMissing fun _transaction(): JsonField<OutgoingTransaction> = transaction

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
        private var type: JsonField<BaseWebhookEvent.WebhookType> = JsonField.of(BaseWebhookEvent.WebhookType.OUTGOING_PAYMENT)
        private var transaction: JsonField<OutgoingTransaction>? = null
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(event: OutgoingPaymentWebhookEvent) = apply {
            timestamp = event.timestamp
            webhookId = event.webhookId
            type = event.type
            transaction = event.transaction
            additionalProperties = event.additionalProperties.toMutableMap()
        }

        fun timestamp(timestamp: String) = timestamp(JsonField.of(timestamp))

        fun timestamp(timestamp: JsonField<String>) = apply { this.timestamp = timestamp }

        fun webhookId(webhookId: String) = webhookId(JsonField.of(webhookId))

        fun webhookId(webhookId: JsonField<String>) = apply { this.webhookId = webhookId }

        fun type(type: WebhookType) = type(JsonField.of(type))

        fun type(type: JsonField<WebhookType>) = apply { this.type = type }

        fun transaction(transaction: OutgoingTransaction) = transaction(JsonField.of(transaction))

        fun transaction(transaction: JsonField<OutgoingTransaction>) = apply { this.transaction = transaction }

        fun putAdditionalProperty(key: String, value: JsonValue) = apply {
            additionalProperties.put(key, value)
        }

        fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
            this.additionalProperties.putAll(additionalProperties)
        }

        fun build(): OutgoingPaymentWebhookEvent =
            OutgoingPaymentWebhookEvent(
                checkRequired("timestamp", timestamp),
                checkRequired("webhookId", webhookId),
                type,
                checkRequired("transaction", transaction),
                additionalProperties,
            )
    }
}
