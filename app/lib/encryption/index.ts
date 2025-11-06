/**
 * Encryption utilities for secure data transmission
 */

import { TextEncoder, TextDecoder } from 'util';

// In a production environment, this would be stored in environment variables
// and not exposed in the client-side code
const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'default-dev-key-replace-in-production';

/**
 * Encrypts data using AES-GCM encryption
 * @param data - The data to encrypt
 * @returns Promise with the encrypted data as base64 string
 */
export async function encryptData(data: any): Promise<string> {
  try {
    // Convert the encryption key to a CryptoKey
    const encoder = new TextEncoder();
    const keyData = encoder.encode(ENCRYPTION_KEY);
    
    // Hash the key to get a proper length key for AES
    const hash = await crypto.subtle.digest('SHA-256', keyData);
    
    // Import the key
    const key = await crypto.subtle.importKey(
      'raw',
      hash,
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    );
    
    // Generate an initialization vector (IV)
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    // Encrypt the data
    const dataToEncrypt = encoder.encode(JSON.stringify(data));
    const encryptedData = await crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv
      },
      key,
      dataToEncrypt
    );
    
    // Combine the IV and encrypted data
    const result = new Uint8Array(iv.length + new Uint8Array(encryptedData).length);
    result.set(iv);
    result.set(new Uint8Array(encryptedData), iv.length);
    
    // Convert to base64 for transmission
    return btoa(String.fromCharCode(...result));
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

/**
 * Decrypts data encrypted with encryptData
 * @param encryptedData - Base64 encoded encrypted data
 * @returns Promise with the decrypted data
 */
export async function decryptData(encryptedData: string): Promise<any> {
  try {
    // Convert base64 to array buffer
    const encryptedBytes = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0));
    
    // Extract the IV
    const iv = encryptedBytes.slice(0, 12);
    const data = encryptedBytes.slice(12);
    
    // Create the key
    const encoder = new TextEncoder();
    const keyData = encoder.encode(ENCRYPTION_KEY);
    
    // Hash the key
    const hash = await crypto.subtle.digest('SHA-256', keyData);
    
    // Import the key
    const key = await crypto.subtle.importKey(
      'raw',
      hash,
      { name: 'AES-GCM' },
      false,
      ['decrypt']
    );
    
    // Decrypt the data
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv
      },
      key,
      data
    );
    
    // Convert the decrypted data back to a string
    const decoder = new TextDecoder();
    const decodedData = decoder.decode(decryptedData);
    
    // Parse and return the JSON data
    return JSON.parse(decodedData);
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
} 