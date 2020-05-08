import React, { useState } from "react";

const PokemonCard = ({ pokemonId, pokemonName, pokemonUrl }) => {
  const [imgSrc, setImgSrc] = useState(
    `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`
  );

  const LoadAlternateImg = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => response.json())
      .then((response) => {
        setImgSrc(response.sprites.front_default);
      });
  };

  return (
    <div className="card mb-4">
      <img
        className="card-img-top p-5"
        src={imgSrc}
        onError={LoadAlternateImg}
        alt="Pokemon Img"
        height="350px"
      ></img>
      <div className="card-body">
        <h5 className="card-title text-center">
          # {pokemonId}{" "}
          <span className="font-weight-normal">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</span>
        </h5>
        <div className="text-center">
          <a className="btn btn-danger" href={pokemonUrl}>
            Ver Más
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
