import * as authSagas from "./auth/saga";
import { Saga } from "redux-saga";

// import of every [feature]/saga​

const sagas = { ...authSagas } as Record<string, Saga>;
export default sagas;
