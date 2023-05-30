enum Status {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DELIVERED = 'DELIVERED',
}

export interface History {
  _id?:       string;
  ID_USER:    string;
  dateOfbuy:  Date;
  quantity:   number;
  total:      number;
  status:     Status;
  dateOfDelivered: Date;
  TransferNumber: string;
  TransferStatus: Status;
}