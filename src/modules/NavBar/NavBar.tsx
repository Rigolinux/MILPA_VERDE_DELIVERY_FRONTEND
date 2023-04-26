import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNavbar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">MilpaVerde</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Inicio</Nav.Link>
          <Nav.Link href="#link">Acerca</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown" menuVariant="dark">
            <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
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
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;