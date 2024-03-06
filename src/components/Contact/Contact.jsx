import { MdPerson, MdPhone } from "react-icons/md";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <p>
        <MdPerson />
        {name}
      </p>
      <p>
        <MdPhone /> {number}
      </p>
      <button type='button' onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
