import {createSlice} from '@reduxjs/toolkit';
import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: lightTheme,
  },
  reducers: {
    toggleTheme: state => {
      return {
        activeTheme: state.activeTheme.type === lightTheme.type ? darkTheme: lightTheme
      };
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
