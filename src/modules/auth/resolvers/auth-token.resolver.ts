import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {AuthState, SaveToken} from '../store/auth.store';
import {Observable} from 'rxjs';
import {AuthToken} from '../interfaces/auth-token.interface';

@Injectable()
export class AuthTokenResolver implements Resolve<Observable<AuthToken>> {

  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<AuthToken> {
    const {fragment} = route;

    if (fragment) {
      return this.store.dispatch(new SaveToken(fragment));
    } else {
      return this.store.select(AuthState.token);
    }
  }
}
