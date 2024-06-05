import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    performGetMovies:()=>{}
}
export const movieSlice = createSlice({
    name: "movie",
    initialState:{
        allMovies:[]
    },
    reducers: {
       ...middlewareActions

    },
});

export const {
    performGetMovies
} = movieSlice.actions;

export default movieSlice.reducer;