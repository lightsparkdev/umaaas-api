package com.lightspark.uma.umaaas

import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlin.test.Test
import kotlin.test.assertEquals

class ApplicationTest {

    @Test
    fun testRoot() = testApplication {
        System.setProperty("UMAAAS_CLIENT_ID", "test-client-id")
        System.setProperty("UMAAAS_CLIENT_SECRET", "test-client-secret")
        System.setProperty("UMAAAS_WEBHOOK_PUBLIC_KEY", "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAENADFETzQx+0RaBnqGJo3vZCaTbRP\nenuKi0pJBMcPLtHwtj7nAWhDnEjAM7fhZlqhM9QroeoXAqgsEzImtPEylA==\n-----END PUBLIC KEY-----\n")
        System.setProperty("UMAAAS_FORWARD_DOMAIN", "https://forward-domain.com")

        application {
            module()
        }
        client.get("/").apply {
            assertEquals(HttpStatusCode.OK, status)
        }
    }

}
