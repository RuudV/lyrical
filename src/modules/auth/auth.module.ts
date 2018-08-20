import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AUTH_SPOTIFY_CONFIG, AuthSpotifyConfigConstants} from './constants/auth-spotify-config.constants';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './store/auth.store';
import {LoginComponent} from './containers/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {CallbackComponent} from './containers/callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthState]),
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    CallbackComponent
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
