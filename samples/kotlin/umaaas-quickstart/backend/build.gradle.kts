plugins {
    kotlin("jvm") version "2.1.21"
    kotlin("plugin.serialization") version "2.1.21"
    alias(libs.plugins.ktor)
    id("com.github.node-gradle.node") version "7.1.0"
}

node {
    version.set("22.15.0")
    download.set(true)
    nodeProjectDir.set(file("../frontend"))
}

val npmBuild by tasks.register<com.github.gradle.node.npm.task.NpmTask>("npmBuild") {
    dependsOn(tasks.named("npmInstall"))
    args.set(listOf("run", "build")) 
}

tasks.named<com.github.gradle.node.npm.task.NpmInstallTask>("npmInstall")

tasks.named("processResources") {
    dependsOn("npmBuild")
}

kotlin {
    jvmToolchain {
        languageVersion.set(JavaLanguageVersion.of(21))
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

    // UMAaaS Kotlin client dependencies
    implementation("com.lightspark.umaaas:umaaas-kotlin:0.1.0-beta.3")

    // JSON helper
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.17.1")

    // .env file support
    implementation("io.github.cdimascio:dotenv-kotlin:6.4.1")

    testImplementation(libs.ktor.server.test.host)
    testImplementation(libs.kotlin.test.junit)
}
