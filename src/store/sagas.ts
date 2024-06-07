import * as authSagas from "./auth/saga";
import * as movieSagas from "./movies/saga";
import { Saga } from "redux-saga";

// import of every [feature]/saga​

const sagas = { ...authSagas, ...movieSagas } as Record<string, Saga>;
export default sagas;
