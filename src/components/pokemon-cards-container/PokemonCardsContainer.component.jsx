import React, { useState, useEffect } from "react";
import { fetchAllPokemons } from "../../constants";
import PokemonCard from "../pokemon-card/PokemonCard.component";
import SearchBar from "../search-bar/SearchBar.component";
import Spinner from '../spinner/spinner.component';
import "./PokemonCardsContainer.styles.scss";

const PokemonCardsContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Get pokemons from PokeApi
  useEffect(() => {
    fetchAllPokemons()
      .then((response) => {
        setPokemons(response.pokemon_entries);
      })
  }, []);

  // When the search input value updates, filter through the pokemons to match the search value
  useEffect(() => {  
    const results = pokemons.filter(pokemon => {
      return pokemon.pokemon_species.name.includes(search)
    }) 
    setSearchResults(results);
  }, [search])

  const handlechange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="container py-5">
      <SearchBar search={search} handlechange={handlechange} />
      <div className="row">
        {pokemons.length === 0 ? (
          <Spinner />
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
