import React from "react";
import NavbarPoke from "./NavbarPoke";
import Container from "react-bootstrap/Container";

const MyPokemonList = () => {
  return (
    <>
      <NavbarPoke />
      <Container className="mt-5">
        <h1>My Pokemon List</h1>
      </Container>
    </>
  );
};

export default MyPokemonList;
