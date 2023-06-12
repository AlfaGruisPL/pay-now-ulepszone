import { PayNowOptions } from './PayNowOptions';
import { Payment } from '../payment';
import { PaymentCreatedResponse, PaymentStatusResponse } from '../responses';
import { RefundReason } from '../enums';
import { RefundCreatedResponse } from '../responses/RefundRequestCreatedResponse';
import { RefundStatusResponse } from '../responses/RefundStatusResponse';
/**
 * Creates a paynow instance
 *
 * @export
 * @class PayNow
 */
export declare class PayNow {
    private apiKey;
    private signatureKey;
    private baseUrl;
    private client;
    private options;
    /**
     * Creates an instance of PayNow.
     * @param {string} apiKey - API Key from panel
     * @param {string} signatureKey - Signature Key from panel
     * @param {PayNowOptions} [options={ sandbox: false }] - options
     * @memberof PayNow
     */
    constructor(apiKey: string, signatureKey: string, options?: PayNowOptions);
    /**
     * Create a payment
     *
     * @param {Payment} payment - payment details
     * @returns {Promise<PaymentCreatedResponse>}
     * @throws {PayNowError}
     * @memberof PayNow
     */
    createPayment(payment: Payment): Promise<PaymentCreatedResponse>;
    /**
     * Retrieves payment status after the payment request has been submitted
     *
     * @param {string} paymentId - Unique ID of a payment generated by Paynow
     * @returns {Promise<PaymentStatusResponse>}
     * @throws {PayNowError}
     * @memberof PayNow
     */
    paymentStatus(paymentId: string): Promise<PaymentStatusResponse>;
    /**
     * Create refund request
     *
     * @param {string} paymentId - payment id from paynow
     * @param {number} amount - amount to refund
     * @param {RefundReason} reason - reason for refund
     * @returns {Promise<RefundCreatedResponse>}
     * @memberof PayNow
     */
    createRefundRequest(paymentId: string, amount: number, reason: RefundReason): Promise<RefundCreatedResponse>;
    /**
     * Check refund status of an refund request
     *
     * @param {string} refundId - id for refund
     * @returns {Promise<RefundStatusResponse>}
     * @memberof PayNow
     */
    refundStatus(refundId: string): Promise<RefundStatusResponse>;
    /**
     * Calculate signature
     *
     * @param {string|object} data - data for calculate signature
     * @returns {string}
     * @memberof PayNow
     */
    calculateSignature(data: string | unknown): string;
}
//# sourceMappingURL=PayNow.d.ts.map