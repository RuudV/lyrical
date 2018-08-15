export interface AuthToken {
  access_token: string; // Token String
  token_type: string; // Token Type (Usually 'Bearer'
  expires_in: string; // Expiry time in seconds
  state?: string; // State to check possible intervention
}
