import { put, takeEvery } from 'redux-saga/effects';
import { login } from '../../services/auth.service';
import { LOGIN } from '../actions/auth.actions';
import authSlice from '../slices/auth.slice';

function* loginSaga() {
  try {
    yield login();
    yield put(authSlice.actions.setIsAuthenticated(true));
  } catch (e) {
    console.log(e);
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
}
