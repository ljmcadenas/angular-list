import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sanitizeUrl'})
export class SanitizeUrlPipe implements PipeTransform {
  readonly defaultProtocol = 'http';

  transform(url: string): any {
    return this.validateUrl(url);
  }

  private validateUrl(url: string): string {
    url = this.ensureProtocol(url);

    return url;
  }

  private ensureProtocol(url: string): string {
    const protocolRegExp = /^(http:\/\/|https:\/\/|www\.)/;

    return protocolRegExp.test(url)
      ? url
      : `${this.defaultProtocol}://${url}`;
  }
}