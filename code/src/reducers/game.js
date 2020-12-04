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
    previousSteps: [],
    coordinates: ['0,3', '1,3', '0,2', '1.2', '0,1', '1,1', '0,0', '1,0'],
  },

  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setGame: (state, action) => {
      state.game = action.payload;
    },

    setDirection: (state, action) => {
      if (state.game.coordinates) {
        state.history = [...state.history, state.game];
        state.previousSteps = [...state.previousSteps, state.game.coordinates];
      }
      state.game = action.payload;
    },

    historyGoBack: state => {
      if (state.history.length > 0) {
        state.game = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
        state.previousSteps = state.previousSteps.slice(
          0,
          state.previousSteps.length - 1
        );
      }
    },

    restartGame: state => {
      state.username = '';
      state.game = {};
    },
  },
});
