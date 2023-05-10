enum Status {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DELIVERED = 'DELIVERED',
}

export interface SalesGraphics_SalesHeader {
  _id?: string;
  ID_USER: string;
  dateOfbuy: Date;
  quantity: number;
  total: number;
  status: Status;
  dateOfDelivered: Date;
  TransferNumber: string;
  TransferStatus: string;
}

export interface SalesGraphics_SalesDetail {
  _id: string;
  ID_sale: string;
  ID_recipe: string;
  dateOfbuy: Date;
  quantity: number;
  price: number;
  total: number;
}

export interface SalesGraphics_Sales {
  _id?: string;
  ID_USER: string;
  dateOfbuy: Date;
  quantity: number;
  total: number;
  status: Status;
  dateOfDelivered: Date;
  TransferNumber: string;
  TransferStatus: string;
  details: SalesGraphics_SalesDetail[];
}
