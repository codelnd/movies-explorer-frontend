import { useRef, useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from '../../hooks/useValidation';
import { useLocation } from 'react-router-dom';

function SearchForm({
  filmsCollection,
  shortMovie,
  storageWord,
  setShortMovie,
  onSearch,
}) {
  const location = useLocation();
  const inputRef = useRef();
  const { error, isValid, checkErrors, setError } = useValidation();
  const [value, setValue] = useState({});

  useEffect(() => {
    if (value.search && isValid) {
      onSearch(value.search, filmsCollection);
    }
  }, [shortMovie]);

  useEffect(() => {
    if (value.search) {
      checkErrors(inputRef.current);
    }
  }, [shortMovie, value]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      // setValue({ search: localStorage.getItem('word') });
      setValue({ search: storageWord });
    }
  }, []);

  function handleInputValue(evt) {
    setError({});
    setValue({ search: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    checkErrors(inputRef.current);
    if (isValid && value.search) {
      onSearch(value.search, filmsCollection);
    }
  }

  return (
    <section className="search-form-section">
      <form
        className="search-form"
        name="search"
        action="#"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          className="input_type_search"
          type="search"
          value={value.search || ''}
          placeholder="Фильм"
          required
          ref={inputRef}
          name="search"
          // pattern={SEARCH_REGEXP}
          onChange={handleInputValue}
        />
        <button className="search-form__button" type="submit"></button>
        <span className="error-search">{error.search}</span>
      </form>
      <FilterCheckbox shortMovie={shortMovie} setShortMovie={setShortMovie} />
    </section>
  );
}

export default SearchForm;
