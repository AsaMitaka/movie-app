import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopTrending } from '../store/slices/topTrending';
import { Swiper, SwiperSlide } from 'swiper/react';
import BigElement from './BigElement';

const SectionPopular = () => {
  const dispatch = useDispatch();
  const topTrending = useSelector((state) => state.topTrending.items);

  useEffect(() => {
    dispatch(fetchTopTrending());
  }, []);

  return (
    <section className="main__section--popular">
      <h1 className="main__section--popular-title">Popular Tv Show</h1>
      <Swiper className="main__section--popular-block" spaceBetween={40} slidesPerView={3}>
        {topTrending &&
          topTrending.map((item, index) => (
            <SwiperSlide key={index}>
              <BigElement item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SectionPopular;
