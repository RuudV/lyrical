import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {CallbackComponent} from './containers/callback/callback.component';
import {AuthTokenResolver} from './resolvers/auth-token.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'callback',
    component: CallbackComponent,
    resolve: {
      authToken: AuthTokenResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthTokenResolver]
})
export class AuthRoutingModule {
}
