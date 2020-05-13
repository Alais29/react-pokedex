import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchIndividualPokemon} from '../../constants';

import './SinglePokemon.styles.scss';

const SinglePokemon = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  
  useEffect(() => {
    fetchIndividualPokemon(name)
      .then(response => {
        setPokemonData(response);
      });
  }, []);

  console.log(pokemonData);
  return (
    <div>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      {pokemonData.length !== 0 &&
        <div>
          <p>Base Experience: {pokemonData.base_experience}</p>
          <p>Abilities:</p>
          <ul>
            {pokemonData.abilities.map(property => (
              <li>{property.ability.name}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
} 

export default SinglePokemon;
