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

class RequestedField
private constructor(
    private val name: JsonField<String>,
    private val mandatory: JsonField<Boolean>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("name") @ExcludeMissing name: JsonField<String> = JsonMissing.of(),
        @JsonProperty("mandatory") @ExcludeMissing mandatory: JsonField<Boolean> = JsonMissing.of(),
    ) : this(
        name,
        mandatory,
        mutableMapOf(),
    )

    fun name(): String = name.getRequired("name")

    fun mandatory(): Boolean = mandatory.getRequired("mandatory")

    @JsonProperty("name") @ExcludeMissing fun _name(): JsonField<String> = name

    @JsonProperty("mandatory") @ExcludeMissing fun _mandatory(): JsonField<Boolean> = mandatory

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

        private var name: JsonField<String>? = null
        private var mandatory: JsonField<Boolean>? = null
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(requestedField: RequestedField) = apply {
            name = requestedField.name
            mandatory = requestedField.mandatory
            additionalProperties = requestedField.additionalProperties.toMutableMap()
        }

        fun name(name: String) = name(JsonField.of(name))

        fun name(name: JsonField<String>) = apply { this.name = name }

        fun mandatory(mandatory: Boolean) = mandatory(JsonField.of(mandatory))

        fun mandatory(mandatory: JsonField<Boolean>) = apply { this.mandatory = mandatory }

        fun putAdditionalProperty(key: String, value: JsonValue) = apply {
            additionalProperties.put(key, value)
        }

        fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
            this.additionalProperties.putAll(additionalProperties)
        }

        fun build(): RequestedField =
            RequestedField(
                checkRequired("name", name),
                checkRequired("mandatory", mandatory),
                additionalProperties,
            )
    }
}
