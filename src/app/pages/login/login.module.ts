import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './components';

@NgModule({
  imports: [LoginRoutingModule],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule {
}
