import React, { useState } from "react";
import {getImgSrc, getIndividualPokemon} from '../../constants'

const PokemonCard = ({ pokemonId, pokemonName, pokemonUrl }) => {
  const [imgSrc, setImgSrc] = useState( () => getImgSrc(pokemonId));

  const alternateImg = getIndividualPokemon(pokemonId);

  const LoadAlternateImg = () => {
    fetch(alternateImg)
      .then((response) => response.json())
      .then((response) => {
        setImgSrc(response.sprites.front_default);
      });
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="p-5">
          <img
            className="card-img-top"
            src={imgSrc}
            onError={LoadAlternateImg}
            alt={pokemonName}
          ></img>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">
            # {pokemonId}{" "}
            <span className="font-weight-normal">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</span>
          </h5>
          <div className="text-center">
            <button className="btn btn-danger">
              Ver Más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
