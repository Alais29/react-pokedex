import React, { useState, useEffect } from "react";
import PokemonCard from "../pokemon-card/PokemonCard.component";

import './PokemonCardsContainer.styles.scss'

const PokemonCardsContainer = () => {
  const [pokemons, setPokemons] = useState("");

  //Get pokemon names from PokeApi
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.pokemon_entries);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pokemons === "" ? (
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        ) : (
          pokemons.map((pokemon) => (
            <div key={pokemon.entry_number} className="col-md-4">
              <PokemonCard
                pokemonId={pokemon.entry_number}
                pokemonName={pokemon.pokemon_species.name}
                pokemonUrl={pokemon.pokemon_species.url}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonCardsContainer;
