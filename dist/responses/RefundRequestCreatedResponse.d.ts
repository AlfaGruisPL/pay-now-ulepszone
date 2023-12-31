import { RefundCreatedStatus } from '../enums';
/**
 * Refund created response
 *
 * @export
 * @interface RefundCreatedResponse
 */
export interface RefundCreatedResponse {
    /**
     * Unique ID of a refund generated by Paynow
     *
     * @type {string}
     * @memberof RefundCreatedResponse
     */
    refundId: string;
    /**
     * Current status of the refund
     *
     * @type {RefundCreatedStatus}
     * @memberof RefundCreatedResponse
     */
    status: RefundCreatedStatus;
}
//# sourceMappingURL=RefundRequestCreatedResponse.d.ts.map