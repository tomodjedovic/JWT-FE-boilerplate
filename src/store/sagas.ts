import * as authSagas from "./auth/saga";
import * as movieSagas from "./movies/saga";
import * as directorSagas from "./directors/saga";
import { Saga } from "redux-saga";

// import of every [feature]/saga​

const sagas = { ...authSagas, ...movieSagas, ...directorSagas } as Record<
  string,
  Saga
>;
export default sagas;
