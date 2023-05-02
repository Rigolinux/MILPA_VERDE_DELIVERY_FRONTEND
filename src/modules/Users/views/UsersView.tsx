import React from "react";
import { Users } from "../../../interfaces/users";
import { getAllUsers, deleteOneUser } from "../../../api/users";
// import UsersCard from "../components/UsersCard";
import { useNavigate, useLinkClickHandler } from "react-router-dom";

// Import a boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Button, Container } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridColDef } from "@mui/x-data-grid";
import { columns } from "../helpers/ColumnUsersConfig";

const UsersView = () => {

  const navigate = useNavigate();

  const [usersList, setUsersList] = React.useState<Users[]>([]);

  // creando la funcion para eliminar los usuarios
  const deleteUser = (params:any) => {
    deleteOneUser(params.id).then((response) => {
      console.log(response);
      const newList = usersList.filter((users) => users._id !== params.id);
      setUsersList(newList);
    }).catch((error) => {
      console.log(error);
    });
  };

  // creando la funcion para obtener los usuarios por id
  const usersDetail = (params:any) => {
    navigate(`/users/${params.id}`);
  }

  // Cerrar sesion
  const logOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  React.useEffect(() => {
    getAllUsers().then((response) => {
      setUsersList(response);
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
          onClick={() => deleteUser(params)}
        />,

        <GridActionsCellItem
          icon={<EditIcon />}
          label="Editar"
          onClick={() => usersDetail(params)}
        />

      ],
    },
  ], 
  [usersDetail, deleteUser]);

  return (
    <Container>

      <div style={{ paddingTop: '20px', }}>

        {/* <button 
          onClick = {() => {
            logOut();
          }}
          type="button" className="btn btn-danger">Cerrar sesion
        </button> */}

        <button type='button' className="btn btn-success"
          onClick={() => {
            navigate('/users/add');
          }}>
            Agregar usuario
        </button>

      </div>

      <div style={{ paddingTop: '40px', }}>
        <DataGrid
          rows={usersList}
          getRowId={(row) => row._id}
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

export default UsersView;
