import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AuthToken} from '../interfaces/auth-token.interface';
import {AuthService} from '../services';

export class Login {
  static readonly type = '[Auth] Login';
}

export class LoginSuccessful {
  static readonly type = '[Auth] Login Successful';
}

export class SaveAuthenticatedRedirectUrl {
  static readonly type = '[Auth] Save Authenticated Redirect Url';

  constructor(public redirectUri: string) {
  }
}

export class ReadAuthenticatedRedirectUrl {
  static readonly type = '[Auth] Read Authenticated Redirect Url';
}

export class RemoveAuthenticatedRedirectUrl {
  static readonly type = '[Auth] Remove Authenticated Redirect Url';
}

export class SaveToken {
  static readonly type = '[Auth] Save token';

  constructor(public fragment: string) {
  }
}

export interface AuthStateModel {
  authenticated: boolean;
  token?: AuthToken;
  authenticatedRedirectUrl?: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    authenticated: false,
    token: null,
    authenticatedRedirectUrl: null
  }
})
export class AuthState {
  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }

  @Selector()
  static authenticated(state: AuthStateModel) {
    return state.authenticated;
  }

  @Selector()
  static authenticatedRedirectUri(state: AuthStateModel) {
    return state.authenticatedRedirectUrl;
  }

  constructor(private authService: AuthService) {
  }

  @Action(Login)
  login({patchState}: StateContext<AuthStateModel>): void {
    patchState({
      authenticated: false,
      token: null
    });

    this.authService.login();
  }

  @Action(ReadAuthenticatedRedirectUrl)
  readAuthenticatedRedirectUrl({patchState}: StateContext<AuthStateModel>) {
    const uri = sessionStorage.getItem('authenticated-redirect-url');
    patchState({
      authenticatedRedirectUrl: uri
    });
  }

  @Action(SaveAuthenticatedRedirectUrl)
  saveAuthenticatedRedirectUrl({patchState, getState}: StateContext<AuthStateModel>, {redirectUri}: SaveAuthenticatedRedirectUrl) {
    sessionStorage.setItem('authenticated-redirect-url', redirectUri);
    patchState({
      authenticatedRedirectUrl: sessionStorage.getItem('authenticated-redirect-uri')
    });
  }

  @Action(RemoveAuthenticatedRedirectUrl)
  removeAuthenticatedRedirectUrl({patchState}: StateContext<AuthStateModel>) {
    sessionStorage.removeItem('authenticated-redirect-url');
    patchState({
      authenticatedRedirectUrl: null
    });
  }

  @Action(SaveToken)
  saveToken({patchState, getState}: StateContext<AuthStateModel>, {fragment}: SaveToken): AuthToken {
    const authToken = this.authService.getAuthTokenFromTokenString(fragment);
    patchState({
      token: authToken
    });

    return getState().token;
  }

  @Action(LoginSuccessful)
  loginSuccessful({patchState}: StateContext<AuthStateModel>) {
    patchState({
      authenticated: true
    });
  }
}
