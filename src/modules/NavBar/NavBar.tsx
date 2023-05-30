import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LogOutButton from '../NavBar/LogOutButton';
import { CgShoppingCart } from "react-icons/cg";
import { IconContext } from 'react-icons';
import { getUserById, updateUser } from "../../api/users"; 
import { Users } from "../../interfaces/users";
import { useParams } from "react-router-dom";
import UsersDetails from '../Users/views/UsersDetails';


const MyNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

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

  const isLoggedIn = localStorage.getItem('user') !== null;

  const username2 = localStorage.getItem('username'); 

  // if (username) {
  //   const username2 = JSON.parse(username);
  // }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Navbar.Brand href="/banner">MilpaVerde</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="/banner">Inicio</Nav.Link>
          {isLoggedIn && <Nav.Link onClick={() => navigate("/providers")}>Proveedores</Nav.Link>}
          {isLoggedIn && <Nav.Link onClick={() => navigate("/products")}>Productos</Nav.Link>}
          {isLoggedIn && <Nav.Link onClick={() => navigate("/users")}>Users</Nav.Link>}
          <Nav.Link onClick={() => navigate("/about")}>Acerca</Nav.Link>
          {isLoggedIn && <Nav.Link onClick={() => navigate("/salesgraphics")}>Ventas</Nav.Link>}
          {isLoggedIn && <Nav.Link onClick={() => navigate("/articles")}>Articulos</Nav.Link>}
          {isLoggedIn ? null : <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>}
        </Nav>
        <div>
          <span className="text-white">{username2}</span>
          {/* <span>{user}</span> */}
          {isLoggedIn && <IconContext.Provider value={{ color: 'white', size: '24px' }}>
            <CgShoppingCart onClick={() => navigate("/cart")}/>
          </IconContext.Provider>}
          &nbsp;&nbsp;&nbsp;&nbsp;{isLoggedIn && <LogOutButton logout={handleLogout} />}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;