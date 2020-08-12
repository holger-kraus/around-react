import React, {useState} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = useState("Holger Kraus");
    const [userDescription, setUserDescription] = useState("Yandex Practicum Student");
    const [userAvatar, setUserAvatar] = useState("https://uploads.innoq.com/variants/8L7UpmhqaTUeq1UnWaqYXMMn/c6102565cc763bd8b0970e3abe89d48675dd7c8c3124b0570a295b43def26f57?response-content-disposition=inline%3B%20filename%3D%22DSC01929_3.jpg%22%3B%20filename%2A%3DUTF-8%27%27DSC01929_3.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHA5PEZW3OX32LYA%2F20200809%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20200809T103655Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=0d59bb3345b4341f8415cd0e1e6e87b364947e40f853056b93545e62b25a1826");
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