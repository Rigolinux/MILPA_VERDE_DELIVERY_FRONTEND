import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { getAllProviders } from '../../../api/provider';
//import ProviderCard from '../components/ProviderCard';
import { useNavigate,useLinkClickHandler } from 'react-router-dom';
// Importando boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Container } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridColDef } from '@mui/x-data-grid';
import { columns } from '../helpers/ColumnProviderConfig';


 const ProviderView = () => {
  const navigate = useNavigate()
  
    const [providersList, setProvidersList] = React.useState<Provider[]>([]);

  

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
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() =>console.log(params)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={()=> providerDetail(params)}
          />,
        ],
      }
    ],
    [providerDetail])
  return (
    <Container>
     <button 
    onClick={() => {
      logout()
    }}
     type="button" className="btn btn-danger">LogOut</button>

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
        checkboxSelection
        disableRowSelectionOnClick
      />
    {/*
    providersList.map((provider) => (
        <ProviderCard key={provider._id} {...provider} />
    ))
    */}
    
    {/* Creando boton por medio de boostrap */}
    
    
    </Container>
  )
}


export default ProviderView