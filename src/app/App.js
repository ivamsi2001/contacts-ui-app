import React, { useState, useEffect } from "react";
import uuid from 'react-uuid'
import Header from '../components/Header';
import AddContact from "../contact/AddContact";
import ContactList from "../contact/ContactList";
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactLst = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactLst);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} />
    </div>
  );
}

export default App;
