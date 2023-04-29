import React from "react";
import { Users } from "../../../interfaces/users";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../../api/users";
import { Button, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";

const UsersDetails = () => {

  const navigate = useNavigate();

  const [user, setUser] = React.useState<Users>({
    name: '',
    lastname: '',
    email: '',
    password: '',
    // role: '',
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
      navigate('/users');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <h1>Detalles del usuario</h1>
      <div>
        <h3>Nombre del usuario: {user?.name}</h3>

        <form onSubmit={handleSubmit}>

          <TextField
            id="name"
            label="Nombre: "
            type="text"
            value={user?.name}
            defaultValue={user?.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />

          <TextField
            id="lastname"
            label="Apellido: "
            type="text"
            value={user?.lastname}
            defaultValue={user?.lastname}
            onChange={(e) => setUser({...user, lastname: e.target.value})}
          />

          <TextField
            id="email"
            label="Email: "
            type="email"
            value={user?.email}
            defaultValue={user?.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />

          <TextField
            id="password"
            label="Contraseña: "
            type="password"
            value={user?.password}
            defaultValue={user?.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />

          <TextField
            id="username"
            label="Nombre de usuario: "
            type="text"
            value={user?.username}
            defaultValue={user?.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
          />

          {/* <TextField
            id="role"
            label="Rol: "
            type="text"
            value={user?.role}
            defaultValue={user?.role}
            onChange={(e) => setUser({...user, role: e.target.value})}
          /> */}

          <Button variant="contained" type="submit">
            Actualizar
          </Button>

        </form>
      </div>
    </div>
  )

};

export default UsersDetails;
