import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlayerComponent} from './containers/player/player.component';
import {OverviewComponent} from './containers/overview/overview.component';
import {SongComponent} from './containers/song/song.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'song/:trackId',
        component: SongComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlayerRoutingModule {
}
