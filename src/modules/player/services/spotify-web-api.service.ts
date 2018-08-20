///<reference path="../../../../node_modules/@types/spotify-api/index.d.ts"/>
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PLAYER_PLAYLIST, PlayerPlaylistConstants} from '../constants/playlist.constants';

@Injectable()
export class SpotifyWebApiService {

  constructor(private http: HttpClient,
              @Inject(PLAYER_PLAYLIST) private playerConstants: PlayerPlaylistConstants) {
  }

  userInfo(): Observable<SpotifyApi.UserProfileResponse> {
    return <Observable<SpotifyApi.UserProfileResponse>>this.http.get('https://api.spotify.com/v1/me');
  }

  playlist(): Observable<SpotifyApi.PlaylistBaseObject> {
    /*  tslint:disable:max-line-length */
    return <Observable<SpotifyApi.PlaylistBaseObject>>this.http.get(`https://api.spotify.com/v1/users/${this.playerConstants.userId}/playlists/${this.playerConstants.playlistId}`);
  }

  track(trackId: string): Observable<SpotifyApi.TrackObjectFull> {
    return <Observable<SpotifyApi.TrackObjectFull>>this.http.get(`https://api.spotify.com/v1/tracks/${trackId}`);
  }
}
