package com.lightspark.uma.umaaas.routes

import com.lightspark.uma.models.transactions.TransactionListParams
import com.lightspark.uma.models.transactions.TransactionStatus
import com.lightspark.uma.models.transactions.TransactionType
import com.lightspark.uma.umaaas.lib.JsonUtils
import com.lightspark.uma.umaaas.lib.UmaaasClient
import io.ktor.http.HttpStatusCode
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.route
import java.time.OffsetDateTime

fun Route.transactionRoutes() {
    route("/api/transactions") {
        get {
            try {
                val queryParams = call.request.queryParameters
                println("Transaction list query params: $queryParams")
                // Build query parameters from request
                val transactionListParams = TransactionListParams.builder().apply {
                    queryParams["cursor"]?.let { cursor(it) }
                    queryParams["limit"]?.toIntOrNull()?.let { limit(it.toLong()) }
                    queryParams["userId"]?.let { userId(it) }
                    queryParams["platformUserId"]?.let { platformUserId(it) }
                    queryParams["umaAddress"]?.let { umaAddress(it) }
                    queryParams["senderUmaAddress"]?.let { senderUmaAddress(it) }
                    queryParams["receiverUmaAddress"]?.let { receiverUmaAddress(it) }
                    queryParams["startDate"]?.let { startDate(OffsetDateTime.parse(it)) }
                    queryParams["endDate"]?.let { endDate(OffsetDateTime.parse(it)) }
                    queryParams["status"]?.let { status(TransactionStatus.of(it)) }
                    queryParams["type"]?.let { type(TransactionType.of(it)) }
                    queryParams["sortOrder"]?.let {
                        sortOrder(
                            when (it.lowercase()) {
                                "asc" -> TransactionListParams.SortOrder.ASC
                                "desc" -> TransactionListParams.SortOrder.DESC
                                else -> TransactionListParams.SortOrder.DESC
                            }
                        )
                    }
                }.build()

                val transactions = UmaaasClient.client.transactions().list(transactionListParams)
                val responseJson = JsonUtils.prettyPrint(transactions.data())
                println("Umaaas Client Response [transactions.list]: $responseJson")
                
                call.respond(HttpStatusCode.OK, responseJson)
            } catch (e: Exception) {
                println("Error fetching transactions: ${e.message}")
                
                call.respond(
                    HttpStatusCode.BadRequest,
                    mapOf("error" to (e.message ?: "An unexpected error occurred"))
                )
            }
        }
    }
}
