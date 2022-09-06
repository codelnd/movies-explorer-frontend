import React from 'react';
import './Tooltip.css';
import { useLocation } from 'react-router-dom';
import useEscapeClose from '../../hooks/useEscapeClose';

function Tooltip({ isConfirm, isError, onClose, isOpen }) {
  const location = useLocation();
  const [authError, movieError] = isError;
  const [setAuthPopupOpen, setMoviePopupOpen] = onClose;
  const popupOpened = isOpen.some((popup) => popup);

  useEscapeClose(popupOpened, closeInfoPopups);

  function closeInfoPopups() {
    setAuthPopupOpen(false);
    setMoviePopupOpen(false);
  }

  return (
    <div
      className={`tooltip tooltip_${popupOpened ? 'opened' : ''}`}
      onMouseDown={closeInfoPopups}
    >
      <div
        className="tooltip__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <button
          className="tooltip__close-button"
          type="button"
          onMouseDown={closeInfoPopups}
        ></button>
        <div
          className={`tooltip__image tooltip__image_${
            isConfirm ? 'success' : 'fail'
          }`}
        ></div>
        <h2 className="tooltip__message">
          {isConfirm && location.pathname === '/profile'
            ? 'Данные изменены!'
            : isConfirm && (location.pathname === '/signup' || '/')
            ? 'Вы успешно зарегистрировались!'
            : authError || movieError}
        </h2>
      </div>
    </div>
  );
}

export default Tooltip;
