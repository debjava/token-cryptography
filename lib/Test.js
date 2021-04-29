"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const crypto = __importStar(require("crypto"));
/**
 * Author: Debadatta Mishra
 */
class Test {
    encryptValue(valueToEncrypt, secretKey) {
        let encryptedValue = '';
        const md5 = crypto.createHash('md5').update(secretKey).digest('hex');
        const key = md5;
        const iv = Buffer.from(Test.DEFAULT_IV);
        const cipher = crypto.createCipheriv(Test.CRYPTO_ALGORITHM, key, iv);
        let encrypted = cipher.update(valueToEncrypt, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        encryptedValue = encrypted;
        console.log("Encrypted Value: ", encrypted);
        return encryptedValue;
    }
    decryptCode(valueToDecrypt, secretKey) {
        let decryptedValue = '';
        const md5 = crypto.createHash('md5').update(secretKey).digest('hex');
        const key = md5;
        const iv = Buffer.from(Test.DEFAULT_IV);
        const decipher = crypto.createDecipheriv(Test.CRYPTO_ALGORITHM, key, iv);
        let decrypted = decipher.update(valueToDecrypt, 'base64');
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        console.log("Decrypted Value: ", decrypted.toString());
        decryptedValue = decrypted.toString();
        return decryptedValue;
    }
}
exports.Test = Test;
Test.CRYPTO_ALGORITHM = 'aes-256-cfb8';
Test.DEFAULT_IV = "0123456789123456";
Test.country = "India";
// private static readonly projectId: string = "0123456789123456";
Test.projectId = "projectId";
Test.secretKey = Test.projectId + "~" + Test.country;
Test.tokenToEncrypt = "token-token-1-2-3-3";
const test = new Test();
const enc = test.encryptValue(Test.tokenToEncrypt, Test.secretKey);
const dec = test.decryptCode(enc, Test.secretKey);
// test.encryptValue(Test.tokenToEncrypt, Test.secretKey);
// test.decryptCode("uwv+qyozSs+KuPaJls5m2RH4ZQ==", Test.secretKey)
// test.decryptCode("qRzRl3gE2Ej6GYvsNj6WbP5aqA==", Test.secretKey)
