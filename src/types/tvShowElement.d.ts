type TvShowType = {
  adult: boolean;
  backdrop_path: string;
  first_air_data: string;
  genres_ids: number[];
  id: number;
  media_type: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  season: null | SeasonType[];
  vote_average: number;
  vote_count: number;
};

type SeasonType = {
  air_date: null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

interface PopularTvShowState {
  items: TvShowType[];
  status: 'loading' | 'loaded' | 'rejected';
}

export { TvShowType, SeasonType, PopularTvShowState };
