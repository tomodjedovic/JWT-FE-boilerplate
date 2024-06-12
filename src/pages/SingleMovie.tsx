import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  performGetSingleMovie,
  performDeleteMovie,
} from "../store/movies/slice";
import { selectSingleMovie } from "../store/movies/selectors";
import { selectAuthUser } from "../store/auth/selectors";
import LayOutLoggedIn from "../components/LayOut-LoggedIn";

const SingleMovie: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const myMovie = useSelector(selectSingleMovie);
  console.log("myMovie", myMovie);
  const user = useSelector(selectAuthUser);
  console.log("user :", user);

  const handleDelete = (id: number) => {
    dispatch(performDeleteMovie(id));
    navigate("/movies");
  };

  useEffect(() => {
    dispatch(performGetSingleMovie(id));
  }, []);

  return (
    <div>
      <header>{<LayOutLoggedIn />}</header>
      <h1>Single Movie {id}</h1>

      <h2>{myMovie.title}</h2>
      <img src={myMovie.image} />
      <h3>
        Director : {myMovie.director?.name} {myMovie.director?.surname}
      </h3>
      <h4>
        Genres :{" "}
        {myMovie.genres?.map((genre) => (
          <span key={genre?.id}> {genre?.name} , </span>
        ))}
      </h4>
      <h4>Creator : {myMovie.creator?.name}</h4>
      <p>Duration : {myMovie.duration}</p>
      <p>Description : {myMovie.description}</p>
      <p>Date : {myMovie.release_date}</p>
      <p>User Score : {myMovie.user_score}</p>
      <p>Duration : {myMovie.duration}</p>
      <button
        onClick={() => {
          handleDelete(myMovie.id);
        }}
      >
        Delete This Movie
      </button>
    </div>
  );
};

export default SingleMovie;
