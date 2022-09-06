import { useEffect } from 'react';

function useEscapeClose(isOpen, onClose) {
  useEffect(() => {
    function handleEscapeClose(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeClose);
      return () => {
        document.removeEventListener('keydown', handleEscapeClose);
      };
    }
  }, [isOpen]);
}

export default useEscapeClose;
