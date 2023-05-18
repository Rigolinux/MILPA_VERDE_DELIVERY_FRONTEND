import React from "react";
import { Users } from "../../../interfaces/users";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../../api/users";
import { MenuItem, Select, TextField } from "@mui/material";
import { Button, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UsersDetails = () => {

  const navigate = useNavigate();

  const [user, setUser] = React.useState<Users>({
    name: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    username: '',
    _id: '',
  });

  const { id } = useParams();

  const getUser = () => {
    getUserById(id ?? '').then((response) => {
      setUser(response);
    }).catch((error) => {
      console.log(error);
    });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateUser(id ?? '', user).then((response) => {
      getUser();
      console.log(response);
      Swal.fire('Éxito', 'Proveedor actualizado correctamente', 'success');
      navigate('/users');
    }).catch((error) => {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error al crear el usuario.",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
  <h1 className="mb-4">Detalles del usuario</h1>
  <form onSubmit={handleSubmit} className="w-100">
    <div className="d-flex flex-column mb-3">
      <label htmlFor="name">Nombre:</label>
      <TextField
        id="name"
        type="text"
        value={user?.name}
        defaultValue={user?.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
    </div>

    <div className="d-flex flex-column mb-3">
      <label htmlFor="lastname">Apellido:</label>
      <TextField
        id="lastname"
        type="text"
        value={user?.lastname}
        defaultValue={user?.lastname}
        onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        required
      />
    </div>

    <div className="d-flex flex-column mb-3">
      <label htmlFor="email">Email:</label>
      <TextField
        id="email"
        type="email"
        value={user?.email}
        defaultValue={user?.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
    </div>

    <div className="d-flex flex-column mb-3">
      <label htmlFor="password">Contraseña:</label>
      <TextField
        id="password"
        type="password"
        value={user?.password}
        defaultValue={user?.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
    </div>

    <div className="d-flex flex-column mb-3">
      <label htmlFor="username">Nombre de usuario:</label>
      <TextField
        id="username"
        type="text"
        value={user?.username}
        defaultValue={user?.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        required
      />
    </div>
    <div className="d-flex flex-column mb-3">
          <label htmlFor="username">Tipo de usuario:</label>
          <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={user?.role}
    label="Age"
    onChange={(e) => setUser({ ...user, role: e.target.value })}
  >
    <MenuItem value={'user'}>Usuario</MenuItem>
    <MenuItem value={'admin'}>Administrador</MenuItem>
  </Select>
        </div>

    <div className="d-flex justify-content-end">
      <Button variant="success" size="lg" type="submit">
        Actualizar
      </Button>
    </div>
  </form>
</Container>

  )

};

export default UsersDetails;
