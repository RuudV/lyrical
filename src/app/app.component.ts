import {Component, OnInit} from '@angular/core';
import {AuthService} from './modules/auth/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public authorizationUri: string;

  constructor(private authService: AuthService,
              private router: Router) {
    this.authorizationUri = this.authService.authorizeUri;
  }

  ngOnInit() {
    if (this.authService.authToken) {
      this.router.navigateByUrl('/player')
        .then(() => console.log('[APP COMPONENT] - User already authenticated, successfully redirected to /player'));
    }
  }
}
