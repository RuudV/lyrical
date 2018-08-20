import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {GetCurrentSong, PlayerState} from '../../store/player.store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-song',
  templateUrl: 'song.component.html',
  styleUrls: ['song.component.scss']
})

export class SongComponent implements OnInit {
  @Select(PlayerState.currentSong) track$: Observable<SpotifyApi.TrackObjectFull>;

  constructor(private route: ActivatedRoute,
              private store: Store) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.store.dispatch(new GetCurrentSong(params.trackId)));
  }
}
