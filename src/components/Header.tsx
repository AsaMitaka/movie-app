import { Link } from 'react-router-dom';
import logo from '../assets/HBO_Max_Logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__list">
          <Link to="/" className="nav__list--li-a">
            <img src={logo} alt="logo" className="nav__list--li-a--logo" />
          </Link>
        </div>
        <ul className="nav__list show">
          <li className="nav__list--li">
            <Link to="/movie" className="nav__list--li-a">
              Movies
            </Link>
          </li>
          <li className="nav__list--li">
            <Link to="/show" className="nav__list--li-a">
              TV shows
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
