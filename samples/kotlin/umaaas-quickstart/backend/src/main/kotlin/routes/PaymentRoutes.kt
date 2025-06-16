package com.lightspark.uma.umaaas.routes

import com.lightspark.uma.models.receiver.ReceiverLookupParams
import com.lightspark.uma.umaaas.lib.UmaaasClient
import io.ktor.http.HttpStatusCode
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get

fun Route.lookupUmaRoute() {
    get("/api/payments/lookup") {
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

            println("UaaS Client Response [receiver.lookup]: $lookupResponse")
            call.respond(HttpStatusCode.OK, lookupResponse)
        } catch (e: Exception) {
            println("Error looking up UMA address: ${e.message}")
            call.respond(
                HttpStatusCode.BadRequest,
                mapOf("error" to (e.message ?: "An unexpected error occurred"))
            )
        }
    }
}
