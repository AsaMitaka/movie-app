import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchPopularTvShow = createAsyncThunk('fetch/popularTvShow', async () => {
  const { data } = await axios.get('trending/tv/week');

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
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPopularTvShow.fulfilled, (state, action) => {
      const results = action.payload.results.slice(10);

      state.items = results;
      state.status = 'loaded';
    });
    builder.addCase(fetchPopularTvShow.rejected, (state, action) => {
      state.items = [];
      state.status = 'rejected';
    });
  },
});

export default popularTvShowSlice.reducer;
