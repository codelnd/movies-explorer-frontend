import { useState, useEffect } from 'react';

function useLocalStorage(value, key) {
  const [storageValue, setStorageValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [storageValue, key]);

  function getValue() {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    } else {
      return value;
    }
  }

  return [storageValue, setStorageValue];
}

export default useLocalStorage;
