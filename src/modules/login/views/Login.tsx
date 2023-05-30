import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';

//importando el sweet alert
import Swal from 'sweetalert2';


const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const user = {
      username: data.get('user')?.toString() || '',
      password: data.get('password')?.toString() || '',
    };
    
    //insertar un sweet alert para que el usuario sepa que se esta logeando
    login(user).then((res) => {

      // Validando con sweet alert si el usuario y la contraseña estan vacios
      if(user.username === '' && user.password === '') {
        Swal.fire({
          icon: 'question',
          title: 'Usuario y Contraseña Vacios',
          text: '¡Por favor ingrese el usuario y la contraseña!',
        })
        console.log('Error: Usuario y Contraseña vacios');
        return;
      }
      // Validando con sweet alert si el campo de usuario esta vacio
      else if(user.username === ''){
        Swal.fire({
          icon: 'question',
          title: 'Usuario Vacio',
          text: '¡Por favor ingrese el usuario!',
        })
        console.log('Error: Usuario vacio');
        return;
      } 
      // Validando con sweet alert si el campo de contraseña esta vacio
      else if(user.password === ''){
        Swal.fire({
          icon: 'question',
          title: 'Contraseña Vacia',
          text: '¡Por favor ingrese la contraseña!',
        })
        console.log('Error: Contraseña vacia');
        return;
      }
      // Validando con sweet alert si las credenciales son incorrectas
      else if(res.token === undefined || res.token === null || res.status === 401 || res.status === 404 || res.status === 400){
        Swal.fire({
          icon: 'error',
          title: 'Credenciales Incorrectas',
          text: '¡Por favor ingrese las credenciales correctas!',
        })
        console.log('Error: Credenciales Incorrectas');
        return;
      }
      // Validando con sweet alert si las credenciales son correctas
      else if(res.token !== undefined){
        Swal.fire({
          icon: 'success',
          title: 'Credenciales Correctas',
          text: '¡Bienvenido!',
          showConfirmButton: false,
          timer: 1500
        })
        console.log('Credenciales Correctas');
        localStorage.setItem('user', JSON.stringify(res));
        // navigate('/');
        navigate('/banner');
      }
      // localStorage.setItem('user', JSON.stringify(res));
      // console.log(res);
      // navigate('/');
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
          {/*   <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="User"
              name="user"
              autoComplete="user"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'green' }}
            >
              Sign In
            </Button>
            <Grid container>
              {/*<Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste contraseña?
                </Link>
              </Grid>*/}
              <Grid item>
                <Link href="/register" variant="body2">
                  {"¿No tienes cuenta? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
