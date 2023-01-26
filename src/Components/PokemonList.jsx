import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PokemonList = ({ pokemon, loading, PokemonDetail }) => {
  return (
    <>
      {loading ? (
        <h5>Loading...</h5>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <Card
                className="mb-3 justify-content-center"
                style={{ width: "12rem" }}
              >
                <Card.Title className="mt-2" key={item.id}>
                  {item.name}
                </Card.Title>
                <img src={item.sprites.front_default} alt="" />
                <Card.Body>
                  <Button
                    variant="warning"
                    size="sm"
                    className="mx-2"
                    key={item.id}
                    onClick={() => PokemonDetail(item)}
                  >
                    Detail
                  </Button>
                  <Button variant="warning" size="sm">
                    Capture
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })
      )}
    </>
  );
};

export default PokemonList;
