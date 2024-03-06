const ContactForm = ({ onAddNewContact }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;

    const name = elements.name.value;
    const phone = elements.phone.value;

    const formData = {
      name,
      phone,
    };

    onAddNewContact(formData);

    // очистка инпутов
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <span>Name</span>
        <input placeholder='Add name' type='text' name='name' required />
      </label>
      <label>
        <span>Number</span>
        <input placeholder='Add phone' type='text' name='phone' required />
      </label>
      <button type='submit' title='Click to save new contact'>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
