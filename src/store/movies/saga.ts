import { SagaIterator } from "redux-saga";
import { takeLatest, call, put } from "redux-saga/effects";
import movieService from "../../services/MovieService";

import { performGetMovies, setAllMovies } from "./slice";

function* getMovies(): SagaIterator {
  try {
    const response = yield call(movieService.getAllMovies);
    yield put(setAllMovies(response));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetAllMovies(): SagaIterator {
  yield takeLatest(performGetMovies.type, getMovies);
}
