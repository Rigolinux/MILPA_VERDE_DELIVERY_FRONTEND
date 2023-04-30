import { TextField } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { Users } from "../../../interfaces/users";
import { createUser } from "../../../api/users";
import { useNavigate } from "react-router-dom";

const UsersAdd = () => {

  const navigate = useNavigate();

  const [users, setUsers] = React.useState<Users>({
    name: '',
    lastname: '',
    email: '',
    password: '',
    // role: '',
    username: '',
  })

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUser(users).then((response) => {
      console.log(response);
      navigate('/users');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div style={{ padding: '50px', }}>
        <form onSubmit={handlesubmit}>

          <TextField
            id="name"
            label="Nombre:"
            type="text"
            value={users?.name}
            defaultValue={users?.name}
            onChange={(e) => setUsers({...users, name: e.target.value})}
          />

          <TextField
            id="lastname"
            label="Apellido: "
            type="text"
            value={users?.lastname}
            defaultValue={users?.lastname}
            onChange={(e) => setUsers({...users, lastname: e.target.value})}
          />

          <TextField
            id="email"
            label="Email:"
            type="email"
            value={users?.email}
            defaultValue={users?.email}
            onChange={(e) => setUsers({...users, email: e.target.value})}
          />

          <TextField
            id="password"
            label="Contraseña:"
            type="password"
            value={users?.password}
            defaultValue={users?.password}
            onChange={(e) => setUsers({...users, password: e.target.value})}
          />

          {/* <TextField
            id="role"
            label="Rol:"
            type="text"
            value={users?.role}
            defaultValue={users?.role}
            onChange={(e) => setUsers({...users, role: e.target.value})}
          /> */}

          <TextField
            id="username"
            label="Nombre de usuario:"
            type="text"
            value={users?.username}
            defaultValue={users?.username}
            onChange={(e) => setUsers({...users, username: e.target.value})}
          />

          <Button variant="primary" type="submit">
            Guardar
          </Button>
          
        </form>
      </div>
    </div>
  )

};

export default UsersAdd;
