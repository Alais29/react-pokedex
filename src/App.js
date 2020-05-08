import React, {Fragment} from 'react';
import Header from './components/header/Header.component';
import PokemonCardsContanier from './components/pokemon-cards-container/PokemonCardsContainer.component';
import Footer from './components/footer/Footer.component';

function App() {
  return (
    <Fragment>
      <Header />
       <PokemonCardsContanier />
      <Footer />
    </Fragment>
  );
}

export default App;
