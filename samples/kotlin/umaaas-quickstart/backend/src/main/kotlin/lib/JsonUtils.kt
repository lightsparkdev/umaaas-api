package com.lightspark.uma.umaaas.lib

import com.lightspark.umaaas.core.jsonMapper

object JsonUtils {
    private val prettyMapper = jsonMapper()

    fun prettyPrint(obj: Any): String {
        return try {
            prettyMapper.writeValueAsString(obj)
        } catch (e: Exception) {
            "Error unable to jsonify: $e"
        }
    }
}
