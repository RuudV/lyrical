import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Login} from '../../store/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) {
  }

  login() {
    this.store.dispatch(new Login());
  }

  ngOnInit() {
  }

}
