/* eslint-disable react/prop-types */
import "./cardStyles.scss";

const Card = ({ title, src, alt, year }) => {
  return (
    <div className="card__container">
      <img className="card__img" src={src} alt={alt} />
      <h3 className="card__title">{title}</h3>
      <span className="card__year">Year: {year}</span>
    </div>
  );
};

export default Card;
