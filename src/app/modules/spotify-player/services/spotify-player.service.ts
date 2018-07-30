import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AuthService} from '../../auth/services';
import {Observable} from 'rxjs';
import {Window} from '../interfaces/spotify-player.interface';

declare var Spotify: any;

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlayerService {
  private _player: any;

  constructor(@Inject(DOCUMENT) private document: Document,
              private authService: AuthService) {
  }

  initPlayer(): Observable<any> {
    return new Observable(observer => {
      let player;

      const script = document.createElement('script');
      script.setAttribute('src', 'https://sdk.scdn.co/spotify-player.js');
      document.body.appendChild(script);

      script.onload = (ev: Event) => {

        (<any>window).onSpotifyWebPlaybackSDKReady = () => {
          const token = this.authService.authToken.access_token;
          player = new Spotify.Player({
            name: 'Lyrical',
            getOAuthToken: cb => {
              cb(token);
            }
          });


          observer.next(player);
          observer.complete();
        };
      };
    });
  }
}
