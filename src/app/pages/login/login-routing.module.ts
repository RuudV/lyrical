import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components';

const authRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      authRoutes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {
}
