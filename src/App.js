import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  // //Create a list with 5 contact from data

  const contactsArray = contacts.slice(0, 5);
  const [contactCelebrities, setContactCelebrities] = useState(contactsArray);
  //Copy of contacts
  const copyContacts = [...contactCelebrities];
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
    return;
  };

  const sortByName = () => {
    const contactsByName = copyContacts.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    setContactCelebrities(contactsByName);
  };

  const sortByPopularity = () => {
    const contactsByPopularity = copyContacts.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactCelebrities(contactsByPopularity);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = copyContacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContactCelebrities(filteredContacts);
  };

  return (
    <div className="App">
      <h1 className="title">IronContacts</h1>
      <div className="menu">
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
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
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <span>🏆</span> : <span></span>}</td>
                <td>{contact.wonEmmy ? <span>🌟</span> : <span></span>}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
