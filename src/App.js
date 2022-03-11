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
      contactToUpdate: "",
    });
  };

  deleteContact = (contact) => {
    console.log(contact);
    this.setState({
      contacts: this.state.contacts.filter((contactFromArray) => {
        return contactFromArray.email !== contact.email;
      }),
    });
  };

  updateContact = (contact) => {
    this.setState({ contactToUpdate: contact });
    console.log("contact to update below");
    console.log(this.state.contactToUpdate); //odd how this reads undefined, I believe it is becasue .setState is asyncrounous
  };

  render() {
    return (
      <div>
        {this.state.contactToUpdate === true ? (
          <ContactsForm
            addContact={this.addContact}
            contactToUpdate={this.state.contactToUpdate}
          />
        ) : (
          <ContactsForm
            addContact={this.addContact}
            contactToUpdate={this.state.contactToUpdate}
          />
        )}
        {this.state.contacts.map((contact) => {
          return (
            <ContactsList
              key={Math.floor(Math.random() * 10000)}
              contact={contact}
              deleteContact={this.deleteContact}
              updateContact={this.updateContact}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
