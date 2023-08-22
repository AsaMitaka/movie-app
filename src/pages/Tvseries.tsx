import Footer from '../components/Footer';
import Header from '../components/Header';
import TvseriesElement from '../components/TvseriesElement';

const Tvseries = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <section className="main__section">
          <div className="main__section--header">
            <h1 className="main__section--header-title">Good tvseries here</h1>
            <div className="main__section--header-text">
              we know, that you came to watch movie and select something to you
            </div>
          </div>
          <h2 className="main__section--heading">Popular TV Shows</h2>
          <div className="main__section--tvseriesblock">
            <TvseriesElement />
            <TvseriesElement />
            <TvseriesElement />
            <TvseriesElement />
          </div>
          <h3 className="main__section--heading">The Top Trending</h3>
          <div className="main__section--tvseriesblock">
            <TvseriesElement />
            <TvseriesElement />
            <TvseriesElement />
            <TvseriesElement />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Tvseries;
