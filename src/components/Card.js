import React from 'react';

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
            <li className="element" data-id="#">
                <a className="element__link" style={{ backgroundImage: `url(${props.card.link})` }} href="#" onClick={handleCardClick}>
                    <button className="element__remove"></button>
                    <div className="element__title-container">
                        <h2 className="element__title">{props.card.name}</h2>
                        <div className="element__like">
                            <button className="element__like-button"></button>
                            <span className="element__like-count">1</span>
                        </div>
                    </div>
                </a>
            </li>
    );
}

export default Card;