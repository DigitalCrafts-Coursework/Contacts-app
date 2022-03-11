import React, { Component } from "react";

export default class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: { ...this.props.contact, visibility: "condensed" },
    };
  }

  getDetailedRecord = () => {
    this.setState({
      contact: { ...this.state.contact, visibility: "expanded" },
    });
  };

  render() {
    return (
      <div
        className="col-md-5"
        style={{
          display: "inline-block",
          marginLeft: "2em",
        }}
      >
        <div>Contacts</div>
        <br />
        <div className="card" style={{ width: "22rem" }}>
          <button className="card-footer" onClick={this.getDetailedRecord}>
            More info
          </button>
          {this.state.contact.visibility === "condensed" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.props.contact.firstName}
              </li>
              <li className="list-group-item">{this.props.contact.lastName}</li>
              <li className="list-group-item">{this.props.contact.city}</li>
              <li className="list-group-item">{this.props.contact.zipCode}</li>
            </ul>
          ) : (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.props.contact.firstName}
              </li>
              <li className="list-group-item">{this.props.contact.lastName}</li>
              <li className="list-group-item">{this.props.contact.email}</li>
              <li className="list-group-item">{this.props.contact.address}</li>
              <li className="list-group-item">{this.props.contact.city}</li>
              <li className="list-group-item">{this.props.contact.state}</li>
              <li className="list-group-item">{this.props.contact.zipCode}</li>
              <li className="list-group-item">
                <button
                  style={{ display: "inline-block" }}
                  className="card-footer"
                  onClick={() => this.props.deleteContact(this.state.contact)}
                >
                  Delete Contact
                </button>
                <button
                  style={{ display: "inline-block" }}
                  className="card-footer"
                  onClick={() => this.props.updateContact(this.state.contact)}
                >
                  Update Contact
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}
