import React from 'react';
import { PropTypes } from "prop-types";

const Card = ( movie ) => {

    // console.log('movie:\n', movie);
    const { Title, Year, Poster, Type } = movie.props
    // {console.log('movie en card:\n', props)}
    // console.log('Title: \n', Title, 'Year: \n', Year, 'Poster: \n', Poster)


    return (
        <div className='col-md-4'>
            <div className='card'>
                <img src={Poster} alt={Title} className='card-img-top' width='100' />
                <div className='card-body' >
                    <h4>{Title} {Year}</h4>
                    <p>{Type}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
    }).isRequired
}

export default Card;
