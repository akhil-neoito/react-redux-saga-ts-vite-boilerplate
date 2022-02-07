import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from 'src/redux/types/auth.type';

const initialState: InitialState = {
  isAuthenticated: false,
};

const login = (state: InitialState) => state;

const setIsAuthenticated = (
  state: InitialState,
  action: PayloadAction<InitialState['isAuthenticated']>
) => ({
  ...state,
  isAuthenticated: action.payload,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login,
    setIsAuthenticated,
  },
});

export default authSlice;
