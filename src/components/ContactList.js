import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{

    const {contacts} = props;

    return(
        <div>
            {
                contacts.map((contact)=>{
                    return <ContactCard contact = {contact}/>
                })  
            }
        </div>
    );
}

export default ContactList