import { IAddress, IAddressDetail, IGeoPoints } from '@shared/models/api.model';

export interface IBaseUser<T> {
  name: string;
  email: string;
  address: T;
  website: string;
}

export interface IUser extends IBaseUser<IAddress> {}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserDetail extends IBaseUser<IAddressDetail<IGeoPoints>> {
  id: number;
  username: string;
  phone: string;
  company: ICompany;
}
