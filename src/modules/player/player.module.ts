import {NgModule} from '@angular/core';
import {OverviewComponent} from './containers/overview/overview.component';
import {NgxsModule} from '@ngxs/store';
import {CommonModule} from '@angular/common';
import {PlayerRoutingModule} from './player-routing.module';
import {PlayerComponent} from './containers/player/player.component';
import {SpotifyWebApiService} from './services/spotify-web-api.service';
import {PLAYER_PLAYLIST, PlayerPlaylistConstants} from './constants/playlist.constants';
import {PlayerState} from './store/player.store';
import {SrcSetPipe} from './pipes/src-set.pipe';
import {SongComponent} from './containers/song/song.component';


@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    NgxsModule.forFeature([
      PlayerState
    ])
  ],
  declarations: [OverviewComponent, PlayerComponent, SongComponent, SrcSetPipe],
  exports: [],
  providers: [
    {provide: PLAYER_PLAYLIST, useValue: PlayerPlaylistConstants},
    SpotifyWebApiService
  ],
})
export class PlayerModule {
}
