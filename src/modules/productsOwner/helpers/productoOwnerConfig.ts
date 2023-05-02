import {
    GridColDef,
  } from '@mui/x-data-grid';
  
  export const columns: GridColDef[] = [
  
    // Column Name
    {
      field: 'name',
      headerName: 'Nombre',
      width: 175,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
  
    // Column Lastname
    {
      field: 'description',
      headerName: 'Descripcion',
      width: 175,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
  
    // Column Email
    {
      field: 'status',
      headerName: 'status',
      width: 175,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
  
    // Column Username
    {
      field: 'cost',
      headerName: 'costo',
      width: 175,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
  
    // Column Role
    
    // Column Password
    {
        field: 'price',
        headerName: 'Precio',
        width: 175,
        align: 'center',
        headerAlign: 'center',
        editable: false,
    },
    {
      field: 'Image',
      headerName: 'Tipo',
      width: 175,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
  
  ];