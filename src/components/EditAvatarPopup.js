import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const avatarLinkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarLinkRef.current.value
        });
    }

    return (
        <PopupWithForm name="avatarpic" title="Change Userpic" isOpen={props.isOpen}
                       onClose={props.onClose} onSubmit={handleSubmit}>
            <label className="form__label form__label_title" htmlFor="avatarpic-link-input">
                <input ref={avatarLinkRef} id="avatarpic-link-input" type="url" name="avatarpic-link"
                       className="form__field form__field_title" placeholder="Image Link" required/>
                <span id="avatarpic-link-input-error" className="form__field-error"></span>
            </label>
        </PopupWithForm>
    );

}

export default EditAvatarPopup;