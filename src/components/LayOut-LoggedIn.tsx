import React from "react";
import { Link } from "react-router-dom";

const LayOutLoggedIn = () => {
  return (
    <nav>
      <li>
        <Link to="/movies">Movies </Link>
        <Link to="/addmovie">Add-Movie </Link>
        <Link to="/directors">Directors </Link>
        <Link to="/addDirector">Add-Director </Link>
        <span>Logout</span>
      </li>
    </nav>
  );
};

export default LayOutLoggedIn;
