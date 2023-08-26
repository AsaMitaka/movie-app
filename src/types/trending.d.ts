import { Movie } from './movieElement';
import { TvShow } from './tvShowElement';

type TrendingItem = Movie | TvShow;

interface Trending {
  items: TrendingItem[];
  status: 'loading' | 'loaded' | 'rejected';
}

export { TrendingItem, Trending };
