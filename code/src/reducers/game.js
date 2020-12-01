import { createSlice } from '@reduxjs/toolkit';
//import { ui } from './ui';

export const game = createSlice({
  name: 'game',
  initialState: {
    game: {},
    history: [], //TO GO BACK IN THE LABYRINTH??
    username: {},
    isGameStarted: false,
  },

  reducers: {
    startGame: (state, action) => {
      state.isGameStarted = action.payload;
    },

    setUsername: (state, action) => {
      state.username = action.payload;
      console.log(state.username);
    },

    setGame: (state, action) => {
      //console.log(action.payload)
      state.game = action.payload;
    },

    setDirection: (state, action) => {
      if (state.game.coordinates) {
        state.history = [...state.history, state.game];
      }
      state.game = action.payload;
      console.log(action.payload);
    },

    historyGoBack: (state, action) => {
      if (state.history.length > 0) {
        state.game = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
      }
    },

    restartGame: (state, action) => {
      state.isGameStarted = action.payload;
    },
  },
});

//
/*
generateQoute: (state, action) => {
  state.history = [...state.history, state.qoute]
  state.qoute = action.payload
}
*/

//action to be able to go back and delete the last object within the array.
/*historyGoBack: (state, action) => {
  if (state.history.length > 0) {
    state.qoutes = state.history[state.history.length -1]
    state.history = state.history.splice(0, state.history.length - 1)
  }
}*/
