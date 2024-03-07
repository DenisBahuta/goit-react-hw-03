import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

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
      <Form>
        <label htmlFor={nameId}>
          <span>Name</span>
          <Field placeholder='Adam Smith' type='text' name='name' />
          <ErrorMessage name='name' component='span' />
        </label>
        <label htmlFor={numberId}>
          <span>Number</span>
          <Field placeholder='111-22-33' type='text' name='number' />
          <ErrorMessage name='number' component='span' />
        </label>
        <button type='submit' title='Click to save new contact'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
