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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
