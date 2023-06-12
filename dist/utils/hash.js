"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHmac = exports.jsonStringify = void 0;
const crypto_1 = __importDefault(require("crypto"));
/**
 * Stringify an object with 4 spaces
 *
 * @export
 * @param {object} obj
 * @returns
 */
function jsonStringify(obj) {
    return JSON.stringify(obj, null);
}
exports.jsonStringify = jsonStringify;
/**
 * Calculate HMAC
 *
 * @export
 * @param {string} key
 * @param {string} data
 * @returns {string}
 */
function calculateHmac(key, data) {
    return crypto_1.default.createHmac('sha256', key).update(data, 'utf8').digest('base64');
}
exports.calculateHmac = calculateHmac;
//# sourceMappingURL=hash.js.map