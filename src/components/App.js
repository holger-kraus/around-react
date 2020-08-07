import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
    return (
        <div className="page">
            <Header/>
            <Main/>
            <Footer/>
            <section className="overlay overlay_profile">
                <div className="overlay__container overlay__container_profile">
                    <form action="#" className="form" noValidate>
                        <h2 className="form__title">Edit profile</h2>
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
                        <button type="submit" className="form__save">Save</button>
                    </form>
                    <button className="overlay__close-button"></button>
                </div>
            </section>
            <section className="overlay overlay_place">
                <div className="overlay__container overlay__container_place">
                    <form action="#" className="form" noValidate>
                        <h2 className="form__title">New place</h2>
                        <label className="form__label form__label_title" htmlFor="place-title-input">
                            <input id="place-title-input" type="text" name="image-title"
                                   className="form__field form__field_title form__field_error" placeholder="Title"
                                   minLength="2"
                                   maxLength="40" required/>
                            <span id="place-title-input-error" className="form__field-error"></span>
                        </label>
                        <label className="form__label form__label_detail" htmlFor="place-link-input">
                            <input id="place-link-input" type="url" name="image-link"
                                   className="form__field form__field_detail form__field_error" placeholder="Image Link"
                                   required/>
                            <span id="place-link-input-error" className="form__field-error"></span>
                        </label>
                        <button type="submit" className="form__save">Create</button>
                    </form>
                    <button className="overlay__close-button"></button>
                </div>
            </section>
            <section className="overlay overlay_avatarpic">
                <div className="overlay__container overlay__container_avatarpic">
                    <form action="#" className="form" noValidate>
                        <h2 className="form__title">Change Userpic</h2>
                        <label className="form__label form__label_title" htmlFor="avatarpic-link-input">
                            <input id="avatarpic-link-input" type="url" name="avatarpic-link"
                                   className="form__field form__field_title" placeholder="Image Link" required/>
                            <span id="avatarpic-link-input-error" className="form__field-error"></span>
                        </label>
                        <button type="submit" className="form__save">Save</button>
                    </form>
                    <button className="overlay__close-button"></button>
                </div>
            </section>
            <section className="overlay overlay_confirmation">
                <div className="overlay__container overlay__container_confirmation">
                    <form action="#" className="form" noValidate>
                        <h2 className="form__title">Are you sure?</h2>
                        <button type="submit" className="form__save">Yes</button>
                    </form>
                    <button className="overlay__close-button"></button>
                </div>
            </section>
            <section className="overlay overlay_image">
                <div className="overlay__container overlay__container_image">
                    <img className="image" alt="image title"/>
                    <p className="image__title"></p>
                    <button className="overlay__close-button"></button>
                </div>
            </section>
            <template id="element__template">
                <li className="element" data-id="#">
                    <a className="element__link" href="#">
                        <button className="element__remove"></button>
                        <div className="element__title-container">
                            <h2 className="element__title"></h2>
                            <div className="element__like">
                                <button className="element__like-button"></button>
                                <span className="element__like-count">1</span>
                            </div>
                        </div>
                    </a>
                </li>
            </template>
        </div>
    );
}

export default App;
