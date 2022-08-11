import React from 'react';
import './Promo.css'

function Promo(props) {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            {props.children}
        </section>
    );
}

export default Promo;



