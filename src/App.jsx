import "./App.css";
import contactsData from "./contactsData.json";

import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(contactsData); // состояние
  const [filter, setFilter] = useState(""); // фильтр, по которому нужно отфильтровать коллекцию

  // функция изменения состояния. Добавления контакта
  const onAdd = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem("contacts", JSON.stringify(updatedContacts)); // Сохраняем данные в localStorage
    setContacts(updatedContacts); // Обновляем состояние после сохранения в localStorage
    return updatedContacts;
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
    const stringifiedContacts = localStorage.getItem("contacts");
    if (stringifiedContacts) {
      setContacts(JSON.parse(stringifiedContacts));
    }
  }, []);

  // Сохранение состояния в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
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
