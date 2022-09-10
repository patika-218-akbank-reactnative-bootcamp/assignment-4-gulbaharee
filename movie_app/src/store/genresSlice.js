import {createSlice} from '@reduxjs/toolkit';

 export const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    genresList: [],
  },
  reducers: {
    setGenres: (state, action) => {
      const {genres} = action.payload;
      return {
        genresList: genres,
      };
    },
  },
});

export const {setGenres} = genresSlice.actions;

