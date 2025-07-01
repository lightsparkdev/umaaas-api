package models.webhooks
import JsonField
import JsonValue
import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.checkRequired
import com.lightspark.uma.models.transactions.IncomingTransaction
import java.util.Collections

class IncomingPaymentWebhookEvent
private constructor(
    private val timestamp: JsonField<String>,
    private val webhookId: JsonField<String>,
    private val type: JsonField<BaseWebhookEvent.WebhookType>,
    private val transaction: JsonField<IncomingTransaction>,
    private val requestedReceiverUserInfoFields: JsonField<List<RequestedField>>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) : BaseWebhookEvent() {

    @JsonCreator
    private constructor(
        @JsonProperty("timestamp") @ExcludeMissing timestamp: JsonField<String> = JsonMissing.of(),
        @JsonProperty("webhookId") @ExcludeMissing webhookId: JsonField<String> = JsonMissing.of(),
        @JsonProperty("type") @ExcludeMissing type: JsonField<BaseWebhookEvent.WebhookType> = JsonField.of(BaseWebhookEvent.WebhookType.INCOMING_PAYMENT),
        @JsonProperty("transaction") @ExcludeMissing transaction: JsonField<IncomingTransaction> = JsonMissing.of(),
        @JsonProperty("requestedReceiverUserInfoFields") @ExcludeMissing requestedReceiverUserInfoFields: JsonField<List<RequestedField>> = JsonMissing.of(),
    ) : this(
        timestamp,
        webhookId,
        type,
        transaction,
        requestedReceiverUserInfoFields,
        mutableMapOf(),
    )

    override fun timestamp(): String = timestamp.getRequired("timestamp")

    override fun webhookId(): String = webhookId.getRequired("webhookId")

    override fun type(): WebhookType = type.getRequired("type")

    fun transaction(): IncomingTransaction = transaction.getRequired("transaction")

    fun requestedReceiverUserInfoFields(): List<RequestedField>? = requestedReceiverUserInfoFields.getNullable("requestedReceiverUserInfoFields")

    @JsonProperty("timestamp") @ExcludeMissing fun _timestamp(): JsonField<String> = timestamp

    @JsonProperty("webhookId") @ExcludeMissing fun _webhookId(): JsonField<String> = webhookId

    @JsonProperty("type") @ExcludeMissing fun _type(): JsonField<WebhookType> = type

    @JsonProperty("transaction") @ExcludeMissing fun _transaction(): JsonField<IncomingTransaction> = transaction

    @JsonProperty("requestedReceiverUserInfoFields") @ExcludeMissing fun _requestedReceiverUserInfoFields(): JsonField<List<RequestedField>> = requestedReceiverUserInfoFields

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
        private var type: JsonField<WebhookType> = JsonField.of(WebhookType.INCOMING_PAYMENT)
        private var transaction: JsonField<IncomingTransaction>? = null
        private var requestedReceiverUserInfoFields: JsonField<List<RequestedField>> = JsonMissing.of()
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(event: IncomingPaymentWebhookEvent) = apply {
            timestamp = event.timestamp
            webhookId = event.webhookId
            type = event.type
            transaction = event.transaction
            requestedReceiverUserInfoFields = event.requestedReceiverUserInfoFields
            additionalProperties = event.additionalProperties.toMutableMap()
        }

        fun timestamp(timestamp: String) = timestamp(JsonField.of(timestamp))

        fun timestamp(timestamp: JsonField<String>) = apply { this.timestamp = timestamp }

        fun webhookId(webhookId: String) = webhookId(JsonField.of(webhookId))

        fun webhookId(webhookId: JsonField<String>) = apply { this.webhookId = webhookId }

        fun type(type: WebhookType) = type(JsonField.of(type))

        fun type(type: JsonField<WebhookType>) = apply { this.type = type }

        fun transaction(transaction: IncomingTransaction) = transaction(JsonField.of(transaction))

        fun transaction(transaction: JsonField<IncomingTransaction>) = apply { this.transaction = transaction }

        fun requestedReceiverUserInfoFields(requestedReceiverUserInfoFields: List<RequestedField>) = requestedReceiverUserInfoFields(JsonField.of(requestedReceiverUserInfoFields))

        fun requestedReceiverUserInfoFields(requestedReceiverUserInfoFields: JsonField<List<RequestedField>>) = apply { this.requestedReceiverUserInfoFields = requestedReceiverUserInfoFields }

        fun putAdditionalProperty(key: String, value: JsonValue) = apply {
            additionalProperties.put(key, value)
        }

        fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
            this.additionalProperties.putAll(additionalProperties)
        }

        fun build(): IncomingPaymentWebhookEvent =
            IncomingPaymentWebhookEvent(
                checkRequired("timestamp", timestamp),
                checkRequired("webhookId", webhookId),
                type,
                checkRequired("transaction", transaction),
                requestedReceiverUserInfoFields,
                additionalProperties,
            )
    }
}
