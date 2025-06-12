
plugins {
    kotlin("jvm") version "2.1.21"
    alias(libs.plugins.ktor)
}

kotlin {
    jvmToolchain {
        languageVersion.set(JavaLanguageVersion.of(23))
    }
}

group = "com.lightspark.uma.umaaas"
version = "0.0.1"

application {
    mainClass = "io.ktor.server.netty.EngineMain"
        applicationDefaultJvmArgs = listOf("-Dio.ktor.development=true")
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    implementation(libs.ktor.server.content.negotiation)
    implementation(libs.ktor.server.core)
    implementation(libs.ktor.serialization.gson)
    implementation(libs.ktor.server.host.common)
    implementation(libs.ktor.server.cors)
    implementation(libs.ktor.server.sse)
    implementation(libs.ktor.server.netty)
    implementation(libs.logback.classic)
    implementation(libs.ktor.server.config.yaml)
    
    // UMAaaS Kotlin client dependencies
    implementation("com.lightspark.uma:umaaas-kotlin-core:0.0.1-alpha.0")
    implementation("com.lightspark.uma:umaaas-kotlin-client-okhttp:0.0.1-alpha.0")
    
    testImplementation(libs.ktor.server.test.host)
    testImplementation(libs.kotlin.test.junit)
}
