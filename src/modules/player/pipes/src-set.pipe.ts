import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'srcSet'})
export class SrcSetPipe implements PipeTransform {
  transform(value: SpotifyApi.ImageObject[]): string {
    let srcSet = '';

    if (value) {
      value.forEach((img: SpotifyApi.ImageObject) =>
        srcSet = srcSet === '' ? srcSet + `${img.url} ${img.width}w` : srcSet + `, ${img.url} ${img.width}w`);
    }

    return srcSet;
  }
}
