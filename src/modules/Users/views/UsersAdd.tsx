import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Users } from "../../../interfaces/users";
import { createUser } from "../../../api/users";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UsersAdd = () => {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState<Users>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: 'user',
    username: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUser(users).then((response) => {
        console.log(response);

        if(users?.name === '' || users?.lastname === '' || users?.email === '' || users?.password === '' || users?.username === '' || users?.role === '') {
          Swal.fire({
            icon: 'question',
            title: 'Hay algunos campos vacíos',
            text: '¡Por favor ingrese todos los campos!',
          })
          console.log('Error: Campos vacios');
          return;
        }

        Swal.fire({
          title: "Usuario creado",
          text: "El usuario ha sido creado exitosamente.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/users");
        });
      })
      .catch((error) => {
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
      <h1 className="mb-4">Agregar usuario</h1>
      <form onSubmit={handleSubmit} className="w-100">
        <div className="d-flex flex-column mb-3">
          <label htmlFor="name">Nombre:</label>
          <TextField
            id="name"
            type="text"
            value={users?.name}
            defaultValue={users?.name}
            onChange={(e) => setUsers({ ...users, name: e.target.value })}
            required
          />
        </div>

        <div className="d-flex flex-column mb-3">
          <label htmlFor="lastname">Apellido:</label>
          <TextField
            id="lastname"
            type="text"
            value={users?.lastname}
            defaultValue={users?.lastname}
            onChange={(e) => setUsers({ ...users, lastname: e.target.value })}
            required
          />
        </div>

        <div className="d-flex flex-column mb-3">
          <label htmlFor="email">Email:</label>
          <TextField
            id="email"
            type="email"
            value={users?.email}
            defaultValue={users?.email}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
            required
          />
        </div>

        <div className="d-flex flex-column mb-3">
          <label htmlFor="password">Contraseña:</label>
          <TextField
            id="password"
            type="password"
            value={users?.password}
            defaultValue={users?.password}
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
            required
          />
        </div>

        {/* <div className="d-flex flex-column mb-3">
          <label htmlFor="role">Rol:</label>
          <TextField
            id="role"
            type="text"
            value={users?.role}
            defaultValue={users?.role}
            onChange={(e) => setUsers({ ...users, role: e.target.value })}
          />
        </div> */}

        <div className="d-flex flex-column mb-3">
          <label htmlFor="username">Nombre de usuario:</label>
          <TextField
            id="username"
            type="text"
            value={users?.username}
            defaultValue={users?.username}
            onChange={(e) => setUsers({ ...users, username: e.target.value })}
            required
          />
        </div>

        {/* <div className="d-flex flex-column mb-3">
          <label htmlFor="username">Tipo de usuario:</label>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={users?.role}
              label="Age"
              onChange={(e) => setUsers({ ...users, role: e.target.value })}
            >
              <MenuItem value={'user'}>Usuario</MenuItem>
              <MenuItem value={'admin'}>Administrador</MenuItem>
          </Select>
        </div> */}

        <Form.Group className="mb-3">
            <Form.Label>Tipo de usuario:</Form.Label>
              <Form.Select aria-label="Categoria" size="lg" required value={users?.role} defaultValue={users?.role} onChange={(e) => setUsers({ ...users, role: e.target.value })}>
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
              </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="success" type="submit">
            Guardar
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default UsersAdd;

