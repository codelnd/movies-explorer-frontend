import { useState } from 'react';

function useTooltip() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isError, setIsError] = useState('');

  function changeConfirm(boolean) {
    setIsConfirm(boolean);
    return isConfirm;
  }

  function changePopup(boolean) {
    setIsPopupOpen(boolean);
    return isPopupOpen;
  }

  function changeError(err) {
    setIsError(err);
    return isError;
  }

  return {
    isConfirm,
    isPopupOpen,
    isError,
    changeConfirm,
    changePopup,
    changeError,
  };
}

export default useTooltip;
