import { MovieType } from './movieElement';
import { TvShowType } from './tvShowElement';

type TrendingItem = MovieType | TvShowType;

interface ElementProps {
  item: TvShowType | MovieType;
}

interface Trending {
  items: TrendingItem[];
  status: 'loading' | 'loaded' | 'rejected';
}

export { ElementProps, TrendingItem, Trending };
