// src/components/Navbar.jsx

import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

function NavbarApartments() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <NavLink to="/">
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/apartments/new">
          <Button variant="secondary">Add Apartment</Button>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavbarApartments;
