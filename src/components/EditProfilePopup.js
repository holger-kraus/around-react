import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm name="profile" title="Edit profile" isOpen={props.isOpen}
                       onClose={props.onClose} onSubmit={handleSubmit}>
            <label className="form__label form__label_title" htmlFor="profile-name-input">
                <input id="profile-name-input" type="text"
                       name="name" className="form__field form__field_title"
                       minLength="2" maxLength="40" pattern="[a-zA-Z-\s]*" value={name} onChange={handleNameChange} required/>
                <span id="profile-name-input-error" className="form__field-error"></span>
            </label>
            <label htmlFor="profile-aboutme-input" className="form__label form__label_detail">
                <input id="profile-aboutme-input" type="text" name="aboutme"
                       className="form__field form__field_detail"
                       minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange} required/>
                <span id="profile-aboutme-input-error" className="form__field-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;