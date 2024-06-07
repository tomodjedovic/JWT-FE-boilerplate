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
    dispatch(performGetMovies());
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {allMoviesArr?.map((movie: Movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
