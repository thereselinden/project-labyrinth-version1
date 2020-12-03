import { createSlice } from '@reduxjs/toolkit';

const initialGame = localStorage.getItem('game')
  ? JSON.parse(localStorage.getItem('game'))
  : {};

export const game = createSlice({
  name: 'game',
  initialState: {
    game: initialGame,
    history: [],
    username: '',
    previousStep: [],
    coordinates: ["0,3", "1,3", "0,2", "1.2", "0,1", "1,1", "0,0", "1,0"],
  },

  reducers: {
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
        state.previousStep = [...state.previousStep, state.game.coordinates];
      }
      state.game = action.payload;
    },

    // setPreviousStep: (state, action) => {
    //   state.previousStep = [...state.previousStep, state.game.coordinates];
    //   console.log(state.previousStep)
    // },

    historyGoBack: state => {
      if (state.history.length > 0) {
        state.game = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
        state.previousStep = state.previousStep.slice(0, state.previousStep.length - 1);
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
