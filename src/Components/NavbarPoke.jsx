import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const NavbarPoke = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="pokemon.png" alt="" width="150px" />
        </Navbar.Brand>
        <Navbar.Text>Capture your Pokemon!</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            variant="warning"
            className="m-2"
            onClick={() => navigate("/", { replace: true })}
          >
            Pokemon List
          </Button>
          <Button
            variant="warning"
            onClick={() => navigate("/mypokemonlist", { replace: true })}
          >
            My Pokemon List
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPoke;
