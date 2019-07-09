import { Pipe, PipeTransform } from '@angular/core';

import { IAddress } from '@shared/models/api.model';

@Pipe({name: 'address'})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): any {
    return `${address.suite}${address.street}, ${address.city}`;
  }
}