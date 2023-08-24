import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <section className="main__error">
          <h1 className="main__error--title">Error</h1>
          <h2 className="main__error--subtitle">Page not found</h2>
          <h3>404</h3>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
