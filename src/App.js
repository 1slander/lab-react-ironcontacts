import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const contactsCopy = [...contacts];
  const contactsSelec = contactsCopy.slice(0, 5);
  const [contactList, setContacts] = useState(contactsSelec);
  console.log(contactList);

  return (
    <div className="App">
      <h1>IronContacts</h1>
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
          {contactList.map((contact) => {
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
