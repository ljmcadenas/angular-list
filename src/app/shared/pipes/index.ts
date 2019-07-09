import { AddressPipe } from './address.pipe';
import { MailtoPipe } from './mailto.pipe';
import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { GMapsGeoLinkPipe } from './gmap-geo-link.pipe';

export const pipes: any[] = [
  AddressPipe,
  MailtoPipe,
  SanitizeUrlPipe,
  GMapsGeoLinkPipe
];

export * from './address.pipe';
export * from './mailto.pipe';
export * from './sanitize-url.pipe';
export * from './gmap-geo-link.pipe';
