import { TextField } from "@mui/material";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Users } from "../../../interfaces/users";
import { createUser } from "../../../api/users";
import { useNavigate } from "react-router-dom";

const UsersAdd = () => {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState<Users>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    // role: '',
    username: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUser(users).then((response) => {
        console.log(response);
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
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
          {!users?.name && <small className="text-danger">Este campo es obligatorio</small>}
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
          {!users?.lastname && <small className="text-danger">Este campo es obligatorio</small>}
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
          {!users?.email && <small className="text-danger">Este campo es obligatorio</small>}
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
          {!users?.password && <small className="text-danger">Este campo es obligatorio</small>}
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
          {!users?.username && <small className="text-danger">Este campo es obligatorio</small>}
        </div>

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

