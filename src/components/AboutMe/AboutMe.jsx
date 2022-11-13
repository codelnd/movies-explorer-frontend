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
            В веб-разработке больше всего люблю неограниченный полет фантазии в
            создании удобных сервисов. Не боюсь признавать ошибки и всегда готов
            их исправить. Быстро и с большим интересом изучаю новые технологии и
            фреймворки. Применяю их в pet-проектах. Соблюдаю баланс чистоты кода
            и скорости его написания.
          </p>
          <div className="about-me__links">
            <a
              className="about-me__link"
              href="https://www.linkedin.com/in/codenis/"
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
