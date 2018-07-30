import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services';
import {AuthToken} from '../interfaces/auth-token.interface';

@Injectable()
export class TokenFragmentResolver implements Resolve<AuthToken> {

  constructor(private authService: AuthService) {
  }

  resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): AuthToken {
    const {fragment} = route;

    if (fragment) {
      this.authService.setAuthToken(fragment);
    }

    return this.authService.authToken;
  }
}
