
import * as crypto from "crypto";
/**
 * Author: Debadatta Mishra
 */
export class Test {

    private static readonly CRYPTO_ALGORITHM = 'aes-256-cfb8'
    private static readonly DEFAULT_IV: string = "0123456789123456";

    private static readonly country: string = "India";
    // private static readonly projectId: string = "0123456789123456";
    private static readonly projectId: string = "projectId";


    public static readonly secretKey: string = Test.projectId + "~" + Test.country;
    public static readonly tokenToEncrypt: string = "token-token-1-2-3-3";


    public encryptValue(valueToEncrypt: string, secretKey: string): string {
        let encryptedValue: string = '';
        const md5 = crypto.createHash('md5').update(secretKey).digest('hex');
        const key: string = md5;
        const iv = Buffer.from(Test.DEFAULT_IV)
        const cipher = crypto.createCipheriv(Test.CRYPTO_ALGORITHM, key, iv);
        let encrypted = cipher.update(valueToEncrypt, 'utf8', 'base64')
        encrypted += cipher.final('base64');
        encryptedValue = encrypted;
        console.log("Encrypted Value: ", encrypted);
        return encryptedValue;
    }

    public decryptCode(valueToDecrypt: string, secretKey: string): string {
        let decryptedValue: string = '';
        const md5 = crypto.createHash('md5').update(secretKey).digest('hex');
        const key: string = md5;
        const iv = Buffer.from(Test.DEFAULT_IV)
        const decipher = crypto.createDecipheriv(Test.CRYPTO_ALGORITHM, key, iv);
        let decrypted = decipher.update(valueToDecrypt, 'base64')
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        console.log("Decrypted Value: ", decrypted.toString());
        decryptedValue = decrypted.toString();
        return decryptedValue;
    }

}

const test = new Test();
const enc = test.encryptValue(Test.tokenToEncrypt, Test.secretKey);
const dec = test.decryptCode(enc, Test.secretKey)
// test.encryptValue(Test.tokenToEncrypt, Test.secretKey);
// test.decryptCode("uwv+qyozSs+KuPaJls5m2RH4ZQ==", Test.secretKey)
// test.decryptCode("qRzRl3gE2Ej6GYvsNj6WbP5aqA==", Test.secretKey)
