import { createSlice } from '@reduxjs/toolkit';

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
  },

  reducers: {
    setLoading: (state, action) => {
      //console.log(action.payload);
      state.isLoading = action.payload;
    },
  },
});
