import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './userSlice';
import {movieSlice} from './movieSlice';
import {themeSlice} from './themeSlice';
import {filterSlice} from './filterSlice';
import { searchSlice } from './searchSlice';

export const store = configureStore({
  reducer: combineReducers({
    users: userSlice.reducer,
    movies: movieSlice.reducer,
    theme: themeSlice.reducer,
    filter: filterSlice.reducer,
    moviesSearch: searchSlice.reducer,
  }),
});
