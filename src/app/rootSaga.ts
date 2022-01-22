import { all } from 'redux-saga/effects';
import couterSagas from '../features/counter/redux/saga';

export default function* root() {
  yield all([couterSagas()]);
}
