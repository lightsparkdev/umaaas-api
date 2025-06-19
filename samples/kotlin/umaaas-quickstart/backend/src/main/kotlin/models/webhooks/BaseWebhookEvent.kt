package models.webhooks

abstract class BaseWebhookEvent {
    abstract fun timestamp(): String
    abstract fun webhookId(): String
    abstract fun type(): WebhookType

    enum class WebhookType(val value: String) {
        INCOMING_PAYMENT("INCOMING_PAYMENT"),
        OUTGOING_PAYMENT("OUTGOING_PAYMENT"),
        TEST("TEST"),
        BULK_UPLOAD("BULK_UPLOAD"),
        INVITATION_CLAIMED("INVITATION_CLAIMED")
    }
}
