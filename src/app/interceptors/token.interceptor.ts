import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {AuthToken} from '../../modules/auth/interfaces/auth-token.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {token_type, access_token} = this.store.selectSnapshot<AuthToken>((state) => state.auth.token);
    const modified = req.clone({setHeaders: {'Authorization': `${token_type} ${access_token}`}});
    return next.handle(modified);
  }
}
