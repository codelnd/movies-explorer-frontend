import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="about-me__portfolio-wrapper">
      <p className="about-me__portfolio-paragraph">Портфолио</p>
      <ul className="about-me__list">
        <li className="about-me__list-item">
          <a
            href="https://github.com/Denis3094/how-to-learn"
            className="about-me__portfolio-link"
            target="_blank"
            rel="noopener"
          >
            Статичный
          </a>
        </li>
        <li className="about-me__list-item">
          <a
            href="https://denis3094.github.io/russian-travel"
            className="about-me__portfolio-link"
            target="_blank"
            rel="noopener"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="about-me__list-item">
          <a
            href="https://github.com/Denis3094/react-mesto-api-full/tree/main/frontend"
            className="about-me__portfolio-link"
            target="_blank"
            rel="noopener"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
