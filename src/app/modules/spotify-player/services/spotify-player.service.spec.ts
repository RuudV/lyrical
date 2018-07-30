import { TestBed, inject } from '@angular/core/testing';

import { SpotifyPlayerService } from './spotify-player.service';

describe('SpotifyPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyPlayerService]
    });
  });

  it('should be created', inject([SpotifyPlayerService], (service: SpotifyPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
