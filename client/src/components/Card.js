import React from 'react';

function Card(props) {
    return (
        <div className="card w-4" key={props._id}>
            <div className="card-image">
                <figure className="is-4by3">
                    <img src={props.cardImage} alt={props.cardName} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.cardName}</p>
                        <p className="subtitle is-6">Health: {props.cardHealth}</p>
                    </div>
                </div>
                <div className="content">
                    Attack: {props.cardAttack}
                </div>
            </div>
        </div>
    )
}

export default Card