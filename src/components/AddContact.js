import React from "react";

class AddContact extends React.Component {
    state = {
        name : "",
        email : ""
    };

    add = (e) =>{
        e.preventDefault();

        if(this.state.email == "" || this.state.name == ""){
            alert("Mandatory Fields can't be empty")
            return
        }

        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
    }


    render(){
        return (
            <div className = "ui main">
                <h2>Add Contact</h2>
                <form className = "ui form" onSubmit = {this.add}>
                    <div className = "field">
                        <label>Name</label>
                        <input type= "text" name = "email" placeholder = "Name"></input>
                    </div>
                    <div className = "field">
                        <label>Email</label>
                        <input type= "text" name = "email" placeholder = "Email"></input>
                    </div>
                    <button className = "ui button blue"> Add</button>
                </form>
            </div>
        )
    }    
}

export default AddContact;