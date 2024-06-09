import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { performGetMovies } from "../store/movies/slice";
import { selectAllMovies } from "../store/movies/selectors";
import { Movie } from "../types/backend";
import MovieRow from "../components/MovieRow";
import { useNavigate } from "react-router-dom";

const MoviesPage = () => {
  const navigate = useNavigate();
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
          <li onClick={() => navigate(`/movies/${movie.id}`)} key={movie.id}>
            <MovieRow data={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
