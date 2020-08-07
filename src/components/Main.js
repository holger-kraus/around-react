import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar">
                    <img className="profile__avatar-image" alt="profile avatar" src="#"/>
                    <div className="profile__avatar-edit"></div>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit-button"></button>
                    <p className="profile__about-me"></p>
                </div>
                <button className="profile__add-button"></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    );
}

export default Main;