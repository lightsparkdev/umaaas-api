package com.lightspark.uma.umaaas.lib

import com.lightspark.uma.core.jsonMapper

object JsonUtils {
    private val prettyMapper = jsonMapper()

    fun prettyPrint(json: String): String {
        return try {
            val jsonNode = prettyMapper.readTree(json)
            prettyMapper.writeValueAsString(jsonNode)
        } catch (e: Exception) {
            json // Return original if parsing fails
        }
    }

    fun prettyPrint(obj: Any): String {
        return try {
            prettyMapper.writeValueAsString(obj)
        } catch (e: Exception) {
            "Error unable to jsonify: $e"
        }
    }
}
