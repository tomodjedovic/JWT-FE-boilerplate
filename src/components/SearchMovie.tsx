import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setMovieSearch } from "../store/movies/slice";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const handleSearchByTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMovieSearch(e.target.value));
  };

  return (
    <div>
      <label>
        Search Movie
        <input
          placeholder="Search by Title"
          type="text"
          onChange={handleSearchByTitle}
        />
      </label>
    </div>
  );
};

export default SearchMovie;
