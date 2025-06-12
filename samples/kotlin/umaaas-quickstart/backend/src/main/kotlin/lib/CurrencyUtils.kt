package com.lightspark.uma.umaaas.lib

import kotlin.math.pow
import kotlin.math.round

object CurrencyUtils {
    
    /**
     * Get the number of decimal places for a given currency code
     */
    fun getCurrencyDecimals(currencyCode: String): Int {
        val currency = currencyCode.uppercase()
        
        // Common cryptocurrency decimal places
        val cryptoDecimals = mapOf(
            "BTC" to 8,
            "SAT" to 0, // Satoshis (smallest unit of Bitcoin)
            "ETH" to 18,
            "USDC" to 6,
            "USDT" to 6,
            "LTC" to 8,
            "BCH" to 8
        )
        
        // Zero-decimal currencies (amounts in smallest unit)
        val zeroDecimalCurrencies = setOf(
            "BIF", "CLP", "DJF", "GNF", "JPY", "KMF", "KRW", "MGA", "PYG", "RWF", "UGX", "VND", "VUV", "XAF", "XOF", "XPF"
        )
        
        // Three-decimal currencies
        val threeDecimalCurrencies = setOf("BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND")
        
        return when {
            cryptoDecimals.containsKey(currency) -> cryptoDecimals[currency]!!
            zeroDecimalCurrencies.contains(currency) -> 0
            threeDecimalCurrencies.contains(currency) -> 3
            else -> 2 // Default to 2 decimal places for most fiat currencies
        }
    }
    
    /**
     * Convert a decimal amount to the smallest unit (integer) based on currency decimal places
     */
    fun convertToSmallestUnit(amount: String, currencyCode: String): Long {
        val decimals = getCurrencyDecimals(currencyCode)
        val multiplier = 10.0.pow(decimals)
        return round(amount.toDouble() * multiplier).toLong()
    }
    
    /**
     * Convert from smallest unit back to decimal amount
     */
    fun convertFromSmallestUnit(amount: Long, currencyCode: String): Double {
        val decimals = getCurrencyDecimals(currencyCode)
        val divisor = 10.0.pow(decimals)
        return amount / divisor
    }
    
    /**
     * Format currency amount with proper decimal places
     */
    fun formatCurrencyAmount(amount: Double, currencyCode: String): String {
        val decimals = getCurrencyDecimals(currencyCode)
        return "%.${decimals}f".format(amount)
    }
}