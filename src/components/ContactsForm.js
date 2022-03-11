import React, { Component } from "react";

export default class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
      },
    };
  }

  handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({
      newContact: { ...this.state.newContact, [inputName]: inputValue },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state.newContact);
  };

  render() {
    return (
      <div className="col-md-5" style={{ display: "inline-block" }}>
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              htmlFor="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              type="text"
              id="inputState"
              className="form-select"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-12"></div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
