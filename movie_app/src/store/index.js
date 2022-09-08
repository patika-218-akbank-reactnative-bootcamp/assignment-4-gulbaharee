import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './userSlice';

export const store = configureStore({
  reducer: combineReducers({
    users: userSlice.reducer,
  }),
});
