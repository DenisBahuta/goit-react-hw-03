import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import PropTypes from "prop-types";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const INITIAL_FORM_VALUES = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.field}
          placeholder='Adam Smith'
          type='text'
          name='name'
        />
        <span className={css.errorMessage}>
          <ErrorMessage name='name' component='span' />
        </span>
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.field}
          placeholder='111-22-33'
          type='text'
          name='number'
        />
        <span className={css.errorMessage}>
          <ErrorMessage name='number' component='span' />
        </span>
        <button className={css.button} type='submit'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

// Описание типов пропсов компонента ContactForm

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
