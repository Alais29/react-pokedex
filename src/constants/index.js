export function fetchAllPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then(response => response.json())
    .then(allPokemon => console.log(allPokemon))
    .catch(error => console.log(error))
}

export const fetchPokemons = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(response => {
      return response.results;
    })
    .catch(error => console.log(error))
}