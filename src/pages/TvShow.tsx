import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
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

  console.log(data);

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
                  {data.production_companies.map((item) => (
                    <>{item.name}</>
                  ))}
                </p>
                <button className="main__show--block-left--btn">Watch</button>
              </div>
              <div className="main__show--block-right">
                <div className="main__show--block-right--title">Cast</div>
                <div className="main__show--block-right--block">
                  <div className="actor">
                    <img src="" alt="" className="actor--img" />
                    <div className="actor--block">
                      <div className="actor--block-name">John Crammer</div>
                      <div className="actor--block-subinfo">voice</div>
                    </div>
                  </div>
                  <div className="actor">
                    <img src="" alt="" className="actor--img" />
                    <div className="actor--block">
                      <div className="actor--block-name">John Crammer</div>
                      <div className="actor--block-subinfo">voice</div>
                    </div>
                  </div>
                  <div className="actor">
                    <img src="" alt="" className="actor--img" />
                    <div className="actor--block">
                      <div className="actor--block-name">John Crammer</div>
                      <div className="actor--block-subinfo">voice</div>
                    </div>
                  </div>
                  <div className="actor">
                    <img src="" alt="" className="actor--img" />
                    <div className="actor--block">
                      <div className="actor--block-name">John Crammer</div>
                      <div className="actor--block-subinfo">voice</div>
                    </div>
                  </div>
                  <div className="actor">
                    <img src="" alt="" className="actor--img" />
                    <div className="actor--block">
                      <div className="actor--block-name">John Crammer</div>
                      <div className="actor--block-subinfo">voice</div>
                    </div>
                  </div>
                </div>
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
