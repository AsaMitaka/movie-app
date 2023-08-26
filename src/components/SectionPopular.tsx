import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTopTrending } from '../store/slices/topTrending';
import { Swiper, SwiperSlide } from 'swiper/react';
import BigElement from './BigElement';

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
      <Swiper
        className="main__section--popular-block"
        spaceBetween={40}
        slidesPerView={window.innerWidth < 700 ? 1 : 3}
        onReachEnd={handleSwiperReachEnd}>
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
