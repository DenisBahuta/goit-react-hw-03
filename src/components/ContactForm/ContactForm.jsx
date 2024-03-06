// import { Formik } from "formik";
// import * as Yup from "yup";
// import { ErrorMessage } from "formik";

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
        <input placeholder='Add name' type='text' name='name' required />
      </label>
      <label>
        <span>Number</span>
        <input placeholder='Add phone' type='text' name='number' required />
      </label>
      <button type='submit' title='Click to save new contact'>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
