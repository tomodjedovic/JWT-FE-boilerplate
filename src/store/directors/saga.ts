import { SagaIterator } from "redux-saga";
import { takeLatest, call, put } from "redux-saga/effects";
import directorService from "../../services/DirectorService";

import {
  performGetDirectors,
  performGetSingleDirector,
  setDirector,
  setDirectors,
} from "./slice";

function* getDirectors(): SagaIterator {
  try {
    const response = yield call(directorService.getAllDirectors);
    yield put(setDirectors(response));
  } catch (error) {
    console.log(error);
  }
}

function* getDirector(action: { payload: any }): SagaIterator {
  try {
    const response = yield call(
      directorService.getSingleDirector,
      action.payload
    );
    yield put(setDirector(response));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetAllDirectors(): SagaIterator {
  yield takeLatest(
    performGetDirectors.type,
    getDirectors as () => SagaIterator
  );
}

export function* watchGetDirector(): SagaIterator {
  yield takeLatest(
    performGetSingleDirector.type,
    getDirector as () => SagaIterator
  );
}
