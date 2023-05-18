import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { getAllProviders,deleteOneProvider } from '../../../api/provider';
//import ProviderCard from '../components/ProviderCard';
import { useNavigate,useLinkClickHandler } from 'react-router-dom';
// Importando boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridColDef } from '@mui/x-data-grid';
import { columns } from '../helpers/ColumnProviderConfig';
import Swal from 'sweetalert2';


 const ProviderView = () => {
  const navigate = useNavigate()
  
    const [providersList, setProvidersList] = React.useState<Provider[]>([]);

  
    const deleteProvider = (params:any) => {
      deleteOneProvider(params.id).then((response) => {
        console.log(response);
        const newList = providersList.filter((provider) => provider._id !== params.id);
        setProvidersList(newList);
        Swal.fire({
          icon: 'success',
          title: 'Proveedor eliminado',
          text: 'El proveedor ha sido eliminado exitosamente.',
          confirmButtonText: 'Aceptar',
        });
      }).catch((error) => {
        console.log(error);
      });
    }

    const providerDetail = (params:any) => {
     navigate(`/providers/${params.id}`);
     
    }
    
    const logout = () => {
      localStorage.removeItem('user');
      navigate('/login');
    }

    React.useEffect(() => {
        getAllProviders().then((response) => {
            setProvidersList(response);
        });
    }, []);

    const  AddActiosn = React.useMemo<GridColDef[]>(() =>[
      ...columns,
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params:any ) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteProvider(params)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={()=> providerDetail(params)}
          />,
        ],
      }
    ],
    [providerDetail,deleteProvider])
  return (
    <Container>
     {/* <button 
    onClick={() => {
      logout()
    }}
     type="button" className="btn btn-danger">LogOut</button> */}
    <div style={{ paddingTop: '20px', }}>
    
      <button type='button' className='btn btn-success'
        onClick={() => {
          navigate('/providers/add')
        }}>
          Agregar un nuevo proveedor
      </button>

    </div>

    <div style={{ paddingTop: '40px', }}>

     <DataGrid
        rows={providersList}
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
       
        disableRowSelectionOnClick
      />
    {/*
    providersList.map((provider) => (
        <ProviderCard key={provider._id} {...provider} />
    ))
    */}
    
    {/* Creando boton por medio de boostrap */}
    
    </div>

    </Container>
  )
}


export default ProviderView