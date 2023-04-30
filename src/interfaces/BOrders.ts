import { Provider } from './provider';
enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
  }

export interface BOrdersHeader {
    _id?: string;
    Provider : string;
    OrderDate : Date;
    total: number;
    status: Status;
}

export interface BOrdersDetail {
    _id: string;
    ID_Product: string;
    quantity: number;
    price: number;
    total: number;
    ID_Header: string;
}

export interface BOrders {
    status: Status;
    provider : string;
    OrderDate : Date;
    total: number;
    details: BOrdersDetail[];

}