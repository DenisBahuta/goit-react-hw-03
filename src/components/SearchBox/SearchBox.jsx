import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type='text'
        placeholder='Search'
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

// Описание типов пропсов компонента SearchBox

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
