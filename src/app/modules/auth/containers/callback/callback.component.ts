import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Actions, ofActionDispatched, Store} from '@ngxs/store';
import {AuthState, LoginSuccessful, ReadAuthenticatedRedirectUrl, RemoveAuthenticatedRedirectUrl} from '../../store/auth.store';
import {switchMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-callback',
  template: `
    <p>Callback uri</p>
  `
})

export class CallbackComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private actions: Actions,
              private store: Store) {
  }

  ngOnInit() {
    let redirectUrl = '/player';
    this.store.dispatch(new ReadAuthenticatedRedirectUrl())
      .pipe(
        switchMap(() => this.store.select(AuthState.authenticatedRedirectUri).pipe(take(1))),
        tap((uri: string) => redirectUrl = uri),
        switchMap(() => this.store.dispatch(new RemoveAuthenticatedRedirectUrl())),
        switchMap(() => this.actions.pipe(ofActionDispatched(LoginSuccessful)))
      )
      .subscribe(() => {
        this.router.navigate([redirectUrl]);
      });


    const {snapshot: {data: routeData}} = this.route;
    if (routeData) {
      this.store.dispatch(new LoginSuccessful());
    }
  }
}
