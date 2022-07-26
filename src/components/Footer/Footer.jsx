import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__wrapper">
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__list-link"
              href="https://practicum.yandex.ru"
              rel="noopener noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__list-link"
              href="https://github.com/codelnd"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__list-link"
              href="https://www.linkedin.com/in/codenis/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
