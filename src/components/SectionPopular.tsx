import { useDispatch, useSelector } from 'react-redux';
import BigElement from './BigElement';
import { useEffect } from 'react';
import { fetchTopTrending } from '../store/slices/topTrending';

const SectionPopular = () => {
  const dispatch = useDispatch();
  const topTrending = useSelector((state) => state.topTrending.items);

  useEffect(() => {
    dispatch(fetchTopTrending());
  }, []);

  return (
    <section className="main__section--popular">
      <h1 className="main__section--popular-title">Popular Tv Show</h1>
      <div className="main__section--popular-block">
        {topTrending && topTrending.map((item, index) => <BigElement item={item} key={index} />)}
      </div>
    </section>
  );
};

export default SectionPopular;
