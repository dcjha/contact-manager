import React, {useState}from 'react';
// import './App.css'
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
    // const contacts = [
    //     {
    //         "id": 1,
    //         "name": "Dipendra",
    //         "email": "idcjha@gmail.com"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Alex",
    //         "email": "alex@yopmail.com"
    //     }
    // ];

    const [contacts , setContacts] = useState([]);

    const addContactHandler = contact =>{
        console.log(contact);

        setContacts([...contacts, contact]);
    }

    return ( 
        <div className = "ui container  ">
              <Header/>
              <AddContact   addContactHandler = {addContactHandler} /> 
              <ContactList contacts = {contacts} /> 
        </div>
    );
}
export default App;