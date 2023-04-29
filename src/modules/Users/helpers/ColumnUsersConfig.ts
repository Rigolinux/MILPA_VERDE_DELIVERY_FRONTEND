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
    field: 'lastname',
    headerName: 'Apellido',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Column Email
  {
    field: 'email',
    headerName: 'Email',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Column Username
  {
    field: 'username',
    headerName: 'Usuario',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Column Role
  {
    field: 'role',
    headerName: 'Rol',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

  // Column Password
  {
    field: 'password',
    headerName: 'Contraseña',
    width: 175,
    align: 'center',
    headerAlign: 'center',
    editable: false,
  },

];