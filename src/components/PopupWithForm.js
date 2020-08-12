import React from "react";

function PopupWithForm(props) {
    const isOpenClass = props.isOpen ? "overlay_opened" : "";

    return (
        <section className={`overlay overlay_${props.name} ${isOpenClass}`}>
            <div className={`overlay__container overlay__container_${props.name}`}>
                <form action="#" className="form" noValidate>
                    <h2 className="form__title">{props.title}</h2>
                    {props.children}
                    <button type="submit" className="form__save" >Create</button>
                </form>
                <button className="overlay__close-button" onClick={props.onClose}/>
            </div>
        </section>
    );
}

export default PopupWithForm;