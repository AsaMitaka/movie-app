import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPopularTvShow } from '../store/slices/popularTvShow';
import { Swiper, SwiperSlide } from 'swiper/react';
import Element from './Element';

const SectionTvCarausel = () => {
  const dispatch = useDispatch();
  const popularTvShow = useSelector((state) => state.popularTvShow.items);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSwiperReachEnd = async () => {
    const nextPage = currentPage + 1;

    dispatch(fetchPopularTvShow(nextPage));

    setCurrentPage(nextPage);
  };

  useEffect(() => {
    dispatch(fetchPopularTvShow());
  }, []);

  return (
    <section className="main__section--carausel">
      <h1 className="main__section--carausel-title">Popular Tv Show</h1>
      <Swiper
        className="main__section--carausel-block"
        spaceBetween={20}
        slidesPerView={9}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 7,
          },
          1200: {
            slidesPerView: 9,
          },
        }}
        onReachEnd={handleSwiperReachEnd}>
        {popularTvShow.map((item, index) => (
          <SwiperSlide key={index}>
            <Element item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionTvCarausel;
