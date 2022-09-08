import {createSlice} from '@reduxjs/toolkit';

 export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movieList: [],
  },
  reducers: {
    setMovies: (state, action) => {
      const {movies} = action.payload;
      return {
        movieList: movies,
      };
    },
  },
});

export const {setMovies} = movieSlice.actions;

