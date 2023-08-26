import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchTopTrending = createAsyncThunk('fetch/topTrending', async (page = 1) => {
  const { data } = await axios.get(`/trending/all/week?page=${page}`);

  return data;
});

const initialState = {
  items: [],
  status: 'loading' | 'loaded' | 'rejected',
};

const topTrendingSlice = createSlice({
  name: 'topTrending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopTrending.pending, (state, action) => {
      // state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchTopTrending.fulfilled, (state, action) => {
      const results = action.payload.results;

      state.items = [...state.items, ...results];
      state.status = 'loaded';
    });
    builder.addCase(fetchTopTrending.rejected, (state, action) => {
      state.items = [];
      state.status = 'rejected';
    });
  },
});

export default topTrendingSlice.reducer;
