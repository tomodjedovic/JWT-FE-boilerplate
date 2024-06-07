import React from "react";
import { Movie } from "../types/backend";

interface movieProps {
  data: Movie;
}

const MovieRow: React.FC<movieProps> = ({ data }) => {
  if (data) {
    return (
      <div>
        <h3>Title : {data.title}</h3>
        <h4>Ditector : {data.director.name}</h4>
      </div>
    );
  } else {
    return <p>There are no movies </p>;
  }
};

export default MovieRow;
