type Movie = {
  adult: boolean;
  backdrop_path: string;
  genres_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

interface MovieShowState {
  items: Movie[];
  status: 'loading' | 'loaded' | 'rejected';
}

export { Movie, MovieShowState };
