import React, { Component } from "react";
import ContactsForm from "./components/ContactsForm";
import ContactsList from "./components/ContactsList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  addContact = (newContact) => {
    console.log(newContact);
    const updatedContacts = [...this.state.contacts];
    updatedContacts.push(newContact);
    this.setState({
      contacts: updatedContacts,
    });
  };

  render() {
    return (
      <div>
        <ContactsForm addContact={this.addContact} />
        {this.state.contacts.map((contact) => {
          return (
            <ContactsList
              key={Math.floor(Math.random() * 10000)}
              contact={contact}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
