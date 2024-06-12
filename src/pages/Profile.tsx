import { useDispatch, useSelector } from "react-redux";
import "../styles/profile.css";
import { selectAuthUser } from "../store/auth/selectors";
import { performGetUserProfile } from "../store/auth/slice";
import { useEffect } from "react";
import LayOutLoggedIn from "../components/LayOut-LoggedIn";

const ProfileScreen = () => {
  const userData = useSelector(selectAuthUser);
  console.log("log iz profilscreen", userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(performGetUserProfile());
  }, []);

  return (
    <div>
      <header>{<LayOutLoggedIn />}</header>
      {userData?.name && (
        <figure>{userData?.name.charAt(0).toUpperCase()}</figure>
      )}
      <span>
        Welcome <strong>{userData?.name}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  );
};

export default ProfileScreen;
