import { configureStore } from '@reduxjs/toolkit';
import popularMovies from './slices/popularMovies';
import topTrending from './slices/topTrending';
import popularTvShow from './slices/popularTvShow';

const store = configureStore({
  reducer: {
    popularMovies,
    popularTvShow,
    topTrending,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
