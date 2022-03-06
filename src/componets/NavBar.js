import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="Link" to="/">
            {" "}
            Home
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="Link" to="/characters">
            AllCharacters
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
