import LayOutNotLoggedIn from "../components/LayOut-NotLogedIn";

const HomeScreen = () => {
  return (
    <div>
      <header>{<LayOutNotLoggedIn />}</header>
      <h1>User Authentication with Redux Toolkit & JWTs</h1>;
    </div>
  );
};

export default HomeScreen;
