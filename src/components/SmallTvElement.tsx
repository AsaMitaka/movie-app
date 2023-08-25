import { Link } from 'react-router-dom';

const SmallTvElement = ({ item }) => {
  console.log(item);

  return (
    <div className="smallelement">
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt={item?.title}
        className="smallelement__img"
      />
      <Link to={`/show/${item.id}`} className="smallelement__block">
        <div className="smallelement__block--title">{item.original_name}</div>
        <div className="smallelement__block--subtitle">Drama</div>
      </Link>
    </div>
  );
};

export default SmallTvElement;
