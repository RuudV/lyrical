// spotify:user:1177626385:playlist:1P2dTGKIy7zZY1GcCfwAy4

import {InjectionToken} from '@angular/core';

export const PLAYER_PLAYLIST = new InjectionToken('player.playlist');

export interface PlayerPlaylistConstants {
  userId: string;
  playlistId: string;
}

export const PlayerPlaylistConstants: PlayerPlaylistConstants = {
  userId: '1177626385',
  playlistId: '1P2dTGKIy7zZY1GcCfwAy4'
};
