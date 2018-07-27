import {Inject, Injectable} from '@angular/core';
import {AUTH_SPOTIFY_CONFIG, AuthSpotifyConfigConstants} from '../../constants/auth-spotify-config.constants';
import {AuthToken} from '../../interfaces/auth-token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get authToken(): AuthToken {
    return this._authToken;
  }

  set authToken(value: AuthToken) {
    if (value) {
      this._authToken = value;
      sessionStorage.setItem(this.authSpotifyConstants.namespace, JSON.stringify(this.authToken));
    } else {
      this._authToken = undefined;
      sessionStorage.removeItem(this.authSpotifyConstants.namespace);
    }
  }

  private _authToken: AuthToken;

  readonly authorizeUri: string;

  constructor(@Inject(AUTH_SPOTIFY_CONFIG) private authSpotifyConstants: AuthSpotifyConfigConstants) {
    this.authorizeUri = this.authSpotifyConstants.authorize_uri +
      `?response_type=${this.authSpotifyConstants.response_type}` +
      `&client_id=${this.authSpotifyConstants.client_id}` +
      `&scope=${encodeURIComponent(this.authSpotifyConstants.scopes.join(' '))}` +
      `&redirect_uri=${encodeURIComponent(this.authSpotifyConstants.redirect_uri)}` +
      `&show_dialog=${this.authSpotifyConstants.show_dialog}`;

    const localToken = sessionStorage.getItem(this.authSpotifyConstants.namespace);
    this.authToken = !localToken ? JSON.parse(localToken) : this.authToken;
  }

  setAuthToken(tokenString: string) {
    const token = {};

    const segments = tokenString.split('&');
    segments.map((val) => {
      const keyValue = val.split('=');
      const values = ['access_token', 'token_type', 'expires_in', 'state'];

      if (values.indexOf(keyValue[0]) > -1) {
        token[keyValue[0]] = keyValue[1];
      }
    });

    console.log(token);

    this.authToken = <AuthToken>token;
  }
}
