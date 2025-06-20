package com.lightspark.uma.umaaas.routes

import com.fasterxml.jackson.databind.ObjectMapper
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.UmaaasClientBuilder
import com.lightspark.umaaas.models.sandbox.SandboxReceivePaymentParams
import com.lightspark.umaaas.models.sandbox.SandboxSendFundsParams
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
                val objectMapper = ObjectMapper()
                val json = objectMapper.readTree(rawBody)

                // The following is an example of how you would populate create sandbox params
                // replacing the object sent from the FE with your own values
                val sendFundsParams = SandboxSendFundsParams.builder()
                    .currencyAmount(json.get("currencyAmount").asLong())
                    .currencyCode(json.get("currencyCode").asText())
                    .reference(json.get("reference").asText())
                    .build()

                val response = UmaaasClientBuilder.client.sandbox().sendFunds(sendFundsParams)
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
                val objectMapper = ObjectMapper()
                val json = objectMapper.readTree(rawBody)

                val receivePaymentParams = SandboxReceivePaymentParams.builder()
                    .userId(json.get("userId").asText())
                    .receivingCurrencyAmount(json.get("receivingCurrencyAmount").asLong())
                    .receivingCurrencyCode(json.get("receivingCurrencyCode").asText())
                    .senderUmaAddress(json.get("senderUmaAddress").asText())
                    .build()

                val response = UmaaasClientBuilder.client.sandbox().receivePayment(receivePaymentParams)
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
