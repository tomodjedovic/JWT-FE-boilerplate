import { SagaIterator } from "redux-saga";
import { takeLatest, call, put } from "redux-saga/effects";
import movieService from "../../services/MovieService";

import {
  performGetMovies,
  setAllMovies,
  performGetSingleMovie,
  setMovie,
  performDeleteMovie,
} from "./slice";

function* getMovies(): SagaIterator {
  try {
    const response = yield call(movieService.getAllMovies);
    yield put(setAllMovies(response));
  } catch (error) {
    console.log(error);
  }
}

function* getMovie(action: { payload: any }): SagaIterator {
  try {
    const response = yield call(movieService.getSingleMovie, action.payload);
    yield put(setMovie(response));
  } catch (error) {
    console.log(error);
  }
}

function* deleteMovie(action: { payload: number }): SagaIterator {
  try {
    const response = yield call(movieService.deleteMovie, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetAllMovies(): SagaIterator {
  yield takeLatest(performGetMovies.type, getMovies as () => SagaIterator);
}

export function* watchGetMovie(): SagaIterator {
  yield takeLatest(performGetSingleMovie.type, getMovie as () => SagaIterator);
}

export function* watchDeleteMovie(): SagaIterator {
  yield takeLatest(performDeleteMovie.type, deleteMovie as () => SagaIterator);
}
