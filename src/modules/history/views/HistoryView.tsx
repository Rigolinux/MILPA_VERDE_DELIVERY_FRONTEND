import React from 'react';
import { History } from '../../../interfaces/history';
import { getSaleHistory, deleteSaleHistoryBy_id } from '../../../api/history';
// import HistoryCard from '../components/HistoryCard';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// Importando boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridColDef } from '@mui/x-data-grid';
import { columns } from '../helpers/ColumnHistoryConfig';
import Swal from 'sweetalert2';


const HistoryView = () => {
  const navigate = useNavigate();

  const [historyList, setHistoryList] = React.useState<History[]>([]);

  const deleteHistory = (params: any) => {
    deleteSaleHistoryBy_id(params.id).then((response) => {
      console.log(response);
      const newList = historyList.filter((history) => history._id !== params.id);
      setHistoryList(newList);
      Swal.fire({
        icon: 'success',
        title: 'Historial de venta eliminado',
        text: 'El historial de venta ha sido eliminado exitosamente.',
        confirmButtonText: 'Aceptar',
      });
    });
  };

  const historyDetail = (params: any) => {
    navigate(`/history/${params.id}`);
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const [userId, setUserId] = React.useState(null);

  React.useEffect(() => {
    const userJson = localStorage.getItem('user');
    // console.log(userJson); // Agregado console.log para mostrar el contenido de userJson
    if (userJson) {
      const user = JSON.parse(userJson);
      const userIdC = user.user._id; // Acceder a user.user._id
      console.log(userIdC); // Agregado console.log para mostrar user.user._id
      setUserId(userIdC);
      // getSaleHistory(userIdC);

      getSaleHistory(userIdC).then((response) => {
        setHistoryList(response);
      });

    } else {
      console.log('El valor de usuario no está presente en el localStorage.');
    }
    // const HST = {
    //   ID_User: userId,
    // }
    // getSaleHistory(userId);
  }, []);

  const AddActiosn = React.useMemo<GridColDef[]>(() => [
    ...columns,
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params: any) => [
        // <GridActionsCellItem
        //   icon={<EditIcon />}
        //   label="Editar"
        //   onClick={() => historyDetail(params)}
        // />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Eliminar"
          onClick={() => deleteHistory(params)}
        />,
      ],
    },
  ], [historyDetail, deleteHistory]);

  return (
    <Container>
      {/* <h1>Historial de ventas</h1> */}
      {/* <h2>Usuario: {userId}</h2> */}

      <div style={{ paddingTop: '40px', }}>
        <h1>Historial</h1>
      </div>

      <div style={{ paddingTop: '40px', }}>

        <DataGrid
          rows={historyList}
          getRowId={(row) => row._id}
          columns={AddActiosn}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}

          // disableSelectionOnClick
          />

      </div>


    </Container>
  );
};

export default HistoryView;