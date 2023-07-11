import { IAddressModel } from './address.model';

export interface IUserModel {
    id: number;
    name: string;
    email: string;
    address: IAddressModel;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}