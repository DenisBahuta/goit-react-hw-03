import { MdPerson, MdPhone } from "react-icons/md";
import css from "./Contact.module.css";
import PropTypes from "prop-types";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p className={css.text}>
          <span className={css.span}>
            <MdPerson />
          </span>
          {name}
        </p>
        <p className={css.text}>
          <span className={css.span}>
            <MdPhone />
          </span>
          {number}
        </p>
      </div>
      <button className={css.button} type='button' onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

// Описание типов пропсов компонента ContactList

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  }).isRequired,
};

export default Contact;
