import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { ui } from './reducers/ui';
import { game } from './reducers/game';
import GamePage from './pages/GamePage';

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GamePage />
    </Provider>
  );
};