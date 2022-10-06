import React from 'react';
import myPhoto from '../../images/myphoto.jpg';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';

function Techs({ children, studentRef }) {
  return (
    <section className="about-me" ref={studentRef}>
      {children}
      <div className="about-me__grid-container">
        <div className="about-me__info-wrapper">
          <h2 className="about-me__title">Денис</h2>
          <h3 className="about-me__title-mini">Фронтенд-разработчик, 28 лет</h3>
          <p className="about-me__paragraph">
            Я родился и живу в городе Барнаул, закончил строительный факультет
            АлтГТУ. Занимаюсь строительством и иногда беру заказы на фрилансе.
            После окончания курса планирую полноценно погрузиться в
            веб-разработку
          </p>
          <div className="about-me__links">
            <a
              className="about-me__link"
              href="https://ru-ru.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              className="about-me__link"
              href="https://github.com/Denis3094"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <img className="about-me__img" src={myPhoto} alt="мое фото" />
        {Portfolio()}
      </div>
    </section>
  );
}

export default Techs;



