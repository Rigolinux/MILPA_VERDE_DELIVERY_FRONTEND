import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../api/auth';

// Importando sweet alert
import Swal from 'sweetalert2';

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  // Creando el metodo para crear un usuario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get('username')?.toString() || '',
      name: data.get('name')?.toString() || '',
      lastname: data.get('lastname')?.toString() || '',
      email: data.get('email')?.toString() || '',
      password: data.get('password')?.toString() || '',
      //address: data.get('address')?.toString() || '',
    };

    // Insertando sweet alert
    register(user).then((res) => {
        // Validando con sweet alert si el usuario y la contraseña están vacíos
        if (user.username === '') {
          Swal.fire({
            icon: 'question',
            title: 'Usuario Vacío',
            text: '¡Por favor ingrese el usuario!',
          });
          console.log('Error: Usuario vacío');
          return;
        } else if (user.password === '') {
          Swal.fire({
            icon: 'question',
            title: 'Contraseña Vacía',
            text: '¡Por favor ingrese la contraseña!',
          });
          console.log('Error: Contraseña vacía');
          return;
        } else if (user.name === '') {
          Swal.fire({
            icon: 'question',
            title: 'Nombre Vacío',
            text: '¡Por favor ingrese el nombre!',
          });
          console.log('Error: Nombre vacío');
          return;
        } else if (user.lastname === '') {
          Swal.fire({
            icon: 'question',
            title: 'Apellido Vacío',
            text: '¡Por favor ingrese el apellido!',
          });
          console.log('Error: Apellido vacío');
          return;
        } else if (user.email === '') {
          Swal.fire({
            icon: 'question',
            title: 'Correo Vacío',
            text: '¡Por favor ingrese el correo!',
          });
          console.log('Error: Correo vacío');
          return;
        // } else if (user.address === '') {
        //   Swal.fire({
        //     icon: 'question',
        //     title: 'Dirección Vacía',
        //     text: '¡Por favor ingrese la dirección!',
        //   });
        //   console.log('Error: Dirección vacía');
        //   return;
        }
        //validando un correo valido
        else if (!user.email.includes('@')) {
          Swal.fire({
            icon: 'question',
            title: 'Correo Invalido',
            text: '¡Por favor ingrese un correo valido!',
          });
          console.log('Error: Correo invalido');
          return;
        }
         
        // Validando con sweet alert si el usuario tiene menos de 4 caracteres
        else if (user.username.length <= 4) {
          Swal.fire({
            icon: 'question',
            title: 'Usuario Muy Corto',
            text: '¡Por favor ingrese un usuario con más de 5 caracteres!',
          });
          console.log('Error: Usuario muy corto');
          return;
        }
        // Validando con sweet alert si la contraseña tiene menos de 5 caracteres
        else if (user.password.length < 5) {
          Swal.fire({
            icon: 'question',
            title: 'Contraseña Muy Corta',
            text: '¡Por favor ingrese una contraseña con más de 5 caracteres!',
          });
          console.log('Error: Contraseña muy corta');
          return;
        }
        // Validando si todos los datos se ingresaron correctamente
        else {
          Swal.fire({
            icon: 'success',
            title: 'Usuario Creado Correctamente',
            text: '¡Por favor inicie sesión!',
          });
          console.log(res);
          console.log('Usuario creado correctamente');
          // navigate('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de usuario"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Nombres"
                  name="name"
                  autoComplete="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Apellidos"
                  name="lastname"
                  autoComplete="lastname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo"
                  name="email"
                  autoComplete="email"
                  inputProps={{
                    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Dirección"
                  name="address"
                  autoComplete="address"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'green' }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
