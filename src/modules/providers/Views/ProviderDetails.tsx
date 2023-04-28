import React from 'react'
import { Provider } from '../../../interfaces/provider';
import { useParams } from 'react-router-dom';
import { getProviderById,updateProvider } from '../../../api/provider';
import { Button, TextField } from '@mui/material';

const ProviderDetails = () => {

    const [provider, setProvider] = React.useState<Provider>({
        ProviderName: '',
        address: '',
        mobileNumber: 0,
        mail: '',
        website: '',
        _id: '',
    });

    const { id } = useParams();
    const getProv = () => {
        getProviderById(id ?? '').then((response) => {
            setProvider(response);
        }).catch((error) => {
            console.log(error);
        });
    };
    React.useEffect(() => {
        getProv();
    }, []);

    const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        updateProvider(id ?? '', provider).then((response) => {
            getProv();
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };

  return (
    <div>
        <h1>Detalles del proveedor</h1>
        <div>
            <h3>Nombre del proveedor: {provider?.ProviderName}</h3>
            
            <form onSubmit={handlesubmit} >
                <TextField
                        id='providerName'
                          label="Nombre del proveedor"
                          type="text"
                defaultValue={provider?.ProviderName}
                value={provider?.ProviderName}
                   onChange={(e) => setProvider({...provider, ProviderName: e.target.value})}
                        />
                        <TextField
                        id='address'
                        label="Dirección del proveedor"
                        type='text'
                        value={provider?.address}
                        defaultValue={provider?.address}
                        onChange={(e) => setProvider({...provider, address: e.target.value})}
                        />
                        <TextField
                        id='mobileNumber'
                        label="Teléfono del proveedor"
                        type='number'
                        onChange={(e) => setProvider({...provider, mobileNumber: e.target.value})}
                          value={provider?.mobileNumber}
                        />
                
                        <TextField
                        id='mail'
                        label="Correo del proveedor"
                        type='email' 
                        defaultValue={provider?.mail}
                          value={provider?.mail}
                            onChange={(e) => setProvider({...provider, mail: e.target.value})}
                        />
                        <TextField
                        id='website'
                        label="Sitio web del proveedor"
                        value={provider?.website}
                        defaultValue={provider?.website}
                        onChange={(e) => setProvider({...provider, website: e.target.value})}
                          type='text'
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Guardar
                    </Button>
            </form>
        </div>

    </div>
  )
}

export default ProviderDetails