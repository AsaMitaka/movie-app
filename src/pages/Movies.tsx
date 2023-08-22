import Footer from '../components/Footer';
import Header from '../components/Header';
import MovieElement from '../components/MovieElement';

const Movie = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <section className="main__section">
          <div className="main__section--header">
            <h1 className="main__section--header-title">Good movie here</h1>
            <div className="main__section--header-text">
              we know, that you came to watch movie and select something to you
            </div>
          </div>

          <div className="main__section--movieblock">
            <MovieElement />
            <MovieElement />
            <MovieElement />
            <MovieElement />
          </div>
          <button className="main__section--btn">more movie</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
