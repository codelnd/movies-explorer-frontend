import React from 'react';
import './Tooltip.css';

function Tooltip({ isConfirm, isError, isPopupOpen, onClose }) {
  const [authConfirm, profileConfirm] = isConfirm;
  const [authError, profileError] = isError;
  const [authPopup, profilePopup] = isPopupOpen;

  return (
    <div
      className={`tooltip tooltip_${authPopup || profilePopup ? 'opened' : ''}`}
      onMouseDown={onClose}
    >
      <div
        className="tooltip__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <button
          className="tooltip__close-button"
          type="button"
          onMouseDown={onClose}
        ></button>
        <div
          className={`tooltip__image tooltip__image_${
            authConfirm || profileConfirm ? 'success' : 'fail'
          }`}
        ></div>
        <h2 className="tooltip__message">
          {authConfirm
            ? 'Вы успешно зарегистрировались!'
            : profileConfirm
            ? 'Данные изменены!'
            : authError || profileError}
        </h2>
      </div>
    </div>
  );
}

export default Tooltip;
