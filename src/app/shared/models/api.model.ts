export interface IAddress {
  street: string;
  suite: string;
  city: string;
}

export interface IAddressDetail<T> extends IAddress {
  zipcode: string;
  geo: T;
}

export interface IGeoPoints {
  lat: string;
  lng: string;
}
