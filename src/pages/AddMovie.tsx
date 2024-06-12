import LayOutLoggedIn from "../components/LayOut-LoggedIn";

const AddMoviePage = () => {
  const submitFotm = () => {};
  return (
    <div>
      <header>{<LayOutLoggedIn />}</header>
      <form onSubmit={submitFotm}>
        <div className="form-group">
          <label htmlFor=""></label>
        </div>
      </form>
    </div>
  );
};

export default AddMoviePage;
