import React from 'react';
import './AboutProject.css';

function AboutProject({ children, projectRef }) {
  return (
    <section className="about-project" ref={projectRef}>
      {children}
      <div className="about-project__wrapper">
        <article>
          <h3 className="about-project__title-mini">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className="about-project__title-mini">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-project__time">
        <div className="time-backend">1 неделя</div>
        <div className="time-frontend">4 недели</div>
        <p className="time-technology">Back-end</p>
        <p className="time-technology">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;



