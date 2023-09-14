import { createSlice } from '@reduxjs/toolkit';
import { register, refreshUser, login, logOut } from './operation';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLogin: false,
    isRefresh: false,
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [refreshUser.pending]: state => {
      state.isRefresh = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isRefresh = false;
      state.isLogin = true;
    },
    [refreshUser.rejected]: state => {
      state.isRefresh = false;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLogin = false;
    },
  },
});
