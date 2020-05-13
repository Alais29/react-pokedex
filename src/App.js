import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import HomePage from './Pages/home-page/HomePage.component';
import SinglePokemon from './Pages/single-pokemon/SinglePokemon.component';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/pokemon/:name' component={SinglePokemon} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
