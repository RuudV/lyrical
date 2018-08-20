import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../modules/auth/guards';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/player'
  },
  {
    path: 'auth',
    loadChildren: '../modules/auth/auth.module#AuthModule'
  },
  {
    path: 'player',
    canActivateChild: [AuthGuard],
    loadChildren: '../modules/player/player.module#PlayerModule'
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
