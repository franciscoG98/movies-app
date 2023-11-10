/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import NotFound from "../NotFound/NotFound";
import "./listStyles.scss";

const MovieList = ({ content }) => {
  return (
    <>
      {content ? (
        <section className="movies__list">
          {
            content.map((item, idx) => (
              <Card
                key={idx}
                title={item.Title}
                src={item.Poster}
                alt={item.Title + " poster"}
                year={item.Year}
              />
            ))
          }
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MovieList;
