import {Inject, Injectable} from '@angular/core';
import {AUTH_SPOTIFY_CONFIG, AuthSpotifyConfigConstants} from '../../constants/auth-spotify-config.constants';
import {AuthToken} from '../../interfaces/auth-token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authorizeUri: string;

  constructor(@Inject(AUTH_SPOTIFY_CONFIG) private authSpotifyConstants: AuthSpotifyConfigConstants) {
    this.authorizeUri = this.authSpotifyConstants.authorize_uri +
      `?response_type=${this.authSpotifyConstants.response_type}` +
      `&client_id=${this.authSpotifyConstants.client_id}` +
      `&scope=${encodeURIComponent(this.authSpotifyConstants.scopes.join(' '))}` +
      `&redirect_uri=${encodeURIComponent(this.authSpotifyConstants.redirect_uri)}` +
      `&show_dialog=${this.authSpotifyConstants.show_dialog}`;
  }

  getAuthTokenFromTokenString(tokenString: string): AuthToken {
    const token = {};

    const segments = tokenString.split('&');
    segments.map((val) => {
      const keyValue = val.split('=');
      const values = ['access_token', 'token_type', 'expires_in', 'state'];

      if (values.indexOf(keyValue[0]) > -1) {
        token[keyValue[0]] = keyValue[1];
      }
    });

    return <AuthToken>token;
  }

  login() {
    window.location.href = this.authorizeUri;
  }
}
