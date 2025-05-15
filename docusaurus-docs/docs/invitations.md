---
sidebar_position: 6
---

# UMA Invitations

UMAaaS provides an invitation system that allows platform users to invite others to create their own UMA addresses. This guide explains how to use the invitation system effectively.
See the full [UMA invitations guide](https://docs.lightspark.com/uma-invitations/introduction) for details outside of the context of UMAaaS.

## Overview

The invitation system enables:

- Platform users to create invitations for others
- Tracking of invitation status (pending, claimed, expired)
- Webhook notifications when invitations are claimed
- Building referral or viral growth programs

## Setup

Before starting your Lightspark UMA invitations integration, you need to register your VASP with Lightspark.
If you are interested in becoming a VASP listed on UMA.ME invitations, please [contact us](mailto:support@lightspark.com).

You will need to provide:

- A name and a logo to be displayed in the invitation page.
- A list of countries you operate UMA in.
- An onboarding URL for people who want to create an account with you (this URL must support UMA.ME invitation codes). Example: `http://myplatform.com/uma?code=INVITATION_CODE`
- A webhook URL to get notified when your invitations get claimed.

## Creating Invitations

To create an invitation, make a POST request to `/invitations` with the inviter's UMA address:

```http
POST /invitations
{
  "inviterUma": "$inviter@uma.domain",
  "expiresAt": "2024-12-31T23:59:59Z"  // Optional
}
```

The response will include a unique invitation code that can be shared with the invitee:

```json
{
  "code": "019542f5",
  "createdAt": "2023-09-01T14:30:00Z",
  "inviterUma": "$inviter@uma.domain",
  "url": "https://uma.me/i/019542f5",
  "status": "PENDING"
}
```

The `url` field is the URL where the invitee can claim the invitation. For example, for the response above, you might want to generate a share message
for the user with text like: "Get an UMA address so that I can send you some money! `https://uma.me/i/019542f5`". The inviter can then share this URL with the invitee.

When the invitee clicks the URL, they will be presented with a list of UMA providers available in their region. The invitee can select one of the providers and onboard to create their UMA address.

## Claiming Invitations

Once onboarding is complete, the invitee's new VASP (which may or may not be the same as the inviter's UMAaaS platform) will need to claim the invitation by making a
POST request to `/invitations/{invitationCode}/claim` including the invitee's newly-created UMA address:

```http
POST /invitations/019542f5/claim
{
  "inviteeUma": "$invitee@uma.domain"
}
```

A successful claim will:

1. Associate the invitee's UMA address with the invitation
2. Change the invitation status from `PENDING` to `CLAIMED`
3. Trigger an `INVITATION_CLAIMED` webhook to notify the inviter's platform of the claim

## Invitation Status

An invitation can be in one of four states:

- `PENDING`: The invitation has been created but not yet claimed
- `CLAIMED`: The invitation has been successfully claimed by an invitee
- `EXPIRED`: The invitation has expired and can no longer be claimed
- `CANCELLED`: The invitation has been cancelled by the inviter or platform

You can check the status of an invitation at any time by making a GET request to `/invitations/{invitationCode}`.

## Cancelling Invitations

To cancel a pending invitation, make a POST request to `/invitations/{invitationCode}/cancel`:

```http
POST /invitations/019542f5/cancel
```

A successful cancellation will:

1. Change the invitation status from `PENDING` to `CANCELLED`
2. Make the invitation URL show as cancelled when accessed
3. Prevent the invitation from being claimed

Only the inviter or platform can cancel an invitation, and only pending invitations can be cancelled. Attempting to cancel an invitation that is already claimed, expired, or cancelled will result in an error.

Example error response for an already claimed invitation:

```json
{
  "code": "invitation_already_claimed",
  "message": "This invitation has already been claimed and cannot be cancelled",
  "details": {
    "status": "CLAIMED",
    "inviteeUma": "$invitee@uma.domain"
  }
}
```

## Webhook Integration

When an invitation is claimed, UMAaaS will send an `INVITATION_CLAIMED` webhook to your configured webhook endpoint. This allows you to:

- Track invitation usage and conversion rates
- Apply referral bonuses or rewards to the inviter
- Update your UI to reflect the claimed status

Example webhook payload:

```json
{
  "invitation": {
    "code": "019542f5",
    "createdAt": "2023-09-01T14:30:00Z",
    "claimedAt": "2023-09-01T15:45:00Z",
    "inviterUma": "$inviter@uma.domain",
    "inviteeUma": "$invitee@uma.domain",
    "url": "https://uma.me/i/019542f5",
    "status": "CLAIMED"
  },
  "timestamp": "2023-09-01T15:45:00Z",
  "webhookId": "Webhook:019542f5-b3e7-1d02-0000-000000000008",
  "type": "INVITATION_CLAIMED"
}
```

See the [Webhooks Guide](./webhooks) for more information about webhook security and implementation.

## Best Practices

1. **Expiration Times**: Consider setting appropriate expiration times for invitations based on your use case
2. **User Experience**: Provide clear feedback to users about invitation status and next steps
3. **Monitoring**: Track invitation metrics to understand user acquisition patterns

## Error Handling

Common error scenarios to handle:

- Invalid invitation code
- Expired invitation
- Already claimed invitation
- Rate limit exceeded
- Missing required fields

Example error response:

```json
{
  "code": "invitation_expired",
  "message": "This invitation has expired and cannot be claimed",
  "details": {
    "expirationTime": "2023-08-31T23:59:59Z"
  }
}
```
