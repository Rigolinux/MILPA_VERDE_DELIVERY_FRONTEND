import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { getAllProviders } from '../../../api/provider';
import ProviderCard from '../components/ProviderCard';

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
    </>
  )
}

export default ProviderView