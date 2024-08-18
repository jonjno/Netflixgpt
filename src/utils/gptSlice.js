import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMocies: null,
    gptSearch: null,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.gptSearch = movieNames;
      state.gptMocies = movieResult;
    },
  },
});

export const { toggleGpt, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
