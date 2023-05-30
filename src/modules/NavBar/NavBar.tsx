import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LogOutButton from '../NavBar/LogOutButton';

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
          {isLoggedIn && <Nav.Link href="/providers">Proveedores</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/products">Productos</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/users">Users</Nav.Link>}
          <Nav.Link href="/About">Acerca</Nav.Link>
          {isLoggedIn && <Nav.Link href="/salesgraphics">Ventas</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/articles">Articulos</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/cart">Carrito</Nav.Link>}
          {isLoggedIn ? null : <Nav.Link href="/login">Login</Nav.Link>}
        </Nav>
        <div>
          {isLoggedIn && <LogOutButton logout={handleLogout} />}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;