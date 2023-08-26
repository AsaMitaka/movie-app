import { MovieType } from './movieElement';
import { TvShowType } from './tvShowElement';

type TrendingItem = MovieType | TvShowType;

interface Trending {
  items: TrendingItem[];
  status: 'loading' | 'loaded' | 'rejected';
}

export { TrendingItem, Trending };
