import React from 'react';
import './Techs.css';

function Techs({ children, techsRef }) {
  return (
    <section className="techs" ref={techsRef}>
      <div className="techs__container">
        {children}
        <div className="techs__wrapper">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;



