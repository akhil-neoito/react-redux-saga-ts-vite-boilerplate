import { put, takeEvery } from 'redux-saga/effects';
import { login } from '../../services/auth.service';
import { LOGIN } from '../actions/auth.actions';
import authSlice from '../slices/auth.slice';
import loaderSlice from '../slices/loader.slice';

function* loginSaga() {
  try {
    yield put(loaderSlice.actions.startLoadingAction(LOGIN));
    yield login();
    yield put(authSlice.actions.setIsAuthenticated(true));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(loaderSlice.actions.stopLoadingAction(LOGIN));
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
}
