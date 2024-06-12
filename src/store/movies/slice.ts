import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    movieSearch: "",
  },
  reducers: {
    setAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setMovieSearch: (state, action) => {
      state.movieSearch = action.payload;
      console.log("log iz slice :", action.payload);
    },
    ...middlewareActions,
  },
});

export const {
  performGetMovies,
  setAllMovies,
  setMovie,
  setMovieSearch,
  performGetSingleMovie,
  performDeleteMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
