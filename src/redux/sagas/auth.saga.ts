import type { VoidGenerator } from '@/types/index';
import { call, put, takeEvery } from 'redux-saga/effects';
import type { PutEffect, CallEffect } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { login } from '../../services/auth.service';
import { LOGIN } from '../actions/auth.actions';
import authSlice from '../slices/auth.slice';
import loaderSlice from '../slices/loader.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginBody } from '@/types/auth';

function* loginSaga(
  action: PayloadAction<LoginBody>
): VoidGenerator<PutEffect | CallEffect, Promise<boolean>> {
  try {
    yield put(loaderSlice.actions.startLoadingAction(LOGIN));
    yield call(login, action.payload);
    yield put(authSlice.actions.setIsAuthenticated(true));
  } catch (e) {
    console.log(e);
    toast.error(e as string, { theme: 'colored' });
  } finally {
    yield put(loaderSlice.actions.stopLoadingAction(LOGIN));
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
}
