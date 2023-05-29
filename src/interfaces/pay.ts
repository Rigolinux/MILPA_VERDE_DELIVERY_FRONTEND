export interface Pay {
  
}

export interface SaleData {
  ID_USER: string;
  dateOfbuy: string;
  quantity: number;
  total: number;
  status: string;
  dateOfDelivered: string;
  TransferNumber: string;
  TransferStatus: string;
  details: SaleDetail[];
}

export interface SaleDetail {
  ID_recipe: string;
  dateOfbuy: string;
  quantity: number;
  price: number;
  total: number;
}
