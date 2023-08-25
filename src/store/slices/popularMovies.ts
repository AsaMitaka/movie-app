import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchPopularMovies = createAsyncThunk('fetch/popularMovies', async () => {
  const { data } = await axios.get('/trending/movie/week');

  return data;
});

const initialState = {
  items: [],
  status: 'loading' | 'loaded' | 'rejected',
};

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state, action) => {
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      const results = action.payload.results.slice(10);

      state.items = results;
      state.status = 'loaded';
    });
    builder.addCase(fetchPopularMovies.rejected, (state, action) => {
      state.items = [];
      state.status = 'rejected';
    });
  },
});

export default popularMoviesSlice.reducer;
