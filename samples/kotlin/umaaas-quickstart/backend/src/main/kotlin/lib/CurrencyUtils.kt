package com.lightspark.uma.umaaas.lib

import kotlin.math.pow
import kotlin.math.round

object CurrencyUtils {
    /**
     * Convert a decimal amount to the smallest unit (integer) based on currency decimal places
     */
    fun convertToSmallestUnit(amount: String, currencyDecimals: Int): Long {
        val multiplier = 10.0.pow(currencyDecimals)
        return round(amount.toDouble() * multiplier).toLong()
    }
    
    /**
     * Convert from smallest unit back to decimal amount
     */
    fun convertFromSmallestUnit(amount: Long, currencyDecimals: Int): Double {
        val divisor = 10.0.pow(currencyDecimals)
        return amount / divisor
    }
    
    /**
     * Format currency amount with proper decimal places
     */
    fun formatCurrencyAmount(amount: Double, currencyDecimals: Int): String {
        return "%.${currencyDecimals}f".format(amount)
    }
}
