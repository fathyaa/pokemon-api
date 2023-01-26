import { createContext } from "react";
import { useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);

  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const providerValue = {
    pokemon,
    setPokemon,
    capturedPokemons,
    setCapturedPokemons,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};
