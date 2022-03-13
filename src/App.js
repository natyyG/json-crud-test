import {v4 as uuid} from 'uuid'
import api from './api/contacts'
import React, {useState, useEffect} from 'react';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
function App() {
  const [contacts, setContacts] = useState([]);
  //retrival
  const retriveContacts = async () => {
    const response = await api.get("/contacts")
    console.log(response)
    return response.data;
  }
  useEffect(()=> {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts()
  }, []);

  //add contacts
  const addContactHandler = async(contact) => {
    const request = {
      id:uuid(),
      ...contact
    }
  
  const response = await api.post("/contacts", request)
  setContacts([...contacts, response.data])
} 
const removeContactHandler = async (id) => {
  await api.delete(`/contacts/${id}`);
  const newContactList = contacts.filter((contact) => {
    return contact.id !==id
  })
  setContacts(newContactList)
  
}
  return (
    <div className="App">
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} removeContactHandler={removeContactHandler}/>
    </div>
  );
}

export default App;
