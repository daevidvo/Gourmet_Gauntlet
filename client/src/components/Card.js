import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_ALL_CARDS } from '../utils/queries';

function Card() {
    const { loading, data } = useQuery(GET_ALL_CARDS);
    const cards = data?.getAllCards || [];

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={cards.cardImage} alt={cards.cardName} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{cards.cardName}</p>
                        <p className="subtitle is-6">{cards.cardType}</p>
                    </div>
                </div>
                <div className="content">
                    {cards.cardHealth}
                    {cards.cardAttack}
                </div>
            </div>
        </div>
    )
}

export default Card