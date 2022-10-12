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
            АлтГТУ. В web-разработке больше всего люблю неограниченный полет
            фантазии, в процессе которого могу создавать удобные сервисы для
            взаимодействия с пользователями. Ежедневно занимаюсь разработкой и
            улучшением собственных проектов. Так же изучаю новые технологии и
            фреймворки.
          </p>
          <div className="about-me__links">
            <a
              className="about-me__link"
              href="https://www.linkedin.com/in/denis-bezukladnikov-9795a1253/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="about-me__link"
              href="https://github.com/codelnd"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <img className="about-me__img" src={myPhoto} alt="мое фото" />
        <Portfolio />
      </div>
    </section>
  );
}

export default Techs;
