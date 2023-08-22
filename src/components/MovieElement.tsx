const MovieElement = () => {
  return (
    <div className="movieelem">
      <div className="movieelem__block">
        <img
          src="https://www.movieposters.com/cdn/shop/products/a1628341cc57cd3929b51d7c8ee81f6e_4b3aa3ac-d907-4f06-a5e4-6102e7442fe6_480x.progressive.jpg?v=1573593758"
          alt="img"
          className="movieelem__block--img"
        />
      </div>
      <div className="movieelem__subblock">
        <div className="movieelem__subblock--left">
          <h1 className="movieelem__subblock--left-title">общество мертвьіх поєтов</h1>
          <h2 className="movieelem__subblock--left-subtitle">драма</h2>
        </div>
        <div className="movieelem__subblock--right">
          <img src="#" alt="icon" className="movieelem__subblock--right-img" />
        </div>
      </div>
    </div>
  );
};

export default MovieElement;
