import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { performGetMovies } from "../store/movies/slice";
import { selectFilterdMovies } from "../store/movies/selectors";
import { Movie } from "../types/backend";
import MovieRow from "../components/MovieRow";
import { useNavigate } from "react-router-dom";
import LayOutLoggedIn from "../components/LayOut-LoggedIn";
import SearchMovie from "../components/SearchMovie";

const MoviesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allMoviesArr = useSelector(selectFilterdMovies);
  console.log("log iz moviePage :", allMoviesArr);

  useEffect(() => {
    dispatch(performGetMovies());
  }, []);

  return (
    <div>
      <header>{<LayOutLoggedIn />}</header>
      <h1>Movies</h1>
      <SearchMovie />
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
