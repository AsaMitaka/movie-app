import { Link } from 'react-router-dom';

const SmallElement = ({ item }) => {
  return (
    <div className="smallelement">
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt={item?.title}
        className="smallelement__img"
      />
      <Link to={`/${item.media_type}/${item.id}`} className="smallelement__block">
        <div className="smallelement__block--title">{item.original_title}</div>
        <div className="smallelement__block--subtitle">Drama</div>
      </Link>
    </div>
  );
};

export default SmallElement;
