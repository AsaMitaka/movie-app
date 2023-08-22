import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list show">
          <li className="nav__list--li">
            <Link to="/movies" className="nav__list--li-a">
              movies
            </Link>
          </li>
          <li className="nav__list--li">
            <Link to="/series" className="nav__list--li-a">
              tv shows
            </Link>
          </li>
        </ul>
        <div className="nav__list">
          <Link to="/" className="nav__list--li-a">
            <img src="#" alt="logo" className="nav__list--li-a--logo" />
          </Link>
        </div>
        <ul className="nav__list">
          <li className="nav__list--li">
            <a href="#" className="nav__list--li-a">
              find cinema
            </a>
          </li>
          <li className="nav__list--li">
            <a href="#" className="nav__list--li-a">
              enter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
