import React, {useState} from 'react';
import api from '../utils/api';
import Card from './Card';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

    const [cards, setCards] = useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        api.getInitialCards().then((cards) => {
                let initialCards = [];
                cards.forEach((card) => {
                    initialCards.push(card);
                });
                setCards(initialCards);
            }
        ).catch((err) => {
            console.log(err);
        });
    }, []);

    function handleCardLike(card) {
        // Check one more time if this card was already liked
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Send a request to the API and getting the updated card data
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            // Create a new array based on the existing one and putting a new card into it
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            // Update the state
            setCards(newCards);
        }).catch((err) => {
            console.log(err);
        });
    }

    function handleCardDelete(deletedCard) {
        api.deleteCard(deletedCard._id).then(() => {
            const remainingCards = cards.filter((card) => card._id !== deletedCard._id)
            setCards(remainingCards);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar" onClick={props.onEditAvatar}>
                    <img className="profile__avatar-image" alt="profile avatar" src={currentUser.avatar}/>
                    <div className="profile__avatar-edit"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile}/>
                    <p className="profile__about-me">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace}/>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card, index) => (
                            <Card key={index} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike}
                                  onCardDelete={handleCardDelete}/>
                        )
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;