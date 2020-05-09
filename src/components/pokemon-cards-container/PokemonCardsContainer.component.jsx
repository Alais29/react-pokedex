import React, { useState, useEffect } from "react";
import { nationalPokedex } from "../../constants";
import PokemonCard from "../pokemon-card/PokemonCard.component";
import SearchBar from "../search-bar/SearchBar.component";
import "./PokemonCardsContainer.styles.scss";

const PokemonCardsContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Get pokemon names from PokeApi
  useEffect(() => {
    fetch(nationalPokedex)
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.pokemon_entries);
      })
      .catch((error) => console.log(error));
  }, []);

  // When the search input value updates, filter through the pokemons to match the search value
  useEffect(() => {
    const results = pokemons.filter(pokemon => {
      return pokemon.pokemon_species.name.includes(search)
    }) 
    setSearchResults(results);
  }, [search])


  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <SearchBar search={search} handlechange={handleChange} />
      <div className="row">
        {pokemons.length === 0 ? (
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
        ) : searchResults.length === 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.entry_number}
              pokemonId={pokemon.entry_number}
              pokemonName={pokemon.pokemon_species.name}
              pokemonUrl={pokemon.pokemon_species.url}
            />
          ))
        ) : (
          searchResults.map((pokemon) => (
            <PokemonCard
              key={pokemon.entry_number}
              pokemonId={pokemon.entry_number}
              pokemonName={pokemon.pokemon_species.name}
              pokemonUrl={pokemon.pokemon_species.url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonCardsContainer;
