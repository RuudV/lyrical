import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayerRoutingModule} from './player-routing.module';
import {PlayerComponent} from './components/player/player.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PlayerRoutingModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule {
}
