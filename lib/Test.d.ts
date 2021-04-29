/**
 * Author: Debadatta Mishra
 */
export declare class Test {
    private static readonly CRYPTO_ALGORITHM;
    private static readonly DEFAULT_IV;
    private static readonly country;
    private static readonly projectId;
    static readonly secretKey: string;
    static readonly tokenToEncrypt: string;
    encryptValue(valueToEncrypt: string, secretKey: string): string;
    decryptCode(valueToDecrypt: string, secretKey: string): string;
}
