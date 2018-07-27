import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../../modules/auth/services';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  userProfile;

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  ngOnInit() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${this.authService.authToken.token_type} ${this.authService.authToken.access_token}`);
    this.http.get('https://api.spotify.com/v1/me', {headers: headers})
      .subscribe(response => {
        this.userProfile = response;
      });
  }

}
