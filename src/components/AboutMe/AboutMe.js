import React from 'react';
import myPhoto from '../../images/myphoto.png'
import './AboutMe.css'

function Techs(props) {
    return (
        <section className="about-me">
            {props.children}
            <div className="about-me__grid-container">
                <div className="about-me__info-wrapper">
                    <h2 className="about-me__title">Виталий</h2>
                    <h3 className="about-me__title-mini">Фронтенд-разработчик, 30 лет</h3>
                    <p className="about-me__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                        меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                        2015 года работал в
                        компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="about-me__links">
                        <a className="about-me__link" href="https://ru-ru.facebook.com">Facebook</a>
                        <a className="about-me__link" href="https://github.com/Denis3094">Github</a>
                    </div>
                </div>
                <img className="about-me__img" src={myPhoto} alt="мое фото"/>
                <div className="about-me__portfolio-wrapper">
                    <p className="about-me__portfolio-paragraph">Портфолио</p>
                    <ul className="about-me__list">
                        <li className="about-me__list-item">
                            <a href="" className="about-me__portfolio-link" target="_blank" rel="noopener">Статичный</a>
                        </li>
                        <li className="about-me__list-item">
                            <a href="" className="about-me__portfolio-link" target="_blank" rel="noopener">Адаптивный сайт</a>
                        </li>
                        <li className="about-me__list-item">
                            <a href="" className="about-me__portfolio-link" target="_blank" rel="noopener">Одностраничное приложение</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Techs;



