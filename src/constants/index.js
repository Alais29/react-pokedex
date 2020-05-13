export const nationalPokedex = 'https://pokeapi.co/api/v2/pokedex/1/';
const pokemonList = 'https://pokeapi.co/api/v2/pokemon/';

export const getImgSrc = pokemonId => `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
export const getIndividualPokemon = pokemonName => `${pokemonList}${pokemonName}`;

export const fetchAllPokemons = () => {
  return fetch(nationalPokedex)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export const fetchIndividualPokemon = (pokemonName) => {
  return fetch(`${pokemonList}${pokemonName}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}