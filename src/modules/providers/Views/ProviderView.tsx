import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { getAllProviders } from '../../../api/provider';
//import ProviderCard from '../components/ProviderCard';
import { useNavigate } from 'react-router-dom';
// Importando boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import { columns } from '../helpers/ColumnProviderConfig';




const ProviderView = () => {
  const navigate = useNavigate()
    const [providersList, setProvidersList] = React.useState<Provider[]>([]);

    const logout = () => {
      localStorage.removeItem('user');
      navigate('/login');
    }

    React.useEffect(() => {
        getAllProviders().then((response) => {
            setProvidersList(response);
        });
    }, []);
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
        columns={columns}
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