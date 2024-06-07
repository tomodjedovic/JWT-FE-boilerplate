import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { performGetMovies } from "../store/movies/slice";
import { selectAllMovies } from "../store/movies/selectors";

import { Movie } from "../types/backend";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const allMoviesArr = useSelector(selectAllMovies);
  console.log("log iz moviePage :", allMoviesArr);

  useEffect(() => {
    async function fetchMovies() {
      dispatch(performGetMovies());
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {/* <h1>Movies</h1>
      {allMoviesArr.map((movie: Movie) => {
        <h3 key={movie.id}>MOVIE</h3>;
      })} */}
    </div>
  );
};

export default MoviesPage;
