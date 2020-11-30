import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ui } from './reducers/ui';
import { game } from './reducers/game';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/play">
          <GamePage />
        </Route>  
      </Switch>
      </Provider>
    </BrowserRouter>
    
  )
}

/*IMORGON
1) Backgrund och labyrint logic
2) Besämmt oss för styling 
3) LocalStorage
*/