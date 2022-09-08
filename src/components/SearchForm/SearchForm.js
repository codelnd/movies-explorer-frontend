import {useRef, useState, useEffect} from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from '../../hooks/useValidation';
import {useLocation} from 'react-router-dom';
import {SEARCH_REGEXP} from '../../utils/constants';

function SearchForm({
                        filmsList,
                        shortMovie,
                        storageWord,
                        setShortMovie,
                        onSearch,
                    }) {
    const location = useLocation();
    const inputRef = useRef();
    const {error, isValid, checkErrors, setError} = useValidation();
    const [value, setValue] = useState({});

    useEffect(() => {
        if (value.search && isValid) {
            onSearch(value.search, filmsList);
        }
    }, [shortMovie]);

    useEffect(() => {
        if (value.search) {
            checkErrors(inputRef.current);
        }
    }, [shortMovie, value]);

    // setValue({ search: localStorage.getItem('word') });
    useEffect(() => {
        if (location.pathname === '/movies') {
            setValue({search: storageWord});
        }
    }, []);

    function handleInputValue(evt) {
        setError({});
        setValue({search: evt.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        checkErrors(inputRef.current);
        if (isValid && value.search) {
            onSearch(value.search, filmsList);
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
                    pattern={SEARCH_REGEXP}
                    onChange={handleInputValue}
                />
                <span className="search-error">{error.search}</span>
                <div className='search-form__wrapper'>
                    <button className="search-form__button" type="submit"></button>
                    <span className='border-right'></span>
                </div>
                <div className='search-form__checkbox_wrapper'>
                    <FilterCheckbox shortMovie={shortMovie} setShortMovie={setShortMovie}/>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;
