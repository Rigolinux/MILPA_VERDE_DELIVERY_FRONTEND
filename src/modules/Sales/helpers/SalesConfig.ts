import {
  GridColDef,
} from '@mui/x-data-grid';

// ID_USER: string,
//     dateOfbuy: string,
//     quantity: number,
//     total: number,
//     status: Status,           //base a pedido
//     dateOfDelivered: string,
//     TransferNumber:     string,
//     TransferStatus: Status,   //base a pago

export const columns: GridColDef[] = [

  // Columna dateOfbuy
  {
    field: 'dateOfbuy',
    headerName: 'Fecha de compra',
    width: 125,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna quantity
  {
    field: 'quantity',
    headerName: 'Cantidad',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna total
  {
    field: 'total',
    headerName: 'Total',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna status
  {
    field: 'status',
    headerName: 'Estado',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna dateOfDelivered
  {
    field: 'dateOfDelivered',
    headerName: 'Fecha de entrega',
    width: 125,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna TransferNumber
  {
    field: 'TransferNumber',
    headerName: 'Número de transferencia',
    width: 225,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna TransferStatus
  {
    field: 'TransferStatus',
    headerName: 'Estado de transferencia',
    width: 225,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

];
