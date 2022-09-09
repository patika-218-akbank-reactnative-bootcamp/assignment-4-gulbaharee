import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './userSlice';
import { movieSlice } from './movieSlice';
import { themeSlice } from './themeSlice';

export const store = configureStore({
  reducer: combineReducers({
    users: userSlice.reducer,
    movies: movieSlice.reducer,
    theme:themeSlice.reducer,
  }),
});
