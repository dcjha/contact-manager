import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{

    const {contacts,removeContactHandler} = props;

    const getContactIdHandler = id => {
        removeContactHandler(id);
    }

    return(
        <div>
            {
                contacts.map((contact)=>{
                    return <ContactCard contact = {contact} getContactIdHandler = {getContactIdHandler} key = {contact.id}/>
                })  
            }
        </div>
    );
}

export default ContactList