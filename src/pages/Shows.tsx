import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionCarausel from '../components/SectionCarausel';
import SectionTvCarausel from '../components/SectionTvCarausel';

const Shows = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <section className="main__series">
          <h1 className="main__series--title">TV Series</h1>
          <SectionCarausel />
          <SectionTvCarausel />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Shows;
