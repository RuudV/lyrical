import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../../modules/auth/services';
import {SpotifyPlayerService} from '../../../../modules/spotify-player/services/spotify-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  userProfile;
  player;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private spotifyPlayerService: SpotifyPlayerService) {
  }

  ngOnInit() {
    // this.spotifyPlayerService.initPlayer()
    //   .pipe(take(1))
    //   .subscribe(player => {
    //     this.player = player;
    //
    //     this.player.connect();
    //   });


    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `${this.authService.authToken.token_type} ${this.authService.authToken.access_token}`);
    // this.http.get('https://api.spotify.com/v1/me', {headers: headers})
    //   .subscribe(response => {
    //     this.userProfile = response;
    //   });
  }

}
