import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setDirectorSearch } from "../store/directors/slice";

const SearchDirectors = () => {
  const dispatch = useDispatch();
  const handleSearchByName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDirectorSearch(e.target.value));
  };

  return (
    <div>
      <label>
        Search Director
        <input
          placeholder="Search by Name"
          type="text"
          onChange={handleSearchByName}
        />
      </label>
    </div>
  );
};

export default SearchDirectors;
