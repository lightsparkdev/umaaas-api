package models.webhooks

import JsonField
import JsonValue
import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.lightspark.uma.core.ExcludeMissing
import com.lightspark.uma.core.checkRequired
import java.util.Collections

class IncomingPaymentWebhookResponse
private constructor(
    private val receiverUserInfo: JsonField<WebhookUserData>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("receiverUserInfo") @ExcludeMissing receiverUserInfo: JsonField<WebhookUserData> = JsonMissing.of(),
    ) : this(
        receiverUserInfo,
        mutableMapOf(),
    )

    fun receiverUserInfo(): WebhookUserData = receiverUserInfo.getRequired("receiverUserInfo")

    @JsonProperty("receiverUserInfo") @ExcludeMissing fun _receiverUserInfo(): JsonField<WebhookUserData> = receiverUserInfo

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

        private var receiverUserInfo: JsonField<WebhookUserData>? = null
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(response: IncomingPaymentWebhookResponse) = apply {
            receiverUserInfo = response.receiverUserInfo
            additionalProperties = response.additionalProperties.toMutableMap()
        }

        fun receiverUserInfo(receiverUserInfo: WebhookUserData) = receiverUserInfo(JsonField.of(receiverUserInfo))

        fun receiverUserInfo(receiverUserInfo: JsonField<WebhookUserData>) = apply { this.receiverUserInfo = receiverUserInfo }

        fun putAdditionalProperty(key: String, value: JsonValue) = apply {
            additionalProperties.put(key, value)
        }

        fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
            this.additionalProperties.putAll(additionalProperties)
        }

        fun build(): IncomingPaymentWebhookResponse =
            IncomingPaymentWebhookResponse(
                checkRequired("receiverUserInfo", receiverUserInfo),
                additionalProperties,
            )
    }
}
