import { useDispatch, useSelector } from 'react-redux';
import SmallElement from './SmallElement';
import { fetchPopularMovies } from '../store/slices/popularMovies';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SectionCarausel = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies.items);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSwiperReachEnd = async () => {
    const nextPage = currentPage + 1;

    dispatch(fetchPopularMovies(nextPage));

    setCurrentPage(nextPage);
  };

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <section className="main__section--carausel">
      <h1 className="main__section--carausel-title">Popular Movies</h1>
      <Swiper
        className="main__section--carausel-block"
        spaceBetween={20}
        slidesPerView={window.innerWidth < 700 ? 1 : 6}
        onReachEnd={handleSwiperReachEnd}>
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
