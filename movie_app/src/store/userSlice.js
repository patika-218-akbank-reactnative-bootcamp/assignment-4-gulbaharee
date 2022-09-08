import {createSlice} from '@reduxjs/toolkit';

 export const userSlice = createSlice({
  name: 'users',
  initialState: {
    registeredUsers: [],
  },
  reducers: {
    setUsers: (state, action) => {
      const {users} = action.payload;
      return {
        registeredUsers: users,
      };
    },
    addUsers: (state, action) => {
      const newUser = [...state.registeredUsers];
      newUser.push(action.payload);

      return {
        registeredUsers: newUser,
      };
    },
  },
});

export const {setUsers, addUsers} = userSlice.actions;

