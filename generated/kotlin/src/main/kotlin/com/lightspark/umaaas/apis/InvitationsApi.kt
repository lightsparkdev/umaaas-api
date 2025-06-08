package com.lightspark.umaaas.apis

import com.lightspark.umaaas.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Response
import okhttp3.RequestBody
import com.fasterxml.jackson.annotation.JsonProperty

import com.lightspark.umaaas.models.ClaimInvitationRequest
import com.lightspark.umaaas.models.CreateInvitationRequest
import com.lightspark.umaaas.models.Error
import com.lightspark.umaaas.models.UmaInvitation

interface InvitationsApi {
    /**
     * POST invitations/{invitationCode}/cancel
     * Cancel an UMA invitation
     * Cancel a pending UMA invitation. Only the inviter or platform can cancel an invitation.  When an invitation is cancelled: 1. The invitation status changes from PENDING to CANCELLED 2. The invitation can no longer be claimed 3. The invitation URL will show as cancelled when accessed  Only pending invitations can be cancelled. Attempting to cancel an invitation that is already claimed, expired, or cancelled will result in an error. 
     * Responses:
     *  - 200: Invitation cancelled successfully
     *  - 400: Bad request - Invitation cannot be cancelled (already claimed, expired, or cancelled)
     *  - 401: Unauthorized
     *  - 403: Forbidden - Only the platform which created the invitation can cancel it
     *  - 404: Invitation not found
     *
     * @param invitationCode The code of the invitation to cancel
     * @return [UmaInvitation]
     */
    @POST("invitations/{invitationCode}/cancel")
    suspend fun cancelInvitation(@Path("invitationCode") invitationCode: kotlin.String): Response<UmaInvitation>

    /**
     * POST invitations/{invitationCode}/claim
     * Claim an UMA invitation
     * Claim an UMA invitation by associating it with an invitee UMA address.  When an invitation is successfully claimed: 1. The invitation status changes from PENDING to CLAIMED 2. The invitee UMA address is associated with the invitation 3. An INVITATION_CLAIMED webhook is triggered to notify the platform that created the invitation  This endpoint allows users to accept invitations sent to them by other UMA users. 
     * Responses:
     *  - 200: Invitation claimed successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *  - 404: Invitation not found
     *
     * @param invitationCode The code of the invitation to claim
     * @param claimInvitationRequest 
     * @return [UmaInvitation]
     */
    @POST("invitations/{invitationCode}/claim")
    suspend fun claimInvitation(@Path("invitationCode") invitationCode: kotlin.String, @Body claimInvitationRequest: ClaimInvitationRequest): Response<UmaInvitation>

    /**
     * POST invitations
     * Create an UMA invitation from a given platform user.
     * Create an UMA invitation from a given platform user. 
     * Responses:
     *  - 201: Invitation created successfully
     *  - 400: Bad request
     *  - 401: Unauthorized
     *
     * @param createInvitationRequest 
     * @return [UmaInvitation]
     */
    @POST("invitations")
    suspend fun createInvitation(@Body createInvitationRequest: CreateInvitationRequest): Response<UmaInvitation>

    /**
     * GET invitations/{invitationCode}
     * Get a specific UMA invitation by code.
     * Get a specific UMA invitation by code. 
     * Responses:
     *  - 200: Invitation retrieved successfully
     *  - 401: Unauthorized
     *  - 404: Invitation not found
     *
     * @param invitationCode The code of the invitation to get
     * @return [UmaInvitation]
     */
    @GET("invitations/{invitationCode}")
    suspend fun getInvitation(@Path("invitationCode") invitationCode: kotlin.String): Response<UmaInvitation>

}
