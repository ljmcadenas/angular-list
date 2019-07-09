import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@environment';

import { IGeoPoints } from '@shared/models/api.model';

@Pipe({name: 'gmapsGeoLink'})
export class GMapsGeoLinkPipe implements PipeTransform {
  transform(geoPoints: IGeoPoints): any {
    const { lat, lng } = geoPoints;
    return `${environment.apiBaseUrl.maps}/?api=1&query=${lat},${lng}`;
  }
}