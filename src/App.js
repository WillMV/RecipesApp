import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Header from './components/Header';

import RecipeDetails from './components/RecipeDetails';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route
          exact
          path="/meals/:id"
          // render={ (props) => <SearchBar { ...props } /> }
          component={ RecipeDetails }
        />
        <Route
          exact
          path="/drinks/:id"
          // render={ (props) => <RecipeDetails { ...props } /> }
          component={ RecipeDetails }
        />
        <Route exact path="/meals/:id-da-receita/in-progress" component={ Profile } />
        <Route exact path="/drinks/:id-da-receita/in-progress" component={ Profile } />
      </Switch>
    </div>
  );
}

export default App;
