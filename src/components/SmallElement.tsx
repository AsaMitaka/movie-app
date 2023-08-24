import { Link } from 'react-router-dom';

const SmallElement = () => {
  return (
    <div className="smallelement">
      <img
        src="https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
        alt="poster"
        className="smallelement__img"
      />
      <Link to="/show/1" className="smallelement__block">
        <div className="smallelement__block--title">House of the Dragon</div>
        <div className="smallelement__block--subtitle">Drama</div>
      </Link>
    </div>
  );
};

export default SmallElement;
