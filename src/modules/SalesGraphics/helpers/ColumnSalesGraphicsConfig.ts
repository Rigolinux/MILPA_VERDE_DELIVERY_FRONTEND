import {
  GridColDef,
}  from '@mui/x-data-grid';

export const columns: GridColDef[] = [

  // Columna ID_Sale
  {
    field: 'ID_sale',
    headerName: 'ID_Venta',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna ID_Recipe
  {
    field: 'ID_recipe',
    headerName: 'ID_Receta',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna Quantity
  {
    field: 'quantity',
    headerName: 'Cantidad',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna Price
  {
    field: 'price',
    headerName: 'Precio',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
    // Agregando simnbo de moneda
    valueFormatter: ({ value }) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(Number(value));
    }
  },

  // Columna Total
  {
    field: 'total',
    headerName: 'Total',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
    // Agregando simnbo de moneda
    valueFormatter: ({ value }) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(Number(value));
    }
  },
  
];