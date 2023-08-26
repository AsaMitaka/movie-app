import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from '../services/api';

const MovieShow = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const item = await axios.get(`https://api.themoviedb.org/3/movie/${id}`);
      const itemData = item.data;
      setData(itemData);
      setLoading(false);
    };

    getData();
  }, []);
  console.log(data);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <section className="main__show">
              <img
                src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                alt=""
                className="main__show--img"
              />
              <div className="main__show--block">
                <div className="main__show--block-left">
                  <p className="main__show--block-left--subinfo">2023 M 2h 30m</p>
                  <h1 className="main__show--block-left--title">{data.title}</h1>
                  <div className="main__show--block-left--subtitle">
                    {data?.genres.map((item) => (
                      <span>{item.name} </span>
                    ))}
                  </div>
                  <p className="main__show--block-left--rating">⭐ {data?.vote_average}</p>
                  <p className="main__show--block-left--description">{data?.overview}</p>
                  <p className="main__show--block-left--studio">
                    <span className="main__show--block-left--studio-span">STUDIO:</span>
                    {data?.production_companies.map((item) => (
                      <p>{item.name}</p>
                    ))}
                  </p>
                  <button className="main__show--block-left--btn">Watch</button>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MovieShow;
