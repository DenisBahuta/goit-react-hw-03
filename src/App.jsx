import { nanoid } from "nanoid";

import "./App.css";
import contactsData from "./contactsData.json";

import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(contactsData);

  // Извлечение состояния из localStorage при загрузке компонента
  useEffect(() => {
    const stringiContacts = localStorage.getItem("contacts");
    if (stringiContacts) {
      setContacts(JSON.parse(stringiContacts));
    }
  }, []);

  // Сохранение состояния в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  // функция добавления контакта
  const onAddNewContact = (contactData) => {
    const finalContact = {
      ...contactData,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, finalContact]);
  };

  // Рендеринг компонентов ContactForm, SearchBox, ContactList
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={onAddNewContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDeleteContact={handleDelete} />
    </div>
  );
}

export default App;
