import React, { Fragment, useState } from "react";
import { images } from "./images.data";
import Spinner from "./../spinner/spinner.component";

import "./PokemonImage.styles.scss";

const PokemonImage = ({ id, name }) => {
  const [isImgLoaded, setIsImageLoaded] = useState(false);

  const handleLoad = () => {
    setIsImageLoaded(true);
  };

  const image = images
    .filter((image) => image.id === id)
    .map((image) => image.url);

  return (
    <Fragment>
      {!isImgLoaded && <Spinner />}
      <img
        style={isImgLoaded ? { display: "block" } : { display: "none" }}
        className="card-img-top"
        src={image}
        alt={name}
        onLoad={handleLoad}
      ></img>
    </Fragment>
  );
};

export default PokemonImage;
