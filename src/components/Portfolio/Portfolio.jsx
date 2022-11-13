import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="about-me__portfolio-wrapper">
      <p className="about-me__portfolio-paragraph">Портфолио</p>
      <ul className="about-me__list">
        <li className="about-me__list-item">
          <a
            href="https://codelnd.github.io/how-to-learn/"
            className="about-me__portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный
          </a>
        </li>
        <li className="about-me__list-item">
          <a
            href="https://codelnd.github.io/russian-travel/"
            className="about-me__portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="about-me__list-item">
          <a
            href="https://codelnd.github.io/mesto/"
            className="about-me__portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
