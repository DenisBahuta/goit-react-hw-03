// компонент ContactList рисует список контактов
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
