import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionCarausel from '../components/SectionCarausel';

const Movies = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <section className="main__movies">
          <h1 className="main__movies--title">Movies</h1>
          <SectionCarausel />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
