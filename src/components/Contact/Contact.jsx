import { MdPerson, MdPhone } from "react-icons/md";

const Contact = ({ id, name, phone, onDeleteContact }) => {
  return (
    <div>
      <p>
        <MdPerson />
        {name}
      </p>
      <p>
        <MdPhone /> {phone}
      </p>
      <button type='button' onClick={onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
