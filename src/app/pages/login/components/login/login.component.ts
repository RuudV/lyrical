import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../modules/auth/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authorizationUri: string;

  constructor(private authService: AuthService) {
    this.authorizationUri = this.authService.authorizeUri;
  }

  ngOnInit() {
  }

}
