import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performGetMovies: () => {},
};
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allMovies: [],
  },
  reducers: {
    setAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
    ...middlewareActions,
  },
});

export const { performGetMovies, setAllMovies } = movieSlice.actions;

export default movieSlice.reducer;
