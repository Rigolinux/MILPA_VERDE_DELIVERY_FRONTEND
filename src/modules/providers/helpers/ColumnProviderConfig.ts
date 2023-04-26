import {
    GridColDef,
  } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
 
    {
      field: 'ProviderName',
      headerName: 'Nombre del proveedor',
      width: 175,
      editable: true,
    },
    {
      field: 'mail',
      headerName: 'Correo',
      width: 200,
      editable: true,
    },
    {
      field: 'mobileNumber',
      headerName: 'Numero',
      width: 150,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'Direccion',
      width: 250,
      editable: true,
    },
    {
      field: 'website',
      headerName: 'Sitio web',
      width: 200,
      editable: true,
    },
   /*  {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }, */
    
  ];