
plugins {
    kotlin("jvm") version "2.1.21"
    kotlin("plugin.serialization") version "2.1.21"
    alias(libs.plugins.ktor)
}

// Task to copy environment variables from backend to frontend
tasks.register("copyEnvToFrontend") {
    group = "build"
    description = "Copy environment variables from backend .env to frontend .env"
    
    val backendEnvFile = file(".env")
    val frontendEnvFile = file("../frontend/.env")
    
    // Define which variables to copy
    val variablesToCopy = listOf(
        "VITE_UMAAAS_UMA_DOMAIN",
        "VITE_PUBLIC_CURRENCY", 
        "VITE_PUBLIC_CURRENCY_DECIMALS"
    )
    
    inputs.file(backendEnvFile)
    outputs.file(frontendEnvFile)
    
    doLast {
        if (!backendEnvFile.exists()) {
            println("Backend .env file not found at ${backendEnvFile.absolutePath}")
            return@doLast
        }
        
        // Read backend .env file
        val backendEnvVars = mutableMapOf<String, String>()
        backendEnvFile.readLines().forEach { line ->
            val trimmedLine = line.trim()
            if (trimmedLine.isNotEmpty() && !trimmedLine.startsWith("#") && trimmedLine.contains("=")) {
                val parts = trimmedLine.split("=", limit = 2)
                if (parts.size == 2) {
                    backendEnvVars[parts[0].trim()] = parts[1].trim()
                }
            }
        }
        
        // Read existing frontend .env file if it exists
        val frontendEnvVars = mutableMapOf<String, String>()
        if (frontendEnvFile.exists()) {
            frontendEnvFile.readLines().forEach { line ->
                val trimmedLine = line.trim()
                if (trimmedLine.isNotEmpty() && !trimmedLine.startsWith("#") && trimmedLine.contains("=")) {
                    val parts = trimmedLine.split("=", limit = 2)
                    if (parts.size == 2) {
                        frontendEnvVars[parts[0].trim()] = parts[1].trim()
                    }
                }
            }
        }
        
        // Copy specified variables from backend to frontend
        variablesToCopy.forEach { varName ->
            if (backendEnvVars.containsKey(varName)) {
                frontendEnvVars[varName] = backendEnvVars[varName]!!
                println("Copied $varName = ${backendEnvVars[varName]}")
            } else {
                println("Warning: $varName not found in backend .env file")
            }
        }
        
        // Write updated frontend .env file
        frontendEnvFile.writeText(
            frontendEnvVars.map { (key, value) -> "$key=$value" }.joinToString("\n") + "\n"
        )
        
        println("Environment variables copied to ${frontendEnvFile.absolutePath}")
    }
}

// Frontend build task
tasks.register<Exec>("buildFrontend") {
    dependsOn("copyEnvToFrontend", "npmInstall")
    workingDir = file("../frontend")
    commandLine("npm", "run", "build")
    group = "build"
    description = "Build the frontend React application"
}

tasks.register<Exec>("npmInstall") {
    workingDir = file("../frontend")
    commandLine("npm", "install")
    group = "build"
    description = "Install frontend dependencies"
    
    inputs.file("../frontend/package.json")
    inputs.file("../frontend/package-lock.json")
    outputs.dir("../frontend/node_modules")
}

// Make sure frontend is built before running the application
tasks.named("processResources") {
    dependsOn("buildFrontend")
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
    applicationDefaultJvmArgs = listOf(
        "-Dio.ktor.development=true",
        "-Dio.ktor.autoreload=true"
    )
}

// Enable continuous build for development
tasks.named<JavaExec>("run") {
    standardInput = System.`in`
    // Set working directory to help with file watching
    workingDir = rootDir
    
    // Enable file watching for auto-reload
    systemProperty("io.ktor.development", "true")
    systemProperty("io.ktor.autoreload", "true")
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    implementation(libs.ktor.server.content.negotiation)
    implementation(libs.ktor.server.core)
    implementation(libs.ktor.server.host.common)
    implementation(libs.ktor.server.cors)
    implementation(libs.ktor.server.sse)
    implementation(libs.ktor.server.netty)
    implementation(libs.logback.classic)
    implementation(libs.ktor.server.config.yaml)
    
    // HTTP client for URL rewrites/proxying
    implementation("io.ktor:ktor-client-core:3.1.3")
    implementation("io.ktor:ktor-client-cio:3.1.3")
    implementation("ch.qos.logback:logback-classic:1.5.18")

    // UMAaaS Kotlin client dependencies
    implementation("com.lightspark.uma:umaaas-kotlin-core:0.0.1-alpha.1")
    implementation("com.lightspark.uma:umaaas-kotlin-client-okhttp:0.0.1-alpha.1")

    // Serialization
    implementation("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.17.1")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.17.1")
    implementation("io.ktor:ktor-serialization-kotlinx-json:3.1.3")
    implementation("io.ktor:ktor-serialization-jackson:3.1.3")

    // Environment variables support
    implementation("io.github.cdimascio:dotenv-kotlin:6.4.1")

    // Webhook keys support
    implementation("org.bouncycastle:bcprov-jdk18on:1.78")

    testImplementation(libs.ktor.server.test.host)
    testImplementation(libs.kotlin.test.junit)
}
