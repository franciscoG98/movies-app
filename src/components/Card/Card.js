import React from 'react'

const Card = (props) => {
    return (
        <div className='col-md-4'>
            <div className='card'>
                {/* {console.log('props:\n', props.props.Title)} */}
                <img src={props.props.Poster} alt={props.props.Title} className='card-img-top' width='100' />
                <div className='card-body' >
                    <h4>{props.props.Title} {props.props.Year}</h4>
                    <p>{props.props.Type}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
