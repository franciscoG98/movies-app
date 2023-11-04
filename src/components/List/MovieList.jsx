/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import './listStyles.scss';

const MovieList = ({ content }) => {
  return (
    <section className='movies__list'>
      {
        content.map((item, idx) => (
          <Card
            key={idx}
            title={item.Title}
            src={item.Poster}
            alt={item.Title + ' poster'}
            year={item.Year}
          />
        ))
      }
    </section>
  )
}

export default MovieList