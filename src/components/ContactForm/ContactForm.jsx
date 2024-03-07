// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    onAdd({ id: nanoid(), name, number });

    // очистка формы
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input placeholder='Adam Smith' type='text' name='name' required />
      </label>
      <label>
        <span>Number</span>
        <input placeholder='111-22-33' type='text' name='number' required />
      </label>
      <button type='submit' title='Click to save new contact'>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
