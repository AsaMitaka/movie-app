import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTopTrending } from '../store/slices/topTrending';
import { Swiper, SwiperSlide } from 'swiper/react';
import Element from './Element';

const SectionPopular = () => {
  const dispatch = useDispatch();
  const topTrending = useSelector((state) => state.topTrending.items);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSwiperReachEnd = async () => {
    const nextPage = currentPage + 1;

    dispatch(fetchTopTrending(nextPage));

    setCurrentPage(nextPage);
  };

  useEffect(() => {
    dispatch(fetchTopTrending());
  }, []);

  return (
    <section className="main__section--popular">
      <h1 className="main__section--popular-title">The Top Trending</h1>
      <div className="swiper-container">
        <Swiper
          className="main__section--popular-block"
          spaceBetween={20}
          slidesPerView={7}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          onReachEnd={handleSwiperReachEnd}>
          {topTrending &&
            topTrending.map((item, index) => (
              <SwiperSlide key={index}>
                <Element item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionPopular;
