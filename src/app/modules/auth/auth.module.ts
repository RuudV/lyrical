import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AUTH_SPOTIFY_CONFIG, AuthSpotifyConfigConstants} from './constants/auth-spotify-config.constants';
import {TokenFragmentResolver} from './resolvers/token-fragment.resolver';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TokenFragmentResolver
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {provide: AUTH_SPOTIFY_CONFIG, useValue: AuthSpotifyConfigConstants}
      ]
    };
  }
}
