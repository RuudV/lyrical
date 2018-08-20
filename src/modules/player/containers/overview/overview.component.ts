///<reference path="../../../../../node_modules/@types/spotify-api/index.d.ts"/>

import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetTracks, PlayerState} from '../../store/player.store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Select(PlayerState.playlistTracks) tracks$: Observable<SpotifyApi.PlaylistTrackObject[]>;

  constructor(private store: Store) {
  }


  ngOnInit() {
    this.store.dispatch(new GetTracks());
  }

}
