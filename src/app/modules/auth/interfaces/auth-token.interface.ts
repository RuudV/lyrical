export interface AuthToken {
  access_token: string;
  token_type: string;
  expires_in: string;
  state?: string;
}
