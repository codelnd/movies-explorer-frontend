import React from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search-form-section">
            <form className="search-form">
                <input className="input_type_search" type="search" placeholder="Фильм"/>
                <button className="search-form__button" type="submit"></button>
            </form>
            <FilterCheckbox/>
        </section>
    );
}

export default SearchForm;



