import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { getAllProviders } from '../../../api/provider';
import ProviderCard from '../components/ProviderCard';
// Importando boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

const ProviderView = () => {
    const [providersList, setProvidersList] = React.useState<Provider[]>([]);

    React.useEffect(() => {
        getAllProviders().then((response) => {
            setProvidersList(response);
        });
    }, []);
  return (
    <>
    {
    providersList.map((provider) => (
        <ProviderCard {...provider} />
    ))
    }
    
    {/* Creando boton por medio de boostrap */}
    <button type="button" className="btn btn-primary">Saludos :v</button>
    
    </>
  )
}

export default ProviderView