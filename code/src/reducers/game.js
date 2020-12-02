import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    game: {},
    history: [],
    username: '',
    previousStep: '',
  },

  reducers: {
    // startGame: (state, action) => {
    //   state.isGameStarted = action.payload;
    // },

    setUsername: (state, action) => {
      state.username = action.payload;
      console.log(state.username);
    },

    setGame: (state, action) => {
      state.game = action.payload;
    },

    setDirection: (state, action) => {
      if (state.game.coordinates) {
        state.history = [...state.history, state.game];
      }
      state.game = action.payload;
    },

    historyGoBack: state => {
      if (state.history.length > 0) {
        state.game = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
      }
    },

    restartGame: state => {
      state.username = '';
      state.game = {};
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
