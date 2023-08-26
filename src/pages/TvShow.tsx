import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from '../services/api';

const TvShow = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const item = await axios.get(`https://api.themoviedb.org/3/tv/${id}`);
      const itemData = item.data;
      console.log(itemData);

      setData(itemData);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <section className="main__show">
            <img
              src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
              alt={data?.name}
              className="main__show--img"
            />
            <div className="main__show--block">
              <div className="main__show--block-left">
                <p className="main__show--block-left--subinfo">2023 M 2h 30m</p>
                <h1 className="main__show--block-left--title">{data?.name}</h1>
                <div className="main__show--block-left--subtitle">
                  {data && data?.genres.map((item) => <span>{item.name} </span>)}
                </div>
                <p className="main__show--block-left--rating">⭐ {data?.vote_average}</p>
                <p className="main__show--block-left--description">{data?.overview}</p>
                <p className="main__show--block-left--studio">
                  <span className="main__show--block-left--studio-span">STUDIO:</span>
                  {data?.production_companies.map((item) => (
                    <>{item.name}</>
                  ))}
                </p>
                <button className="main__show--block-left--btn">Watch</button>
              </div>
              <div className="main__show--block-right">
                <div className="main__show--block-right--title">Seasons</div>
                <Swiper
                  className="main__show--block-right--block"
                  spaceBetween={30}
                  slidesPerView={4}>
                  {data &&
                    data?.seasons.map((item) => (
                      <SwiperSlide key={item.id}>
                        <Seasons item={item} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TvShow;

const Seasons = ({ item }) => {
  console.log(item);

  return (
    <div className="episode">
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt=""
        className="episode--img"
      />
      <div className="episode--block">
        <div className="episode--block-title">{item?.name}</div>
        <div className="episode--block-descr">{item?.overview.slice(0, 25) + '...'}</div>
      </div>
    </div>
  );
};
