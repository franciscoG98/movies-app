/* eslint-disable react/prop-types */
import "./cardStyles.scss";

const Card = ({ title, src, alt, year, type }) => {

  console.log('source: ', src);

  return (
    <>
      {
        src !== "N/A" ? 
          <div className="card__container">
            <img className="card__img" src={src} alt={alt} />
            <h3 className="card__title">{title}</h3>
            <span className="card__year">Year: {year}</span>
            <span className="card__type">{type}</span>
          </div>
        :
          ''
      }
    </>
  );
};

export default Card;
