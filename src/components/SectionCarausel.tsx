import { useDispatch, useSelector } from 'react-redux';
import SmallElement from './SmallElement';
import { fetchPopularMovies } from '../store/slices/popularMovies';
import { useEffect } from 'react';

const SectionCarausel = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies.items);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <section className="main__section--carausel">
      <h1 className="main__section--carausel-title">The Top Trending</h1>
      <div className="main__section--carausel-block">
        {popularMovies &&
          popularMovies.map((item, index) => <SmallElement item={item} key={index} />)}
      </div>
    </section>
  );
};

export default SectionCarausel;
