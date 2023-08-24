import { Link } from 'react-router-dom';

const BigElement = () => {
  return (
    <div className="bigelement">
      <div className="bigelement__block">
        <img
          src="https://www.movieposters.com/cdn/shop/products/a1628341cc57cd3929b51d7c8ee81f6e_4b3aa3ac-d907-4f06-a5e4-6102e7442fe6_480x.progressive.jpg?v=1573593758"
          alt="img"
          className="bigelement__block--img"
        />
      </div>
      <Link to="/show/1" className="bigelement__subblock">
        <h1 className="bigelement__subblock--title">Fast and Fury</h1>
        <h2 className="bigelement__subblock--subtitle">Drama</h2>
      </Link>
    </div>
  );
};

export default BigElement;
