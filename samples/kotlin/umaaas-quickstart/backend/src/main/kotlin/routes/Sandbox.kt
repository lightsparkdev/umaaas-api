package com.lightspark.uma.umaaas.routes

import com.fasterxml.jackson.databind.ObjectMapper
import com.lightspark.uma.models.sandbox.SandboxSendFundsParams
import com.lightspark.uma.models.sandbox.SandboxReceivePaymentParams
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.UmaaasClient
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receiveText
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.post
import io.ktor.server.routing.route

fun Route.sandboxRoutes() {
    route("/api/sandbox") {
        post("/send") {
            try {
                val rawBody = call.receiveText()
                println("Sandbox send request: ${JsonUtils.prettyPrint(rawBody)}")

                // Parse JSON manually using Jackson to build params explicitly
                val objectMapper = ObjectMapper()
                val json = objectMapper.readTree(rawBody)
                
                // Build SandboxSendFundsParams using explicit field setting from JSON
                val sendFundsParams = SandboxSendFundsParams.builder()
                    .currencyAmount(json.get("currencyAmount")?.asLong() ?: 0L)
                    .currencyCode(json.get("currencyCode")?.asText() ?: "")
                    .reference(json.get("reference")?.asText() ?: "")
                    .build()

                val response = UmaaasClient.client.sandbox().sendFunds(sendFundsParams)
                val responseJson = JsonUtils.prettyPrint(response)
                println("Umaaas Client Response [sandbox.sendFunds]: $responseJson")
                
                call.respond(HttpStatusCode.OK, responseJson)
            } catch (e: Exception) {
                println("Error sending sandbox funds: ${e.message}")
                
                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }

        post("/receive") {
            try {
                val rawBody = call.receiveText()
                println("Sandbox receive request: ${JsonUtils.prettyPrint(rawBody)}")

                // Parse JSON manually using Jackson
                val objectMapper = ObjectMapper()
                val json = objectMapper.readTree(rawBody)

                // Build SandboxReceivePaymentParams using explicit field setting from JSON
                val receivePaymentParams = SandboxReceivePaymentParams.builder()
                    .userId(json.get("userId")?.asText() ?: "")
                    .receivingCurrencyAmount(json.get("receivingCurrencyAmount")?.asLong() ?: 0L)
                    .receivingCurrencyCode(json.get("receivingCurrencyCode")?.asText() ?: "")
                    .senderUmaAddress(json.get("senderUmaAddress")?.asText() ?: "")
                    .build()

                val response = UmaaasClient.client.sandbox().receivePayment(receivePaymentParams)
                val responseJson = JsonUtils.prettyPrint(response)
                println("Umaaas Client Response [sandbox.receivePayment]: $responseJson")
                
                call.respond(HttpStatusCode.OK, responseJson)
            } catch (e: Exception) {
                println("Error in /api/sandbox/receive POST handler: ${e.message}")
                
                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }
    }
}
