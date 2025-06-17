package com.lightspark.uma.umaaas.routes

import com.fasterxml.jackson.databind.ObjectMapper
import com.lightspark.uma.models.sandbox.SandboxSendFundsParams
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

                // Parse JSON manually using Jackson
                val objectMapper = ObjectMapper()
                val sendFundsBody = objectMapper.readValue(rawBody, SandboxSendFundsParams.Body::class.java)

                val sendFundsParams = SandboxSendFundsParams.builder()
                    .body(sendFundsBody)
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
    }
}
