package models.webhooks
import ExcludeMissing
import JsonField
import JsonValue
import JsonMissing
import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.annotation.JsonAnySetter
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.uma.models.users.Address
import java.util.Collections

class WebhookUserData
private constructor(
    private val fullName: JsonField<String>,
    private val dateOfBirth: JsonField<String>,
    private val nationality: JsonField<String>,
    private val email: JsonField<String>,
    private val phoneNumber: JsonField<String>,
    private val address: JsonField<Address>,
    private val additionalProperties: MutableMap<String, JsonValue>,
) {

    @JsonCreator
    private constructor(
        @JsonProperty("FULL_NAME") @ExcludeMissing fullName: JsonField<String> = JsonMissing.of(),
        @JsonProperty("DATE_OF_BIRTH") @ExcludeMissing dateOfBirth: JsonField<String> = JsonMissing.of(),
        @JsonProperty("NATIONALITY") @ExcludeMissing nationality: JsonField<String> = JsonMissing.of(),
        @JsonProperty("EMAIL") @ExcludeMissing email: JsonField<String> = JsonMissing.of(),
        @JsonProperty("PHONE_NUMBER") @ExcludeMissing phoneNumber: JsonField<String> = JsonMissing.of(),
        @JsonProperty("ADDRESS") @ExcludeMissing address: JsonField<Address> = JsonMissing.of(),
    ) : this(
        fullName,
        dateOfBirth,
        nationality,
        email,
        phoneNumber,
        address,
        mutableMapOf(),
    )

    fun fullName(): String? = fullName.getNullable("FULL_NAME")

    fun dateOfBirth(): String? = dateOfBirth.getNullable("DATE_OF_BIRTH")

    fun nationality(): String? = nationality.getNullable("NATIONALITY")

    fun email(): String? = email.getNullable("EMAIL")

    fun phoneNumber(): String? = phoneNumber.getNullable("PHONE_NUMBER")

    fun address(): Address? = address.getNullable("ADDRESS")

    @JsonProperty("FULL_NAME") @ExcludeMissing fun _fullName(): JsonField<String> = fullName

    @JsonProperty("DATE_OF_BIRTH") @ExcludeMissing fun _dateOfBirth(): JsonField<String> = dateOfBirth

    @JsonProperty("NATIONALITY") @ExcludeMissing fun _nationality(): JsonField<String> = nationality

    @JsonProperty("EMAIL") @ExcludeMissing fun _email(): JsonField<String> = email

    @JsonProperty("PHONE_NUMBER") @ExcludeMissing fun _phoneNumber(): JsonField<String> = phoneNumber

    @JsonProperty("ADDRESS") @ExcludeMissing fun _address(): JsonField<Address> = address

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

        private var fullName: JsonField<String> = JsonMissing.of()
        private var dateOfBirth: JsonField<String> = JsonMissing.of()
        private var nationality: JsonField<String> = JsonMissing.of()
        private var email: JsonField<String> = JsonMissing.of()
        private var phoneNumber: JsonField<String> = JsonMissing.of()
        private var address: JsonField<Address> = JsonMissing.of()
        private var additionalProperties: MutableMap<String, JsonValue> = mutableMapOf()

        internal fun from(webhookUserData: WebhookUserData) = apply {
            fullName = webhookUserData.fullName
            dateOfBirth = webhookUserData.dateOfBirth
            nationality = webhookUserData.nationality
            email = webhookUserData.email
            phoneNumber = webhookUserData.phoneNumber
            address = webhookUserData.address
            additionalProperties = webhookUserData.additionalProperties.toMutableMap()
        }

        fun fullName(fullName: String) = fullName(JsonField.of(fullName))

        fun fullName(fullName: JsonField<String>) = apply { this.fullName = fullName }

        fun dateOfBirth(dateOfBirth: String) = dateOfBirth(JsonField.of(dateOfBirth))

        fun dateOfBirth(dateOfBirth: JsonField<String>) = apply { this.dateOfBirth = dateOfBirth }

        fun nationality(nationality: String) = nationality(JsonField.of(nationality))

        fun nationality(nationality: JsonField<String>) = apply { this.nationality = nationality }

        fun email(email: String) = email(JsonField.of(email))

        fun email(email: JsonField<String>) = apply { this.email = email }

        fun phoneNumber(phoneNumber: String) = phoneNumber(JsonField.of(phoneNumber))

        fun phoneNumber(phoneNumber: JsonField<String>) = apply { this.phoneNumber = phoneNumber }

        fun address(address: Address) = address(JsonField.of(address))

        fun address(address: JsonField<Address>) = apply { this.address = address }

        fun putAdditionalProperty(key: String, value: JsonValue) = apply {
            additionalProperties.put(key, value)
        }

        fun putAllAdditionalProperties(additionalProperties: Map<String, JsonValue>) = apply {
            this.additionalProperties.putAll(additionalProperties)
        }

        fun build(): WebhookUserData =
            WebhookUserData(
                fullName,
                dateOfBirth,
                nationality,
                email,
                phoneNumber,
                address,
                additionalProperties,
            )
    }
}
