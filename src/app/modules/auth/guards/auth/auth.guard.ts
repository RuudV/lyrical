import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../services';
import {AuthState, SaveAuthenticatedRedirectUrl} from '../../store/auth.store';
import {Store} from '@ngxs/store';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService,
              private router: Router,
              private store: Store) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.store.select(AuthState.token)
      .pipe(
        map((token) => !!token),
        tap((authenticated: boolean) => {
          if (!authenticated) {
            const {url} = state;
            this.store.dispatch(new SaveAuthenticatedRedirectUrl(url))
              .subscribe(() => this.router.navigate(['/auth/login']));
          }
        }));
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(next, state);
  }
}
