import { useEffect } from "react";
import "../styles/directors.css";
import LayOutLoggedIn from "../components/LayOut-LoggedIn";
import { useDispatch, useSelector } from "react-redux";
import { performGetDirectors } from "../store/directors/slice";
import { selectFilterdDirectors } from "../store/directors/selectors";
import { useNavigate } from "react-router-dom";
import SearchDirectors from "../components/SearchDirectors";

const DirectorsPage = () => {
  const directors = useSelector(selectFilterdDirectors);
  console.log("log iz directorsPage :", directors);
  const dispetch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/directors/${id}`);
  };

  useEffect(() => {
    dispetch(performGetDirectors());
  }, []);
  return (
    <div>
      <header>{<LayOutLoggedIn />}</header>
      <h1>Directors</h1>
      <SearchDirectors />
      {directors.map((director) => (
        <div onClick={() => handleClick(director.id)} key={director.id}>
          <img className="director-image" src={director.image} />
          <h3>
            Name : {director.name} {director.surname}
          </h3>
          <p>date of birth : {director.date_of_birth}</p>
        </div>
      ))}
    </div>
  );
};

export default DirectorsPage;
