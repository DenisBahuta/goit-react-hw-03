import css from "./App.module.css";
import contactsData from "../../contactsData.json";

import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    // Извлечение состояния из localStorage при загрузке компонента
    const stringiContacts = window.localStorage.getItem("contacts");
    if (stringiContacts !== null) {
      return JSON.parse(stringiContacts);
    }
    return contactsData;
  });

  const [filter, setFilter] = useState(""); //фильтр, по которому нужно отфильтровать коллекцию

  // функция изменения состояния. Добавления контакта
  const onAdd = (newContact) => {
    // Генерация id для нового контакта
    newContact.id = Date.now();
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

  // функция handleFilterChange принимает значение фильтра и обновляет состояние filter
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // фильтрация коллекции
  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Сохранение состояния в localStorage при изменении
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Рендеринг компонентов ContactForm, SearchBox, ContactList
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={visibleTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
