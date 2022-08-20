import React, {useState} from 'react';
import './Profile.css'
import Header from "../Header/Header";

function Profile({loggedIn, login, logout}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
            <Header loggedIn={loggedIn} login={login}/>
            <section className="profile">
                <h2 className="profile__title">{name ? `Привет, ${name}` : 'Привет'}!</h2>
                <form className="profile__form" method="get">
                    <label className="profile__label profile__label_name">Имя
                        <input className="input-profile input-profile_type_name" type="text" placeholder="Введите имя"
                               onChange={(evt) => setName(evt.target.value)} value={name}/>
                    </label>
                    <label className="profile__label profile__label_email">E-mail
                        <input className="input-profile input-profile_type_email" type="email"
                               placeholder="Введите e-mail" onChange={(evt) => setEmail(evt.target.value)}
                               value={email}/>
                    </label>
                </form>
                <div className="profile__buttons">
                    <button className="profile__button profile__button_edit">Редактировать</button>
                    <button className="profile__button profile__button_logout" onMouseDown={logout}>Выйти из аккаунта</button>
                </div>
            </section>
        </>
    );
}

export default Profile;



