import "./App.css";
import contactsData from "./contactsData.json";

import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(contactsData); // состояние
  const [filter, setFilter] = useState(""); //фильтр, по которому нужно отфильтровать коллекцию

  // функция изменения состояния. Добавления контакта
  const onAdd = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  // функция изменения состояния. Удаление контакта
  const handleDelete = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  // фильтрация коллекции
  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Извлечение состояния из localStorage при загрузке компонента
  useEffect(() => {
    const stringiContacts = window.localStorage.getItem("contacts");
    if (stringiContacts) {
      setContacts(JSON.parse(stringiContacts));
    }
  }, []);

  // Сохранение состояния в localStorage при изменении
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Рендеринг компонентов ContactForm, SearchBox, ContactList
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
