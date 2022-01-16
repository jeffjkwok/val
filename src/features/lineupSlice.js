import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLineup: null,
};

export const lineupSlice = createSlice({
  name: "lineup",
  initialState,
  reducers: {
    setCurrentLineup: (state, action) => {
      state.currentLineup = action.payload;
    },
  },
});

export const { setCurrentLineup } = lineupSlice.actions;

export const selectLineup = (state) => state.lineup.currentLineup;

export default lineupSlice.reducer;
