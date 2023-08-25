import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularTvShow } from '../store/slices/popularTvShow';
import SmallTvElement from './SmallTvElement';

const SectionTvCarausel = () => {
  const dispatch = useDispatch();
  const popularTvShow = useSelector((state) => state.popularTvShow.items);
  console.log(popularTvShow);

  useEffect(() => {
    dispatch(fetchPopularTvShow());
  }, []);

  return (
    <section className="main__section--carausel">
      <h1 className="main__section--carausel-title">Popular Tv Show</h1>
      <div className="main__section--carausel-block">
        {popularTvShow &&
          popularTvShow.map((item, index) => <SmallTvElement item={item} key={index} />)}
      </div>
    </section>
  );
};

export default SectionTvCarausel;
