import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchPopularTvShow = createAsyncThunk('fetch/popularTvShow', async (page = 1) => {
  const { data } = await axios.get(`trending/tv/week?page=${page}`);

  return data;
});

const initialState = {
  items: [],
  status: 'loading' | 'loaded' | 'rejected',
};

const popularTvShowSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTvShow.pending, (state, action) => {
      // state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPopularTvShow.fulfilled, (state, action) => {
      const results = action.payload.results;

      state.items = [...state.items, ...results];
      state.status = 'loaded';
    });
    builder.addCase(fetchPopularTvShow.rejected, (state, action) => {
      state.items = [];
      state.status = 'rejected';
    });
  },
});

export default popularTvShowSlice.reducer;
