import { useParams } from "react-router-dom";
import LayOutLoggedIn from "../components/LayOut-LoggedIn";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleDirector } from "../store/directors/selectors";
import { useEffect } from "react";
import { performGetSingleDirector } from "../store/directors/slice";

const SingleDirectorPage = () => {
  const { id } = useParams();
  const dispetch = useDispatch();
  const director = useSelector(selectSingleDirector);
  console.log("log iz single directorpage :", director);

  useEffect(() => {
    dispetch(performGetSingleDirector(id));
  }, []);
  return (
    <div>
      <header>{<LayOutLoggedIn />}</header>
      <h2>
        {director.name} {director.surname}
      </h2>
      <img className="director-image" src={director.image} />
      <p>Date of birth : {director.date_of_birth}</p>
      <p>
        Movies :{" "}
        {director.movies?.map((movie) => (
          <>{movie?.title} , </>
        ))}
      </p>
    </div>
  );
};

export default SingleDirectorPage;
