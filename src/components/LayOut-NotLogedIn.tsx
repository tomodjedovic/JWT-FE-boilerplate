import { Link } from "react-router-dom";

const LayOutNotLoggedIn = () => {
  return (
    <nav>
      <li>
        <Link to="/login">LogIn </Link>
        <Link to="/register">Register </Link>
      </li>
    </nav>
  );
};
export default LayOutNotLoggedIn;
