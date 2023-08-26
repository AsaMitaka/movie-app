import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/api';
import { Trending } from '../../types/trending';

export const fetchTopTrending = createAsyncThunk('fetch/topTrending', async (page: number = 1) => {
  const { data } = await axios.get(`/trending/all/week?page=${page}`);

  return data;
});

const initialState: Trending = {
  items: [],
  status: 'loading',
};

const topTrendingSlice = createSlice({
  name: 'topTrending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopTrending.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTopTrending.fulfilled, (state, action) => {
      const results = action.payload.results;

      state.items = [...state.items, ...results];
      state.status = 'loaded';
    });
    builder.addCase(fetchTopTrending.rejected, (state) => {
      state.items = [];
      state.status = 'rejected';
    });
  },
});

export default topTrendingSlice.reducer;
