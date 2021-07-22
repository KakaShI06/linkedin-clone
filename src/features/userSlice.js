import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    empty: (state, action) => {
      state.user = action.payload;
    },
    signin: (state , action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    }
  },

});

export const { empty,  signin, signout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
