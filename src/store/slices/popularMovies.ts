import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/api';
import { MovieShowState } from '../../types/movieElement';

export const fetchPopularMovies = createAsyncThunk(
  'fetch/popularMovies',
  async (page: number = 1) => {
    const { data } = await axios.get(`/trending/movie/week?page=${page}`);

    return data;
  },
);

const initialState: MovieShowState = {
  items: [],
  status: 'loading',
};

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      const results = action.payload.results;

      state.items = [...state.items, ...results];
      state.status = 'loaded';
    });
    builder.addCase(fetchPopularMovies.rejected, (state) => {
      state.items = [];
      state.status = 'rejected';
    });
  },
});

export default popularMoviesSlice.reducer;
