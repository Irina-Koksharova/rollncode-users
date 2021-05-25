import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://randomuser.me/api/';

const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`?page=${page}&results=20&seed=abc`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const usersOperations = {
  getAllUsers
};

export default usersOperations;