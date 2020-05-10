import React from "react";
import { images } from "./images.data";

const PokemonCard = ({ pokemonId, pokemonName, pokemonUrl }) => (
  <div className="col-md-4 col-lg-3">
    <div className="card mb-4">
      <div className="p-5">
        <img
          className="card-img-top"
          src={images
            .filter((image) => image.id === pokemonId)
            .map((image) => image.url)}
          alt={pokemonName}
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">
          # {pokemonId}{" "}
          <span className="font-weight-normal">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </span>
        </h5>
        <div className="text-center">
          <button className="btn btn-danger">Ver Más</button>
        </div>
      </div>
    </div>
  </div>
);

export default PokemonCard;
