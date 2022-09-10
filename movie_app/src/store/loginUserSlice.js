import {createSlice} from '@reduxjs/toolkit';

 export const loginUserSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    loggedUserInfo:{},
  },
  reducers: {
    setLoginUser: (state, action) => {
      const {loggedUser} = action.payload;
      return {
        loggedUserInfo: loggedUser,
      };
    },
  },
});

export const {setLoginUser} = loginUserSlice.actions;

