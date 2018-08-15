import { TestBed, inject } from '@angular/core/testing';

import { SpotifyWebService } from './spotify-web.service';

describe('SpotifyWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyWebService]
    });
  });

  it('should be created', inject([SpotifyWebService], (service: SpotifyWebService) => {
    expect(service).toBeTruthy();
  }));
});
