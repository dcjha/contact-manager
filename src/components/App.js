import React, {useState, useEffect}from 'react';
// import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';
// import './App.css'
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
    const [contacts , setContacts] = useState([]);
    const LOCAL_STORAGE_KEY = 'contacts';
    const addContactHandler = contact =>{
        setContacts([...contacts, {id: uuid() , ...contact}]);
    };

    useEffect(()=>{
       const localContact = localStorage.getItem(LOCAL_STORAGE_KEY);
       setContacts(JSON.parse(localContact));
    },[]);

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts]);


    const removeContactHandler = id => {
        const newContactList = contacts.filter(contact=> contact.id != id);
        setContacts(newContactList);
    }


    return ( 
        <div className = "ui container  ">
              <Header/>
              <AddContact   addContactHandler = {addContactHandler} /> 
              <ContactList contacts = {contacts} removeContactHandler = {removeContactHandler} /> 
        </div>
    );
}
export default App;