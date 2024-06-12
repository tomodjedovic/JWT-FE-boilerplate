import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import authReducer from "./auth/slice";
import movieReducer from "./movies/slice";
import directorReducer from "./directors/slice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    director: directorReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
