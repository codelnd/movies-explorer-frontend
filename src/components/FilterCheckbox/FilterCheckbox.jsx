import './FilterCheckbox.css';

function FilterCheckbox({ shortMovie, setShortMovie }) {
  function toggleCheckbox(evt) {
    if (evt.target.checked) {
      setShortMovie(true);
    } else {
      setShortMovie(false);
    }
  }

  return (
    <label className="checkbox__label">
      <input
        type="checkbox"
        className="input_type_checkbox"
        value="short"
        checked={!shortMovie ? false : true}
        onChange={toggleCheckbox}
      />
      <div className="checkbox"></div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
