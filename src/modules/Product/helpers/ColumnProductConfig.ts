import {
  GridColDef,
} from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  
  // Columna Nombre
  {
    field: 'name',
    headerName: 'Nombre',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna Descripción
  {
    field: 'description',
    headerName: 'Descripción',
    width: 325,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna Precio
  {
    field: 'price',
    headerName: 'Precio',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna Stock
  // {
  //   field: 'stock',
  //   headerName: 'Stock',
  //   width: 200,
  //   align: 'center',
  //   headerAlign: 'center',
  //   editable: false,
  // },

  // Columna Imagen
  {
    field: 'image',
    headerName: 'Imagen',
    width: 325,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Columna Categoría
  {
    field: 'category',
    headerName: 'Categoría',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

];