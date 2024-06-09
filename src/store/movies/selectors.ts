import { Movie } from "../../types/backend";

const selectAllMovies = (state: { movie: { allMovies: Movie[] } }) =>
  state.movie.allMovies;

const selectSingleMovie = (state: { movie: { movie: Movie } }) =>
  state.movie.movie;

export { selectAllMovies, selectSingleMovie };
