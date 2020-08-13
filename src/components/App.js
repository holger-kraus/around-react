import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIssEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    function handleEditAvatarClick() {
        setIssEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setSelectedCard(null);
        setIssEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
    }

    return (
        <div className="page">
            <Header/>
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <Footer/>
            <PopupWithForm name="profile" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <label className="form__label form__label_title" htmlFor="profile-name-input">
                    <input id="profile-name-input" type="text"
                           name="name" className="form__field form__field_title"
                           minLength="2" maxLength="40" pattern="[a-zA-Z-\s]*" required/>
                        <span id="profile-name-input-error" className="form__field-error"></span>
                </label>
                <label htmlFor="profile-aboutme-input" className="form__label form__label_detail">
                    <input id="profile-aboutme-input" type="text" name="aboutme"
                           className="form__field form__field_detail"
                           minLength="2" maxLength="200" required/>
                        <span id="profile-aboutme-input-error" className="form__field-error"></span>
                </label>
            </PopupWithForm>
            <PopupWithForm name="place" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <label className="form__label form__label_title" htmlFor="place-title-input">
                    <input id="place-title-input" type="text" name="image-title"
                           className="form__field form__field_title" placeholder="Title" minLength="2"
                           maxLength="40" required/>
                        <span id="place-title-input-error" className="form__field-error"></span>
                </label>
                <label className="form__label form__label_detail" htmlFor="place-link-input">
                    <input id="place-link-input" type="url" name="image-link"
                           className="form__field form__field_detail" placeholder="Image Link"
                           required/>
                        <span id="place-link-input-error" className="form__field-error"></span>
                </label>
            </PopupWithForm>
            <PopupWithForm name="avatarpic" title="Change Userpic" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <label className="form__label form__label_title" htmlFor="avatarpic-link-input">
                    <input id="avatarpic-link-input" type="url" name="avatarpic-link"
                           className="form__field form__field_title" placeholder="Image Link" required/>
                        <span id="avatarpic-link-input-error" className="form__field-error"></span>
                </label>
            </PopupWithForm>
            <PopupWithForm name="confirmation" title="Are you sure?" isOpen={false} onClose={closeAllPopups}/>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </div>
    );
}

export default App;
