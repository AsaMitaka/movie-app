import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularTvShow } from '../store/slices/popularTvShow';
import { Swiper, SwiperSlide } from 'swiper/react';
import SmallTvElement from './SmallTvElement';

const SectionTvCarausel = () => {
  const dispatch = useDispatch();
  const popularTvShow = useSelector((state) => state.popularTvShow.items);

  useEffect(() => {
    dispatch(fetchPopularTvShow());
  }, []);

  return (
    <section className="main__section--carausel">
      <h1 className="main__section--carausel-title">Popular Tv Show</h1>
      <Swiper className="main__section--carausel-block" spaceBetween={20} slidesPerView={6}>
        {popularTvShow.map((item, index) => (
          <SwiperSlide key={index}>
            <SmallTvElement item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionTvCarausel;
