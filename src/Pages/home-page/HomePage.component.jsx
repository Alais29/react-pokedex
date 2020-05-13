import React from "react";
import PokemonCardsContainer from "../../components/pokemon-cards-container/PokemonCardsContainer.component";

import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <PokemonCardsContainer />
    </div>
  );
};
export default HomePage;
