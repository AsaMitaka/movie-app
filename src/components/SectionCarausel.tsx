import { useDispatch, useSelector } from 'react-redux';
import SmallElement from './SmallElement';
import { fetchPopularMovies } from '../store/slices/popularMovies';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SectionCarausel = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies.items);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <section className="main__section--carausel">
      <h1 className="main__section--carausel-title">The Top Trending</h1>
      <Swiper className="main__section--carausel-block" spaceBetween={20} slidesPerView={6}>
        {popularMovies &&
          popularMovies.map((item, index) => (
            <SwiperSlide key={index}>
              <SmallElement item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SectionCarausel;
