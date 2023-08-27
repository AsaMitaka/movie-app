import { MovieType } from './movieElement';
import { TvShowType } from './tvShowElement';

type ApiResponseType = {
  results: TrendingItem[];
};

interface ElementProps {
  item: TvShowType | MovieType;
}

interface Trending {
  items: TrendingItem[];
  status: 'loading' | 'loaded' | 'rejected';
}

type TrendingItem = MovieType | TvShowType;

export { ApiResponseType, ElementProps, Trending, TrendingItem };
