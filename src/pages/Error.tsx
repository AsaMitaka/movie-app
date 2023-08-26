import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <section className="main__error">
          <h1 className="main__error--title">Error</h1>
          <h2 className="main__error--subtitle">Page not found</h2>
          <h3 className="main__error--block">404</h3>
          <Link to="/" className="main__error--btn">
            Back
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
