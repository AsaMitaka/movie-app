import { Link } from 'react-router-dom';

const BigElement = ({ item }) => {
  return (
    <div className="bigelement">
      <div className="bigelement__block">
        <img
          src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
          alt={item?.title}
          className="bigelement__block--img"
        />
      </div>
      <Link to={`/${item.media_type}/${item.id}`} className="bigelement__subblock">
        <h1 className="bigelement__subblock--title">{item.original_title}</h1>
        <h2 className="bigelement__subblock--subtitle">Drama</h2>
      </Link>
    </div>
  );
};

export default BigElement;
