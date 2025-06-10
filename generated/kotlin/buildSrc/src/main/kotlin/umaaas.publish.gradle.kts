plugins {
    `maven-publish`
    signing
}

configure<PublishingExtension> {
    publications {
        register<MavenPublication>("maven") {
            from(components["java"])

            pom {
                name.set("UMA as a Service (UMAaaS) API")
                description.set("API for managing global payments to and from UMA addresses. This service\nfacilitates cross-currency financial transactions using simple human-readable\nUMA addresses.")
                url.set("https://lightsparkdev.github.io/umaaas-api/")

                licenses {
                    license {
                        name.set("Apache-2.0")
                    }
                }

                developers {
                    developer {
                        name.set("Umaaas")
                        email.set("support@lightspark.com")
                    }
                }

                scm {
                    connection.set("scm:git:git://github.com/stainless-sdks/umaaas-kotlin.git")
                    developerConnection.set("scm:git:git://github.com/stainless-sdks/umaaas-kotlin.git")
                    url.set("https://github.com/stainless-sdks/umaaas-kotlin")
                }

                versionMapping {
                    allVariants {
                        fromResolutionResult()
                    }
                }
            }
        }
    }
}

signing {
    val signingKeyId = System.getenv("GPG_SIGNING_KEY_ID")?.ifBlank { null }
    val signingKey = System.getenv("GPG_SIGNING_KEY")?.ifBlank { null }
    val signingPassword = System.getenv("GPG_SIGNING_PASSWORD")?.ifBlank { null }
    if (signingKey != null && signingPassword != null) {
        useInMemoryPgpKeys(
            signingKeyId,
            signingKey,
            signingPassword,
        )
        sign(publishing.publications["maven"])
    }
}

tasks.named("publish") {
    dependsOn(":closeAndReleaseSonatypeStagingRepository")
}
