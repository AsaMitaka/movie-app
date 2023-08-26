import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/api';
import { PopularTvShowState } from '../../types/tvShowElement';

export const fetchPopularTvShow = createAsyncThunk(
  'fetch/popularTvShow',
  async (page: number = 1) => {
    const { data } = await axios.get(`trending/tv/week?page=${page}`);

    return data;
  },
);

const initialState: PopularTvShowState = {
  items: [],
  status: 'loading',
};

const popularTvShowSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTvShow.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPopularTvShow.fulfilled, (state, action) => {
      const results = action.payload.results;

      state.items = [...state.items, ...results];
      state.status = 'loaded';
    });
    builder.addCase(fetchPopularTvShow.rejected, (state) => {
      state.items = [];
      state.status = 'rejected';
    });
  },
});

export default popularTvShowSlice.reducer;
