import React from 'react';
import { Provider } from '../../../interfaces/provider';
import { useParams } from 'react-router-dom';
import { getProviderById, updateProvider } from '../../../api/provider';
import { Button, TextField } from '@mui/material';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ProviderDetails = () => {
  const navigate = useNavigate();
  
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
    getProviderById(id ?? '')
      .then((response) => {
        setProvider(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getProv();
  }, []);

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateProvider(id ?? '', provider)
      .then((response) => {
        getProv();
        console.log(response);
        navigate('/providers');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1">
          Detalles del proveedor
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Nombre del proveedor:</Typography>
          <Typography sx={{ ml: 1 }}>{provider?.ProviderName}</Typography>
        </Box>

        <form onSubmit={handlesubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Dirección del proveedor:</Typography>
              <TextField
                id="address"
                type="text"
                defaultValue={provider?.address}
                value={provider?.address}
                onChange={(e) =>
                  setProvider({ ...provider, address: e.target.value })
                }
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Teléfono del proveedor:</Typography>
              <TextField
                id="mobileNumber"
                type="number"
                value={provider?.mobileNumber}
                onChange={(e) =>
                  setProvider({
                    ...provider,
                    mobileNumber: parseInt(e.target.value),
                  })
                }
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Correo del proveedor:</Typography>
              <TextField
                id="mail"
                type="email"
                defaultValue={provider?.mail}
                value={provider?.mail}
                onChange={(e) =>
                  setProvider({ ...provider, mail: e.target.value })
                }
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Sitio web del proveedor:</Typography>
              <TextField
                id="website"
                type="text"
                value={provider?.website}
                defaultValue={provider?.website}
                onChange={(e) =>
                  setProvider({ ...provider, website: e.target.value })
                }
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" sx={{ bgcolor: 'success.main' }} type="submit">
                Guardar cambios
                </Button>
            </Box>
            </Box>
        </form>
        </Box>
    </Container>

  )
}

export default ProviderDetails