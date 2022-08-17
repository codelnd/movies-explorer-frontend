import React from 'react';
import './PageNotFound.css'
import {useNavigate} from "react-router-dom";

function PageNotFound() {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <section className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__paragraph">Страница не найдена</p>
            <button className="not-found__button" onClick={goBack}>Назад</button>
        </section>
    );
}

export default PageNotFound;



