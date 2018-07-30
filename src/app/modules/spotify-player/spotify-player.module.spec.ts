import { SpotifyPlayerModule } from './spotify-player.module';

describe('SpotifyPlayerModule', () => {
  let spotifyPlayerModule: SpotifyPlayerModule;

  beforeEach(() => {
    spotifyPlayerModule = new SpotifyPlayerModule();
  });

  it('should create an instance', () => {
    expect(spotifyPlayerModule).toBeTruthy();
  });
});
