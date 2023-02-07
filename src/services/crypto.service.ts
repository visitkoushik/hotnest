import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
// import * as crypto from 'crypto';

@Injectable()
export class CryptoService {
  encryptAES(data: string, secret: string): string {
    // const key = crypto.randomBytes(64);
    // const iv = crypto.randomBytes(32);
    // const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
    // let encrypted = cipher.update(data, 'utf8', 'hex');
    // encrypted += cipher.final('hex');
    const encrypted = CryptoJS.AES.encrypt(data, secret);
    return encrypted;
  }

  decryptAES(encrypted: string, secret: string): string {
    // const key = crypto.randomBytes(32);
    // const iv = crypto.randomBytes(16);
    // const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
    // let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    // decrypted += decipher.final('utf8');
    let decrypted = CryptoJS.AES.decrypt(encrypted, secret);
    decrypted = this.hexConvert(decrypted);
    return decrypted;
  }

  hexConvert(hex: string | number): string {
    const hexStr: string = hex.toString(); //force conversion
    let str = '';
    for (let i = 0; i < hexStr.length; i += 2)
      str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
    return str;
  }
}
