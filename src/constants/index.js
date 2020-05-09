export const nationalPokedex = 'https://pokeapi.co/api/v2/pokedex/1/';
const pokemonList = 'https://pokeapi.co/api/v2/pokemon/';

export const getImgSrc = pokemonId => `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
export const getIndividualPokemon = pokemonId => `${pokemonList}${pokemonId}`;