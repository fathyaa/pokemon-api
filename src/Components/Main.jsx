import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import NavbarPoke from "./NavbarPoke";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    //console.log(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      //console.log(result.data)
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="App">
        <NavbarPoke />
        <Container className="mt-5">
          <Row>
            <Col>
              <h1 className="mb-5">Pokemon List</h1>
              <div className="left-content">
                <PokemonList
                  pokemon={pokeData}
                  loading={loading}
                  PokemonDetail={(poke) => setPokeDex(poke)}
                />
              </div>
            </Col>
            <Col sm={4} style={{ background: "#FCF9BE" }}>
              <PokemonDetail data={pokeDex} />
            </Col>
          </Row>
          <Button
            variant="dark"
            className="mx-2 mb-5"
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </Button>
          <Button
            variant="dark"
            className="mb-5"
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Main;
