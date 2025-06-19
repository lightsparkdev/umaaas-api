package com.lightspark.uma.umaaas.routes

import com.fasterxml.jackson.databind.ObjectMapper
import com.lightspark.uma.models.receiver.ReceiverLookupParams
import com.lightspark.uma.models.quotes.QuoteCreateParams
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.UmaaasClient
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
                val lookupResponse = UmaaasClient.client.receiver().lookup(
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
                
                // Build QuoteCreateParams using explicit field setting from JSON
                val quoteCreateParams = QuoteCreateParams.builder()
                    .lookupId(json.get("lookupId").asText())

                    .lockedCurrencyAmount(json.get("lockedCurrencyAmount")?.asLong() ?: 0L)
                    .lockedCurrencySide(
                        json.get("lockedCurrencySide")?.asText()?.let { side ->
                            when (side.uppercase()) {
                                "SENDING" -> QuoteCreateParams.LockedCurrencySide.SENDING
                                "RECEIVING" -> QuoteCreateParams.LockedCurrencySide.RECEIVING
                                else -> QuoteCreateParams.LockedCurrencySide.SENDING
                            }
                        } ?: QuoteCreateParams.LockedCurrencySide.SENDING
                    )
                    .receivingCurrencyCode(json.get("receivingCurrencyCode")?.asText() ?: "")
                    .sendingCurrencyCode(json.get("sendingCurrencyCode")?.asText() ?: "")
                    .apply {
                        json.get("description")?.asText()?.let { description(it) }
                    }
                    .build()

                val quote = UmaaasClient.client.quotes().create(quoteCreateParams)
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
