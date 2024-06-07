import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import authReducer from "./auth/slice";
import movieReducer from "./movies/slice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
