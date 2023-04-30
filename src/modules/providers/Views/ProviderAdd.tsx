import { TextField } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Provider } from '../../../interfaces/provider'
import { createProvider } from '../../../api/provider'
import { useNavigate } from 'react-router-dom'

const ProviderAdd = () => {
    const navigate = useNavigate();
    const [provider, setProvider] = React.useState<Provider>({
        ProviderName: '',
        address: '',
        mobileNumber: 0,
        mail: '',
        website: '',
    })

    const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createProvider(provider).then((response) => {
            console.log(response);
            navigate('/providers');
        }).catch((error) => {
            console.log(error);
        });
    }
  return (
    <div>
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
            onChange={(e) => setProvider({...provider, mobileNumber: parseInt(e.target.value)})}
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
        <Button className='btn btn-success' type="submit">
            Guardar
        </Button>
</form></div>
  )
}

export default ProviderAdd