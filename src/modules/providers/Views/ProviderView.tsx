import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { getAllProviders } from '../../../api/provider';

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
        <>
        <div key={provider._id}>
            <h5>{provider.ProviderName}</h5>
            <p>{provider.mail}</p>
        </div>
            <br />
        </>
    ))
    
    }
    </>
  )
}

export default ProviderView