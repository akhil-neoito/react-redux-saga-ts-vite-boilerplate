import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '@/store/types/auth.type';
import { LoginBody } from '@/types/auth';

const initialState: InitialState = {
  isAuthenticated: false,
};

const login = (state: InitialState, action: PayloadAction<LoginBody>) => state;

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
