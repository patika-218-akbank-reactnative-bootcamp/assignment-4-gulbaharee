import {createSlice} from '@reduxjs/toolkit';

 export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    chosenFilter: 'popular',
  },
  reducers: {
    setFilter: (state, action) => {
      const {filter} = action.payload;
      return {
        chosenFilter: filter,
      };
    },
  },
});

export const {setFilter} = filterSlice.actions;

