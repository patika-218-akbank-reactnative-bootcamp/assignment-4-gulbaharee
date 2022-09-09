import {createSlice} from '@reduxjs/toolkit';

 export const searchSlice = createSlice({
  name: 'moviesSearch',
  initialState: {
    searchList: [],
  },
  reducers: {
    setSearcList: (state, action) => {
      const {moviesSearch} = action.payload;
      return {
        searchList: moviesSearch,
      };
    },
  },
});

export const {setSearcList} = searchSlice.actions;

