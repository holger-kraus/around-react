import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    const [title, setTitle] = useState();
    const [link, setLink] = useState();

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleLinkChange(event) {
        setLink(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        props.onAddPlace({
            title: title,
            link: link,
        });
    }

    return (
        <PopupWithForm name="place" title="New place" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <label className="form__label form__label_title" htmlFor="place-title-input">
                <input id="place-title-input" type="text" name="image-title"
                       className="form__field form__field_title" placeholder="Title" minLength="2"
                       maxLength="40" value={title} onChange={handleTitleChange} required/>
                <span id="place-title-input-error" className="form__field-error"></span>
            </label>
            <label className="form__label form__label_detail" htmlFor="place-link-input">
                <input id="place-link-input" type="url" name="image-link"
                       className="form__field form__field_detail" placeholder="Image Link" value={link}
                       onChange={handleLinkChange} required/>
                <span id="place-link-input-error" className="form__field-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;