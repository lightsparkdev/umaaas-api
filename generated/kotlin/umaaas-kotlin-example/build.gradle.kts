plugins {
    id("umaaas.kotlin")
    application
}

dependencies {
    implementation(project(":umaaas-kotlin"))
}

application {
    mainClass = "com.lightspark.uma.example.MainKt"
}
