import { Movie } from "../../types/backend";

const selectAllMovies = (state: { movie: { allMovies: Movie[] } }) =>
  state.movie.allMovies;

const selectSingleMovie = (state: { movie: { movie: Movie } }) =>
  state.movie.movie;

const selectFilterdMovies = (state: {
  movie: { movieSearch: string; allMovies: Movie[] };
}) => {
  const allMovies = state.movie.allMovies;
  const searched = state.movie.movieSearch;
  const searchedMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searched.toLowerCase())
  );
  console.log("log iz selektora", searchedMovies, ",", searched);
  return searchedMovies;
};

export { selectAllMovies, selectSingleMovie, selectFilterdMovies };
