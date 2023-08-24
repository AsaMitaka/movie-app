import logo from '../assets/HBO_Max_Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="nav__list">
          <li className="nav__list--li">
            <a href="#" className="nav__list--li-a">
              Instagram
            </a>
          </li>
          <li className="nav__list--li">
            <a href="#" className="nav__list--li-logo">
              <img src={logo} alt="" className="logo" />
            </a>
          </li>
          <li className="nav__list--li">
            <a href="#" className="nav__list--li-a">
              youtube
            </a>
          </li>
        </ul>
      </nav>
      <nav className="footer__nav">
        <ul className="nav__lists">
          <li className="nav__lists--li">
            <a href="#" className="nav__lists--li-download">
              Google Play
            </a>
          </li>
          <li className="nav__lists--li">
            <a href="#" className="nav__lists--li-download">
              App Store
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
