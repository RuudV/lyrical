import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyWebService {
  headers = new HttpHeaders();

  constructor(private authService,
              private http: HttpClient) {
    this.headers.set('Authorization', `${this.authService.authToken.token_type} ${this.authService.authToken.access_token}`);
  }

  getPlayContext() {
    return this.http.get('https://api.spotify.com/v1/player', {headers: this.headers});
  }


}
