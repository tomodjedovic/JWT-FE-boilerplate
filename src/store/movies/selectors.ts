const selectAllMovies = (state: { movie: { allMovies: Movie } }) =>
  state.movie.allMovies;

export { selectAllMovies };
