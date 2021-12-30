import React from 'react'
import user from '../images/user.png'
import './ContactCard.css';

const ContactCard = (props) =>{
    const {name, email, id}  = props.contact
    return(
        <div className = "c1" >
            <img className = "ui avatar image" alt ="usericon" src = {user}/>
            <div className = "content">
                <div className = "header">
                    {name}
                </div>
                <div>
                    {email}
                </div>
                
            </div>
            <i onClick = {()=>{props.getContactIdHandler(id)}} style = {{color : "red", float : "right" ,marginTop : "1px"}} className = "trash alternate outline icon"></i>
        </div>
    )
}

export default ContactCard;