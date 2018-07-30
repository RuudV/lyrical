import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const {fragment} = next;
    if (fragment) {
      this.authService.setAuthToken(fragment);
      this.router.navigateByUrl(state.url.split('#')[0])
        .then(() => console.log('[AUTH GUARD] - Access Token from hash fragment redirect to url without fragment'));
    }

    if (!this.authService.authToken) {
      this.router.navigateByUrl('/login')
        .then(() => console.log('[AUTH GUARD] - No Access Token redirect to /login'));
    }

    return !!this.authService.authToken;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }
}
