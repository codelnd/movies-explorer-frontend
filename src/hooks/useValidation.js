import { useState } from 'react';
import { isEmail } from 'validator';

const useValidation = () => {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({});

  function checkErrors(evt) {
    let object;
    object = evt.target ? evt.target : evt;

    if (object.type === 'email' && !isEmail(object.value)) {
      setError({
        ...error,
        [object.name]: 'Неверный формат электронной почты!',
      });
      setIsValid(false);
    } else if (!object.validity.valid) {
      if (object.validity.patternMismatch) {
        object.name === 'search'
          ? setError({
              ...error,
              [object.name]: 'Нужно ввести ключевое слово!',
            })
          : setError({
              ...error,
              [object.name]:
                'Имя должно быть не менее двух символов и может содержать только буквы, пробел или дефис.',
            });
      } else {
        setError({ ...error, [object.name]: object.validationMessage });
      }
      setIsValid(false);
    } else {
      setError({});
      setIsValid(true);
    }
  }

  return { error, isValid, setError, setIsValid, checkErrors };
};

export default useValidation;
