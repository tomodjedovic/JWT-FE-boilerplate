import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performGetDirectors: () => {},
  performGetSingleDirector: (_state: any, action: PayloadAction<any>) => {},
};

export const directorSlice = createSlice({
  name: "director",
  initialState: {
    directors: [],
    director: {},
    directorSearch: "",
  },
  reducers: {
    setDirectors: (state, action) => {
      state.directors = action.payload;
    },
    setDirector: (state, action) => {
      state.director = action.payload;
    },
    setDirectorSearch: (state, action) => {
      state.directorSearch = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  performGetDirectors,
  performGetSingleDirector,
  setDirector,
  setDirectors,
  setDirectorSearch,
} = directorSlice.actions;

export default directorSlice.reducer;
