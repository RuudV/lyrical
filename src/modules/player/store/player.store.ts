import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SpotifyWebApiService} from '../services/spotify-web-api.service';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';
import PlaylistTrackObject = SpotifyApi.PlaylistTrackObject;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

export class GetTracks {
  static readonly type = '[PLAYER] Get Tracks';
}

export class GetCurrentSong {
  static readonly type = '[PLAYER] Get Current Song';

  constructor(public trackId: string) {
  }
}

export class PlayerStateModel {
  tracks: PlaylistTrackObject[] | null;
  current_song: TrackObjectFull | null;
}

@State<PlayerStateModel>({
  name: 'player',
  defaults: {
    tracks: null,
    current_song: null
  }
})
export class PlayerState {
  constructor(private spotifyWebApiService: SpotifyWebApiService) {
  }

  @Selector()
  static currentSong(state: PlayerStateModel) {
    return state.current_song;
  }

  @Selector()
  static playlistTracks(state: PlayerStateModel) {
    return state.tracks;
  }

  @Action(GetCurrentSong)
  getCurrentSong({patchState, getState}: StateContext<PlayerStateModel>, {trackId}: GetCurrentSong) {
    const state = getState();

    if (state.current_song && state.current_song.id === trackId) {
      return of(state.current_song);
    } else {
      return this.spotifyWebApiService.track(trackId)
        .pipe(
          map((resp: SpotifyApi.TrackObjectFull) => patchState({current_song: resp}))
        );
    }
  }

  @Action(GetTracks)
  getPlaylist({patchState, getState}: StateContext<PlayerStateModel>) {
    const state = getState();

    if (state.tracks) {
      return of(state.tracks);
    } else {
      return this.spotifyWebApiService.playlist()
        .pipe(
          map((resp: SpotifyApi.PlaylistObjectFull) => patchState({tracks: resp.tracks.items}))
        );
    }
  }
}
