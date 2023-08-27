import { Link } from 'react-router-dom';
import { ElementProps } from '../types/trending';

const Element: React.FC<ElementProps> = ({ item }) => {
  console.log(item);

  return (
    <div className="element">
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt={item.media_type === 'tv' ? item?.name : item?.original_title}
        className="element__img"
      />
      <Link
        to={item.media_type === 'tv' ? `/show/${item.id}` : `/movie/${item.id}`}
        className="element__block">
        <div className="element__block--title">
          {item.media_type === 'tv' ? item?.name : item.original_title}
        </div>
        <div className="element__block--subtitle">⭐ {item.vote_average}</div>
      </Link>
    </div>
  );
};

export default Element;
