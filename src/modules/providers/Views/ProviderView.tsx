import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { getAllProviders } from '../../../api/provider';
import ProviderCard from '../components/ProviderCard';
import { useNavigate } from 'react-router-dom';
// Importando boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <>
     <button 
    onClick={() => {
      logout()
    }}
     type="button" className="btn btn-danger">LogOut</button>
    {
    providersList.map((provider) => (
        <ProviderCard key={provider._id} {...provider} />
    ))
    }
    
    {/* Creando boton por medio de boostrap */}
    
    
    </>
  )
}

export default ProviderView