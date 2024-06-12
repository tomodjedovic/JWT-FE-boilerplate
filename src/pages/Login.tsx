import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { User } from "../types/backend";

import { selectAuthUser } from "../store/auth/selectors";
import { performUserLogin } from "../store/auth/slice";
import LayOutNotLoggedIn from "../components/LayOut-NotLogedIn";

// import Error from "../components/Error";

const Login = () => {
  const [newUser, setNewUser] = useState<Partial<User>>({
    email: "",
    password: "",
  });

  const userData = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userData?.id) {
      navigate("/user-profile");
    }
  }, [navigate, userData]);

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(performUserLogin(newUser));
  };

  return (
    <>
      <header>{<LayOutNotLoggedIn />}</header>

      <form onSubmit={submitForm}>
        {/* {error && <Error>{error}</Error>} */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-input"
            value={newUser.email}
            onChange={(event) =>
              setNewUser({ ...newUser, email: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-input"
            value={newUser.password}
            onChange={(event) =>
              setNewUser({ ...newUser, password: event.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
