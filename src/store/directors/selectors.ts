import { Director } from "../../types/backend";

const selectAllDirectors = (state: { director: { directors: Director[] } }) =>
  state.director.directors;

const selectSingleDirector = (state: { director: { director: Director } }) =>
  state.director.director;

const selectFilterdDirectors = (state: {
  director: { directorSearch: string; directors: Director[] };
}) => {
  const allDirectors = state.director.directors;

  const searched = state.director.directorSearch;

  const searchedDirectors = allDirectors.filter(
    (director) =>
      director.name.toLowerCase().includes(searched.toLowerCase()) ||
      director.surname.toLowerCase().includes(searched.toLowerCase())
  );

  return searchedDirectors;
};

export { selectAllDirectors, selectSingleDirector, selectFilterdDirectors };
