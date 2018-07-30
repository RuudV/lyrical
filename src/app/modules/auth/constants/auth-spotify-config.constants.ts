import {InjectionToken} from '@angular/core';

export const AUTH_SPOTIFY_CONFIG = new InjectionToken('auth.spotify.config');

export interface AuthSpotifyConfigConstants {
  client_id: string;
  scopes: string[];
  response_type: string;
  redirect_uri: string;
  authorize_uri: string;
  namespace: string;
  show_dialog: boolean;
}

export const AuthSpotifyConfigConstants: AuthSpotifyConfigConstants = {
  client_id: '463a80fa1c9049e7901a5fe1bde8462a',
  response_type: 'token',
  redirect_uri: 'http://localhost:4200/player',
  scopes: ['streaming', 'user-read-birthdate', 'user-read-email', 'user-read-private'],
  show_dialog: true,
  authorize_uri: 'https://accounts.spotify.com/authorize',
  namespace: 'spotify-auth-code'
};
