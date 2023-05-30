import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  // //Create a list with 5 contact from data

  const contactsArray = contacts.slice(0, 5);
  const [contactCelebrities, setContactCelebrities] = useState(contactsArray);
  // //Grab the remaining contacts from data
  const [leftoverContacts, setLeftoverContacts] = useState(contacts.slice(6));

  // add random contacts

  const addContact = () => {
    if (leftoverContacts.length === 0) {
      return;
    }
    const newContactIndex = Math.floor(Math.random() * leftoverContacts.length);
    const newContact = leftoverContacts[newContactIndex];
    leftoverContacts.splice(newContactIndex, 1);
    setLeftoverContacts(leftoverContacts);
    const contactCelebritiesCopy = [...contactCelebrities, newContact];
    setContactCelebrities(contactCelebritiesCopy);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactCelebrities.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    className="contact-img"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <span>🏆</span> : <span></span>}</td>
                <td>{contact.wonEmmy ? <span>🏆</span> : <span></span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
