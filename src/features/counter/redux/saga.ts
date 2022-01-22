import { all, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, failure, loadDataSuccess } from './slice';
import { fetchCount } from './api';

export function* loadDataSaga(action) {
  try {
    const { amount } = action;
    const data = yield fetchCount(amount);
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}
