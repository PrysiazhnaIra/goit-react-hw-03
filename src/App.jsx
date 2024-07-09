import "./App.css";
import { useState } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };

  const [contacts, setContacts] = useState(initialContacts);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onLogin={handleLogin} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
