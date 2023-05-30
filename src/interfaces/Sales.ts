enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    DELIVERED = 'DELIVERED',
  }

export interface Detail {
  ID_recipe: string,
  dateOfbuy: string,
  quantity: number,
  price: number,
  total: number,
}

export interface Sales {
    ID_USER: string,
    dateOfbuy: string,
    quantity: number,
    total: number,
    status: Status, //base a pedido
    dateOfDelivered: string,
    TransferNumber:     string,
    TransferStatus: Status, //base a pago
    details?: Detail[],
}
