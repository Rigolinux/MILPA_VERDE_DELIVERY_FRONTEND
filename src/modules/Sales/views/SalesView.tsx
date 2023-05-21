import React from 'react';
import { Sales } from '../../../interfaces/Sales';
import { getAllSalesHeaders, deleteSale } from '../../../api/SalesGraphics';
import { useNavigate, useLinkClickHandler } from 'react-router-dom';
// Import a boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridColDef } from '@mui/x-data-grid';
import { columns } from '../helpers/SalesConfig';

const SalesView = () => {

    const navigate = useNavigate();

    const [salesList, setSalesList] = React.useState<Sales[]>([]);
    console.log(salesList);

    // creando la funcion para eliminar los productos
    const deleteSales = (params: any) => {
      deleteSale(params.id).then((response) => {
        console.log(response);
        const newList = salesList.filter((sales) => sales.ID_USER !== params.id);
        setSalesList(newList);
      }).catch((error) => {
        console.log(error);
      });
    };

    // creando la funcion para obtener los productos por id
    const salesID = (params: any) => {
      navigate(`/sales/${params.id}`);
    };

    // Cerrar sesion
    const logOut = () => {
      localStorage.removeItem('user');
      navigate('/login');
    };

    React.useEffect(() => {
      getAllSalesHeaders().then((response) => {
        setSalesList(response);
      });
    }, []);

    const AddActions = React.useMemo<GridColDef[]>(() => [
      ...columns,
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Eliminar"
            onClick={() => deleteSales(params)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            onClick={() => salesID(params)}
          />,
        ],
      },
    ], [
      salesID,
      deleteSales,
    ]);

    return (
      <Container>
        <div style={{ paddingTop: '20px' }}>
          <button type='button' className='btn btn-success'
            onClick={() => {
              navigate('/sales/add');
            }}>
              Agregar Venta
          </button>
        </div>

        <div style={{ paddingTop: '20px' }}>
          <DataGrid
            rows={salesList}
            getRowId={(row) => row.ID_USER}
            columns={AddActions}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </div>

      </Container>
    );
};

export default SalesView;
