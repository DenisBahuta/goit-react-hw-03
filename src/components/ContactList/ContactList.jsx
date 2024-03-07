import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import PropTypes from "prop-types";

// компонент ContactList рисует список контактов

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact {...contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

// Описание типов пропсов компонента ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
