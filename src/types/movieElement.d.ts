type Genre = {
  id: number;
  name: string;
};

type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genres_ids: number[];
  genres?: Genre[];
  id: number;
  media_type: string;
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

interface MovieShowState {
  items: MovieType[];
  status: 'loading' | 'loaded' | 'rejected';
}

export { MovieType, MovieShowState };
