import React from "react";
import { Link } from "react-router-dom";
import PokemonImg from "./../pokemon-image/PokemonImage.component";

const PokemonCard = ({ pokemonId, pokemonName, pokemonUrl }) => {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card mb-4">
        <div className="p-5">
          <PokemonImg
            id={pokemonId}
            name={pokemonName}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">
            # {pokemonId}{" "}
            <span className="font-weight-normal">
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
            </span>
          </h5>
          <div className="text-center">
            <Link className="btn btn-danger" to={`/pokemon/${pokemonName}`}>
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
