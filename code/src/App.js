import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore, configureStore } from '@reduxjs/toolkit';
import { ui } from './reducers/ui';
import { game } from './reducers/game';
import StartPage from './pages/StartPage';

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  )
}
