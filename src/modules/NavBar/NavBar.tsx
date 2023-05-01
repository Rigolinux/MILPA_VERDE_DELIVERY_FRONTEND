import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from '../NavBar/LogOutButton'; 
import LogOut from "../NavBar/LogOutButton";

const MyNavbar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/banner">MilpaVerde</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="/banner">Inicio</Nav.Link>
          <Nav.Link href="/providers">Providers</Nav.Link>
          <Nav.Link href="/products">Productos</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/About">Acerca</Nav.Link>
          {/* <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="/products">Productos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <div>
          <LogOut />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;