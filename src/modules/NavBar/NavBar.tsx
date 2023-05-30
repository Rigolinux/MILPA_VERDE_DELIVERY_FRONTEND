import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LogOutButton from '../NavBar/LogOutButton';
import { CgShoppingCart } from "react-icons/cg";
import { IconContext } from 'react-icons';

const MyNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const isLoggedIn = localStorage.getItem('user') !== null;

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
          <IconContext.Provider value={{ color: 'white', size: '24px' }}>
            <CgShoppingCart onClick={() => navigate("/cart")}/>
          </IconContext.Provider>
          &nbsp;&nbsp;&nbsp;&nbsp;{isLoggedIn && <LogOutButton logout={handleLogout} />}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;