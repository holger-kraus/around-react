import React, {useState} from 'react';
import api from '../utils/api';
import Card from './Card';
import {defaultAvatarPicture} from '../utils/utils';

function Main(props) {

    const [userName, setUserName] = useState("Holger Kraus");
    const [userDescription, setUserDescription] = useState("Yandex Practicum Student");
    const [userAvatar, setUserAvatar] = useState(defaultAvatarPicture);
    const [cards, setCards] = useState([]);

    React.useEffect(() => {
        api.getProfile().then((currentProfile) => {
            setUserName(currentProfile.name);
            setUserDescription(currentProfile.about);
            setUserAvatar(currentProfile.avatar);
        }).catch((err) => {
            console.log(err);
        });
        }, [userName,userDescription,userAvatar]);

    React.useEffect(() => {
        api.getInitialCards().then((cards) => {
            cards.forEach((card) => {
                setCards([...cards, card]);
            });
            }
        ).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar" onClick={props.onEditAvatar}>
                    <img className="profile__avatar-image" alt="profile avatar" src={userAvatar}/>
                    <div className="profile__avatar-edit"></div>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile}></button>
                    <p className="profile__about-me">{userDescription}</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card, index) => (
                        <Card key={index} card={card} onCardClick={props.onCardClick}/>
                        )
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;