import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/backend";

const middlewareActions = {
  performGetMovies: () => {},
  performGetSingleMovie: (_state: any, action: PayloadAction<any>) => {},
  performDeleteMovie: (_state: any, action: PayloadAction<number>) => {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allMovies: [],
    movie: {},
  },
  reducers: {
    setAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  performGetMovies,
  setAllMovies,
  setMovie,
  performGetSingleMovie,
  performDeleteMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
