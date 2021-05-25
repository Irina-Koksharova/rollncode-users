import { createSlice } from '@reduxjs/toolkit';
import usersOperations from './users-operation';

const {
  getAllUsers
} = usersOperations;

const initialState = {
  allUsers: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getAllUsers.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [getAllUsers.fulfilled](state, { payload }) {
      state.allUsers = [...state.allUsers, ...payload.results];
      state.isLoading = false;
      state.error = null;
    },
    [getAllUsers.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default usersSlice;