import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PokemonsPage from './pages/PokemonsPage';
import ProductDetailPage from './pages/ProductDetailPage';

import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <h1>Rutas</h1>
            <Navbar />
            <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route path={'/login'} component={LoginPage} />
              <Route path={'/signup'} component={SignupPage} />
              <Route path={'/products/:id'} component={ProductDetailPage} />
              <Route path={'/pokemons'} component={PokemonsPage} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
