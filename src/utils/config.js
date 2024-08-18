import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changelang: (state = configSlice.intialState, action) => {
      state.lang = action.payload;
    },
  },
});
export const { changelang } = configSlice.actions;

export default configSlice.reducer;
