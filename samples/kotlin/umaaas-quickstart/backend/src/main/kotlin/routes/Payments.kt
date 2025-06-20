package com.lightspark.uma.umaaas.routes

import com.fasterxml.jackson.databind.ObjectMapper
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.UmaaasClientBuilder
import com.lightspark.umaaas.models.quotes.QuoteCreateParams
import com.lightspark.umaaas.models.receiver.ReceiverLookupParams
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receiveText
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route

fun Route.paymentsRoutes() {
    route("/api/payments") {
        get("/lookup") {
            try {
                val receiverUmaAddress = call.request.queryParameters["receiverUmaAddress"]
                val senderUmaAddress = call.request.queryParameters["senderUmaAddress"]
                val userId = call.request.queryParameters["userId"]

                if (receiverUmaAddress == null) {
                    call.respond(
                        HttpStatusCode.BadRequest,
                        mapOf("error" to "receiverUmaAddress parameter is required")
                    )
                    return@get
                }
                println("UMA Lookup params: \n receiver: $receiverUmaAddress" +
                        "\n sender: $senderUmaAddress\n userId: $userId")
                val lookupResponse = UmaaasClientBuilder.client.receiver().lookup(
                    receiverUmaAddress,
                    ReceiverLookupParams.builder()
                        .apply {
                            receiverUmaAddress(receiverUmaAddress)
                            senderUmaAddress?.let { senderUmaAddress(it) }
                            userId?.let { userId(it) }
                        }
                        .build()
                )

                println("Umaaas Response [receiver.lookup]: ${
                    JsonUtils.prettyPrint(lookupResponse)}")
                call.respond(HttpStatusCode.OK, JsonUtils.prettyPrint(lookupResponse))
            } catch (e: Exception) {
                println("Error looking up UMA address: ${e.message}")
                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }

        post("/quote") {
            try {
                val rawBody = call.receiveText()
                println("Quote request: ${JsonUtils.prettyPrint(rawBody)}")
                val objectMapper = ObjectMapper()
                val json = objectMapper.readTree(rawBody)

                // The following is an example of how you would populate create quote params
                // replacing the object sent from the FE with your representing of a transaction
                val quoteCreateParams = QuoteCreateParams.builder()
                    .lookupId(json.get("lookupId").asText())
                    .lockedCurrencyAmount(json.get("lockedCurrencyAmount").asLong())
                    .lockedCurrencySide(
                        json.get("lockedCurrencySide").asText().let { side ->
                            when (side.uppercase()) {
                                "SENDING" -> QuoteCreateParams.LockedCurrencySide.SENDING
                                "RECEIVING" -> QuoteCreateParams.LockedCurrencySide.RECEIVING
                                else -> QuoteCreateParams.LockedCurrencySide.SENDING
                            }
                        }
                    )
                    .receivingCurrencyCode(json.get("receivingCurrencyCode").asText())
                    .sendingCurrencyCode(json.get("sendingCurrencyCode").asText())
                    .description(json.get("description").asText())
                    .build()

                val quote = UmaaasClientBuilder.client.quotes().create(quoteCreateParams)
                val responseJson = JsonUtils.prettyPrint(quote)
                println("Umaaas Response [quotes.create]: $responseJson")
                
                call.respond(HttpStatusCode.OK, responseJson)
            } catch (e: Exception) {
                println("Error creating payment quote: ${e.message}")
                
                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }
    }
}
