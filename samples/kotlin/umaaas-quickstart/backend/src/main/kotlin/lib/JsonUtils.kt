package com.lightspark.uma.umaaas.lib

import com.fasterxml.jackson.annotation.JsonAutoDetect
import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.PropertyAccessor
import com.fasterxml.jackson.databind.MapperFeature
import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

object JsonUtils {
    private val prettyMapper = jacksonObjectMapper()
        .registerModule(JavaTimeModule())          // add support
        .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
        .enable(SerializationFeature.INDENT_OUTPUT)
        .setSerializationInclusion(JsonInclude.Include.NON_NULL)
        .disable(
            MapperFeature.AUTO_DETECT_FIELDS,
            MapperFeature.AUTO_DETECT_GETTERS,
            MapperFeature.AUTO_DETECT_IS_GETTERS,
            MapperFeature.AUTO_DETECT_SETTERS
        )
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
            "Error unable to jsonify"
        }
    }
}
