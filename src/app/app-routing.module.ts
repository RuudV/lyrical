import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './modules/auth/guards';
import {TokenFragmentResolver} from './modules/auth/resolvers/token-fragment.resolver';

const appRoutes: Routes = [
  {
    path: '',
    resolve: {
      authToken: TokenFragmentResolver
    },
    pathMatch: 'full',
    redirectTo: '/player'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'player',
    resolve: {
      authToken: TokenFragmentResolver
    },
    canActivateChild: [AuthGuard],
    loadChildren: './pages/player/player.module#PlayerModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
