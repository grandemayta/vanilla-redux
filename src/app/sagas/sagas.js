import { put, takeLatest, all } from 'redux-saga/effects';
import { REQUEST_USER, responseUser } from '../actions';

function* getUser({ id }) {
  const data = yield fetch(`https://api.github.com/users/${id}`).then(response =>
    response.json()
  );
  yield put(responseUser(data));
}

function* actionWatcher() {
  yield takeLatest(REQUEST_USER, getUser);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
