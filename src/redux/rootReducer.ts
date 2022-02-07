import { combineReducers } from 'redux';
import authSlice from './slices/auth.slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export default rootReducer;
